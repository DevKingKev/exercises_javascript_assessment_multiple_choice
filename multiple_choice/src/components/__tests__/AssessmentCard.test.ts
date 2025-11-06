import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import AssessmentCard from '@/components/AssessmentCard.vue';
import { useResultsStore } from '@/stores/resultsStore';

describe( 'AssessmentCard.vue', () => {
    beforeEach( () => {
        setActivePinia( createPinia() );
    } );

    it( 'shows completion badge when results exist for the normalized assessment id', () => {
        const store = useResultsStore();
        // set up results for canonical key assessment1 under easy
        store.resultsHistory = {
            easy: {
                assessment1: [
                    {
                        resultRecordId: 1,
                        assessmentId: 'assessment1',
                        difficulty: 'easy',
                        assessmentTitle: 'Test',
                        date: '2025-11-01',
                        correct: 5,
                        total: 10,
                        percentage: 50,
                        timeTaken: '3:00',
                        improvementTopics: [],
                        topicBreakdown: {}
                    }
                ]
            }
        } as any;

        const wrapper = mount( AssessmentCard as any, {
            props: {
                title: 'Test',
                description: 'desc',
                questionCount: 10,
                timeLimit: 5,
                assessmentId: '1',
                difficulty: 'easy'
            }
        } );

        expect( wrapper.find( '.completion-badge' ).exists() ).toBe( true );
    } );

    it( 'does not show completion badge when no results exist', () => {
        const store = useResultsStore();
        store.resultsHistory = {} as any;

        const wrapper = mount( AssessmentCard as any, {
            props: {
                title: 'No Results',
                description: 'desc',
                questionCount: 5,
                timeLimit: 3,
                assessmentId: '2',
                difficulty: 'easy'
            }
        } );

        expect( wrapper.find( '.completion-badge' ).exists() ).toBe( false );
    } );
} );
