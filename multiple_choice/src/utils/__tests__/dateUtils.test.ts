import { describe, it, expect, beforeEach } from 'vitest';
import { formatDate } from '../dateUtils';

describe( 'dateUtils', () => {
    beforeEach( () => {
        // force a consistent navigator language for the tests
        ( global as any ).navigator = { language: 'en-GB' };
    } );

    it( 'formatDate returns a localized date/time string with comma separator', () => {
        const iso = '2020-01-02T15:04:05Z';
        const out = formatDate( iso );
        // Expect format like DD/MM/YYYY, HH:MM AM/PM
        expect( out ).toMatch( /\d{2}\/\d{2}\/\d{4}, \d{1,2}:\d{2} (AM|PM)/ );
    } );
} );
