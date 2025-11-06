import type { Question, TopicLink } from './question';

export interface AssessmentMetadata {
    assessmentId: number;
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];

    // New fields added for assessment identification and type
    // Millisecond-precision integer timestamp representing when the assessment file was created/added
    assessmentUniqueId?: number;
    // Test type (e.g. 'multiple-choice'). Kept as string to allow future types.
    testType?: string;

    // Mapping of unique topic name -> refLink used to avoid duplicating refLink on each question
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
