import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { createRouter, createMemoryHistory } from 'vue-router';
import ResultsView from '../ResultsView.vue';
import { useResultsStore } from '@/stores/resultsStore';

describe( 'ResultsView - difficulty badge navigates to results history', () => {
    let pinia: any;
    let router: any;

    beforeEach( () => {
        pinia = createPinia();
        // Provide a minimal route for 'results' to avoid router resolve warnings
        router = createRouter( { history: createMemoryHistory(), routes: [{ name: 'results', path: '/results', component: { template: '<div />' } }] } );
    } );

    it( 'clicking the difficulty badge pushes results route with expand query', async () => {
        const pushSpy = vi.spyOn( router, 'push' );

        const wrapper = mount( ResultsView, {
            global: {
                plugins: [pinia, router]
            }
        } );

        const resultsStore = useResultsStore();
        // Set a minimal currentResults so the template renders the header
        resultsStore.setCurrentResults( {
            correct: 5,
            total: 10,
            percentage: 50,
            topicBreakdown: {},
            questionReview: [],
            timeTaken: '3:00'
        } as any );

        await wrapper.vm.$nextTick();

        const link = wrapper.find( '.difficulty-badge-link' );
        expect( link.exists() ).toBe( true );

        await link.trigger( 'click' );

        expect( pushSpy ).toHaveBeenCalled();
        expect( pushSpy ).toHaveBeenCalledWith( { name: 'results', query: { expand: 'easy' } } );
    } );
} );
