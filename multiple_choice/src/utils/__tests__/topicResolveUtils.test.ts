import { describe, it, expect } from 'vitest';
import resolveTopics from '../topicResolveUtils';

describe( 'topicResolveUtils', () => {
    it( 'returns empty array when topicNames is undefined/null/empty', () => {
        expect( resolveTopics( undefined, [] ) ).toEqual( [] );
        expect( resolveTopics( null, [] ) ).toEqual( [] );
        expect( resolveTopics( [], [{ topicName: 'a' }] ) ).toEqual( [] );
    } );

    it( 'returns topicName entries with undefined refLink when no topicLinks provided', () => {
        const names = ['A', 'B'];
        const out = resolveTopics( names, undefined );
        expect( out ).toHaveLength( 2 );
        expect( out[0] ).toEqual( { topicName: 'A' } );
        expect( out[1] ).toEqual( { topicName: 'B' } );
    } );

    it( 'maps topicNames to refLink when provided in topicLinks', () => {
        const names = ['arrays', 'objects', 'strings'];
        const links = [
            { topicName: 'arrays', refLink: '/topics/arrays' },
            { topicName: 'strings', refLink: '/topics/strings' }
        ];
        const out = resolveTopics( names, links as any );
        expect( out ).toEqual( [
            { topicName: 'arrays', refLink: '/topics/arrays' },
            { topicName: 'objects', refLink: undefined },
            { topicName: 'strings', refLink: '/topics/strings' }
        ] );
    } );

    it( 'handles topicLinks entries missing refLink (undefined) gracefully', () => {
        const names = ['x', 'y'];
        const links = [{ topicName: 'x' }];
        const out = resolveTopics( names, links as any );
        expect( out ).toEqual( [
            { topicName: 'x', refLink: undefined },
            { topicName: 'y', refLink: undefined }
        ] );
    } );
} );
