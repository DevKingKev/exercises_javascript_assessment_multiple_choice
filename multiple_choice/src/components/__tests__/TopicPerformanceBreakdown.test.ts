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
