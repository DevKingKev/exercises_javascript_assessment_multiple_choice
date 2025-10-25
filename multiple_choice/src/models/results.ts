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

export type ScoreBadgeClass = 'score-excellent' | 'score-good' | 'score-average' | 'score-poor';
