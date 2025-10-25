import type { DateFormatOptions, TimeFormatOptions, ExtendedNavigator } from '../models';

export function formatDate ( dateString: string ): string {
    const date = new Date( dateString );

    // Try to get the user's locale, fallback to 'en-GB' for DD/MM/YYYY format
    const extendedNavigator = navigator as ExtendedNavigator;
    let locale = navigator.language || extendedNavigator.userLanguage || 'en-GB';

    // If locale is just "en", use "en-GB" for DD/MM/YYYY format
    if ( locale === 'en' ) {
        locale = 'en-GB';
    }

    try {
        // Format date part only
        const dateOptions: DateFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };

        // Format time part only
        const timeOptions: TimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };

        const datePart = date.toLocaleDateString( locale, dateOptions );
        const timePart = date.toLocaleTimeString( locale, timeOptions );

        return `${datePart}, ${timePart}`;
    } catch ( error ) {
        // Fallback to DD/MM/YYYY, HH:MM AM/PM format
        const day = date.getDate().toString().padStart( 2, '0' );
        const month = ( date.getMonth() + 1 ).toString().padStart( 2, '0' );
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart( 2, '0' );
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;

        return `${day}/${month}/${year}, ${displayHours}:${minutes} ${ampm}`;
    }
}
