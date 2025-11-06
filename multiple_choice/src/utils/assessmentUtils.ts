// Small helper utilities for formatting assessment display names
export function extractAssessmentNumber ( id: string | number | undefined | null ): number | null {
    if ( id === undefined || id === null ) return null;
    // If a number was provided directly, return it if finite
    if ( typeof id === 'number' ) return Number.isFinite( id ) ? Math.trunc( id ) : null;
    const str = String( id );
    if ( !str ) return null;
    // Find the last continuous group of digits in the id
    const matches = str.match( /(\d+)/g );
    if ( !matches || matches.length === 0 ) return null;
    const last = matches[matches.length - 1];
    const n = parseInt( last, 10 );
    return Number.isFinite( n ) ? n : null;
}

export function formatAssessmentLabel ( id: string | undefined | null, title?: string | null ): string {
    const num = extractAssessmentNumber( id );
    if ( num != null && title ) {
        return `Assessment ${num} - ${title}`;
    }
    if ( title ) return title;
    if ( id ) return `Assessment ${id}`;
    return 'Assessment';
}

import type { Assessment } from '@/models/assessment';
import type { TopicLink } from '@/models/question';

/**
 * Find a reference link for a topic from an Assessment's metadata.topicLinks.
 * Returns undefined if not found.
 */
export function findTopicRefLinkFromAssessment ( assessment: Assessment | null | undefined, topicName: string ): string | undefined {
    if ( !assessment || !assessment.metadata ) return undefined;
    const tlinks: TopicLink[] = ( assessment.metadata as any ).topicLinks || [];
    if ( !Array.isArray( tlinks ) ) return undefined;
    const found = tlinks.find( t => t && String( t.topicName ) === String( topicName ) );
    return found ? found.refLink : undefined;
}

/**
 * Normalize various assessment id formats into the canonical storage bucket key.
 * Examples:
 *  - '1' -> 'assessment1'
 *  - 'assessment-2' -> 'assessment2'
 *  - 'assignment_3' -> 'assessment3'
 *  - '' -> 'unknown'
 */
export function normalizeAssessmentId ( s: string | null | undefined ): string {
    if ( s === null || s === undefined ) return 'unknown';
    const str = String( s ).trim();
    if ( !str ) return 'unknown';

    const onlyDigits = /^([0-9]+)$/.exec( str );
    if ( onlyDigits ) return `assessment${onlyDigits[1]}`;

    const assessMatch = /^assessment[-_]?([0-9]+)$/i.exec( str );
    if ( assessMatch ) return `assessment${assessMatch[1]}`;

    const assignMatch = /^assignment[-_]?([0-9]+)$/i.exec( str );
    if ( assignMatch ) return `assessment${assignMatch[1]}`;

    return str;
}
