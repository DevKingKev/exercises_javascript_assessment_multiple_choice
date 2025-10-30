import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useAssessmentStore } from '../assessmentStore';

// Mock fetch globally
global.fetch = vi.fn();

// Helper to create mock assessment data
function createMockAssessment ( questionCount: number = 3 ): any {
    return {
        id: 'test-1',
        metadata: {
            title: 'Test Assessment',
            description: 'Test description',
            difficulty: 'easy',
            timeLimit: 30,
            questionCount,
            topics: ['Test']
        },
        questions: Array.from( { length: questionCount }, ( _, i ) => ( {
            id: i + 1,
            question: `Question ${i + 1}`,
            options: { A: '1', B: '2', C: '3', D: '4' },
            correct: 'A'
        } ) )
    };
}

describe( 'assessmentStore', () => {
    beforeEach( () => {
        setActivePinia( createPinia() );
        vi.clearAllMocks();
    } );

    describe( 'Initial State', () => {
        it( 'should initialize with default values', () => {
            const store = useAssessmentStore();

            expect( store.availableAssessments ).toEqual( {} );
            expect( store.currentAssessment ).toBeNull();
            expect( store.currentDifficulty ).toBe( 'easy' );
            expect( store.currentQuestionIndex ).toBe( 0 );
            expect( store.userAnswers ).toEqual( [] );
            expect( store.startTime ).toBeNull();
            expect( store.timeLimit ).toBe( 30 );
        } );
    } );

    describe( 'Computed Properties', () => {
        it( 'currentQuestion returns null when no assessment loaded', () => {
            const store = useAssessmentStore();
            expect( store.currentQuestion ).toBeNull();
        } );

        it( 'currentQuestion returns the current question', () => {
            const store = useAssessmentStore();
            const mockAssessment = createMockAssessment( 3 );
            store.currentAssessment = mockAssessment;

            expect( store.currentQuestion ).toEqual( mockAssessment.questions[0] );

            store.currentQuestionIndex = 2;
            expect( store.currentQuestion ).toEqual( mockAssessment.questions[2] );
        } );

        it( 'totalQuestions returns correct count', () => {
            const store = useAssessmentStore();
            expect( store.totalQuestions ).toBe( 0 );

            store.currentAssessment = createMockAssessment( 5 );
            expect( store.totalQuestions ).toBe( 5 );
        } );

        it( 'isFirstQuestion and isLastQuestion work correctly', () => {
            const store = useAssessmentStore();
            store.currentAssessment = createMockAssessment( 3 );

            store.currentQuestionIndex = 0;
            expect( store.isFirstQuestion ).toBe( true );
            expect( store.isLastQuestion ).toBe( false );

            store.currentQuestionIndex = 1;
            expect( store.isFirstQuestion ).toBe( false );
            expect( store.isLastQuestion ).toBe( false );

            store.currentQuestionIndex = 2;
            expect( store.isFirstQuestion ).toBe( false );
            expect( store.isLastQuestion ).toBe( true );
        } );

        it( 'progressPercentage calculates correctly', () => {
            const store = useAssessmentStore();
            expect( store.progressPercentage ).toBe( 0 );

            store.currentAssessment = createMockAssessment( 4 );

            store.currentQuestionIndex = 0;
            expect( store.progressPercentage ).toBe( 25 );

            store.currentQuestionIndex = 1;
            expect( store.progressPercentage ).toBe( 50 );

            store.currentQuestionIndex = 3;
            expect( store.progressPercentage ).toBe( 100 );
        } );

        it( 'unansweredCount and answeredCount calculate correctly', () => {
            const store = useAssessmentStore();
            store.userAnswers = [null, 'A', null, 'B', null];

            expect( store.unansweredCount ).toBe( 3 );
            expect( store.answeredCount ).toBe( 2 );
        } );

        it( 'assessmentsByDifficulty returns assessments for difficulty', () => {
            const store = useAssessmentStore();
            store.availableAssessments = {
                easy: [
                    { id: 'easy-1', title: 'Easy 1', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10, topics: ['JS'] }
                ] as any,
                medium: [
                    { id: 'med-1', title: 'Med 1', description: 'Test', difficulty: 'medium', timeLimit: 45, questionCount: 15, topics: ['JS'] }
                ] as any
            };

            expect( store.assessmentsByDifficulty( 'easy' ) ).toHaveLength( 1 );
            expect( store.assessmentsByDifficulty( 'medium' ) ).toHaveLength( 1 );
            expect( store.assessmentsByDifficulty( 'hard' ) ).toEqual( [] );
        } );

        it( 'assessmentCount returns correct count', () => {
            const store = useAssessmentStore();
            store.availableAssessments = {
                easy: [
                    { id: 'easy-1', title: 'Easy 1', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10 },
                    { id: 'easy-2', title: 'Easy 2', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10 }
                ] as any
            };

            expect( store.assessmentCount( 'easy' ) ).toBe( 2 );
            expect( store.assessmentCount( 'hard' ) ).toBe( 0 );
        } );
    } );

    describe( 'Actions - loadAvailableAssessments', () => {
        it( 'loads assessments successfully', async () => {
            const store = useAssessmentStore();
            const mockData: any = {
                easy: [{ id: 'easy-1', title: 'Easy Test', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10 }]
            };

            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: true,
                json: async () => mockData
            } );

            await store.loadAvailableAssessments();

            expect( global.fetch ).toHaveBeenCalledWith( '/api/assessments' );
            expect( store.availableAssessments ).toEqual( mockData );
        } );

        it( 'throws error when fetch fails', async () => {
            const store = useAssessmentStore();

            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: false
            } );

            await expect( store.loadAvailableAssessments() ).rejects.toThrow( 'Failed to load assessments' );
        } );
    } );

    describe( 'Actions - loadAssessment', () => {
        it( 'loads assessment and initializes state', async () => {
            const store = useAssessmentStore();
            const mockAssessment = createMockAssessment( 5 );
            mockAssessment.metadata.difficulty = 'medium';
            mockAssessment.metadata.timeLimit = 45;

            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: true,
                json: async () => mockAssessment
            } );

            const result = await store.loadAssessment( 'medium', 'test-1' );

            expect( global.fetch ).toHaveBeenCalledWith( '/api/assessment/medium/test-1' );
            expect( result ).toEqual( mockAssessment );
            expect( store.currentAssessment ).toEqual( mockAssessment );
            expect( store.currentDifficulty ).toBe( 'medium' );
            expect( store.currentQuestionIndex ).toBe( 0 );
            expect( store.userAnswers ).toHaveLength( 5 );
            expect( store.userAnswers.every( a => a === null ) ).toBe( true );
            expect( store.timeLimit ).toBe( 45 );
            expect( store.startTime ).toBeInstanceOf( Date );
        } );

        it( 'throws error when assessment fails to load', async () => {
            const store = useAssessmentStore();

            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: false
            } );

            await expect( store.loadAssessment( 'easy', 'test-1' ) ).rejects.toThrow( 'Failed to load assessment' );
        } );
    } );

    describe( 'Actions - selectAnswer', () => {
        it( 'stores answer at current question index', () => {
            const store = useAssessmentStore();
            store.userAnswers = [null, null, null];
            store.currentQuestionIndex = 0;

            store.selectAnswer( 'B' );
            expect( store.userAnswers[0] ).toBe( 'B' );

            store.currentQuestionIndex = 2;
            store.selectAnswer( 'A' );
            expect( store.userAnswers[2] ).toBe( 'A' );
        } );

        it( 'allows changing an answer', () => {
            const store = useAssessmentStore();
            store.userAnswers = ['A', null, null];
            store.currentQuestionIndex = 0;

            store.selectAnswer( 'C' );
            expect( store.userAnswers[0] ).toBe( 'C' );
        } );
    } );

    describe( 'Actions - Navigation', () => {
        beforeEach( () => {
            const store = useAssessmentStore();
            store.currentAssessment = createMockAssessment( 5 );
        } );

        it( 'nextQuestion advances to next question', () => {
            const store = useAssessmentStore();
            store.currentQuestionIndex = 0;

            store.nextQuestion();
            expect( store.currentQuestionIndex ).toBe( 1 );

            store.nextQuestion();
            expect( store.currentQuestionIndex ).toBe( 2 );
        } );

        it( 'nextQuestion does not go beyond last question', () => {
            const store = useAssessmentStore();
            store.currentQuestionIndex = 4;

            store.nextQuestion();
            expect( store.currentQuestionIndex ).toBe( 4 );
        } );

        it( 'previousQuestion goes to previous question', () => {
            const store = useAssessmentStore();
            store.currentQuestionIndex = 2;

            store.previousQuestion();
            expect( store.currentQuestionIndex ).toBe( 1 );

            store.previousQuestion();
            expect( store.currentQuestionIndex ).toBe( 0 );
        } );

        it( 'previousQuestion does not go below 0', () => {
            const store = useAssessmentStore();
            store.currentQuestionIndex = 0;

            store.previousQuestion();
            expect( store.currentQuestionIndex ).toBe( 0 );
        } );

        it( 'jumpToQuestion jumps to valid index', () => {
            const store = useAssessmentStore();
            store.currentQuestionIndex = 0;

            store.jumpToQuestion( 3 );
            expect( store.currentQuestionIndex ).toBe( 3 );

            store.jumpToQuestion( 0 );
            expect( store.currentQuestionIndex ).toBe( 0 );
        } );

        it( 'jumpToQuestion ignores invalid indices', () => {
            const store = useAssessmentStore();
            store.currentQuestionIndex = 2;

            store.jumpToQuestion( -1 );
            expect( store.currentQuestionIndex ).toBe( 2 );

            store.jumpToQuestion( 10 );
            expect( store.currentQuestionIndex ).toBe( 2 );
        } );
    } );

    describe( 'Actions - Reset and Retake', () => {
        it( 'resetAssessment clears all state', () => {
            const store = useAssessmentStore();
            store.currentAssessment = createMockAssessment( 3 );
            store.currentQuestionIndex = 2;
            store.userAnswers = ['A', 'B', 'C'];
            store.startTime = new Date();
            store.timeLimit = 45;

            store.resetAssessment();

            expect( store.currentAssessment ).toBeNull();
            expect( store.currentQuestionIndex ).toBe( 0 );
            expect( store.userAnswers ).toEqual( [] );
            expect( store.startTime ).toBeNull();
            expect( store.timeLimit ).toBe( 30 );
        } );

        it( 'retakeAssessment resets answers and time', () => {
            const store = useAssessmentStore();
            store.currentAssessment = createMockAssessment( 3 );
            store.currentQuestionIndex = 2;
            store.userAnswers = ['A', 'B', 'C'];

            store.retakeAssessment();

            expect( store.currentQuestionIndex ).toBe( 0 );
            expect( store.userAnswers ).toEqual( [null, null, null] );
            expect( store.startTime ).toBeInstanceOf( Date );
            expect( store.currentAssessment ).not.toBeNull();
        } );
    } );

    describe( 'Actions - getAssessmentMetadata', () => {
        it( 'returns metadata for existing assessment', () => {
            const store = useAssessmentStore();
            const mockMetadata: any = {
                id: 'test-1',
                title: 'Test Assessment',
                description: 'Test description',
                difficulty: 'easy',
                timeLimit: 30,
                questionCount: 10,
                topics: ['JavaScript']
            };

            store.availableAssessments = {
                easy: [mockMetadata]
            };

            const result = store.getAssessmentMetadata( 'easy', 'test-1' );
            expect( result ).toEqual( mockMetadata );
        } );

        it( 'returns null for non-existent assessment', () => {
            const store = useAssessmentStore();
            store.availableAssessments = {
                easy: [
                    { id: 'test-1', title: 'Test', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10 } as any
                ]
            };

            const result = store.getAssessmentMetadata( 'easy', 'non-existent' );
            expect( result ).toBeNull();
        } );

        it( 'returns null for non-existent difficulty', () => {
            const store = useAssessmentStore();
            store.availableAssessments = {};

            const result = store.getAssessmentMetadata( 'hard', 'test-1' );
            expect( result ).toBeNull();
        } );
    } );
} );
