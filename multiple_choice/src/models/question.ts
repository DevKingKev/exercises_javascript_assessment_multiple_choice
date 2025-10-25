export interface Question {
    id: number;
    question: string;
    options: { [key: string]: string; };
    correct: string;
    explanation?: string;
}
