// Utilities for topic tag grading and link resolution.
// Kept intentionally small and pure so components can pass in the
// minimal pieces of state they already have (persisted topicLinks,
// metadata objects) and this module can remain easy to unit-test.

export function getTopicClass ( correct: number, total: number ): string {
    if ( total === 0 ) return 'topic-neutral';
    const percentage = ( correct / total ) * 100;
    if ( percentage === 100 ) return 'topic-perfect';
    if ( percentage >= 80 ) return 'topic-good';
    if ( percentage >= 60 ) return 'topic-fair';
    if ( percentage >= 40 ) return 'topic-poor';
    return 'topic-fail';
}

/**
 * Resolve a reference link for a topic.
 *
 * Priority order:
 * 1. resultTopicLinks (explicitly persisted with a saved ResultRecord)
 * 2. any metadata objects provided in `metas` (search order)
 *
 * Each metadata object may contain `topicLinks: Array<{ topicName, refLink }>` or
 * `topicLinks` keyed map; both are supported for compatibility.
 */
export function findTopicRefLink ( topicName: string, resultTopicLinks?: Record<string, string> | null, metas?: any[] | null ): string | undefined {
    if ( !topicName ) return undefined;

    if ( resultTopicLinks && resultTopicLinks[topicName] ) return resultTopicLinks[topicName];

    if ( !metas || metas.length === 0 ) return undefined;

    for ( const meta of metas ) {
        if ( !meta ) continue;

        // Support both array and map shapes
        const tlinksArr: any[] = Array.isArray( meta.topicLinks ) ? meta.topicLinks : [];
        if ( tlinksArr.length > 0 ) {
            const found = tlinksArr.find( ( t: any ) => t && t.topicName === topicName && t.refLink );
            if ( found && found.refLink ) return found.refLink;
        }

        // Also support object map: { topicName: refLink }
        if ( typeof meta.topicLinks === 'object' && !Array.isArray( meta.topicLinks ) ) {
            const map = meta.topicLinks as Record<string, string>;
            if ( map && map[topicName] ) return map[topicName];
        }
    }

    return undefined;
}

export default {
    getTopicClass,
    findTopicRefLink
};

/**
 * Resolve a topic reference link using a few possible sources. This consolidates
 * the lookup logic used by components so they can pass the small pieces of
 * state they already have (persisted topicLinks, assessment metadata, etc.).
 *
 * Options:
 *  - resultTopicLinks: explicit persisted map stored with a ResultRecord
 *  - difficulty & assessmentId: identify which assessment to look up in
 *    availableAssessments when `getAssessmentMetadata` or `currentAssessment`
 *    are not sufficient
 *  - availableAssessments: optional map of difficulty -> assessments array
 *  - currentAssessment: optional currently-loaded assessment object
 *  - getAssessmentMetadata: optional helper that looks up metadata by
 *    difficulty/assessmentId
 */
export function resolveTopicRefLink (
    topicName: string,
    opts?: {
        resultTopicLinks?: Record<string, string> | null;
        difficulty?: string | null;
        assessmentId?: string | null;
        availableAssessments?: Record<string, any[]> | null;
        currentAssessment?: any | null;
        // Accept a permissive function signature so callers with stricter
        // concrete signatures (like the assessment store) can be passed
        // without needing to cast to `any`.
        getAssessmentMetadata?: ( ( ...args: any[] ) => any ) | null;
        currentDifficulty?: string | null;
    }
): string | undefined {
    if ( !topicName ) return undefined;

    const resultTopicLinks = opts?.resultTopicLinks;
    if ( resultTopicLinks && resultTopicLinks[topicName] ) return resultTopicLinks[topicName];

    // Try to resolve metadata using provided helper first
    let meta: any = null;
    try {
        if ( opts?.getAssessmentMetadata ) {
            meta = opts.getAssessmentMetadata( opts.difficulty || opts.currentDifficulty || undefined, opts.assessmentId || undefined );
        }
    } catch ( e ) {
        // ignore
    }

    // Fallback: check currentAssessment metadata
    if ( !meta && opts?.currentAssessment ) {
        const cm = opts.currentAssessment.metadata || opts.currentAssessment;
        if ( cm && ( String( cm.id ) === String( opts.assessmentId ) || String( cm.assessmentId ) === String( opts.assessmentId ) ) ) {
            meta = cm;
        }
    }

    // If still not found, search availableAssessments for a matching id
    if ( !meta && opts?.availableAssessments ) {
        try {
            const list = opts.availableAssessments[opts.difficulty || opts.currentDifficulty || 'easy'] || [];
            const found = list.find( ( a: any ) => String( a.id ) === String( opts.assessmentId ) || String( a.assessmentId ) === String( opts.assessmentId ) );
            if ( found ) meta = found.metadata || found;
        } catch ( e ) {
            // ignore
        }
    }

    const metas: any[] = [];
    if ( meta ) metas.push( meta );

    // Also add the found assessment from availableAssessments if different
    if ( opts?.availableAssessments ) {
        try {
            const list = opts.availableAssessments[opts.difficulty || opts.currentDifficulty || 'easy'] || [];
            const found = list.find( ( a: any ) => String( a.id ) === String( opts.assessmentId ) || String( a.assessmentId ) === String( opts.assessmentId ) );
            if ( found ) metas.push( found.metadata || found );
        } catch ( e ) {
            // ignore
        }
    }

    return findTopicRefLink( topicName, resultTopicLinks, metas.length > 0 ? metas : undefined );
}
