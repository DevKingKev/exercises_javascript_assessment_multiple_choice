import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TopicPerformanceBreakdown from '@/components/TopicPerformanceBreakdown.vue';

describe( 'TopicPerformanceBreakdown.vue', () => {
    it( 'renders topic name as anchor when assessment provides a matching refLink', () => {
        const items = {
            Arrays: { correct: 2, total: 4 },
            Objects: { correct: 1, total: 2 }
        };

        const assessment: any = {
            metadata: {
                topicLinks: [
                    { topicName: 'Arrays', refLink: 'https://example.com/arrays' }
                ]
            },
            questions: []
        };

        const wrapper = mount( TopicPerformanceBreakdown as any, {
            props: { items, assessment }
        } );

        // anchor for Arrays should exist with correct href
        const anchor = wrapper.find( 'a.topic-name[href="https://example.com/arrays"]' );
        expect( anchor.exists() ).toBe( true );
        expect( anchor.text() ).toBe( 'Arrays' );

        // Objects should still render as a span (no refLink provided)
        const spanNames = wrapper.findAll( 'span.topic-name' ).map( w => w.text() );
        expect( spanNames ).toContain( 'Objects' );

        // Check score / percentage rendering for Arrays (2/4 -> 50%)
        const itemsWrappers = wrapper.findAll( '.topic-item' );
        const arraysItem = itemsWrappers.find( w => w.text().includes( 'Arrays' ) );
        expect( arraysItem ).toBeTruthy();
        if ( arraysItem ) {
            const scoreText = arraysItem.find( '.topic-score' ).text();
            expect( scoreText ).toContain( '2/4' );
            expect( scoreText ).toContain( '(50%)' );
        }
    } );

    it( 'applies correct grading classes based on scores', () => {
        const items = {
            PerfectTopic: { correct: 5, total: 5 }, // 100% => topic-perfect
            GoodTopic: { correct: 4, total: 5 },    // 80% => topic-good
            FairTopic: { correct: 3, total: 5 },    // 60% => topic-fair
            PoorTopic: { correct: 2, total: 5 },    // 40% => topic-poor
            FailTopic: { correct: 1, total: 5 },    // 20% => topic-fail
            NeutralTopic: { correct: 0, total: 0 }  // 0 total => topic-neutral
        };

        const wrapper = mount( TopicPerformanceBreakdown as any, {
            props: { items }
        } );

        const findItem = ( name: string ) => wrapper.findAll( '.topic-item' ).find( w => w.text().includes( name ) );

        const perfect = findItem( 'PerfectTopic' );
        expect( perfect ).toBeTruthy();
        expect( perfect?.classes() ).toContain( 'topic-perfect' );

        const good = findItem( 'GoodTopic' );
        expect( good ).toBeTruthy();
        expect( good?.classes() ).toContain( 'topic-good' );

        const fair = findItem( 'FairTopic' );
        expect( fair ).toBeTruthy();
        expect( fair?.classes() ).toContain( 'topic-fair' );

        const poor = findItem( 'PoorTopic' );
        expect( poor ).toBeTruthy();
        expect( poor?.classes() ).toContain( 'topic-poor' );

        const fail = findItem( 'FailTopic' );
        expect( fail ).toBeTruthy();
        expect( fail?.classes() ).toContain( 'topic-fail' );

        const neutral = findItem( 'NeutralTopic' );
        expect( neutral ).toBeTruthy();
        expect( neutral?.classes() ).toContain( 'topic-neutral' );
    } );

    it( 'renders spans when no assessment prop is provided', () => {
        const items = {
            Loops: { correct: 3, total: 5 }
        };

        const wrapper = mount( TopicPerformanceBreakdown as any, {
            props: { items }
        } );

        // No anchors expected
        expect( wrapper.findAll( 'a.topic-name' ).length ).toBe( 0 );
        // Span should contain the topic name
        const spans = wrapper.findAll( 'span.topic-name' ).map( w => w.text() );
        expect( spans ).toContain( 'Loops' );
    } );
} );
