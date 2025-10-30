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

            // Save migrated data back to localStorage
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
        clearAllHistory
    };
} );
