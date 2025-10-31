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
    /** Unique id for this saved result (timestamp from Date.now()) */
    resultRecordId: number;
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
    /**
     * List of wrong answers to allow reconstructing the assessment result.
     * Each entry contains the question id (questionNr) and the answer choice made.
     * If a user left an answer blank, the answer will be saved as an empty string.
     */
    wrongAnswers?: { questionNr: number; answer: string; }[];
}

export interface ResultsHistory {
    [difficulty: string]: {
        [assessmentId: string]: ResultRecord[];
    };
}

export type ScoreBadgeClass = 'score-excellent' | 'score-good' | 'score-average' | 'score-poor';
