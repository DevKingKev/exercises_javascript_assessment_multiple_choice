import { describe, it, expect } from 'vitest';
import { getTopicClass, findTopicRefLink } from '../topicUtils';
import { resolveTopicRefLink } from '../topicUtils';

describe( 'getTopicClass', () => {
    it( 'returns neutral when total is 0', () => {
        expect( getTopicClass( 0, 0 ) ).toBe( 'topic-neutral' );
    } );

    it( 'returns perfect for 100%', () => {
        expect( getTopicClass( 5, 5 ) ).toBe( 'topic-perfect' );
    } );

    it( 'returns good for >=80', () => {
        expect( getTopicClass( 8, 10 ) ).toBe( 'topic-good' );
        expect( getTopicClass( 4, 5 ) ).toBe( 'topic-good' );
    } );

    it( 'returns fair for >=60', () => {
        expect( getTopicClass( 3, 5 ) ).toBe( 'topic-fair' );
    } );

    it( 'returns poor for >=40', () => {
        expect( getTopicClass( 2, 5 ) ).toBe( 'topic-poor' );
    } );

    it( 'returns fail for <40', () => {
        expect( getTopicClass( 1, 5 ) ).toBe( 'topic-fail' );
    } );
} );

describe( 'resolveTopicRefLink', () => {
    it( 'prefers resultTopicLinks first', () => {
        const resultMap = { 'Arrays': 'https://developer.mozilla.org/arrays' };
        const metas = [{ topicLinks: [{ topicName: 'Arrays', refLink: 'https://mdn.arrays/old' }] }];
        expect( resolveTopicRefLink( 'Arrays', { resultTopicLinks: resultMap, availableAssessments: undefined } ) ).toBe( 'https://developer.mozilla.org/arrays' );
    } );

    it( 'uses getAssessmentMetadata when provided', () => {
        const meta = { topicLinks: { 'Promises': 'https://developer.mozilla.org/promises' } };
        const res = resolveTopicRefLink( 'Promises', { getAssessmentMetadata: () => meta, difficulty: 'easy', assessmentId: 'test-1' } );
        expect( res ).toBe( 'https://developer.mozilla.org/promises' );
    } );

    it( 'uses currentAssessment metadata when getAssessmentMetadata not present', () => {
        const currentAssessment = { metadata: { topicLinks: { 'Closure': 'https://developer.mozilla.org/closure' }, id: 'test-1' } };
        const res = resolveTopicRefLink( 'Closure', { currentAssessment, assessmentId: 'test-1' } );
        expect( res ).toBe( 'https://developer.mozilla.org/closure' );
    } );

    it( 'searches availableAssessments when needed', () => {
        const available = {
            easy: [{ id: 'test-1', metadata: { topicLinks: { 'TopicA': 'https://a' } } }]
        };

        const res = resolveTopicRefLink( 'TopicA', { availableAssessments: available, difficulty: 'easy', assessmentId: 'test-1' } );
        expect( res ).toBe( 'https://a' );
    } );

    it( 'returns undefined when nothing found', () => {
        const res = resolveTopicRefLink( 'Nope', {} );
        expect( res ).toBeUndefined();
    } );
} );

describe( 'findTopicRefLink', () => {
    it( 'prefers resultTopicLinks when present', () => {
        const resultMap = { 'Arrays': 'https://developer.mozilla.org/arrays' };
        const metas = [
            { topicLinks: [{ topicName: 'Arrays', refLink: 'https://mdn.arrays/old' }] }
        ];
        expect( findTopicRefLink( 'Arrays', resultMap, metas ) ).toBe( 'https://developer.mozilla.org/arrays' );
    } );

    it( 'finds in metadata array shape', () => {
        const metas = [
            { topicLinks: [{ topicName: 'Promises', refLink: 'https://developer.mozilla.org/promises' }] }
        ];
        expect( findTopicRefLink( 'Promises', undefined, metas ) ).toBe( 'https://developer.mozilla.org/promises' );
    } );

    it( 'finds in metadata map shape', () => {
        const metas = [
            { topicLinks: { 'Closure': 'https://developer.mozilla.org/closure' } }
        ];
        expect( findTopicRefLink( 'Closure', undefined, metas ) ).toBe( 'https://developer.mozilla.org/closure' );
    } );

    it( 'searches metas in order and returns first match', () => {
        const metas = [
            { topicLinks: [{ topicName: 'X', refLink: 'first' }] },
            { topicLinks: [{ topicName: 'X', refLink: 'second' }] }
        ];
        expect( findTopicRefLink( 'X', undefined, metas ) ).toBe( 'first' );
    } );

    it( 'returns undefined when nothing found', () => {
        expect( findTopicRefLink( 'NonExistent', undefined, [{ topicLinks: [{ topicName: 'Y', refLink: 'a' }] }] ) ).toBeUndefined();
        expect( findTopicRefLink( '', undefined, null ) ).toBeUndefined();
        expect( findTopicRefLink( 'A', undefined, [] ) ).toBeUndefined();
    } );
} );
