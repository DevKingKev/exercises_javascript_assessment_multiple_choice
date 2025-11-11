import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';

/**
 * Tests for initLanguage resolution order in globalStore
 * Resolution order expected:
 * 1. VITE_ASSESSMENT_DOMAIN (process.env -> import.meta.env during module load)
 * 2. localStorage override (app:language)
 * 3. hostname subdomain (eg. php.domain.com -> php)
 * 4. fallback 'javascript'
 */

describe( 'globalStore initLanguage resolution', () => {
    beforeEach( () => {
        // Ensure a fresh pinia and clean environment for each test
        setActivePinia( createPinia() );
        vi.resetModules();
        // clear localStorage between tests
        try { localStorage.clear(); } catch ( e ) { /* ignore in non-jsdom envs */ }
        // clear any lingering VITE env var
        delete process.env.VITE_ASSESSMENT_DOMAIN;
    } );

    it( 'env var overrides localStorage when present', async () => {
        localStorage.setItem( 'app:language', 'ruby' );

        // ensure env and hostname would be different if used
        process.env.VITE_ASSESSMENT_DOMAIN = 'python';
        // set hostname (avoid jsdom navigation implementation by replacing location)
        Object.defineProperty( window, 'location', { value: { hostname: 'javascript.example.com' }, configurable: true } );

        const mod = await import( '../globalStore' );
        const store = mod.useGlobalStore();
        await store.initLanguage();

        expect( store.language ).toBeDefined();
        expect( store.languageNormalized ).toBe( 'python' );
    } );

    it( 'uses VITE_ASSESSMENT_DOMAIN when no local override', async () => {
        // no localStorage
        delete process.env.VITE_ASSESSMENT_DOMAIN;
        process.env.VITE_ASSESSMENT_DOMAIN = 'python';

        // hostname should not provide a subdomain so env can be chosen
        Object.defineProperty( window, 'location', { value: { hostname: 'localhost' }, configurable: true } );

        const mod = await import( '../globalStore' );
        const store = mod.useGlobalStore();
        await store.initLanguage();

        expect( store.languageNormalized ).toBe( 'python' );
    } );

    it( 'uses hostname subdomain when no local override or env', async () => {
        // clear both
        delete process.env.VITE_ASSESSMENT_DOMAIN;
        try { localStorage.removeItem( 'app:language' ); } catch ( e ) { /* ignore */ }

        // hostname with subdomain (replace location to avoid jsdom navigation)
        Object.defineProperty( window, 'location', { value: { hostname: 'php.domain.com' }, configurable: true } );

        const mod = await import( '../globalStore' );
        const store = mod.useGlobalStore();
        await store.initLanguage();

        expect( store.languageNormalized ).toBe( 'php' );
    } );

    it( 'falls back to javascript when nothing else applies', async () => {
        delete process.env.VITE_ASSESSMENT_DOMAIN;
        try { localStorage.removeItem( 'app:language' ); } catch ( e ) { /* ignore */ }

        // local dev host should not be treated as subdomain
        Object.defineProperty( window, 'location', { value: { hostname: 'localhost' }, configurable: true } );

        const mod = await import( '../globalStore' );
        const store = mod.useGlobalStore();
        await store.initLanguage();

        expect( store.languageNormalized ).toBe( 'javascript' );
    } );
} );
