// Resolve topic name strings to topic objects using assessment metadata.topicLinks.
export interface TopicLink {
    topicName: string;
    mdnLink?: string;
}

export function resolveTopics ( topicNames: string[] | undefined | null, topicLinks: TopicLink[] | undefined | null ): TopicLink[] {
    if ( !topicNames || topicNames.length === 0 ) return [];
    if ( !topicLinks || topicLinks.length === 0 ) {
        // No links provided - return names with undefined mdnLink
        return topicNames.map( name => ( { topicName: name } ) );
    }

    // Create quick lookup
    const map = new Map<string, string | undefined>();
    for ( const t of topicLinks ) {
        if ( t && typeof t.topicName === 'string' ) map.set( t.topicName, t.mdnLink );
    }

    return topicNames.map( name => ( { topicName: name, mdnLink: map.get( name ) } ) );
}

export default resolveTopics;
