import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useResultsStore } from '../resultsStore';
import type { ResultRecord, TopicBreakdown } from '../../models';

// Mock localStorage
const localStorageMock = ( () => {
    let store: { [key: string]: string; } = {};

    return {
        getItem: ( key: string ) => store[key] || null,
        setItem: ( key: string, value: string ) => {
            store[key] = value;
        },
        removeItem: ( key: string ) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        }
    };
} )();

Object.defineProperty( window, 'localStorage', {
    value: localStorageMock
} );

describe( 'resultsStore', () => {
    beforeEach( () => {
        setActivePinia( createPinia() );
        localStorage.clear();
        vi.clearAllMocks();
    } );

    afterEach( () => {
        localStorage.clear();
    } );

    describe( 'Initial State', () => {
        it( 'initializes with empty state', () => {
            const store = useResultsStore();

            expect( store.resultsHistory ).toEqual( {} );
            expect( store.currentResults ).toBeNull();
        } );
    } );

    describe( 'Computed Properties', () => {
        it( 'hasHistory returns false when no history', () => {
            const store = useResultsStore();
            expect( store.hasHistory ).toBe( false );
        } );

        it( 'hasHistory returns true when history exists', () => {
            const store = useResultsStore();
            store.resultsHistory = {
                easy: {
                    'test-1': []
                }
            };
            expect( store.hasHistory ).toBe( true );
        } );

        it( 'getResultsByDifficulty returns assessments for difficulty', () => {
            const store = useResultsStore();
            store.resultsHistory = {
                easy: {
                    'test-1': [] as ResultRecord[],
                    'test-2': [] as ResultRecord[]
                },
                medium: {
                    'test-3': [] as ResultRecord[]
                }
            };

            expect( Object.keys( store.getResultsByDifficulty( 'easy' ) ) ).toHaveLength( 2 );
            expect( Object.keys( store.getResultsByDifficulty( 'medium' ) ) ).toHaveLength( 1 );
            expect( store.getResultsByDifficulty( 'hard' ) ).toEqual( {} );
        } );

        it( 'getResultsByAssessment returns results for assessment', () => {
            const store = useResultsStore();
            const mockResults: ResultRecord[] = [
                {
                    resultRecordId: 1,
                    assessmentId: 'test-1',
                    difficulty: 'easy',
                    assessmentTitle: 'Test',
                    date: '2025-10-30',
                    correct: 8,
                    total: 10,
                    percentage: 80,
                    timeTaken: '5:00',
                    improvementTopics: [],
                    topicBreakdown: {}
                }
            ];

            store.resultsHistory = {
                easy: {
                    'test-1': mockResults
                }
            };

            expect( store.getResultsByAssessment( 'easy', 'test-1' ) ).toEqual( mockResults );
            expect( store.getResultsByAssessment( 'easy', 'non-existent' ) ).toEqual( [] );
        } );

        it( 'getLatestResult returns most recent result', () => {
            const store = useResultsStore();
            const result1: ResultRecord = {
                resultRecordId: 10,
                assessmentId: 'test-1',
                difficulty: 'easy',
                assessmentTitle: 'Test',
                date: '2025-10-29',
                correct: 7,
                total: 10,
                percentage: 70,
                timeTaken: '5:00',
                improvementTopics: [],
                topicBreakdown: {}
            };
            const result2: ResultRecord = {
                resultRecordId: 11,
                assessmentId: 'test-1',
                difficulty: 'easy',
                assessmentTitle: 'Test',
                date: '2025-10-30',
                correct: 7,
                total: 10,
                percentage: 90,
                timeTaken: '5:00',
                improvementTopics: [],
                topicBreakdown: {}
            };

            store.resultsHistory = {
                easy: {
                    'test-1': [result1, result2]
                }
            };

            const latest = store.getLatestResult( 'easy', 'test-1' );
            expect( latest ).toEqual( result2 );
        } );

        it( 'getLatestResult returns null when no results', () => {
            const store = useResultsStore();
            store.resultsHistory = {};

            const latest = store.getLatestResult( 'easy', 'test-1' );
            expect( latest ).toBeNull();
        } );

        it( 'averageScoreByDifficulty calculates correctly', () => {
            const store = useResultsStore();
            store.resultsHistory = {
                easy: {
                    'test-1': [
                        { resultRecordId: 100, assessmentId: 'test-1', difficulty: 'easy', assessmentTitle: 'Test', date: '2025-10-30', correct: 8, total: 10, percentage: 80, timeTaken: '5:00', improvementTopics: [], topicBreakdown: {} },
                        { resultRecordId: 101, assessmentId: 'test-1', difficulty: 'easy', assessmentTitle: 'Test', date: '2025-10-31', correct: 9, total: 10, percentage: 90, timeTaken: '5:00', improvementTopics: [], topicBreakdown: {} }
                    ],
                    'test-2': [
                        { resultRecordId: 102, assessmentId: 'test-2', difficulty: 'easy', assessmentTitle: 'Test 2', date: '2025-10-30', correct: 7, total: 10, percentage: 70, timeTaken: '5:00', improvementTopics: [], topicBreakdown: {} }
                    ]
                }
            };

            // Should average latest scores: (90 + 70) / 2 = 80
            const average = store.averageScoreByDifficulty( 'easy' );
            expect( average ).toBe( 80 );
        } );

        it( 'averageScoreByDifficulty returns 0 for no data', () => {
            const store = useResultsStore();
            store.resultsHistory = {};

            expect( store.averageScoreByDifficulty( 'easy' ) ).toBe( 0 );
        } );
    } );

    describe( 'Actions - loadResultsHistory', () => {
        it( 'loads results from localStorage', () => {
            const dateIso = '2025-10-30T12:00:00.000Z';
            const ts = Number( Date.parse( dateIso ) );

            const mockData = {
                easy: {
                    'test-1': [
                        {
                            resultRecordId: ts,
                            assessmentId: 'test-1',
                            difficulty: 'easy',
                            assessmentTitle: 'Test',
                            date: dateIso,
                            correct: 8,
                            total: 10,
                            percentage: 80,
                            timeTaken: '5:00',
                            improvementTopics: [],
                            topicBreakdown: {}
                        }
                    ]
                }
            };

            localStorage.setItem( 'assessmentResults', JSON.stringify( mockData ) );

            const store = useResultsStore();
            store.loadResultsHistory();

            expect( store.resultsHistory ).toEqual( mockData );
        } );

        // Migration-related tests removed per current non-migration policy

        it( 'handles missing localStorage data', () => {
            const store = useResultsStore();
            store.loadResultsHistory();

            expect( store.resultsHistory ).toEqual( {} );
        } );

        it( 'handles corrupted localStorage data', () => {
            localStorage.setItem( 'assessmentResults', 'invalid json' );

            const store = useResultsStore();
            store.loadResultsHistory();

            expect( store.resultsHistory ).toEqual( {} );
        } );

        // Migration-related tests removed per current non-migration policy

        // Migration-related tests removed per current non-migration policy

        // Migration-related tests removed per current non-migration policy
    } );

    describe( 'Actions - saveResult', () => {
        it( 'saves result to history and localStorage', () => {
            const store = useResultsStore();
            const result: ResultRecord = {
                resultRecordId: 200,
                assessmentId: 'test-1',
                difficulty: 'easy',
                assessmentTitle: 'Test Assessment',
                date: '2025-10-30',
                correct: 8,
                total: 10,
                percentage: 80,
                timeTaken: '5:00',
                improvementTopics: ['Math'],
                topicBreakdown: {
                    Math: { correct: 2, total: 5 },
                    English: { correct: 6, total: 5 }
                }
            };

            store.saveResult( result );

            expect( store.resultsHistory.easy['test-1'] ).toHaveLength( 1 );
            expect( store.resultsHistory.easy['test-1'][0] ).toEqual( result );

            const stored = JSON.parse( localStorage.getItem( 'assessmentResults' ) || '{}' );
            expect( stored.easy['test-1'][0] ).toEqual( result );
        } );

        it( 'appends to existing results', () => {
            const store = useResultsStore();
            const result1: ResultRecord = {
                resultRecordId: 300,
                assessmentId: 'test-1',
                difficulty: 'easy',
                assessmentTitle: 'Test',
                date: '2025-10-29',
                correct: 7,
                total: 10,
                percentage: 70,
                timeTaken: '5:00',
                improvementTopics: [],
                topicBreakdown: {}
            };
            const result2: ResultRecord = {
                ...result1,
                date: '2025-10-30',
                percentage: 90
            };

            store.saveResult( result1 );
            store.saveResult( result2 );

            expect( store.resultsHistory.easy['test-1'] ).toHaveLength( 2 );
        } );

        it( 'saving a completed assessment updates the total count and average for the difficulty', () => {
            const store = useResultsStore();

            // Initially there should be no assessments for 'medium'
            expect( Object.keys( store.getResultsByDifficulty( 'medium' ) ) ).toHaveLength( 0 );
            expect( store.averageScoreByDifficulty( 'medium' ) ).toBe( 0 );

            const completed: ResultRecord = {
                resultRecordId: 700,
                assessmentId: 'completed-test',
                difficulty: 'medium',
                assessmentTitle: 'Completed Test',
                date: '2025-11-04',
                correct: 7,
                total: 10,
                percentage: 75,
                timeTaken: '4:00',
                improvementTopics: [],
                topicBreakdown: {}
            };

            // Save the completed assessment
            store.saveResult( completed );

            // The difficulty should now have one assessment key
            expect( Object.keys( store.getResultsByDifficulty( 'medium' ) ) ).toHaveLength( 1 );

            // The averageScoreByDifficulty should reflect the newly-saved percentage
            expect( store.averageScoreByDifficulty( 'medium' ) ).toBe( 75 );
        } );
    } );

    describe( 'Actions - setCurrentResults', () => {
        it( 'sets current results', () => {
            const store = useResultsStore();
            const results = {
                correct: 8,
                total: 10,
                percentage: 80,
                topicBreakdown: {
                    Math: { correct: 4, total: 5 }
                } as TopicBreakdown,
                questionReview: [],
                timeTaken: '5:00'
            };

            store.setCurrentResults( results );

            expect( store.currentResults ).toEqual( results );
        } );
    } );

    describe( 'Actions - clearCurrentResults', () => {
        it( 'clears current results', () => {
            const store = useResultsStore();
            store.currentResults = {
                correct: 8,
                total: 10,
                percentage: 80,
                topicBreakdown: {},
                questionReview: [],
                timeTaken: '5:00'
            };

            store.clearCurrentResults();

            expect( store.currentResults ).toBeNull();
        } );
    } );

    describe( 'Actions - clearAllHistory', () => {
        it( 'clears all history and localStorage', () => {
            const store = useResultsStore();
            store.resultsHistory = {
                easy: {
                    'test-1': [
                        {
                            resultRecordId: 400,
                            assessmentId: 'test-1',
                            difficulty: 'easy',
                            assessmentTitle: 'Test',
                            date: '2025-10-30',
                            correct: 8,
                            total: 10,
                            percentage: 80,
                            timeTaken: '5:00',
                            improvementTopics: [],
                            topicBreakdown: {}
                        }
                    ]
                }
            };

            localStorage.setItem( 'assessmentResults', '{"some":"data"}' );

            store.clearAllHistory();

            expect( store.resultsHistory ).toEqual( {} );
            expect( localStorage.getItem( 'assessmentResults' ) ).toBeNull();
        } );
    } );

    describe( 'Actions - deleteResult', () => {
        it( 'deleting the last result removes the assessment and updates total count', () => {
            const store = useResultsStore();

            const result = {
                resultRecordId: 500,
                assessmentId: 'del-test',
                difficulty: 'easy',
                assessmentTitle: 'Delete Test',
                date: '2025-11-01',
                correct: 5,
                total: 10,
                percentage: 50,
                timeTaken: '3:00',
                improvementTopics: [],
                topicBreakdown: {}
            } as any;

            // Save result and verify assessment count is 1
            store.saveResult( result );
            const before = Object.keys( store.getResultsByDifficulty( 'easy' ) ).length;
            expect( before ).toBe( 1 );

            // Delete the result
            const removed = store.deleteResult( 'easy', 'del-test', result.resultRecordId );
            expect( removed ).toBe( true );

            // After deletion, the assessment key should be removed and count should be 0
            const after = Object.keys( store.getResultsByDifficulty( 'easy' ) ).length;
            expect( after ).toBe( 0 );
            expect( store.resultsHistory.easy ).toBeUndefined();
        } );

        it( 'deleting one of multiple results for an assessment keeps the assessment key', () => {
            const store = useResultsStore();

            const r1 = {
                resultRecordId: 600,
                assessmentId: 'multi-test',
                difficulty: 'easy',
                assessmentTitle: 'Multi Test',
                date: '2025-11-01',
                correct: 6,
                total: 10,
                percentage: 60,
                timeTaken: '3:00',
                improvementTopics: [],
                topicBreakdown: {}
            } as any;

            const r2 = { ...r1, resultRecordId: 601, date: '2025-11-02', percentage: 80 } as any;

            // Save two results for the same assessment
            store.saveResult( r1 );
            store.saveResult( r2 );

            expect( store.getResultsByAssessment( 'easy', 'multi-test' ) ).toHaveLength( 2 );

            // Delete the first record
            const removed = store.deleteResult( 'easy', 'multi-test', r1.resultRecordId );
            expect( removed ).toBe( true );

            // The assessment should still exist with one remaining result
            const remaining = store.getResultsByAssessment( 'easy', 'multi-test' );
            expect( remaining ).toHaveLength( 1 );
            expect( Object.keys( store.getResultsByDifficulty( 'easy' ) ).length ).toBeGreaterThan( 0 );
        } );
    } );
} );
