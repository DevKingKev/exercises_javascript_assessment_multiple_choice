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

            // Parse the persisted JSON and assign it directly. We intentionally
            // avoid performing any format migrations here — no production data
            // exists yet and we prefer to keep load behavior simple and
            // predictable during development.
            const parsed = JSON.parse( stored ) as ResultsHistory;

            if ( typeof parsed !== 'object' || parsed === null ) {
                resultsHistory.value = {};
                return;
            }

            resultsHistory.value = parsed;
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

        // Ensure top-level ref change so derived computed values and UI
        // bindings that depend on the resultsHistory object reliably
        // react to additions. Some consumers read Object.keys() on the
        // difficulty map which can sometimes miss nested mutations when
        // Vite/hmr or serialization has produced non-proxied shapes; a
        // shallow copy forces Vue to observe the update.
        resultsHistory.value = { ...resultsHistory.value };

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

            // If the assessment has no remaining records, remove the assessment
            // entry entirely so UI counts (Object.keys) reflect the deletion.
            if ( after === 0 ) {
                try {
                    // delete the empty assessment key
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete resultsHistory.value[difficulty][assessmentId];
                } catch ( delErr ) {
                    // Fallback: set to undefined then delete
                    // eslint-disable-next-line no-param-reassign
                    ( resultsHistory.value[difficulty] as any )[assessmentId] = undefined as any;
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete ( resultsHistory.value[difficulty] as any )[assessmentId];
                }

                // If difficulty now has no assessments, remove the difficulty key
                if ( Object.keys( resultsHistory.value[difficulty] || {} ).length === 0 ) {
                    try {
                        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                        delete resultsHistory.value[difficulty];
                    } catch ( delErr ) {
                        // If delete failed, set to empty object to keep consistent shape
                        resultsHistory.value[difficulty] = {} as any;
                    }
                }
            }

            if ( after < before ) {
                // As with saveResult, ensure the top-level ref is updated so
                // any UI components depending on the resultsHistory shape
                // update their counts/averages immediately.
                resultsHistory.value = { ...resultsHistory.value };

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
