import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export enum ASSESSMENT_DOMAINS {
    JAVASCRIPT = 'javascript',
    PYTHON = 'python',
    PHP = 'php',
    RUBY = 'ruby',
    JAVA = 'java',
    CSHARP = 'csharp',
    CPP = 'cpp',
    HTML = 'html',
    CSS = 'css',
    SQL = 'sql'
}

/**
 * Human-friendly display names for language/domain keys.
 * Use these in the UI when showing product/assessment titles.
 */
export const ASSESSMENT_DOMAIN_DISPLAY_NAMES: Record<string, string> = {
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    html: 'HTML',
    css: 'CSS',
    sql: 'SQL'
};

/**
 * Global store for app-wide settings such as the current assessment language.
 *
 * Language resolution order (best-effort):
 * 1. Vite env var `VITE_ASSESSMENT_DOMAIN` (useful for local testing)
 * 2. localStorage override (key: 'app:language')
 * 3. Hostname subdomain (eg. 'javascript.domain.com' -> 'javascript')
 * 4. deployment YAML (fetched from common paths)
 * 5. fallback: 'javascript'
 */
export const useGlobalStore = defineStore( 'global', () => {
    const language = ref<string>( 'javascript' );

    const normalized = ( l: string | null | undefined ) => {
        if ( !l ) return '';
        return String( l ).trim().toLowerCase();
    };

    const languageNormalized = computed( () => normalized( language.value ) );

    /**
     * Computed human-friendly display name for the currently selected language.
     * Falls back to a capitalized form of the normalized key or 'JavaScript'.
     */
    const displayLanguageName = computed( () => {
        const key = languageNormalized.value;
        if ( key && ASSESSMENT_DOMAIN_DISPLAY_NAMES[key] ) return ASSESSMENT_DOMAIN_DISPLAY_NAMES[key];
        if ( key ) return key.charAt( 0 ).toUpperCase() + key.slice( 1 );
        return 'JavaScript';
    } );

    function detectFromHostname (): string | null {
        try {
            const host = typeof window !== 'undefined' ? window.location.hostname : '';
            if ( !host ) return null;

            // treat common local dev hosts as non-subdomain
            if ( host === 'localhost' || host === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test( host ) ) {
                return null;
            }

            // hostname like 'javascript.domain.com' -> 'javascript'
            const parts = host.split( '.' );
            if ( parts.length >= 3 ) {
                // subdomain exists
                return normalized( parts[0] );
            }

            // If hostname is like 'javascript' (rare), return it
            if ( parts.length === 1 ) return normalized( parts[0] );

            return null;
        } catch ( e ) {
            return null;
        }
    }

    function getEnvDefault (): string | null {
        try {
            // Vite exposes env vars as import.meta.env.VITE_*
            // Use a fallback of undefined when not available
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const v = import.meta.env && import.meta.env.VITE_ASSESSMENT_DOMAIN;
            return normalized( v ) || null;
        } catch ( e ) {
            return null;
        }
    }

    function getLocalOverride (): string | null {
        try {
            if ( typeof window === 'undefined' ) return null;
            const v = localStorage.getItem( 'app:language' );
            return normalized( v ) || null;
        } catch ( e ) {
            return null;
        }
    }

    /**
     * Try to read a deployment YAML config for a default language.
     * We'll attempt a few common paths but don't hard-code a server layout.
     * This is a tiny, dependency-free parser that looks for `defaultLanguage: <value>`.
     */
    async function getDeployDefault (): Promise<string | null> {
        // Allow deployments to override the candidate paths via an env var
        // Vite env: VITE_DEPLOY_CONFIG_PATHS can be a comma-separated list of paths
        // e.g. "/deploy/app-config.yaml,/app-config.yaml"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const envPaths = import.meta.env && import.meta.env.VITE_DEPLOY_CONFIG_PATHS;

        const paths = envPaths
            ? String( envPaths )
                .split( ',' )
                .map( p => p.trim() )
                .filter( Boolean )
            : [
                '/deploy/app-config.yaml',
                '/app-config.yaml',
                '/deploy/app-config.yml',
                '/app-config.yml'
            ];

        for ( const p of paths ) {
            try {
                const r = await fetch( p );
                if ( !r.ok ) continue;
                const txt = await r.text();
                // simple yaml parsing for a single key: defaultLanguage: value
                // handles: defaultLanguage: php  OR defaultLanguage: "php"
                const m = txt.match( /^[ \t]*defaultLanguage:\s*(?:"|')?([a-zA-Z0-9_+-]+)(?:"|')?/m );
                if ( m && m[1] ) {
                    return normalized( m[1] );
                }
            } catch ( e ) {
                // ignore and try next
            }
        }

        return null;
    }

    /**
     * Initialize the language value using the preferred resolution order.
     * Resolution order:
     * 1. localStorage override
     * 2. hostname subdomain
     * 3. deployment YAML (fetched from common paths)
    * 4. Vite env var `VITE_ASSESSMENT_DOMAIN`
     * 5. fallback 'javascript'
     *
     * This function is async because it may need to fetch the deployment YAML.
     */
    async function initLanguage (): Promise<void> {
        // Prefer an explicit Vite-provided environment override for scripted
        // development and CI. This allows `VITE_ASSESSMENT_DOMAIN=html` to
        // reliably select the domain even if a developer previously set a
        // browser localStorage override during manual testing.
        const env = getEnvDefault();
        if ( env ) {
            language.value = env;
            return;
        }

        // local override
        const local = getLocalOverride();
        if ( local ) {
            language.value = local;
            return;
        }

        // try hostname (URL subdomain has priority after local overrides)
        const hostLang = detectFromHostname();
        if ( hostLang ) {
            language.value = hostLang;
            return;
        }

        // attempt to read a deployment config
        const deployLang = await getDeployDefault();
        if ( deployLang ) {
            language.value = deployLang;
            return;
        }

        // fallback
        language.value = 'javascript';
    }

    /**
     * Manually set language at runtime. If `persist` is true the choice is saved
     * to localStorage so it can be used during subsequent page loads (dev/test).
     */
    function setLanguage ( l: string, persist = false ) {
        const n = normalized( l ) || 'javascript';
        language.value = n;
        if ( persist && typeof window !== 'undefined' ) {
            try {
                localStorage.setItem( 'app:language', n );
            } catch ( e ) {
                // ignore
            }
        }
    }

    function clearLocalOverride () {
        try {
            if ( typeof window === 'undefined' ) return;
            localStorage.removeItem( 'app:language' );
        } catch ( e ) {
            // ignore
        }
    }

    return {
        language,
        languageNormalized,
        displayLanguageName,
        initLanguage,
        setLanguage,
        clearLocalOverride,
        detectFromHostname,
        getEnvDefault,
        getLocalOverride
    };
} );

export default useGlobalStore;
