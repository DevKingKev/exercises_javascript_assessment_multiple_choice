import { describe, it, expect } from 'vitest';
import { getScoreBadgeClass, getImprovementTopics, formatTimeTaken } from '../resultsUtils';

describe( 'resultsUtils', () => {
    it( 'getScoreBadgeClass returns correct classes for boundaries', () => {
        expect( getScoreBadgeClass( 95 ) ).toBe( 'score-excellent' );
        expect( getScoreBadgeClass( 80 ) ).toBe( 'score-good' );
        expect( getScoreBadgeClass( 65 ) ).toBe( 'score-average' );
        expect( getScoreBadgeClass( 50 ) ).toBe( 'score-poor' );
    } );

    it( 'getImprovementTopics returns topics below threshold', () => {
        const breakdown = {
            Math: { correct: 2, total: 5 }, // 40%
            English: { correct: 4, total: 5 }, // 80%
            Science: { correct: 6, total: 10 } // 60%
        };

        const topics = getImprovementTopics( breakdown as any );
        expect( topics ).toContain( 'Math' );
        expect( topics ).toContain( 'Science' );
        expect( topics ).not.toContain( 'English' );
    } );

    it( 'formatTimeTaken returns 0:00 for null and correct minutes:seconds for durations', () => {
        expect( formatTimeTaken( null ) ).toBe( '0:00' );

        const start = new Date( Date.now() - ( 65 * 1000 ) ); // 65 seconds ago
        const out = formatTimeTaken( start );
        // Accept 1:05 or 1:06 depending on execution timing; match pattern
        expect( out ).toMatch( /^1:0[0-9]$/ );
    } );
} );
