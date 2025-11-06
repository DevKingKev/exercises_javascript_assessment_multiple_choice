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
            // default language for new layout
            language: 'javascript',
            // unique identifier derived from the file (present but falsy so legacy id is used for storage keys in tests)
            assessmentUniqueId: 0,
            description: 'Test description',
            difficulty: 'easy',
            timeLimit: 30,
            questionCount,
            topics: ['Test'],
            // topicLinks mapping used by client to resolve topic references
            topicLinks: [{ topicName: 'Test', refLink: '/topics/test' }]
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
        // ensure a clean localStorage between tests
        try { localStorage.clear(); } catch ( e ) { /* ignore in non-jsdom envs */ }
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

            expect( global.fetch ).toHaveBeenCalledWith( '/api/assessments/javascript' );
            expect( store.availableAssessments ).toEqual( mockData );
            expect( store.assessmentsLoaded ).toBe( true );
        } );

        it( 'skips loading if already loaded', async () => {
            const store = useAssessmentStore();
            const mockData: any = {
                easy: [{ id: 'easy-1', title: 'Easy Test', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10 }]
            };

            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: true,
                json: async () => mockData
            } );

            // First load
            await store.loadAvailableAssessments();
            expect( global.fetch ).toHaveBeenCalledTimes( 1 );
            expect( store.assessmentsLoaded ).toBe( true );

            // Second load should be skipped
            await store.loadAvailableAssessments();
            expect( global.fetch ).toHaveBeenCalledTimes( 1 ); // Still only 1 call
        } );

        it( 'forces reload when force parameter is true', async () => {
            const store = useAssessmentStore();
            const mockData: any = {
                easy: [{ id: 'easy-1', title: 'Easy Test', description: 'Test', difficulty: 'easy', timeLimit: 30, questionCount: 10 }]
            };

            ( global.fetch as any ).mockResolvedValue( {
                ok: true,
                json: async () => mockData
            } );

            // First load
            await store.loadAvailableAssessments();
            expect( global.fetch ).toHaveBeenCalledTimes( 1 );

            // Force reload
            await store.loadAvailableAssessments( true );
            expect( global.fetch ).toHaveBeenCalledTimes( 2 ); // Called twice
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

            expect( global.fetch ).toHaveBeenCalledWith( '/api/assessment/javascript/medium/test-1' );
            expect( result ).toEqual( mockAssessment );
            expect( store.currentAssessment ).toEqual( mockAssessment );
            expect( store.currentDifficulty ).toBe( 'medium' );
            expect( store.currentQuestionIndex ).toBe( 0 );
            expect( store.userAnswers ).toHaveLength( 5 );
            expect( store.userAnswers.every( a => a === null ) ).toBe( true );
            expect( store.timeLimit ).toBe( 45 );
            expect( store.startTime ).toBeInstanceOf( Date );
        } );

        it( 'caches fetched assessments and avoids refetch within same session', async () => {
            const store = useAssessmentStore();
            const mockAssessment = createMockAssessment( 3 );
            mockAssessment.metadata.difficulty = 'easy';

            // First fetch resolves with the assessment
            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: true,
                json: async () => mockAssessment
            } );

            const first = await store.loadAssessment( 'easy', 'test-1' );
            expect( global.fetch ).toHaveBeenCalledTimes( 1 );
            expect( first ).toEqual( mockAssessment );

            // Second call for same difficulty and id should use cache and not call fetch again
            const second = await store.loadAssessment( 'easy', 'test-1' );
            expect( global.fetch ).toHaveBeenCalledTimes( 1 );
            expect( second ).toEqual( mockAssessment );
        } );

        it( 'fetches different assessments or different difficulties separately', async () => {
            const store = useAssessmentStore();
            const a1 = createMockAssessment( 2 );
            a1.id = 'a1';
            a1.metadata.difficulty = 'easy';

            const a2 = createMockAssessment( 2 );
            a2.id = 'a2';
            a2.metadata.difficulty = 'easy';

            // a1 returned first
            ( global.fetch as any ).mockResolvedValueOnce( { ok: true, json: async () => a1 } );
            const resA1 = await store.loadAssessment( 'easy', 'a1' );
            expect( global.fetch ).toHaveBeenCalledTimes( 1 );

            // a2 should cause another fetch
            ( global.fetch as any ).mockResolvedValueOnce( { ok: true, json: async () => a2 } );
            const resA2 = await store.loadAssessment( 'easy', 'a2' );
            expect( global.fetch ).toHaveBeenCalledTimes( 2 );
            expect( resA2 ).toEqual( a2 );

            // requesting a1 again should not trigger fetch
            const resA1Again = await store.loadAssessment( 'easy', 'a1' );
            expect( global.fetch ).toHaveBeenCalledTimes( 2 );
            expect( resA1Again ).toEqual( a1 );
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

    describe( 'Persistence', () => {
        it( 'nextQuestion persists progress to localStorage', () => {
            const store = useAssessmentStore();
            const assessment = createMockAssessment( 3 );
            // identification used by storage key
            assessment.id = 'test-1';
            assessment.metadata.difficulty = 'easy';

            store.currentAssessment = assessment as any;
            store.currentQuestionIndex = 0;
            store.userAnswers = ['B', null, null] as any;
            // set a start time 1.5s in the past
            store.startTime = new Date( Date.now() - 1500 ) as any;

            store.nextQuestion();

            const raw = global.localStorage.getItem( 'assessment-progress:javascript:easy:test-1' );
            expect( raw ).not.toBeNull();
            const saved = JSON.parse( raw as string );
            expect( saved.currentQuestionIndex ).toBe( 0 ); // saved before increment
            expect( saved.userAnswers ).toEqual( ['B', null, null] );
            expect( typeof saved.elapsedMs ).toBe( 'number' );
            expect( saved.elapsedMs ).toBeGreaterThanOrEqual( 1400 );
        } );

        it( 'loadAssessment restores saved progress from localStorage', async () => {
            const store = useAssessmentStore();
            const assessment = createMockAssessment( 4 );
            assessment.id = 'test-1';
            assessment.metadata.difficulty = 'easy';

            const savedPayload = {
                currentQuestionIndex: 2,
                userAnswers: ['A', 'B', 'C', null],
                elapsedMs: 5000
            };

            const key = `assessment-progress:javascript:easy:test-1`;
            global.localStorage.setItem( key, JSON.stringify( savedPayload ) );

            ( global.fetch as any ).mockResolvedValueOnce( {
                ok: true,
                json: async () => assessment
            } );

            const result = await store.loadAssessment( 'easy', 'test-1' );

            expect( result ).toBeTruthy();
            expect( store.userAnswers ).toEqual( savedPayload.userAnswers );
            expect( store.currentQuestionIndex ).toBe( savedPayload.currentQuestionIndex );
            // elapsed time should be approximately restored by adjusting startTime
            expect( store.startTime ).toBeInstanceOf( Date );
            const delta = Math.abs( ( Date.now() - ( store.startTime as any ).getTime() ) - savedPayload.elapsedMs );
            expect( delta ).toBeLessThan( 200 );
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
                fileId: 'test-1',
                assessmentUniqueId: 67890,
                title: 'Test Assessment',
                description: 'Test description',
                difficulty: 'easy',
                timeLimit: 30,
                questionCount: 10,
                topics: ['JavaScript'],
                topicLinks: [{ topicName: 'JavaScript', refLink: '/topics/js' }]
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
