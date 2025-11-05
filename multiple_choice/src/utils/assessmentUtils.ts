// Small helper utilities for formatting assessment display names
export function extractAssessmentNumber ( id: string | undefined | null ): number | null {
    if ( !id || typeof id !== 'string' ) return null;
    // Find the last continuous group of digits in the id
    const matches = id.match( /(\d+)/g );
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
