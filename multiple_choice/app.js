// Multiple Choice Assessment Platform - Main Application Logic

class AssessmentApp {
    constructor() {
        this.currentTest = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.timerInterval = null;
        this.timeLimit = 30; // minutes
        this.availableTests = {};

        this.initializeApp();
    }

    async initializeApp () {
        await this.loadAvailableTests();
        this.setupEventListeners();
        this.showTestSelection();
    }

    async loadAvailableTests () {
        try {
            const response = await fetch('/api/tests');
            const data = await response.json();
            this.availableTests = data;
            this.renderTestList('easy'); // Default to easy
        } catch (error) {
            console.error('Error loading tests:', error);
            this.showError('Failed to load available tests');
        }
    }

    setupEventListeners () {
        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const difficulty = e.target.dataset.difficulty;
                this.selectDifficulty(difficulty);
            });
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('submit-btn').addEventListener('click', () => {
            this.submitTest();
        });

        // Results actions
        document.getElementById('retake-btn').addEventListener('click', () => {
            this.retakeTest();
        });

        document.getElementById('new-test-btn').addEventListener('click', () => {
            this.showTestSelection();
        });
    }

    selectDifficulty (difficulty) {
        // Update active difficulty button
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');

        // Render tests for selected difficulty
        this.renderTestList(difficulty);
    }

    renderTestList (difficulty) {
        const container = document.getElementById('tests-container');
        container.innerHTML = '';

        const tests = this.availableTests[difficulty] || [];

        if (tests.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
                    <h4>No tests available for ${difficulty} difficulty</h4>
                    <p>Please select a different difficulty level</p>
                </div>
            `;
            return;
        }

        tests.forEach(test => {
            const testCard = document.createElement('div');
            testCard.className = 'test-card';
            testCard.addEventListener('click', () => this.startTest(difficulty, test.id));

            testCard.innerHTML = `
                <h4>${test.title}</h4>
                <p>${test.description}</p>
                <div class="test-meta">
                    <span>${test.questionCount} questions</span>
                    <span>${test.timeLimit} min</span>
                </div>
            `;

            container.appendChild(testCard);
        });
    }

    async startTest (difficulty, testId) {
        try {
            const response = await fetch(`/api/test/${difficulty}/${testId}`);
            const testData = await response.json();

            this.currentTest = testData;
            this.currentQuestionIndex = 0;
            this.userAnswers = new Array(testData.questions.length).fill(null);
            this.timeLimit = testData.metadata.timeLimit;

            this.showAssessment();
            this.startTimer();
            this.renderQuestion();
            this.updateProgress();
        } catch (error) {
            console.error('Error loading test:', error);
            this.showError('Failed to load test');
        }
    }

    showScreen (screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    showTestSelection () {
        this.showScreen('test-selection');
        this.stopTimer();
    }

    showAssessment () {
        this.showScreen('assessment');

        // Update test info
        document.getElementById('test-title').textContent = this.currentTest.metadata.title;
        document.getElementById('test-description').textContent = this.currentTest.metadata.description;
        document.getElementById('total-questions').textContent = this.currentTest.questions.length;

        // Render question grid
        this.renderQuestionGrid();
    }

    showResults () {
        this.showScreen('results');
        this.stopTimer();
        this.calculateAndDisplayResults();
    }

    renderQuestion () {
        const question = this.currentTest.questions[this.currentQuestionIndex];

        document.getElementById('question-text').textContent = question.question;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        Object.entries(question.options).forEach(([letter, text]) => {
            const option = document.createElement('div');
            option.className = 'option';
            option.dataset.value = letter;

            if (this.userAnswers[this.currentQuestionIndex] === letter) {
                option.classList.add('selected');
            }

            option.addEventListener('click', () => this.selectAnswer(letter));

            option.innerHTML = `
                <div class="option-letter">${letter}</div>
                <div class="option-text">${text}</div>
            `;

            optionsContainer.appendChild(option);
        });

        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }

    selectAnswer (letter) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Add selection to clicked option
        document.querySelector(`[data-value="${letter}"]`).classList.add('selected');

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = letter;

        // Update navigation and grid
        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }

    updateNavigationButtons () {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        prevBtn.disabled = this.currentQuestionIndex === 0;

        const isLastQuestion = this.currentQuestionIndex === this.currentTest.questions.length - 1;

        if (isLastQuestion) {
            nextBtn.style.display = 'none';
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.style.display = 'block';
            submitBtn.classList.add('hidden');
        }
    }

    previousQuestion () {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    nextQuestion () {
        if (this.currentQuestionIndex < this.currentTest.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    updateProgress () {
        const progress = ((this.currentQuestionIndex + 1) / this.currentTest.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    }

    renderQuestionGrid () {
        const gridContainer = document.getElementById('question-grid');
        gridContainer.innerHTML = '';

        for (let i = 0; i < this.currentTest.questions.length; i++) {
            const questionBtn = document.createElement('button');
            questionBtn.className = 'question-btn';
            questionBtn.textContent = i + 1;
            questionBtn.dataset.questionIndex = i;

            // Add click event to jump to question
            questionBtn.addEventListener('click', () => this.jumpToQuestion(i));

            gridContainer.appendChild(questionBtn);
        }

        this.updateQuestionGrid();
    }

    updateQuestionGrid () {
        const questionBtns = document.querySelectorAll('.question-btn');

        questionBtns.forEach((btn, index) => {
            // Remove all status classes
            btn.classList.remove('current', 'answered', 'unanswered');

            // Add appropriate status class
            if (index === this.currentQuestionIndex) {
                btn.classList.add('current');
            } else if (this.userAnswers[index] !== null) {
                btn.classList.add('answered');
            } else {
                btn.classList.add('unanswered');
            }
        });
    }

    jumpToQuestion (questionIndex) {
        if (questionIndex >= 0 && questionIndex < this.currentTest.questions.length) {
            this.currentQuestionIndex = questionIndex;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    startTimer () {
        this.startTime = new Date();
        const endTime = new Date(this.startTime.getTime() + (this.timeLimit * 60 * 1000));

        this.timerInterval = setInterval(() => {
            const now = new Date();
            const remaining = endTime - now;

            if (remaining <= 0) {
                this.submitTest();
                return;
            }

            const minutes = Math.floor(remaining / (1000 * 60));
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            document.getElementById('timer-display').textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopTimer () {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    submitTest () {
        if (!this.confirmSubmission()) {
            return;
        }

        this.showResults();
    }

    confirmSubmission () {
        const unanswered = this.userAnswers.filter(answer => answer === null).length;

        if (unanswered > 0) {
            return confirm(`You have ${unanswered} unanswered questions. Are you sure you want to submit?`);
        }

        return confirm('Are you sure you want to submit your test?');
    }

    calculateAndDisplayResults () {
        const results = this.calculateResults();

        // Display score
        document.getElementById('score-percentage').textContent = `${results.percentage}%`;
        document.getElementById('correct-answers').textContent = results.correct;
        document.getElementById('total-answers').textContent = results.total;

        // Display time taken
        const timeTaken = this.calculateTimeTaken();
        document.getElementById('time-taken').textContent = timeTaken;

        // Display topic breakdown
        this.renderTopicBreakdown(results.topicBreakdown);

        // Display question review
        this.renderQuestionReview(results.questionReview);
    }

    calculateResults () {
        const questions = this.currentTest.questions;
        let correct = 0;
        const topicScores = {};
        const questionReview = [];

        questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;

            if (isCorrect) {
                correct++;
            }

            // Track topic performance (simplified - using question topics if available)
            const topics = this.currentTest.metadata.topics || ['General'];
            const questionTopic = topics[index % topics.length] || 'General';

            if (!topicScores[questionTopic]) {
                topicScores[questionTopic] = { correct: 0, total: 0 };
            }
            topicScores[questionTopic].total++;
            if (isCorrect) {
                topicScores[questionTopic].correct++;
            }

            questionReview.push({
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.correct,
                isCorrect: isCorrect,
                explanation: question.explanation,
                options: question.options
            });
        });

        const percentage = Math.round((correct / questions.length) * 100);

        return {
            correct,
            total: questions.length,
            percentage,
            topicBreakdown: topicScores,
            questionReview
        };
    }

    calculateTimeTaken () {
        if (!this.startTime) return '0:00';

        const endTime = new Date();
        const timeTaken = endTime - this.startTime;
        const minutes = Math.floor(timeTaken / (1000 * 60));
        const seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    renderTopicBreakdown (topicScores) {
        const container = document.getElementById('topic-breakdown');
        container.innerHTML = '';

        Object.entries(topicScores).forEach(([topic, scores]) => {
            const percentage = Math.round((scores.correct / scores.total) * 100);

            const topicItem = document.createElement('div');
            topicItem.className = 'topic-item';
            topicItem.innerHTML = `
                <span class="topic-name">${topic}</span>
                <span class="topic-score">${scores.correct}/${scores.total} (${percentage}%)</span>
            `;

            container.appendChild(topicItem);
        });
    }

    renderQuestionReview (questionReview) {
        const container = document.getElementById('review-container');
        container.innerHTML = '';

        questionReview.forEach((review, index) => {
            const reviewItem = document.createElement('div');
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

            container.appendChild(reviewItem);
        });
    }

    retakeTest () {
        if (this.currentTest) {
            this.currentQuestionIndex = 0;
            this.userAnswers = new Array(this.currentTest.questions.length).fill(null);
            this.showAssessment();
            this.startTimer();
            this.renderQuestion();
            this.updateProgress();
        }
    }

    showError (message) {
        alert(`Error: ${message}`);
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new AssessmentApp();
});