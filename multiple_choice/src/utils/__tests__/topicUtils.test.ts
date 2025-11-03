import { describe, it, expect } from 'vitest';
import { getTopicClass, findTopicMdnLink } from '../topicUtils';

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

describe( 'findTopicMdnLink', () => {
    it( 'prefers resultTopicLinks when present', () => {
        const resultMap = { 'Arrays': 'https://developer.mozilla.org/arrays' };
        const metas = [
            { topicLinks: [{ topicName: 'Arrays', mdnLink: 'https://mdn.arrays/old' }] }
        ];
        expect( findTopicMdnLink( 'Arrays', resultMap, metas ) ).toBe( 'https://developer.mozilla.org/arrays' );
    } );

    it( 'finds in metadata array shape', () => {
        const metas = [
            { topicLinks: [{ topicName: 'Promises', mdnLink: 'https://developer.mozilla.org/promises' }] }
        ];
        expect( findTopicMdnLink( 'Promises', undefined, metas ) ).toBe( 'https://developer.mozilla.org/promises' );
    } );

    it( 'finds in metadata map shape', () => {
        const metas = [
            { topicLinks: { 'Closure': 'https://developer.mozilla.org/closure' } }
        ];
        expect( findTopicMdnLink( 'Closure', undefined, metas ) ).toBe( 'https://developer.mozilla.org/closure' );
    } );

    it( 'searches metas in order and returns first match', () => {
        const metas = [
            { topicLinks: [{ topicName: 'X', mdnLink: 'first' }] },
            { topicLinks: [{ topicName: 'X', mdnLink: 'second' }] }
        ];
        expect( findTopicMdnLink( 'X', undefined, metas ) ).toBe( 'first' );
    } );

    it( 'returns undefined when nothing found', () => {
        expect( findTopicMdnLink( 'NonExistent', undefined, [{ topicLinks: [{ topicName: 'Y', mdnLink: 'a' }] }] ) ).toBeUndefined();
        expect( findTopicMdnLink( '', undefined, null ) ).toBeUndefined();
        expect( findTopicMdnLink( 'A', undefined, [] ) ).toBeUndefined();
    } );
} );
