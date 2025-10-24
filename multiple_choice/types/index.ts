// Type definitions for the Multiple Choice Assessment Platform

export interface QuestionOption {
    [key: string]: string;
}

export interface Question {
    question: string;
    options: QuestionOption;
    correct: string;
    explanation?: string;
}

export interface TestMetadata {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];
}

export interface Test {
    metadata: TestMetadata;
    questions: Question[];
}

export interface AvailableTests {
    [difficulty: string]: TestMetadata[];
}

export interface TopicScore {
    correct: number;
    total: number;
}

export interface TopicBreakdown {
    [topic: string]: TopicScore;
}

export interface QuestionReview {
    question: string;
    userAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
    options: QuestionOption;
}

export interface TestResults {
    correct: number;
    total: number;
    percentage: number;
    topicBreakdown: TopicBreakdown;
    questionReview: QuestionReview[];
}

export interface ResultRecord {
    testId: string;
    difficulty: string;
    testTitle: string;
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
        [testId: string]: ResultRecord[];
    };
}

export interface DateFormatOptions {
    year: 'numeric';
    month: '2-digit';
    day: '2-digit';
}

export interface TimeFormatOptions {
    hour: '2-digit';
    minute: '2-digit';
    hour12: boolean;
}

export type ScreenId = 'test-selection' | 'assessment' | 'results';

export type ScoreBadgeClass = 'score-excellent' | 'score-good' | 'score-average' | 'score-poor';