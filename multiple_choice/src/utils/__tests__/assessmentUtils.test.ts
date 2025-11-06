import { describe, it, expect } from 'vitest';
import { normalizeAssessmentId } from '@/utils/assessmentUtils';

describe( 'assessmentUtils.normalizeAssessmentId', () => {
    it( 'normalizes plain digits to assessmentN', () => {
        expect( normalizeAssessmentId( '1' ) ).toBe( 'assessment1' );
        expect( normalizeAssessmentId( '42' ) ).toBe( 'assessment42' );
    } );

    it( 'normalizes assessment- and assessment_ prefixed ids', () => {
        expect( normalizeAssessmentId( 'assessment-2' ) ).toBe( 'assessment2' );
        expect( normalizeAssessmentId( 'assessment_3' ) ).toBe( 'assessment3' );
        expect( normalizeAssessmentId( 'Assessment4' ) ).toBe( 'assessment4' );
    } );

    it( 'normalizes assignment- and assignment_ prefixed ids to assessmentN', () => {
        expect( normalizeAssessmentId( 'assignment-5' ) ).toBe( 'assessment5' );
        expect( normalizeAssessmentId( 'assignment_6' ) ).toBe( 'assessment6' );
    } );

    it( 'returns unknown for empty or null values', () => {
        expect( normalizeAssessmentId( '' ) ).toBe( 'unknown' );
        expect( normalizeAssessmentId( null as any ) ).toBe( 'unknown' );
        expect( normalizeAssessmentId( undefined as any ) ).toBe( 'unknown' );
    } );

    it( 'returns original string for non-matching values', () => {
        expect( normalizeAssessmentId( 'custom-slug' ) ).toBe( 'custom-slug' );
    } );
} );

