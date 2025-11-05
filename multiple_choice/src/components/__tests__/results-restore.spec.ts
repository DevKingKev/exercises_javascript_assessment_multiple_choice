import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import ResultsView from '@/views/ResultsView.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useResultsStore } from '@/stores/resultsStore';
import { useAssessmentStore } from '@/stores/assessmentStore';

describe( 'ResultsView restoration', () => {
    it( 'restores a saved result and renders question review', async () => {
        const pinia = createPinia();
        // make stores created by `useXStore()` use this pinia
        setActivePinia( pinia );

        const resultsStore = useResultsStore();
        const assessmentStore = useAssessmentStore();

        // Prepare a saved record in resultsHistory
        const rec = {
            resultRecordId: 123,
            assessmentId: 'test1',
            difficulty: 'easy',
            correct: 0,
            total: 1,
            percentage: 0,
            topicBreakdown: { General: { correct: 0, total: 1 } },
            wrongAnswers: [{ questionNr: '1', answer: 'B' }],
            date: '2025-11-05',
            timeTaken: '1m',
            topicLinks: {}
        } as any;

        resultsStore.resultsHistory = { easy: { test1: [rec] } } as any;

        // Mock loadAssessment to populate assessmentStore.currentAssessment
        const mockAssessment = {
            metadata: { id: 'test1', title: 'Test 1', topics: ['General'] },
            questions: [
                { id: '1', question: 'What is 1+1?', options: { A: '1', B: '2' }, correct: 'A', explanation: 'Because math', topic: { topics: ['General'] } }
            ]
        } as any;

        assessmentStore.loadAssessment = vi.fn( async ( _diff: string, _id: string ) => {
            assessmentStore.currentAssessment = mockAssessment as any;
            return mockAssessment;
        } ) as any;

        // Minimal router with the routes referenced by ResultsView to avoid
        // runtime resolve errors from RouterLink/useLink during mounting.
        const Dummy = { template: '<div />' };
        const router = createRouter( {
            history: createMemoryHistory(),
            routes: [
                { name: 'assessment-result', path: '/assessment-result/:resultRecordId', component: ResultsView },
                { name: 'results', path: '/results', component: Dummy },
                { name: 'assessment', path: '/assessment/:difficulty/:id', component: Dummy },
                { name: 'home', path: '/', component: Dummy }
            ]
        } );

        // Navigate to the result route before mounting so the component reads params on mount
        await router.push( '/assessment-result/123' );
        await router.isReady();

        const wrapper = mount( ResultsView, {
            global: {
                plugins: [pinia, router]
            }
        } );

        // Wait a tick for async restoration to complete
        await new Promise( ( r ) => setTimeout( r, 0 ) );

        // The store should have currentResults set by the component
        expect( resultsStore.currentResults ).not.toBeNull();
        expect( resultsStore.currentResults && resultsStore.currentResults.questionReview.length ).toBe( 1 );

        // The rendered output should include the question text and user/correct answer blocks
        const html = wrapper.html();
        expect( html ).toContain( 'Question 1:' );
        expect( html ).toContain( 'Your answer:' );
        expect( html ).toContain( 'Correct answer:' );
    } );
} );
