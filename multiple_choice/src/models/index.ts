// Shared TypeScript interfaces for the Multiple Choice Assessment app

export interface Question {
    id: number;
    question: string;
    options: { [key: string]: string; };
    correct: string;
    explanation?: string;
}

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

export interface TopicBreakdown {
    [topic: string]: { correct: number; total: number; };
}

export interface QuestionReview {
    question: string;
    userAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
    options: { [key: string]: string; };
}

export interface AssessmentResults {
    correct: number;
    total: number;
    percentage: number;
    topicBreakdown: TopicBreakdown;
    questionReview: QuestionReview[];
}

export interface ResultRecord {
    assessmentId: string;
    difficulty: string;
    assessmentTitle: string;
    date: string;
    correct: number;
    total: number;
    percentage: number;
    timeTaken: string;
    improvementTopics: string[];
    topicBreakdown: TopicBreakdown;
}

export interface ResultsHistory {
    [difficulty: string]: {
        [assessmentId: string]: ResultRecord[];
    };
}

export type ScreenId = 'assessment-selection' | 'assessment' | 'results';
export type ScoreBadgeClass = 'score-excellent' | 'score-good' | 'score-average' | 'score-poor';

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
