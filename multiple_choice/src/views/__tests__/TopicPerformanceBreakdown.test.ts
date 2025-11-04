import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TopicPerformanceBreakdown from '@/components/TopicPerformanceBreakdown.vue';

describe( 'TopicPerformanceBreakdown', () => {
    it( 'renders topics and percentages', () => {
        const items = {
            Arrays: { correct: 1, total: 2 },
            Strings: { correct: 2, total: 2 }
        };

        const wrapper = mount( TopicPerformanceBreakdown, {
            props: { items }
        } );

        expect( wrapper.text() ).toContain( 'Arrays' );
        expect( wrapper.text() ).toContain( '1/2' );
        expect( wrapper.text() ).toContain( '50%' );
        expect( wrapper.text() ).toContain( 'Strings' );
        expect( wrapper.text() ).toContain( '2/2' );
        expect( wrapper.text() ).toContain( '100%' );
    } );
} );
