// Multiple Choice Assessment Platform - Main Application Logic (TypeScript)

// Inline type definitions (removed import to avoid module issues in browser)
interface Question {
    id: number;
    question: string;
    options: { [key: string]: string; };
    correct: string;
    explanation?: string;
}

interface TestMetadata {
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];
}

interface Test {
    metadata: TestMetadata;
    questions: Question[];
}

interface AvailableTests {
    [difficulty: string]: ( TestMetadata & { id: string; } )[];
}

interface TopicBreakdown {
    [topic: string]: { correct: number; total: number; };
}

interface QuestionReview {
    question: string;
    userAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
    options: { [key: string]: string; };
}

interface TestResults {
    correct: number;
    total: number;
    percentage: number;
    topicBreakdown: TopicBreakdown;
    questionReview: QuestionReview[];
}

interface ResultRecord {
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

interface ResultsHistory {
    [difficulty: string]: {
        [testId: string]: ResultRecord[];
    };
}

type ScreenId = 'test-selection' | 'assessment' | 'results';
type ScoreBadgeClass = 'score-excellent' | 'score-good' | 'score-average' | 'score-poor';

interface DateFormatOptions {
    year: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day: 'numeric' | '2-digit';
}

interface TimeFormatOptions {
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    hour12: boolean;
}

// Extended Navigator interface for legacy browser support
interface ExtendedNavigator extends Navigator {
    userLanguage?: string;
}

class AssessmentApp {
    private currentTest: Test | null = null;
    private currentQuestionIndex: number = 0;
    private userAnswers: ( string | null )[] = [];
    private startTime: Date | null = null;
    private timerInterval: number | null = null;
    private timeLimit: number = 30; // minutes
    private availableTests: AvailableTests = {};
    private resultsHistory: ResultsHistory;

    constructor() {
        this.resultsHistory = this.loadResultsHistory();
        this.initializeApp();
    }

    private async initializeApp (): Promise<void> {
        await this.loadAvailableTests();
        this.setupEventListeners();
        this.renderResultsHistory();
        this.showTestSelection();
    }

    private async loadAvailableTests (): Promise<void> {
        try {
            const response = await fetch( '/api/tests' );
            const data: AvailableTests = await response.json();
            this.availableTests = data;
            this.renderTestList( 'easy' ); // Default to easy
        } catch ( error ) {
            console.error( 'Error loading tests:', error );
            this.showError( 'Failed to load available tests' );
        }
    }

    private setupEventListeners (): void {
        // Difficulty selection
        document.querySelectorAll( '.difficulty-btn' ).forEach( btn => {
            btn.addEventListener( 'click', ( e ) => {
                const target = e.target as HTMLElement;
                const difficulty = target.dataset.difficulty;
                if ( difficulty ) {
                    this.selectDifficulty( difficulty );
                }
            } );
        } );

        // Navigation buttons
        const prevBtn = document.getElementById( 'prev-btn' );
        const nextBtn = document.getElementById( 'next-btn' );
        const submitBtn = document.getElementById( 'submit-btn' );
        const retakeBtn = document.getElementById( 'retake-btn' );
        const newTestBtn = document.getElementById( 'new-test-btn' );

        if ( prevBtn ) {
            prevBtn.addEventListener( 'click', () => this.previousQuestion() );
        }

        if ( nextBtn ) {
            nextBtn.addEventListener( 'click', () => this.nextQuestion() );
        }

        if ( submitBtn ) {
            submitBtn.addEventListener( 'click', () => this.submitTest() );
        }

        if ( retakeBtn ) {
            retakeBtn.addEventListener( 'click', () => this.retakeTest() );
        }

        if ( newTestBtn ) {
            newTestBtn.addEventListener( 'click', () => {
                this.renderResultsHistory();
                this.showTestSelection();
            } );
        }
    }

    private selectDifficulty ( difficulty: string ): void {
        // Update active difficulty button
        document.querySelectorAll( '.difficulty-btn' ).forEach( btn => {
            btn.classList.remove( 'active' );
        } );

        const targetBtn = document.querySelector( `[data-difficulty="${difficulty}"]` );
        if ( targetBtn ) {
            targetBtn.classList.add( 'active' );
        }

        // Render tests for selected difficulty
        this.renderTestList( difficulty );
    }

