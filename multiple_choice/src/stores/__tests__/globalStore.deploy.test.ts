import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import useGlobalStore from '../globalStore';

describe( 'globalStore - deployment YAML fallback', () => {
    beforeEach( () => {
        setActivePinia( createPinia() );

        // ensure localStorage override is cleared
        try {
            localStorage.removeItem( 'app:language' );
        } catch ( e ) {
            // ignore
        }

        // ensure hostname does not provide a subdomain
        Object.defineProperty( window, 'location', {
            value: { hostname: 'localhost' },
            configurable: true
        } );
    } );

    afterEach( () => {
        vi.resetAllMocks();
    } );

    it( 'uses defaultLanguage from deployment YAML when present', async () => {
        const yaml = 'defaultLanguage: php\n';

        // stub global fetch to return the YAML for any path
        // @ts-ignore
        vi.stubGlobal( 'fetch', async ( url: string ) => {
            return {
                ok: true,
                text: async () => yaml
            } as any;
        } );

        const store = useGlobalStore();
        await store.initLanguage();

        expect( store.languageNormalized ).toBe( 'php' );
    } );
} );
