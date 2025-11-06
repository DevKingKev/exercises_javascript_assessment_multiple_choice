import { describe, it, expect } from 'vitest';
import {
    getScoreBadgeClass, getImprovementTopics, formatTimeTaken,
    countResultsForDifficulty,
    averageAcrossAllAttemptsForDifficulty,
    countResultsInHistoryByDifficulty,
    averageAcrossAllAttemptsInHistoryByDifficulty
} from '../resultsUtils';

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

describe( 'resultsUtils aggregates', () => {
    it( 'counts results correctly for a difficulty map', () => {
        const map = {
            a: [{ percentage: 80 }, { percentage: 90 }],
            b: [{ percentage: 70 }]
        } as any;

        expect( countResultsForDifficulty( map ) ).toBe( 3 );
    } );

    it( 'returns 0 for empty or missing maps', () => {
        expect( countResultsForDifficulty( {} ) ).toBe( 0 );
        expect( countResultsForDifficulty( null as any ) ).toBe( 0 );
    } );

    it( 'averages all attempts across assessments', () => {
        const map = {
            a: [{ percentage: 80 }, { percentage: 90 }],
            b: [{ percentage: 60 }]
        } as any;

        // (80 + 90 + 60) / 3 = 76.666... -> rounded to 77
        expect( averageAcrossAllAttemptsForDifficulty( map ) ).toBe( 77 );
    } );

    it( 'average returns 0 when no attempts', () => {
        expect( averageAcrossAllAttemptsForDifficulty( {} ) ).toBe( 0 );
        expect( averageAcrossAllAttemptsForDifficulty( null as any ) ).toBe( 0 );
    } );

    it( 'history convenience wrappers operate on ResultsHistory', () => {
        const history = {
            easy: {
                test1: [{ percentage: 50 }, { percentage: 100 }],
                test2: [{ percentage: 75 }]
            }
        } as any;

        expect( countResultsInHistoryByDifficulty( history, 'easy' ) ).toBe( 3 );
        // (50+100+75)/3 = 75
        expect( averageAcrossAllAttemptsInHistoryByDifficulty( history, 'easy' ) ).toBe( 75 );
    } );
} );
