import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

type Theme = 'light' | 'dark' | 'auto';

export const useThemeStore = defineStore( 'theme', () => {
    // Load saved theme preference or default to 'auto'
    const theme = ref<Theme>( ( localStorage.getItem( 'theme' ) as Theme ) || 'auto' );
    const effectiveTheme = ref<'light' | 'dark'>( 'light' );

    // Function to get system preference
    function getSystemTheme (): 'light' | 'dark' {
        return window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light';
    }

    // Function to apply theme
    function applyTheme () {
        let themeToApply: 'light' | 'dark';

        if ( theme.value === 'auto' ) {
            themeToApply = getSystemTheme();
        } else {
            themeToApply = theme.value;
        }

        effectiveTheme.value = themeToApply;
        document.documentElement.setAttribute( 'data-theme', themeToApply );
    }

    // Function to set theme
    function setTheme ( newTheme: Theme ) {
        theme.value = newTheme;
        localStorage.setItem( 'theme', newTheme );
        applyTheme();
    }

    // Watch for theme changes
    watch( theme, applyTheme, { immediate: true } );

    // Listen for system theme changes when in auto mode
    const mediaQuery = window.matchMedia( '(prefers-color-scheme: dark)' );
    mediaQuery.addEventListener( 'change', () => {
        if ( theme.value === 'auto' ) {
            applyTheme();
        }
    } );

    return {
        theme,
        effectiveTheme,
        setTheme,
        applyTheme
    };
} );
