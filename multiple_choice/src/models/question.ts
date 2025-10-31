export interface TopicLink {
    topicName: string;
    mdnLink?: string;
}

export interface Question {
    id: number;
    question: string;
    options: { [key: string]: string; };
    correct: string;
    explanation?: string;

    // Original compact topic reference used in assessments (array of topic names)
    topic?: {
        topics: string[];
    };

    // Populated on the client by resolving topic names against metadata.topicLinks
    resolvedTopics?: TopicLink[];
}
