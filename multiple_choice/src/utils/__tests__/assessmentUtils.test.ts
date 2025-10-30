import { describe, it, expect } from 'vitest';
import { extractAssessmentNumber, formatAssessmentLabel } from '../assessmentUtils';

describe( 'assessmentUtils', () => {
    it( 'extractAssessmentNumber returns the last numeric group or null', () => {
        expect( extractAssessmentNumber( 'assessment1' ) ).toBe( 1 );
        expect( extractAssessmentNumber( 'assessment-10' ) ).toBe( 10 );
        // Multiple numeric groups -> returns last
        expect( extractAssessmentNumber( 'prefix12suffix34' ) ).toBe( 34 );
        expect( extractAssessmentNumber( 'noDigits' ) ).toBeNull();
        expect( extractAssessmentNumber( undefined as any ) ).toBeNull();
        expect( extractAssessmentNumber( null as any ) ).toBeNull();
    } );

    it( 'formatAssessmentLabel prefers number + title, then title, then id, then generic', () => {
        expect( formatAssessmentLabel( 'assessment1', 'JavaScript Fundamentals' ) ).toBe(
            'Assessment 1 - JavaScript Fundamentals'
        );

        // When title is provided without numeric id, title should be used
        expect( formatAssessmentLabel( 'someId', 'Custom Title' ) ).toBe( 'Custom Title' );

        // When title is null/undefined, fallback is Assessment {id}
        expect( formatAssessmentLabel( 'test12', null ) ).toBe( 'Assessment test12' );
        expect( formatAssessmentLabel( undefined, 'Only Title' ) ).toBe( 'Only Title' );

        // Nothing provided -> generic
        expect( formatAssessmentLabel( null, null ) ).toBe( 'Assessment' );
    } );
} );
