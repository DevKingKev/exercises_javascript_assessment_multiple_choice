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
        // Expect format like DD/MM/YYYY, HH:MM am/pm (case-insensitive)
        expect( out ).toMatch( /\d{2}\/\d{2}\/\d{4}, \d{1,2}:\d{2} (am|pm|AM|PM)/ );
    } );

    it( 'maps language "en" to "en-GB" and still returns a formatted string', () => {
        ( global as any ).navigator = { language: 'en' };
        const out = formatDate( '2020-01-02T15:04:05Z' );
        expect( out ).toMatch( /\d{2}\/\d{2}\/\d{4}, \d{1,2}:\d{2} (am|pm|AM|PM)/ );
    } );

    it( 'falls back to extendedNavigator.userLanguage when language is missing', () => {
        ( global as any ).navigator = { language: undefined, userLanguage: 'en-US' };
        const out = formatDate( '2020-01-02T15:04:05Z' );
        expect( out ).toMatch( /\d{2}\/\d{2}\/\d{4}, \d{1,2}:\d{2} (am|pm|AM|PM)/ );
    } );

    it( 'uses fallback formatting when toLocaleDateString/toLocaleTimeString throw', () => {
        // Create a date that will produce hours = 0 to exercise displayHours = 12 path
        const iso = '2020-01-02T00:05:00Z';

        // Temporarily stub the Date prototype methods to throw and fix getters to deterministic values
        const origDateToLocaleDateString = Date.prototype.toLocaleDateString;
        const origDateToLocaleTimeString = Date.prototype.toLocaleTimeString;
        const origGetHours = Date.prototype.getHours;
        const origGetMinutes = Date.prototype.getMinutes;
        const origGetDate = Date.prototype.getDate;
        const origGetMonth = Date.prototype.getMonth;
        const origGetFullYear = Date.prototype.getFullYear;
        try {
            Date.prototype.toLocaleDateString = function () {
                throw new Error( 'forced' );
            } as any;
            Date.prototype.toLocaleTimeString = function () {
                throw new Error( 'forced' );
            } as any;

            // Make getters deterministic regardless of environment timezone
            Date.prototype.getHours = function () { return 0; } as any;
            Date.prototype.getMinutes = function () { return 5; } as any;
            Date.prototype.getDate = function () { return 2; } as any;
            Date.prototype.getMonth = function () { return 0; } as any;
            Date.prototype.getFullYear = function () { return 2020; } as any;

            const out = formatDate( iso );
            // Expect fallback: DD/MM/YYYY, H:MM AM/PM (hours 0 -> 12 AM)
            expect( out ).toBe( '02/01/2020, 12:05 AM' );
        } finally {
            // restore
            Date.prototype.toLocaleDateString = origDateToLocaleDateString;
            Date.prototype.toLocaleTimeString = origDateToLocaleTimeString;
            Date.prototype.getHours = origGetHours;
            Date.prototype.getMinutes = origGetMinutes;
            Date.prototype.getDate = origGetDate;
            Date.prototype.getMonth = origGetMonth;
            Date.prototype.getFullYear = origGetFullYear;
        }
    } );

    it( 'fallback formatting handles PM hours (13 -> 1:05 PM)', () => {
        const iso = '2020-01-02T13:05:00Z';

        const origDateToLocaleDateString = Date.prototype.toLocaleDateString;
        const origDateToLocaleTimeString = Date.prototype.toLocaleTimeString;
        const origGetHours = Date.prototype.getHours;
        const origGetMinutes = Date.prototype.getMinutes;
        const origGetDate = Date.prototype.getDate;
        const origGetMonth = Date.prototype.getMonth;
        const origGetFullYear = Date.prototype.getFullYear;
        try {
            Date.prototype.toLocaleDateString = function () {
                throw new Error( 'forced' );
            } as any;
            Date.prototype.toLocaleTimeString = function () {
                throw new Error( 'forced' );
            } as any;

            Date.prototype.getHours = function () { return 13; } as any;
            Date.prototype.getMinutes = function () { return 5; } as any;
            Date.prototype.getDate = function () { return 2; } as any;
            Date.prototype.getMonth = function () { return 0; } as any;
            Date.prototype.getFullYear = function () { return 2020; } as any;

            const out = formatDate( iso );
            expect( out ).toBe( '02/01/2020, 1:05 PM' );
        } finally {
            Date.prototype.toLocaleDateString = origDateToLocaleDateString;
            Date.prototype.toLocaleTimeString = origDateToLocaleTimeString;
            Date.prototype.getHours = origGetHours;
            Date.prototype.getMinutes = origGetMinutes;
            Date.prototype.getDate = origGetDate;
            Date.prototype.getMonth = origGetMonth;
            Date.prototype.getFullYear = origGetFullYear;
        }
    } );

    it( 'uses default en-GB when navigator has no language and no userLanguage', () => {
        ( global as any ).navigator = {};
        const out = formatDate( '2020-01-02T15:04:05Z' );
        expect( out ).toMatch( /\d{2}\/\d{2}\/\d{4}, \d{1,2}:\d{2} (am|pm|AM|PM)/ );
    } );

} );
