export interface DateFormatOptions {
    year: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day: 'numeric' | '2-digit';
}

export interface TimeFormatOptions {
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    hour12: boolean;
}

// Extended Navigator for legacy userLanguage property
export interface ExtendedNavigator extends Navigator {
    userLanguage?: string;
}
