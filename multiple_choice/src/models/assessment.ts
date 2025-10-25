import type { Question } from './question';

export interface AssessmentMetadata {
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];
}

export interface Assessment {
    metadata: AssessmentMetadata;
    questions: Question[];
}

export interface AvailableAssessments {
    [difficulty: string]: ( AssessmentMetadata & { id: string; } )[];
}

export type ScreenId = 'assessment-selection' | 'assessment' | 'results';