    private renderTestList ( difficulty: string ): void {
        const container = document.getElementById( 'tests-container' );
        if ( !container ) return;

        container.innerHTML = '';

        const tests = this.availableTests[difficulty] || [];

        if ( tests.length === 0 ) {
            container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
          <h4>No tests available for ${difficulty} difficulty</h4>
          <p>Please select a different difficulty level</p>
        </div>
      `;
            return;
        }

        tests.forEach( ( test: TestMetadata & { id: string; } ) => {
            const testCard = document.createElement( 'div' );
            testCard.className = 'test-card';
            testCard.addEventListener( 'click', () => this.startTest( difficulty, test.id ) );

            testCard.innerHTML = `
        <h4>${test.title}</h4>
        <p>${test.description}</p>
        <div class="test-meta">
          <span>${test.questionCount} questions</span>
          <span>${test.timeLimit} min</span>
        </div>
      `;

            container.appendChild( testCard );
        } );
    }

    private async startTest ( difficulty: string, testId: string ): Promise<void> {
        try {
            const response = await fetch( `/api/test/${difficulty}/${testId}` );
            const testData: Test = await response.json();

            this.currentTest = testData;
            this.currentQuestionIndex = 0;
            this.userAnswers = new Array( testData.questions.length ).fill( null );
            this.timeLimit = testData.metadata.timeLimit;

            this.showAssessment();
            this.startTimer();
            this.renderQuestion();
            this.updateProgress();
        } catch ( error ) {
            console.error( 'Error loading test:', error );
            this.showError( 'Failed to load test' );
        }
    }

    private showScreen ( screenId: ScreenId ): void {
        document.querySelectorAll( '.screen' ).forEach( screen => {
            screen.classList.remove( 'active' );
        } );

        const targetScreen = document.getElementById( screenId );
        if ( targetScreen ) {
            targetScreen.classList.add( 'active' );
        }
    }

    private showTestSelection (): void {
        this.showScreen( 'test-selection' );
        this.stopTimer();
    }

    private showAssessment (): void {
        if ( !this.currentTest ) return;

        this.showScreen( 'assessment' );

        // Update test info
        const testTitle = document.getElementById( 'test-title' );
        const testDescription = document.getElementById( 'test-description' );
        const totalQuestions = document.getElementById( 'total-questions' );

        if ( testTitle ) testTitle.textContent = this.currentTest.metadata.title;
        if ( testDescription ) testDescription.textContent = this.currentTest.metadata.description;
        if ( totalQuestions ) totalQuestions.textContent = this.currentTest.questions.length.toString();

        // Render question grid
        this.renderQuestionGrid();
    }

    private showResults (): void {
        this.showScreen( 'results' );
        this.stopTimer();
        this.calculateAndDisplayResults();
    }

    private renderQuestion (): void {
        if ( !this.currentTest ) return;

        const question = this.currentTest.questions[this.currentQuestionIndex];

        const questionText = document.getElementById( 'question-text' );
        const currentQuestionEl = document.getElementById( 'current-question' );

        if ( questionText ) questionText.textContent = question.question;
        if ( currentQuestionEl ) currentQuestionEl.textContent = ( this.currentQuestionIndex + 1 ).toString();

        const optionsContainer = document.getElementById( 'options-container' );
        if ( !optionsContainer ) return;

        optionsContainer.innerHTML = '';

        Object.entries( question.options ).forEach( ( [letter, text] ) => {
            const option = document.createElement( 'div' );
            option.className = 'option';
            option.dataset.value = letter;

            if ( this.userAnswers[this.currentQuestionIndex] === letter ) {
                option.classList.add( 'selected' );
            }

            option.addEventListener( 'click', () => this.selectAnswer( letter ) );

            option.innerHTML = `
        <div class="option-letter">${letter}</div>
        <div class="option-text">${text}</div>
      `;

            optionsContainer.appendChild( option );
        } );

        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }

    private selectAnswer ( letter: string ): void {
        // Remove previous selection
        document.querySelectorAll( '.option' ).forEach( opt => {
            opt.classList.remove( 'selected' );
        } );

        // Add selection to clicked option
        const selectedOption = document.querySelector( `[data-value="${letter}"]` );
        if ( selectedOption ) {
            selectedOption.classList.add( 'selected' );
        }

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = letter;

        // Update navigation and grid
        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }

    private updateNavigationButtons (): void {
        if ( !this.currentTest ) return;

        const prevBtn = document.getElementById( 'prev-btn' ) as HTMLButtonElement | null;
        const nextBtn = document.getElementById( 'next-btn' ) as HTMLElement | null;
        const submitBtn = document.getElementById( 'submit-btn' ) as HTMLElement | null;

        if ( prevBtn ) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }

        const isLastQuestion = this.currentQuestionIndex === this.currentTest.questions.length - 1;

        if ( isLastQuestion ) {
            if ( nextBtn ) nextBtn.style.display = 'none';
            if ( submitBtn ) submitBtn.classList.remove( 'hidden' );
        } else {
            if ( nextBtn ) nextBtn.style.display = 'block';
            if ( submitBtn ) submitBtn.classList.add( 'hidden' );
        }
    }

    private previousQuestion (): void {
        if ( this.currentQuestionIndex > 0 ) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    private nextQuestion (): void {
        if ( !this.currentTest ) return;

        if ( this.currentQuestionIndex < this.currentTest.questions.length - 1 ) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    private updateProgress (): void {
        if ( !this.currentTest ) return;

        const progress = ( ( this.currentQuestionIndex + 1 ) / this.currentTest.questions.length ) * 100;
        const progressFill = document.getElementById( 'progress-fill' ) as HTMLElement | null;

        if ( progressFill ) {
            progressFill.style.width = `${progress}%`;
        }
    }

    private renderQuestionGrid (): void {
        if ( !this.currentTest ) return;

        const gridContainer = document.getElementById( 'question-grid' );
        if ( !gridContainer ) return;

        gridContainer.innerHTML = '';

        for ( let i = 0; i < this.currentTest.questions.length; i++ ) {
            const questionBtn = document.createElement( 'button' );
            questionBtn.className = 'question-btn';
            questionBtn.textContent = ( i + 1 ).toString();
            questionBtn.dataset.questionIndex = i.toString();

            // Add click event to jump to question
            questionBtn.addEventListener( 'click', () => this.jumpToQuestion( i ) );

            gridContainer.appendChild( questionBtn );
        }

        this.updateQuestionGrid();
    }

    private updateQuestionGrid (): void {
        const questionBtns = document.querySelectorAll( '.question-btn' );

        questionBtns.forEach( ( btn, index ) => {
            // Remove all status classes
            btn.classList.remove( 'current', 'answered', 'unanswered' );

            // Add appropriate status class
            if ( index === this.currentQuestionIndex ) {
                btn.classList.add( 'current' );
            } else if ( this.userAnswers[index] !== null ) {
                btn.classList.add( 'answered' );
            } else {
                btn.classList.add( 'unanswered' );
            }
        } );
    }

    private jumpToQuestion ( questionIndex: number ): void {
        if ( !this.currentTest ) return;

        if ( questionIndex >= 0 && questionIndex < this.currentTest.questions.length ) {
            this.currentQuestionIndex = questionIndex;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    private startTimer (): void {
        this.startTime = new Date();
        const endTime = new Date( this.startTime.getTime() + ( this.timeLimit * 60 * 1000 ) );

        this.timerInterval = window.setInterval( () => {
            const now = new Date();
            const remaining = endTime.getTime() - now.getTime();

            if ( remaining <= 0 ) {
                this.submitTest();
                return;
            }

            const minutes = Math.floor( remaining / ( 1000 * 60 ) );
            const seconds = Math.floor( ( remaining % ( 1000 * 60 ) ) / 1000 );

            const timerDisplay = document.getElementById( 'timer-display' );
            if ( timerDisplay ) {
                timerDisplay.textContent =
                    `${minutes.toString().padStart( 2, '0' )}:${seconds.toString().padStart( 2, '0' )}`;
            }
        }, 1000 );
    }

    private stopTimer (): void {
        if ( this.timerInterval !== null ) {
            clearInterval( this.timerInterval );
            this.timerInterval = null;
        }
    }

    private submitTest (): void {
        if ( !this.confirmSubmission() ) {
            return;
        }

        this.showResults();
    }

    private confirmSubmission (): boolean {
        const unanswered = this.userAnswers.filter( answer => answer === null ).length;

        if ( unanswered > 0 ) {
            return confirm( `You have ${unanswered} unanswered questions. Are you sure you want to submit?` );
        }

        return confirm( 'Are you sure you want to submit your test?' );
    }

    private calculateAndDisplayResults (): void {
        if ( !this.currentTest ) return;

        const results = this.calculateResults();

        // Display score
        const scorePercentage = document.getElementById( 'score-percentage' );
        const correctAnswers = document.getElementById( 'correct-answers' );
        const totalAnswers = document.getElementById( 'total-answers' );

        if ( scorePercentage ) scorePercentage.textContent = `${results.percentage}%`;
        if ( correctAnswers ) correctAnswers.textContent = results.correct.toString();
        if ( totalAnswers ) totalAnswers.textContent = results.total.toString();

        // Display time taken
        const timeTaken = this.calculateTimeTaken();
        const timeTakenEl = document.getElementById( 'time-taken' );
        if ( timeTakenEl ) timeTakenEl.textContent = timeTaken;

        // Display topic breakdown
        this.renderTopicBreakdown( results.topicBreakdown );

        // Display question review
        this.renderQuestionReview( results.questionReview );

        // Save results to local storage
        const resultRecord: ResultRecord = {
            testId: this.currentTest.metadata.id || 'test1',
            difficulty: this.currentTest.metadata.difficulty,
            testTitle: this.currentTest.metadata.title,
            date: new Date().toISOString(),
            correct: results.correct,
            total: results.total,
            percentage: results.percentage,
            timeTaken: timeTaken,
            improvementTopics: this.getImprovementTopics( results.topicBreakdown ),
            topicBreakdown: results.topicBreakdown
        };

        this.saveResult( resultRecord );
        this.renderResultsHistory();
    }

    private calculateResults (): TestResults {
        if ( !this.currentTest ) {
            throw new Error( 'No current test available for calculation' );
        }

        const questions = this.currentTest.questions;
        let correct = 0;
        const topicScores: TopicBreakdown = {};
        const questionReview: QuestionReview[] = [];

        questions.forEach( ( question: Question, index: number ) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;

            if ( isCorrect ) {
                correct++;
            }

            // Track topic performance (simplified - using question topics if available)
            const topics = this.currentTest!.metadata.topics || ['General'];
            const questionTopic = topics[index % topics.length] || 'General';

            if ( !topicScores[questionTopic] ) {
                topicScores[questionTopic] = { correct: 0, total: 0 };
            }
            topicScores[questionTopic].total++;
            if ( isCorrect ) {
                topicScores[questionTopic].correct++;
            }

            questionReview.push( {
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.correct,
                isCorrect: isCorrect,
                explanation: question.explanation,
                options: question.options
            } );
        } );

        const percentage = Math.round( ( correct / questions.length ) * 100 );

        return {
            correct,
            total: questions.length,
            percentage,
            topicBreakdown: topicScores,
            questionReview
        };
    }

    private calculateTimeTaken (): string {
        if ( !this.startTime ) return '0:00';

        const endTime = new Date();
        const timeTaken = endTime.getTime() - this.startTime.getTime();
        const minutes = Math.floor( timeTaken / ( 1000 * 60 ) );
        const seconds = Math.floor( ( timeTaken % ( 1000 * 60 ) ) / 1000 );

        return `${minutes}:${seconds.toString().padStart( 2, '0' )}`;
    }

    private renderTopicBreakdown ( topicScores: TopicBreakdown ): void {
        const container = document.getElementById( 'topic-breakdown' );
        if ( !container ) return;

        container.innerHTML = '';

        Object.entries( topicScores ).forEach( ( [topic, scores] ) => {
            const typedScores = scores as { correct: number; total: number; };
            const percentage = Math.round( ( typedScores.correct / typedScores.total ) * 100 );

            const topicItem = document.createElement( 'div' );
            topicItem.className = 'topic-item';
            topicItem.innerHTML = `
        <span class="topic-name">${topic}</span>
        <span class="topic-score">${typedScores.correct}/${typedScores.total} (${percentage}%)</span>
      `;

            container.appendChild( topicItem );
        } );
    }

    private renderQuestionReview ( questionReview: QuestionReview[] ): void {
        const container = document.getElementById( 'review-container' );
        if ( !container ) return;

        container.innerHTML = '';

        questionReview.forEach( ( review, index ) => {
            const reviewItem = document.createElement( 'div' );
            reviewItem.className = 'review-item';

            const userAnswerText = review.userAnswer ?
                `${review.userAnswer}: ${review.options[review.userAnswer]}` :
                'No answer selected';

            const correctAnswerText = `${review.correctAnswer}: ${review.options[review.correctAnswer]}`;

            reviewItem.innerHTML = `
        <div class="review-question">
          <strong>Question ${index + 1}:</strong> ${review.question}
        </div>
        <div class="review-answer user">
          <strong>Your answer:</strong> ${userAnswerText}
        </div>
        <div class="review-answer ${review.isCorrect ? 'correct' : 'incorrect'}">
          <strong>Correct answer:</strong> ${correctAnswerText}
        </div>
        ${review.explanation ? `
          <div style="margin-top: 10px; padding: 10px; background: #f8fafc; border-radius: 6px; font-size: 0.9rem; color: #4a5568;">
            <strong>Explanation:</strong> ${review.explanation}
          </div>
        ` : ''}
      `;

            container.appendChild( reviewItem );
        } );
    }

    private retakeTest (): void {
        if ( this.currentTest ) {
            this.currentQuestionIndex = 0;
            this.userAnswers = new Array( this.currentTest.questions.length ).fill( null );
            this.showAssessment();
            this.startTimer();
            this.renderQuestion();
            this.updateProgress();
        }
    }

    private showError ( message: string ): void {
        alert( `Error: ${message}` );
    }

    // Local Storage and Results History Methods
    private loadResultsHistory (): ResultsHistory {
        const stored = localStorage.getItem( 'assessmentResults' );
        return stored ? JSON.parse( stored ) : {};
    }

    private saveResult ( result: ResultRecord ): void {
        if ( !this.resultsHistory[result.difficulty] ) {
            this.resultsHistory[result.difficulty] = {};
        }

        if ( !this.resultsHistory[result.difficulty][result.testId] ) {
            this.resultsHistory[result.difficulty][result.testId] = [];
        }

        this.resultsHistory[result.difficulty][result.testId].push( result );
        localStorage.setItem( 'assessmentResults', JSON.stringify( this.resultsHistory ) );
    }

    private renderResultsHistory (): void {
        const historyContainer = document.getElementById( 'results-history' );
        if ( !historyContainer ) return;

        if ( Object.keys( this.resultsHistory ).length === 0 ) {
            historyContainer.classList.add( 'hidden' );
            return;
        }

        historyContainer.classList.remove( 'hidden' );
        const difficultyContainer = historyContainer.querySelector( '.difficulty-results' ) as HTMLElement;
        if ( !difficultyContainer ) return;

        difficultyContainer.innerHTML = '';

        // Process each difficulty level
        ( ['easy', 'medium', 'hard'] as const ).forEach( difficulty => {
            if ( this.resultsHistory[difficulty] && Object.keys( this.resultsHistory[difficulty] ).length > 0 ) {
                const difficultySection = this.createDifficultySection( difficulty, this.resultsHistory[difficulty] );
                difficultyContainer.appendChild( difficultySection );
            }
        } );
    }

    private createDifficultySection ( difficulty: string, tests: { [testId: string]: ResultRecord[]; } ): HTMLElement {
        const section = document.createElement( 'div' );
        section.className = 'difficulty-section';

        // Calculate average for latest results
        const latestScores = Object.values( tests ).map( testResults => {
            const latest = testResults[testResults.length - 1];
            return latest.percentage;
        } );
        const averageScore = Math.round( latestScores.reduce( ( a, b ) => a + b, 0 ) / latestScores.length );

        const header = document.createElement( 'div' );
        header.className = 'difficulty-header';
        header.innerHTML = `
      <div class="difficulty-info">
        <div class="difficulty-title">${difficulty.charAt( 0 ).toUpperCase() + difficulty.slice( 1 )}</div>
        <div class="difficulty-average">Average: ${averageScore}% (${Object.keys( tests ).length} tests)</div>
      </div>
      <div class="expand-icon">▶</div>
    `;

        const testsContainer = document.createElement( 'div' );
        testsContainer.className = 'test-results-container';

        // Create test items
        Object.entries( tests ).forEach( ( [testId, results] ) => {
            const testItem = this.createTestResultItem( difficulty, testId, results );
            testsContainer.appendChild( testItem );
        } );

        // Add click handlers
        header.addEventListener( 'click', () => {
            header.classList.toggle( 'expanded' );
            testsContainer.classList.toggle( 'expanded' );
        } );

        section.appendChild( header );
        section.appendChild( testsContainer );

        return section;
    }

    private createTestResultItem ( difficulty: string, testId: string, results: ResultRecord[] ): HTMLElement {
        const latestResult = results[results.length - 1];
        const testMetadata = this.getTestMetadata( difficulty, testId );

        const item = document.createElement( 'div' );
        item.className = 'test-result-item';

        const scoreBadgeClass = this.getScoreBadgeClass( latestResult.percentage );

        item.innerHTML = `
      <div class="test-header">
        <div class="test-info">
          <div class="test-name">${testMetadata ? testMetadata.title : `Test ${testId}`}</div>
          <div class="latest-score">Latest: ${latestResult.percentage}% (${results.length} attempts)</div>
        </div>
        <div class="score-badge ${scoreBadgeClass}">
          ${latestResult.percentage}%
        </div>
      </div>
      <div class="attempts-history">
        ${results.slice().reverse().map( ( result, index ) => `
          <div class="attempt-item">
            <div class="attempt-date">${this.formatDate( result.date )}</div>
            <div class="attempt-details">
              <div class="attempt-score">Score: ${result.correct}/${result.total} (${result.percentage}%)</div>
              <div class="attempt-time">Time: ${result.timeTaken}</div>
            </div>
            ${result.improvementTopics && result.improvementTopics.length > 0 ? `
              <div class="improvement-topics">
                <div class="improvement-topics-label">Topics needing improvement:</div>
                <div class="topics-list">${result.improvementTopics.join( ', ' )}</div>
              </div>
            ` : ''}
          </div>
        `).join( '' )}
      </div>
    `;

        // Add click handler to expand/collapse attempts
        const testHeader = item.querySelector( '.test-header' ) as HTMLElement;
        const attemptsHistory = item.querySelector( '.attempts-history' ) as HTMLElement;

        if ( testHeader && attemptsHistory ) {
            testHeader.addEventListener( 'click', () => {
                item.classList.toggle( 'expanded' );
                attemptsHistory.classList.toggle( 'expanded' );
            } );
        }

        return item;
    }

    private getTestMetadata ( difficulty: string, testId: string ): TestMetadata | null {
        if ( this.availableTests[difficulty] ) {
            return this.availableTests[difficulty].find( ( test: TestMetadata & { id: string; } ) => test.id === testId ) || null;
        }
        return null;
    }

    private getScoreBadgeClass ( percentage: number ): ScoreBadgeClass {
        if ( percentage >= 90 ) return 'score-excellent';
        if ( percentage >= 75 ) return 'score-good';
        if ( percentage >= 60 ) return 'score-average';
        return 'score-poor';
    }

    private getImprovementTopics ( topicBreakdown: TopicBreakdown ): string[] {
        const improvementTopics: string[] = [];
        Object.entries( topicBreakdown ).forEach( ( [topic, scores] ) => {
            const typedScores = scores as { correct: number; total: number; };
            const percentage = ( typedScores.correct / typedScores.total ) * 100;
            if ( percentage < 70 ) { // Topics with less than 70% need improvement
                improvementTopics.push( topic );
            }
        } );
        return improvementTopics;
    }

    private formatDate ( dateString: string ): string {
        const date = new Date( dateString );

        // Try to get the user's locale, fallback to 'en-GB' for DD/MM/YYYY format
        const extendedNavigator = navigator as ExtendedNavigator;
        let locale = navigator.language || extendedNavigator.userLanguage || 'en-GB';

        // If locale is just "en", use "en-GB" for DD/MM/YYYY format
        if ( locale === 'en' ) {
            locale = 'en-GB';
        }

        try {
            // Format date part only
            const dateOptions: DateFormatOptions = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            };

            // Format time part only
            const timeOptions: TimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };

            const datePart = date.toLocaleDateString( locale, dateOptions );
            const timePart = date.toLocaleTimeString( locale, timeOptions );

            return `${datePart}, ${timePart}`;
        } catch ( error ) {
            // Fallback to DD/MM/YYYY, HH:MM AM/PM format
            const day = date.getDate().toString().padStart( 2, '0' );
            const month = ( date.getMonth() + 1 ).toString().padStart( 2, '0' );
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes().toString().padStart( 2, '0' );
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;

            return `${day}/${month}/${year}, ${displayHours}:${minutes} ${ampm}`;
        }
    }
}

// Initialize the application when the page loads
document.addEventListener( 'DOMContentLoaded', () => {
    new AssessmentApp();
} );