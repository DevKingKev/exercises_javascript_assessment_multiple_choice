import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ResultRecord, ResultsHistory, TopicBreakdown, QuestionReview } from '@/models';
import {
    countResultsInHistoryByDifficulty,
    averageAcrossAllAttemptsInHistoryByDifficulty
} from '@/utils/resultsUtils';

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

    const resultsCountByDifficulty = computed( () => {
        return ( difficulty: string ): number => {
            return countResultsInHistoryByDifficulty( resultsHistory.value as ResultsHistory, difficulty );
        };
    } );

    const averageAcrossAllAttemptsByDifficulty = computed( () => {
        return ( difficulty: string ): number => {
            return averageAcrossAllAttemptsInHistoryByDifficulty( resultsHistory.value as ResultsHistory, difficulty );
        };
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

            const latestScores: number[] = [];
            Object.values( assessments ).forEach( assessmentResults => {
                if ( !Array.isArray( assessmentResults ) || assessmentResults.length === 0 ) {
                    // skip empty or malformed entries
                    return;
                }

                const latest = assessmentResults[assessmentResults.length - 1];
                if ( latest && typeof latest.percentage === 'number' ) {
                    latestScores.push( latest.percentage );
                } else {
                    // helpful debug when encountering unexpected record shapes
                    // keep non-fatal: just skip this entry
                    try {
                        // eslint-disable-next-line no-console
                        console.debug( 'averageScoreByDifficulty: skipping malformed latest record', latest );
                    } catch ( e ) {
                        /* ignore */
                    }
                }
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

            // Parse the persisted JSON and assign it. We'll attempt a best-effort
            // background pass to populate missing `topicLinks` for older records
            // that were saved before we started persisting those links.
            const parsed = JSON.parse( stored ) as ResultsHistory;

            if ( typeof parsed !== 'object' || parsed === null ) {
                resultsHistory.value = {};
                return;
            }

            // Normalize top-level keys so older persisted shapes (e.g. numeric
            // assessment keys like '1' or 'assessment1') are migrated to the
            // canonical 'assessment{n}' buckets. This keeps localStorage
            // readable and consistent across versions.
            const normalizeBucketKey = ( s: string ) => {
                if ( !s ) return 'unknown';
                const onlyDigits = /^([0-9]+)$/.exec( s );
                if ( onlyDigits ) return `assessment${onlyDigits[1]}`;
                const assessMatch = /^assessment[-_]?([0-9]+)$/i.exec( s );
                if ( assessMatch ) return `assessment${assessMatch[1]}`;
                const assignMatch = /^assignment[-_]?([0-9]+)$/i.exec( s );
                if ( assignMatch ) return `assessment${assignMatch[1]}`;
                return s;
            };

            const normalized: any = {};
            for ( const difficulty of Object.keys( parsed ) ) {
                const assessmentsMap = ( parsed as any )[difficulty] || {};
                normalized[difficulty] = {};
                for ( const rawAid of Object.keys( assessmentsMap ) ) {
                    const targetKey = normalizeBucketKey( String( rawAid ) );
                    const bucket = assessmentsMap[rawAid];
                    if ( !normalized[difficulty][targetKey] ) {
                        // ensure arrays
                        normalized[difficulty][targetKey] = Array.isArray( bucket ) ? bucket.slice() : ( typeof bucket === 'object' && bucket !== null ? Object.keys( bucket ).map( k => ( bucket as any )[k] ) : [] );
                    } else {
                        // merge arrays if key collision after normalization
                        const existing = normalized[difficulty][targetKey];
                        const incoming = Array.isArray( bucket ) ? bucket : ( typeof bucket === 'object' && bucket !== null ? Object.keys( bucket ).map( k => ( bucket as any )[k] ) : [] );
                        normalized[difficulty][targetKey] = existing.concat( incoming );
                    }
                }
            }

            resultsHistory.value = normalized as ResultsHistory;

            // Background migration: attempt to populate missing topicLinks for
            // records saved before we persisted topicLinks at save time. This
            // is non-blocking and best-effort: use already-loaded assessment
            // metadata when available, otherwise load available assessments
            // once and retry.
            ( async () => {
                try {
                    const { useAssessmentStore } = await import( '@/stores/assessmentStore' );
                    const assessmentStore = useAssessmentStore();

                    function buildMapFromMeta ( meta: any ): { [k: string]: string; } {
                        const out: { [k: string]: string; } = {};
                        if ( !meta ) return out;
                        const tlinks: any = meta.topicLinks || [];
                        if ( Array.isArray( tlinks ) ) {
                            for ( const t of tlinks ) {
                                if ( t && t.topicName && t.refLink ) out[String( t.topicName )] = t.refLink;
                            }
                        } else if ( tlinks && typeof tlinks === 'object' ) {
                            for ( const k of Object.keys( tlinks ) ) {
                                const v = ( tlinks as Record<string, string> )[k];
                                if ( v ) out[k] = v;
                            }
                        }
                        return out;
                    }

                    async function populateOnce () {
                        let changed = false;
                        for ( const difficulty of Object.keys( resultsHistory.value ) ) {
                            const assessmentsMap = ( resultsHistory.value as any )[difficulty] || {};
                            for ( const aid of Object.keys( assessmentsMap ) ) {
                                const list = assessmentsMap[aid] || [];
                                // Try to get metadata for this assessment
                                const meta = assessmentStore.getAssessmentMetadata ? assessmentStore.getAssessmentMetadata( difficulty, aid ) : null;
                                const topicMap = buildMapFromMeta( meta );

                                for ( const rec of list ) {
                                    if ( rec && !rec.topicLinks ) {
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
                                // Non-fatal: migration best-effort only
                                // eslint-disable-next-line no-console
                                console.warn( 'Failed to persist migrated topicLinks:', e );
                            }
                        }
                    }

                    // Try immediately (may succeed if assessments were loaded earlier)
                    await populateOnce();

                    // If assessments not loaded, load them and retry once
                    if ( !assessmentStore.assessmentsLoaded ) {
                        try {
                            await assessmentStore.loadAvailableAssessments();
                            await populateOnce();
                        } catch ( e ) {
                            // Non-fatal — leave results as-is
                            // eslint-disable-next-line no-console
                            console.debug( 'Background load of assessments failed (topicLinks migration skipped):', e );
                        }
                    }
                } catch ( e ) {
                    // Do not block startup for any migration errors
                    // eslint-disable-next-line no-console
                    console.debug( 'TopicLinks migration skipped due to error:', e );
                }
            } )();
        } catch ( error ) {
            console.error( 'Error loading results history:', error );
            resultsHistory.value = {};
        }
    }

    function saveResult ( result: ResultRecord ) {
        // Defensive normalization to protect against malformed or older
        // persisted shapes. We expect resultsHistory[difficulty] to be an
        // object (map) where each key is an assessmentId and the value is
        // an array of ResultRecord objects. Normalize the in-memory shape
        // if it's not what we expect so JSON persistence stays consistent.
        const difficulty = result.difficulty as string;

        // Ensure top-level difficulty map exists and is an object
        if ( !resultsHistory.value[difficulty] || Array.isArray( resultsHistory.value[difficulty] ) || typeof resultsHistory.value[difficulty] !== 'object' ) {
            // If an array was found, it's likely a corrupted shape; replace
            // with a fresh object to restore the expected mapping.
            // Non-fatal: log for debugging.
            // eslint-disable-next-line no-console
            if ( resultsHistory.value[difficulty] && Array.isArray( resultsHistory.value[difficulty] ) ) {
                console.warn( 'resultsStore.saveResult: replacing malformed difficulty entry (was array) with object', difficulty );
            }
            resultsHistory.value[difficulty] = {} as any;
        }

        // Coerce and normalize assessmentId so buckets use a stable
        // 'assessment{n}' prefix when appropriate. This preserves the
        // historic shape (e.g. 'assessment1') rather than plain numeric
        // keys like '1' which are harder to interpret in localStorage.
        const rawKey = String( result.assessmentId || '' ).trim();
        const normalizeBucketKey = ( s: string ) => {
            if ( !s ) return 'unknown';
            const onlyDigits = /^([0-9]+)$/.exec( s );
            if ( onlyDigits ) return `assessment${onlyDigits[1]}`;
            const assessMatch = /^assessment[-_]?([0-9]+)$/i.exec( s );
            if ( assessMatch ) return `assessment${assessMatch[1]}`;
            const assignMatch = /^assignment[-_]?([0-9]+)$/i.exec( s );
            if ( assignMatch ) return `assessment${assignMatch[1]}`;
            return s;
        };

        const assessmentKey = normalizeBucketKey( rawKey );

        // Deep-clone the record so we do not persist Vue proxies
        let recordToStore: any;
        try {
            recordToStore = JSON.parse( JSON.stringify( result ) );
        } catch ( e ) {
            // Fallback: shallow copy (best-effort)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recordToStore = Object.assign( {}, result ) as any;
        }

        // Prepare immutable update for the difficulty map and assessment bucket
        const prevDifficultyMap = ( resultsHistory.value[difficulty] && typeof resultsHistory.value[difficulty] === 'object' && !Array.isArray( resultsHistory.value[difficulty] ) ) ? { ...( resultsHistory.value[difficulty] as any ) } : {};

        // Ensure existing bucket is converted to an array copy if necessary
        const existingBucket = prevDifficultyMap[assessmentKey];
        let newBucket: any[] = [];
        if ( Array.isArray( existingBucket ) ) {
            newBucket = existingBucket.slice();
        } else if ( existingBucket && typeof existingBucket === 'object' ) {
            // convert numeric-keyed object to array
            const converted: any[] = [];
            Object.keys( existingBucket ).forEach( ( k ) => {
                const idx = Number( k );
                if ( !Number.isNaN( idx ) ) {
                    converted[idx] = ( existingBucket as any )[k];
                } else {
                    converted.push( ( existingBucket as any )[k] );
                }
            } );
            newBucket = converted;
            // eslint-disable-next-line no-console
            console.warn( 'resultsStore.saveResult: converted object-bucket to array for', assessmentKey );
        }

        newBucket.push( recordToStore );
        prevDifficultyMap[assessmentKey] = newBucket;

        // Build new top-level resultsHistory value immutably so Vue detects
        // changes at the nested difficulty level as well as top-level.
        resultsHistory.value = {
            ...resultsHistory.value,
            [difficulty]: prevDifficultyMap as any
        };

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
            if ( !resultsHistory.value[difficulty] ) return false;

            // Reuse the same normalization used when saving so callers can
            // pass either raw ids ("1"), legacy keys ("assignment1") or
            // canonical keys ("assessment1").
            const normalizeBucketKey = ( s: string ) => {
                if ( !s ) return 'unknown';
                const onlyDigits = /^([0-9]+)$/.exec( s );
                if ( onlyDigits ) return `assessment${onlyDigits[1]}`;
                const assessMatch = /^assessment[-_]?([0-9]+)$/i.exec( s );
                if ( assessMatch ) return `assessment${assessMatch[1]}`;
                const assignMatch = /^assignment[-_]?([0-9]+)$/i.exec( s );
                if ( assignMatch ) return `assessment${assignMatch[1]}`;
                return s;
            };

            const candidateKey = normalizeBucketKey( String( assessmentId || '' ) );
            let bucketKeyToUse = candidateKey;

            // If normalized key not present, try the raw key as a fallback
            if ( !Object.prototype.hasOwnProperty.call( resultsHistory.value[difficulty], bucketKeyToUse ) ) {
                if ( Object.prototype.hasOwnProperty.call( resultsHistory.value[difficulty], assessmentId ) ) {
                    bucketKeyToUse = assessmentId;
                } else {
                    // nothing to delete
                    return false;
                }
            }

            const existingList = ( resultsHistory.value[difficulty] as any )[bucketKeyToUse] as any[] || [];
            if ( !Array.isArray( existingList ) || existingList.length === 0 ) return false;

            const idToRemove = Number( resultRecordId );
            const newList = existingList.filter( ( r: any ) => Number( r.resultRecordId ) !== idToRemove );

            // Immutable update of difficulty map
            const newDifficultyMap: Record<string, any> = { ...( resultsHistory.value[difficulty] as any ) };
            if ( newList.length === 0 ) {
                delete newDifficultyMap[bucketKeyToUse];
            } else {
                newDifficultyMap[bucketKeyToUse] = newList;
            }

            // If difficulty map is empty after deletion, remove the difficulty
            const topLevel = { ...resultsHistory.value } as any;
            if ( Object.keys( newDifficultyMap ).length === 0 ) {
                delete topLevel[difficulty];
            } else {
                topLevel[difficulty] = newDifficultyMap as any;
            }

            // Persist and update ref so subscribers recompute
            resultsHistory.value = topLevel as ResultsHistory;
            try {
                localStorage.setItem( 'assessmentResults', JSON.stringify( resultsHistory.value ) );
            } catch ( e ) {
                console.error( 'Error persisting results after delete:', e );
            }

            return newList.length < existingList.length;
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
        resultsCountByDifficulty,
        averageAcrossAllAttemptsByDifficulty,

        // Actions
        loadResultsHistory,
        saveResult,
        setCurrentResults,
        clearCurrentResults,
        clearAllHistory,
        deleteResult
    };
} );
