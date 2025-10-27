// Multiple Choice Assessment Platform - Main Application Logic (TypeScript)

// Import shared type definitions from models
import type {
    Question,
    AssessmentMetadata,
    Assessment,
    AvailableAssessments,
    TopicBreakdown,
    QuestionReview,
    AssessmentResults,
    ResultRecord,
    ResultsHistory,
    ScreenId
} from './models';

// Utility functions moved to src/utils
import { formatTextWithCode, escapeHtml } from './utils/formatUtils';
import { formatDate } from './utils/dateUtils';
import { getScoreBadgeClass, getImprovementTopics, formatTimeTaken } from './utils/resultsUtils';

class AssessmentApp {
    private currentAssessment: Assessment | null = null;
    private currentQuestionIndex: number = 0;
    private userAnswers: ( string | null )[] = [];
    private startTime: Date | null = null;
    private timerInterval: number | null = null;
    private timeLimit: number = 30; // minutes
    private availableAssessments: AvailableAssessments = {};
    private resultsHistory: ResultsHistory;

    constructor() {
        this.resultsHistory = this.loadResultsHistory();
        this.initializeApp();
    }

    private async initializeApp (): Promise<void> {
        await this.loadAvailableAssessments();
        this.setupEventListeners();
        this.renderResultsHistory();
        this.showAssessmentSelection();
    }

    private async loadAvailableAssessments (): Promise<void> {
        try {
            const response = await fetch( '/api/assessments' );
            const data: AvailableAssessments = await response.json();
            this.availableAssessments = data;
            this.updateDifficultyButtonCounts();
            this.renderAssessmentList( 'easy' ); // Default to easy
        } catch ( error ) {
            console.error( '❌ Error loading assessments:', error );
            this.showError( 'Failed to load available assessments' );
        }
    }

