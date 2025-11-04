import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { createRouter, createMemoryHistory } from 'vue-router';
import ResultsView from '../ResultsView.vue';
import { useResultsStore } from '@/stores/resultsStore';

describe( 'ResultsView - topic tags under explanations', () => {
    let pinia: any;
    let router: any;

    beforeEach( async () => {
        pinia = createPinia();
        router = createRouter( {
            history: createMemoryHistory(),
            routes: [
                { name: 'home', path: '/', component: { template: '<div />' } },
                { name: 'results', path: '/results', component: { template: '<div />' } }
            ]
        } );

        // Initialize navigation to a known route so RouterLink resolution succeeds
        await router.push( '/' );
        await router.isReady();
    } );

    it( 'renders a topic tag under the explanation when question has a topic', async () => {
        const wrapper = mount( ResultsView, {
            global: {
                plugins: [pinia, router]
            }
        } );

        const resultsStore = useResultsStore();

        // Populate currentResults with a topicBreakdown and one questionReview
        resultsStore.setCurrentResults( {
            correct: 1,
            total: 2,
            percentage: 50,
            topicBreakdown: {
                'Arrays': { correct: 1, total: 2 }
            },
            questionReview: [
                {
                    question: 'What is []?',
                    userAnswer: 'A',
                    correctAnswer: 'B',
                    isCorrect: false,
                    explanation: 'Because...',
                    options: { A: 'arr', B: 'not arr' },
                    topic: 'Arrays'
                }
            ],
            timeTaken: '1:00'
        } as any );

        await wrapper.vm.$nextTick();

        // Find the topic tag inside the explanation-topics container
        const tag = wrapper.find( '.explanation-topics .topic-tag' );
        expect( tag.exists() ).toBe( true );
        expect( tag.text() ).toContain( 'Arrays' );
        // Score 1/2 => 50% => topic-poor
        expect( tag.classes() ).toContain( 'topic-poor' );
    } );
} );
