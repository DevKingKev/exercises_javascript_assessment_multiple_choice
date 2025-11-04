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
