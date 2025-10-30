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
                        { assessmentId: 'test-1', difficulty: 'easy', assessmentTitle: 'Test', date: '2025-10-30', correct: 8, total: 10, percentage: 80, timeTaken: '5:00', improvementTopics: [], topicBreakdown: {} },
                        { assessmentId: 'test-1', difficulty: 'easy', assessmentTitle: 'Test', date: '2025-10-31', correct: 9, total: 10, percentage: 90, timeTaken: '5:00', improvementTopics: [], topicBreakdown: {} }
                    ],
                    'test-2': [
                        { assessmentId: 'test-2', difficulty: 'easy', assessmentTitle: 'Test 2', date: '2025-10-30', correct: 7, total: 10, percentage: 70, timeTaken: '5:00', improvementTopics: [], topicBreakdown: {} }
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
            const mockData = {
                easy: {
                    'test-1': [
                        {
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

            localStorage.setItem( 'assessmentResults', JSON.stringify( mockData ) );

            const store = useResultsStore();
            store.loadResultsHistory();

            expect( store.resultsHistory ).toEqual( mockData );
        } );

        it( 'migrates old format (testId/testTitle) to new format', () => {
            const oldFormatData = {
                easy: {
                    'test-1': [
                        {
                            testId: 'test-1',
                            testTitle: 'Old Test',
                            difficulty: 'easy',
                            date: '2025-10-30',
                            correct: 8,
                            total: 10,
                            percentage: 80,
                            timeTaken: '5:00'
                        }
                    ]
                }
            };

            localStorage.setItem( 'assessmentResults', JSON.stringify( oldFormatData ) );

            const store = useResultsStore();
            store.loadResultsHistory();

            const result = store.resultsHistory.easy['test-1'][0];
            expect( result.assessmentId ).toBe( 'test-1' );
            expect( result.assessmentTitle ).toBe( 'Old Test' );
            expect( result.improvementTopics ).toEqual( [] );
            expect( result.topicBreakdown ).toEqual( {} );
        } );

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
    } );

    describe( 'Actions - saveResult', () => {
        it( 'saves result to history and localStorage', () => {
            const store = useResultsStore();
            const result: ResultRecord = {
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
} );
