import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ResultRecord, ResultsHistory, TopicBreakdown, QuestionReview } from '@/models';

export const useResultsStore = defineStore( 'results', () => {
    // State
    const resultsHistory = ref<ResultsHistory>( {} );
    const currentResults = ref<{
        correct: number;
        total: number;
        percentage: number;
        topicBreakdown: TopicBreakdown;
        questionReview: QuestionReview[];
        timeTaken: string;
    } | null>( null );

    // Computed
    const hasHistory = computed( () => {
        return Object.keys( resultsHistory.value ).length > 0;
    } );

    const getResultsByDifficulty = computed( () => {
        return ( difficulty: string ) => resultsHistory.value[difficulty] || {};
    } );

    const getResultsByAssessment = computed( () => {
        return ( difficulty: string, assessmentId: string ) => {
            return resultsHistory.value[difficulty]?.[assessmentId] || [];
        };
    } );

    const getLatestResult = computed( () => {
        return ( difficulty: string, assessmentId: string ): ResultRecord | null => {
            const results = resultsHistory.value[difficulty]?.[assessmentId];
            if ( results && results.length > 0 ) {
                return results[results.length - 1];
            }
            return null;
        };
    } );

    const averageScoreByDifficulty = computed( () => {
        return ( difficulty: string ): number => {
            const assessments = resultsHistory.value[difficulty];
            if ( !assessments ) return 0;

            const latestScores = Object.values( assessments ).map( assessmentResults => {
                const latest = assessmentResults[assessmentResults.length - 1];
                return latest.percentage;
            } );

            if ( latestScores.length === 0 ) return 0;
            return Math.round( latestScores.reduce( ( a, b ) => a + b, 0 ) / latestScores.length );
        };
    } );

    // Actions
    function loadResultsHistory () {
        try {
            const stored = localStorage.getItem( 'assessmentResults' );
            if ( !stored ) {
                resultsHistory.value = {};
                return;
            }

            const parsed = JSON.parse( stored );

            // Migrate old data format (testId/testTitle) to new format (assessmentId/assessmentTitle)
            const migrated: ResultsHistory = {};

            for ( const difficulty in parsed ) {
                migrated[difficulty] = {};

                for ( const id in parsed[difficulty] ) {
                    const records = parsed[difficulty][id];

                    // Migrate each record
                    const migratedRecords = records.map( ( record: any ) => {
                        // If old format, convert to new format
                        if ( record.testId || record.testTitle ) {
                            return {
                                assessmentId: record.testId || record.assessmentId,
                                difficulty: record.difficulty,
                                assessmentTitle: record.testTitle || record.assessmentTitle,
                                date: record.date,
                                correct: record.correct,
                                total: record.total,
                                percentage: record.percentage,
                                timeTaken: record.timeTaken,
                                improvementTopics: record.improvementTopics || [],
                                topicBreakdown: record.topicBreakdown || {}
                            };
                        }
                        // Already in new format
                        return record;
                    } );

                    migrated[difficulty][id] = migratedRecords;
                }
            }

            resultsHistory.value = migrated;

            // Populate missing resultRecordId for legacy records. Some older
            // saved ResultRecord entries were persisted before we added the
            // `resultRecordId` field. Construct one from the record's `date`
            // when present (use the timestamp). This makes URL-based lookup
            // possible for older records. Persist only when we make changes.
            try {
                let updated = false;

                // Collect existing ids so we avoid duplicates when assigning
                const existingIds = new Set<number>();
                for ( const difficulty in resultsHistory.value ) {
                    for ( const aid in resultsHistory.value[difficulty] ) {
                        const list = resultsHistory.value[difficulty][aid];
                        for ( const rec of list ) {
                            if ( rec && ( rec.resultRecordId !== undefined && rec.resultRecordId !== null ) ) {
                                const n = Number( rec.resultRecordId );
                                if ( !Number.isNaN( n ) ) existingIds.add( n );
                            }
                        }
                    }
                }

                for ( const difficulty in resultsHistory.value ) {
                    for ( const aid in resultsHistory.value[difficulty] ) {
                        const list = resultsHistory.value[difficulty][aid];
                        for ( const rec of list ) {
                            if ( rec && ( rec.resultRecordId === undefined || rec.resultRecordId === null ) ) {
                                // Try to derive id from date
                                let idFromDate: number | null = null;
                                if ( rec.date ) {
                                    const parsedTs = Number( Date.parse( rec.date ) );
                                    if ( !Number.isNaN( parsedTs ) ) idFromDate = parsedTs;
                                }

                                // Fallback to Date.now() if date missing/invalid
                                if ( idFromDate === null ) {
                                    idFromDate = Date.now();
                                }

                                // Ensure uniqueness: increment until we find a free id
                                let candidate = Number( idFromDate );
                                while ( existingIds.has( candidate ) ) {
                                    candidate += 1; // small increment to avoid collision
                                }

                                rec.resultRecordId = candidate;
                                existingIds.add( candidate );
                                updated = true;
                            }
                        }
                    }
                }

                if ( updated ) {
                    try {
                        localStorage.setItem( 'assessmentResults', JSON.stringify( resultsHistory.value ) );
                    } catch ( e ) {
                        console.warn( 'Failed to persist migrated resultRecordId values:', e );
                    }
                }
            } catch ( e ) {
                console.debug( 'resultRecordId migration skipped due to error:', e );
            }

            // Try to populate missing topicLinks for older results so the
            // Results view can render MDN anchors even if those records were
            // saved before we persisted topicLinks at save time.
            // Do this in a best-effort, non-blocking way: attempt to resolve
            // using any already-loaded assessment metadata; if assessments
            // aren't loaded yet, load them in the background and retry.
            ( async () => {
                try {
                    // Import assessment store lazily to avoid startup coupling
                    const { useAssessmentStore } = await import( '@/stores/assessmentStore' );
                    const assessmentStore = useAssessmentStore();

                    function buildMapFromMeta ( meta: any ): { [k: string]: string; } {
                        const m: { [k: string]: string; } = {};
                        if ( !meta ) return m;
                        const tlinks: Array<any> = ( meta && meta.topicLinks ) || [];
                        if ( Array.isArray( tlinks ) ) {
                            for ( const t of tlinks ) {
                                if ( t && t.topicName && t.refLink ) m[String( t.topicName )] = t.refLink;
                            }
                        }
                        return m;
                    }

                    async function populateOnce () {
                        let changed = false;
                        for ( const difficulty in resultsHistory.value ) {
                            for ( const aid in resultsHistory.value[difficulty] ) {
                                const list = resultsHistory.value[difficulty][aid];
                                // Try to get metadata for this assessment
                                const meta = assessmentStore.getAssessmentMetadata ? assessmentStore.getAssessmentMetadata( difficulty, aid ) : null;
                                const topicMap = buildMapFromMeta( meta );

                                for ( const rec of list ) {
                                    if ( rec && !rec.topicLinks ) {
                                        // If we have a non-empty map, attach it.
                                        if ( Object.keys( topicMap ).length > 0 ) {
                                            rec.topicLinks = Object.assign( {}, topicMap );
                                            changed = true;
                                        }
                                    }
                                }
                            }
                        }

                        if ( changed ) {
                            try {
                                localStorage.setItem( 'assessmentResults', JSON.stringify( resultsHistory.value ) );
                            } catch ( e ) {
                                console.warn( 'Failed to persist migrated topicLinks:', e );
                            }
                        }
                    }

                    // First try immediately (may succeed if assessments were loaded earlier)
                    await populateOnce();

                    // If assessments not loaded, load them once in background and retry
                    if ( !assessmentStore.assessmentsLoaded ) {
                        try {
                            await assessmentStore.loadAvailableAssessments();
                            await populateOnce();
                        } catch ( e ) {
                            // Non-fatal: leave results as-is. We'll still render using
                            // persisted topicLinks when present or fall back to runtime lookup.
                            console.debug( 'Background load of assessments failed (topicLinks migration skipped):', e );
                        }
                    }
                } catch ( e ) {
                    // If anything goes wrong, don't block startup — the app will
                    // still render results (persisted links take precedence).
                    console.debug( 'TopicLinks migration skipped due to error:', e );
                }
            } )();

            // Save migrated data back to localStorage (initial, may be updated later by background pass)
            localStorage.setItem( 'assessmentResults', JSON.stringify( migrated ) );
        } catch ( error ) {
            console.error( 'Error loading results history:', error );
            resultsHistory.value = {};
        }
    }

    function saveResult ( result: ResultRecord ) {
        if ( !resultsHistory.value[result.difficulty] ) {
            resultsHistory.value[result.difficulty] = {};
        }

        if ( !resultsHistory.value[result.difficulty][result.assessmentId] ) {
            resultsHistory.value[result.difficulty][result.assessmentId] = [];
        }

        resultsHistory.value[result.difficulty][result.assessmentId].push( result );

        try {
            localStorage.setItem( 'assessmentResults', JSON.stringify( resultsHistory.value ) );
        } catch ( error ) {
            console.error( 'Error saving result:', error );
        }
    }

    function setCurrentResults ( results: {
        correct: number;
        total: number;
        percentage: number;
        topicBreakdown: TopicBreakdown;
        questionReview: QuestionReview[];
        timeTaken: string;
    } ) {
        currentResults.value = results;
    }

    function clearCurrentResults () {
        currentResults.value = null;
    }

    function clearAllHistory () {
        resultsHistory.value = {};
        try {
            localStorage.removeItem( 'assessmentResults' );
        } catch ( error ) {
            console.error( 'Error clearing history:', error );
        }
    }

    /**
     * Delete a single saved result record.
     * Params:
     *  - difficulty: string
     *  - assessmentId: string
     *  - resultRecordId: number | string
     * Returns true when a record was removed, false otherwise.
     */
    function deleteResult ( difficulty: string, assessmentId: string, resultRecordId: number | string ): boolean {
        try {
            const list = resultsHistory.value?.[difficulty]?.[assessmentId];
            if ( !list || list.length === 0 ) return false;

            const before = list.length;
            const idToRemove = Number( resultRecordId );
            resultsHistory.value[difficulty][assessmentId] = list.filter( ( r: any ) => Number( r.resultRecordId ) !== idToRemove );

            const after = resultsHistory.value[difficulty][assessmentId].length;
            if ( after < before ) {
                try {
                    localStorage.setItem( 'assessmentResults', JSON.stringify( resultsHistory.value ) );
                } catch ( e ) {
                    console.error( 'Error persisting results after delete:', e );
                }
                return true;
            }
            return false;
        } catch ( e ) {
            console.error( 'Error deleting result record:', e );
            return false;
        }
    }

    // Initialize
    loadResultsHistory();

    return {
        // State
        resultsHistory,
        currentResults,

        // Computed
        hasHistory,
        getResultsByDifficulty,
        getResultsByAssessment,
        getLatestResult,
        averageScoreByDifficulty,

        // Actions
        loadResultsHistory,
        saveResult,
        setCurrentResults,
        clearCurrentResults,
        clearAllHistory,
        deleteResult
    };
} );