    private updateDifficultyButtonCounts (): void {
        // Update each difficulty button to show the count of available assessments
        const difficulties = ['easy', 'medium', 'hard'];
        
        difficulties.forEach( difficulty => {
            const btn = document.querySelector( `[data-difficulty="${difficulty}"]` );
            if ( btn ) {
                const count = this.availableAssessments[difficulty]?.length || 0;
                const capitalizedDifficulty = difficulty.charAt( 0 ).toUpperCase() + difficulty.slice( 1 );
                btn.textContent = `${capitalizedDifficulty} (${count})`;
            }
        } );
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
        const newAssessmentBtn = document.getElementById( 'new-assessment-btn' );

        if ( prevBtn ) {
            prevBtn.addEventListener( 'click', () => this.previousQuestion() );
        }

        if ( nextBtn ) {
            nextBtn.addEventListener( 'click', () => this.nextQuestion() );
        }

        if ( submitBtn ) {
            submitBtn.addEventListener( 'click', () => this.submitAssessment() );
        }

        if ( retakeBtn ) {
            retakeBtn.addEventListener( 'click', () => this.retakeAssessment() );
        }

        if ( newAssessmentBtn ) {
            newAssessmentBtn.addEventListener( 'click', () => {
                this.renderResultsHistory();
                this.showAssessmentSelection();
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

        // Render assessments for selected difficulty
        this.renderAssessmentList( difficulty );
    }

    private renderAssessmentList ( difficulty: string ): void {
        const container = document.getElementById( 'assessments-container' );
        if ( !container ) return;

        container.innerHTML = '';

        // Render assessments for selected difficulty
        const assessments = this.availableAssessments[difficulty] || [];

        if ( assessments.length === 0 ) {
            container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
          <h4>No assessments available for ${difficulty} difficulty</h4>
          <p>Please select a different difficulty level</p>
        </div>
      `;
            return;
        }

        assessments.forEach( ( assessment: AssessmentMetadata & { id: string; } ) => {
            const assessmentCard = document.createElement( 'div' );
            assessmentCard.className = 'assessment-card';
            assessmentCard.addEventListener( 'click', () => this.startAssessment( difficulty, assessment.id ) );

            assessmentCard.innerHTML = `
        <h4>${assessment.title}</h4>
        <p>${assessment.description}</p>
        <div class="assessment-meta">
          <span>${assessment.questionCount} questions</span>
          <span>${assessment.timeLimit} min</span>
        </div>
      `;

            container.appendChild( assessmentCard );
        } );
    }

    private async startAssessment ( difficulty: string, assessmentId: string ): Promise<void> {
        try {
            const response = await fetch( `/api/assessment/${difficulty}/${assessmentId}` );
            const assessmentData: Assessment = await response.json();

            this.currentAssessment = assessmentData;
            this.currentQuestionIndex = 0;
            this.userAnswers = new Array( assessmentData.questions.length ).fill( null );
            this.timeLimit = assessmentData.metadata.timeLimit;

            this.showAssessment();
            this.startTimer();
            this.renderQuestion();
            this.updateProgress();
        } catch ( error ) {
            console.error( 'Error loading assessment:', error );
            this.showError( 'Failed to load assessment' );
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

    private showAssessmentSelection (): void {
        this.showScreen( 'assessment-selection' );
        this.stopTimer();
    }

    private showAssessment (): void {
        if ( !this.currentAssessment ) return;

        this.showScreen( 'assessment' );

        // Update assessment info
        const assessmentTitle = document.getElementById( 'assessment-title' );
        const assessmentDescription = document.getElementById( 'assessment-description' );
        const totalQuestions = document.getElementById( 'total-questions' );

        if ( assessmentTitle ) assessmentTitle.textContent = this.currentAssessment.metadata.title;
        if ( assessmentDescription ) assessmentDescription.textContent = this.currentAssessment.metadata.description;
        if ( totalQuestions ) totalQuestions.textContent = this.currentAssessment.questions.length.toString();

        // Render question grid
        this.renderQuestionGrid();
    }

    private showResults (): void {
        this.showScreen( 'results' );
        this.stopTimer();
        this.calculateAndDisplayResults();
    }


    private renderQuestion (): void {
        if ( !this.currentAssessment ) return;

        const question = this.currentAssessment.questions[this.currentQuestionIndex];

        const questionText = document.getElementById( 'question-text' );
        const currentQuestionEl = document.getElementById( 'current-question' );

        if ( questionText ) questionText.innerHTML = formatTextWithCode( question.question );
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
        if ( !this.currentAssessment ) return;

        const prevBtn = document.getElementById( 'prev-btn' ) as HTMLButtonElement | null;
        const nextBtn = document.getElementById( 'next-btn' ) as HTMLElement | null;
        const submitBtn = document.getElementById( 'submit-btn' ) as HTMLElement | null;

        if ( prevBtn ) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }

        const isLastQuestion = this.currentQuestionIndex === this.currentAssessment.questions.length - 1;

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
        if ( !this.currentAssessment ) return;

        if ( this.currentQuestionIndex < this.currentAssessment.questions.length - 1 ) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    private updateProgress (): void {
        if ( !this.currentAssessment ) return;

        const progress = ( ( this.currentQuestionIndex + 1 ) / this.currentAssessment.questions.length ) * 100;
        const progressFill = document.getElementById( 'progress-fill' ) as HTMLElement | null;

        if ( progressFill ) {
            progressFill.style.width = `${progress}%`;
        }
    }

    private renderQuestionGrid (): void {
        if ( !this.currentAssessment ) return;

        const gridContainer = document.getElementById( 'question-grid' );
        if ( !gridContainer ) return;

        gridContainer.innerHTML = '';

        for ( let i = 0; i < this.currentAssessment.questions.length; i++ ) {
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
        if ( !this.currentAssessment ) return;

        if ( questionIndex >= 0 && questionIndex < this.currentAssessment.questions.length ) {
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
                this.submitAssessment();
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

    private submitAssessment (): void {
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

        return confirm( 'Are you sure you want to submit your assessment?' );
    }

    private calculateAndDisplayResults (): void {
        if ( !this.currentAssessment ) return;

        const results = this.calculateResults();

        // Display score
        const scorePercentage = document.getElementById( 'score-percentage' );
        const correctAnswers = document.getElementById( 'correct-answers' );
        const totalAnswers = document.getElementById( 'total-answers' );

        if ( scorePercentage ) scorePercentage.textContent = `${results.percentage}%`;
        if ( correctAnswers ) correctAnswers.textContent = results.correct.toString();
        if ( totalAnswers ) totalAnswers.textContent = results.total.toString();

        // Display time taken
        const timeTaken = formatTimeTaken( this.startTime );
        const timeTakenEl = document.getElementById( 'time-taken' );
        if ( timeTakenEl ) timeTakenEl.textContent = timeTaken;

        // Display topic breakdown
        this.renderTopicBreakdown( results.topicBreakdown );

        // Display question review
        this.renderQuestionReview( results.questionReview );

        // Save results to local storage
        const resultRecord: ResultRecord = {
            assessmentId: this.currentAssessment.metadata.id || 'test1',
            difficulty: this.currentAssessment.metadata.difficulty,
            assessmentTitle: this.currentAssessment.metadata.title,
            date: new Date().toISOString(),
            correct: results.correct,
            total: results.total,
            percentage: results.percentage,
            timeTaken: timeTaken,
            improvementTopics: getImprovementTopics( results.topicBreakdown ),
            topicBreakdown: results.topicBreakdown
        };

        this.saveResult( resultRecord );
        this.renderResultsHistory();
    }

    private calculateResults (): AssessmentResults {
        if ( !this.currentAssessment ) {
            throw new Error( 'No current assessment available for calculation' );
        }

        const questions = this.currentAssessment.questions;
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
            const topics = this.currentAssessment!.metadata.topics || ['General'];
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
          <strong>Question ${index + 1}:</strong> ${formatTextWithCode( review.question )}
        </div>
                <div class="review-answer user">
                    <strong>Your answer:</strong> ${escapeHtml( userAnswerText )}
                </div>
                <div class="review-answer ${review.isCorrect ? 'correct' : 'incorrect'}">
                    <strong>Correct answer:</strong> ${escapeHtml( correctAnswerText )}
                </div>
        ${review.explanation ? `
          <div class="review-explanation">
            <strong>Explanation:</strong> ${formatTextWithCode( review.explanation )}
          </div>
        ` : ''}
      `;

            container.appendChild( reviewItem );
        } );
    }

    private retakeAssessment (): void {
        if ( this.currentAssessment ) {
            this.currentQuestionIndex = 0;
            this.userAnswers = new Array( this.currentAssessment.questions.length ).fill( null );
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

        if ( !this.resultsHistory[result.difficulty][result.assessmentId] ) {
            this.resultsHistory[result.difficulty][result.assessmentId] = [];
        }

        this.resultsHistory[result.difficulty][result.assessmentId].push( result );
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

    private createDifficultySection ( difficulty: string, assessments: { [assessmentId: string]: ResultRecord[]; } ): HTMLElement {
        const section = document.createElement( 'div' );
        section.className = 'difficulty-section';

        // Calculate average for latest results
        const latestScores = Object.values( assessments ).map( assessmentResults => {
            const latest = assessmentResults[assessmentResults.length - 1];
            return latest.percentage;
        } );
        const averageScore = Math.round( latestScores.reduce( ( a, b ) => a + b, 0 ) / latestScores.length );

        const header = document.createElement( 'div' );
        header.className = 'difficulty-header';
        header.innerHTML = `
      <div class="difficulty-info">
        <div class="difficulty-title">${difficulty.charAt( 0 ).toUpperCase() + difficulty.slice( 1 )}</div>
        <div class="difficulty-average">Average: ${averageScore}% (${Object.keys( assessments ).length} assessments)</div>
      </div>
      <div class="expand-icon">▶</div>
    `;

        const assessmentsContainer = document.createElement( 'div' );
        assessmentsContainer.className = 'assessment-results-container';

        // Create assessment items
        Object.entries( assessments ).forEach( ( [assessmentId, results] ) => {
            const assessmentItem = this.createAssessmentResultItem( difficulty, assessmentId, results );
            assessmentsContainer.appendChild( assessmentItem );
        } );

        // Add click handlers
        header.addEventListener( 'click', () => {
            header.classList.toggle( 'expanded' );
            assessmentsContainer.classList.toggle( 'expanded' );
        } );

        section.appendChild( header );
        section.appendChild( assessmentsContainer );

        return section;
    }

    private createAssessmentResultItem ( difficulty: string, assessmentId: string, results: ResultRecord[] ): HTMLElement {
        const latestResult = results[results.length - 1];
        const testMetadata = this.getAssessmentMetadata( difficulty, assessmentId );

        const item = document.createElement( 'div' );
        item.className = 'assessment-result-item';

        const scoreBadgeClass = getScoreBadgeClass( latestResult.percentage );

        item.innerHTML = `
      <div class="assessment-header">
        <div class="assessment-info">
          <div class="assessment-name">${testMetadata ? testMetadata.title : `Test ${assessmentId}`}</div>
          <div class="latest-score">Latest: ${latestResult.percentage}% (${results.length} attempts)</div>
        </div>
        <div class="score-badge ${scoreBadgeClass}">
          ${latestResult.percentage}%
        </div>
      </div>
      <div class="attempts-history">
        ${results.slice().reverse().map( ( result, index ) => `
          <div class="attempt-item">
            <div class="attempt-date">${formatDate( result.date )}</div>
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
        const testHeader = item.querySelector( '.assessment-header' ) as HTMLElement;
        const attemptsHistory = item.querySelector( '.attempts-history' ) as HTMLElement;

        if ( testHeader && attemptsHistory ) {
            testHeader.addEventListener( 'click', () => {
                item.classList.toggle( 'expanded' );
                attemptsHistory.classList.toggle( 'expanded' );
            } );
        }

        return item;
    }

    private getAssessmentMetadata ( difficulty: string, assessmentId: string ): AssessmentMetadata | null {
        if ( this.availableAssessments[difficulty] ) {
            return this.availableAssessments[difficulty].find( ( test: AssessmentMetadata & { id: string; } ) => test.id === assessmentId ) || null;
        }
        return null;
    }


}

// Initialize the application when the page loads
// Handle both cases: DOM not ready yet, or already loaded
if ( document.readyState === 'loading' ) {
    document.addEventListener( 'DOMContentLoaded', () => {
        new AssessmentApp();
    } );
} else {
    new AssessmentApp();
}

// Mark this file as a module to avoid "file is not a module" errors on import
export { };
