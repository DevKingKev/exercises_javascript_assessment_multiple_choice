import type { Question, TopicLink } from './question';

export interface AssessmentMetadata {
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];

    // Mapping of unique topic name -> mdnLink used to avoid duplicating mdnLink on each question
    topicLinks?: TopicLink[];
}

export interface Assessment {
    metadata: AssessmentMetadata;
    questions: Question[];
}

export interface AvailableAssessments {
    [difficulty: string]: ( AssessmentMetadata & { id: string; } )[];
}

export type ScreenId = 'assessment-selection' | 'assessment' | 'results';
