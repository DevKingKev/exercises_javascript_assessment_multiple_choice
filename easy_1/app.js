// Assessment Application
class CoderbyteMockAssessment {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(questions.length).fill('');
        this.timeRemaining = 30 * 60; // 30 minutes in seconds
        this.timerInterval = null;
        this.startTime = null;
        this.endTime = null;

        this.initializeApp();
    }

    initializeApp () {
        this.setupEventListeners();
        this.createQuestionButtons();
    }

    setupEventListeners () {
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startAssessment();
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('finish-btn').addEventListener('click', () => {
            this.finishAssessment();
        });

        // Test code button
        document.getElementById('test-code-btn').addEventListener('click', () => {
            this.testUserCode();
        });

        // Code editor
        document.getElementById('code-editor').addEventListener('input', () => {
            this.saveCurrentAnswer();
        });

        // Restart button
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartAssessment();
        });
    }

    createQuestionButtons () {
        const buttonsContainer = document.getElementById('question-buttons');
        buttonsContainer.innerHTML = '';

        for (let i = 0; i < questions.length; i++) {
            const button = document.createElement('button');
            button.className = 'question-btn';
            button.textContent = i + 1;
            button.addEventListener('click', () => this.goToQuestion(i));
            buttonsContainer.appendChild(button);
        }
    }

    startAssessment () {
        this.startTime = new Date();
        this.showScreen('assessment-screen');
        this.startTimer();
        this.loadQuestion(0);
        this.updateQuestionButtons();
    }

    startTimer () {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.finishAssessment();
            }
        }, 1000);
    }

    updateTimerDisplay () {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timerElement = document.getElementById('timer');

        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Add warning classes
        timerElement.classList.remove('warning', 'critical');
        if (this.timeRemaining <= 300) { // 5 minutes
            timerElement.classList.add('critical');
        } else if (this.timeRemaining <= 600) { // 10 minutes
            timerElement.classList.add('warning');
        }
    }

    loadQuestion (index) {
        this.currentQuestionIndex = index;
        const question = questions[index];

        // Update question content
        const questionContent = document.getElementById('question-content');
        questionContent.innerHTML = `
            <h3 class="question-title">${question.title}</h3>
            <div class="question-description">
                <p>${question.description}</p>
            </div>
            <div class="question-examples">
                <h4>Examples:</h4>
                ${question.examples.map(example => `<div class="example">${example}</div>`).join('')}
            </div>
        `;

        // Load user's previous answer
        document.getElementById('code-editor').value = this.userAnswers[index];

        // Update progress
        this.updateProgress();
        this.updateQuestionButtons();
        this.updateNavigation();

        // Clear test results
        this.hideTestResults();
    }

    saveCurrentAnswer () {
        const code = document.getElementById('code-editor').value;
        this.userAnswers[this.currentQuestionIndex] = code;
        this.updateQuestionButtons();
    }

    testUserCode () {
        const code = document.getElementById('code-editor').value.trim();
        const question = questions[this.currentQuestionIndex];

        if (!code) {
            this.showTestResults('Please write some code first.', 'error');
            return;
        }

        try {
            // Create a sandboxed function
            const userFunction = new Function('return ' + code)();

            if (typeof userFunction !== 'function') {
                this.showTestResults('Your code should define a function.', 'error');
                return;
            }

            let passedTests = 0;
            let results = [];

            // Test each case
            for (let i = 0; i < question.testCases.length; i++) {
                const testCase = question.testCases[i];
                try {
                    const result = userFunction(...testCase.input);
                    const passed = this.compareResults(result, testCase.expected);

                    if (passed) {
                        passedTests++;
                        results.push({
                            passed: true,
                            input: testCase.input,
                            expected: testCase.expected,
                            actual: result
                        });
                    } else {
                        results.push({
                            passed: false,
                            input: testCase.input,
                            expected: testCase.expected,
                            actual: result
                        });
                    }
                } catch (error) {
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expected: testCase.expected,
                        error: error.message
                    });
                }
            }

            this.displayTestResults(results, passedTests, question.testCases.length);

        } catch (error) {
            this.showTestResults(`Error in your code: ${error.message}`, 'error');
        }
    }

    compareResults (actual, expected) {
        if (Array.isArray(expected)) {
            return Array.isArray(actual) &&
                actual.length === expected.length &&
                actual.every((val, index) => val === expected[index]);
        }
        return actual === expected;
    }

    displayTestResults (results, passed, total) {
        const resultsContainer = document.getElementById('test-results');
        const success = passed === total;

        let html = `<h4>Test Results: ${passed}/${total} passed</h4>`;

        results.forEach((result, index) => {
            const status = result.passed ? 'pass' : 'fail';
            const statusText = result.passed ? 'PASS' : 'FAIL';

            html += `
                <div class="test-case ${status}">
                    <strong>Test ${index + 1}: ${statusText}</strong><br>
                    Input: ${JSON.stringify(result.input)}<br>
                    Expected: ${JSON.stringify(result.expected)}<br>
                    ${result.error ? `Error: ${result.error}` : `Got: ${JSON.stringify(result.actual)}`}
                </div>
            `;
        });

        resultsContainer.innerHTML = html;
        resultsContainer.className = `test-results show ${success ? 'success' : 'error'}`;
    }

    showTestResults (message, type) {
        const resultsContainer = document.getElementById('test-results');
        resultsContainer.innerHTML = message;
        resultsContainer.className = `test-results show ${type}`;
    }

    hideTestResults () {
        const resultsContainer = document.getElementById('test-results');
        resultsContainer.className = 'test-results';
    }

    updateProgress () {
        const progress = ((this.currentQuestionIndex + 1) / questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
    }

    updateQuestionButtons () {
        const buttons = document.querySelectorAll('.question-btn');
        buttons.forEach((button, index) => {
            button.classList.remove('current', 'answered', 'attempted');

            if (index === this.currentQuestionIndex) {
                button.classList.add('current');
            } else if (this.userAnswers[index].trim()) {
                // Check if the answer looks complete (has function keyword)
                if (this.userAnswers[index].includes('function') && this.userAnswers[index].includes('return')) {
                    button.classList.add('answered');
                } else {
                    button.classList.add('attempted');
                }
            }
        });
    }

    updateNavigation () {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');

        prevBtn.disabled = this.currentQuestionIndex === 0;

        if (this.currentQuestionIndex === questions.length - 1) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            finishBtn.style.display = 'none';
        }
    }

    goToQuestion (index) {
        this.saveCurrentAnswer();
        this.loadQuestion(index);
    }

    previousQuestion () {
        if (this.currentQuestionIndex > 0) {
            this.saveCurrentAnswer();
            this.loadQuestion(this.currentQuestionIndex - 1);
        }
    }

    nextQuestion () {
        if (this.currentQuestionIndex < questions.length - 1) {
            this.saveCurrentAnswer();
            this.loadQuestion(this.currentQuestionIndex + 1);
        }
    }

    finishAssessment () {
        this.endTime = new Date();
        clearInterval(this.timerInterval);
        this.saveCurrentAnswer();
        this.calculateResults();
        this.showScreen('results-screen');
    }

    calculateResults () {
        let correctAnswers = 0;
        let attemptedAnswers = 0;
        let detailedResults = [];

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const userCode = this.userAnswers[i].trim();
            let isCorrect = false;
            let isAttempted = userCode.length > 0;
            let errorMessage = '';

            if (isAttempted) {
                attemptedAnswers++;

                try {
                    const userFunction = new Function('return ' + userCode)();

                    if (typeof userFunction === 'function') {
                        let allTestsPassed = true;

                        for (let testCase of question.testCases) {
                            try {
                                const result = userFunction(...testCase.input);
                                if (!this.compareResults(result, testCase.expected)) {
                                    allTestsPassed = false;
                                    break;
                                }
                            } catch (error) {
                                allTestsPassed = false;
                                errorMessage = error.message;
                                break;
                            }
                        }

                        isCorrect = allTestsPassed;
                    } else {
                        errorMessage = 'Code does not define a valid function';
                    }
                } catch (error) {
                    errorMessage = error.message;
                }

                if (isCorrect) {
                    correctAnswers++;
                }
            }

            detailedResults.push({
                question,
                userCode,
                isCorrect,
                isAttempted,
                errorMessage
            });
        }

        this.displayResults(correctAnswers, attemptedAnswers, detailedResults);
    }

    displayResults (correct, attempted, detailed) {
        const percentage = Math.round((correct / questions.length) * 100);
        const timeSpent = Math.round((this.endTime - this.startTime) / 1000 / 60);

        // Score summary
        const scoreSummary = document.getElementById('score-summary');
        let scoreClass = 'score-poor';
        let scoreText = 'Needs Improvement';

        if (percentage >= 90) {
            scoreClass = 'score-excellent';
            scoreText = 'Excellent';
        } else if (percentage >= 75) {
            scoreClass = 'score-good';
            scoreText = 'Good';
        } else if (percentage >= 60) {
            scoreClass = 'score-average';
            scoreText = 'Average';
        }

        scoreSummary.innerHTML = `
            <div class="score-circle ${scoreClass}">${percentage}%</div>
            <h3>${scoreText}</h3>
            <p><strong>Score:</strong> ${correct}/${questions.length} correct</p>
            <p><strong>Attempted:</strong> ${attempted}/${questions.length} questions</p>
            <p><strong>Time:</strong> ${timeSpent} minutes</p>
        `;

        // Detailed results
        const detailedResults = document.getElementById('detailed-results');
        let html = '<h3>Detailed Results:</h3>';

        detailed.forEach((result, index) => {
            const statusClass = result.isCorrect ? 'correct' :
                result.isAttempted ? 'incorrect' : 'unanswered';
            const statusText = result.isCorrect ? 'Correct' :
                result.isAttempted ? 'Incorrect' : 'Not Attempted';

            html += `
                <div class="result-question ${statusClass}">
                    <div class="result-title">Question ${index + 1}: ${result.question.title}</div>
                    <div class="result-status">Status: <strong>${statusText}</strong></div>
                    
                    ${result.isAttempted ? `
                        <div>
                            <strong>Your Answer:</strong>
                            <div class="your-answer">${result.userCode}</div>
                        </div>
                    ` : ''}
                    
                    ${result.errorMessage ? `
                        <div style="color: #e53e3e; margin: 0.5rem 0;">
                            <strong>Error:</strong> ${result.errorMessage}
                        </div>
                    ` : ''}
                    
                    <div class="result-explanation">
                        <strong>Correct Solution:</strong>
                        <div class="correct-answer">${result.question.solution}</div>
                        <p><strong>Explanation:</strong> ${result.question.explanation}</p>
                    </div>
                </div>
            `;
        });

        detailedResults.innerHTML = html;
    }

    restartAssessment () {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(questions.length).fill('');
        this.timeRemaining = 30 * 60;
        this.startTime = null;
        this.endTime = null;

        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.showScreen('start-screen');
    }

    showScreen (screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CoderbyteMockAssessment();
});