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
    /**
     * Optional map of topicName -> mdnLink persisted at save-time.
     * This makes results self-contained so the Results view can render
     * topic links even if assessment metadata isn't loaded later.
     */
    topicLinks?: { [topicName: string]: string; };
}

export interface ResultsHistory {
    [difficulty: string]: {
        [assessmentId: string]: ResultRecord[];
    };
}

export type ScoreBadgeClass = 'score-excellent' | 'score-good' | 'score-average' | 'score-poor';
