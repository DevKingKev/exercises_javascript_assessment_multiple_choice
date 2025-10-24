const express = require('express');
const path = require('path');
const fs = require('fs');
// const open = require('open'); // Commented out to avoid issues

const app = express();
const PORT = 3001;

// Serve static files from the current directory
app.use(express.static(__dirname));

// API endpoint to get available tests
app.get('/api/tests', (req, res) => {
    const testsDir = path.join(__dirname, 'tests');
    const testStructure = {};

    try {
        const difficulties = fs.readdirSync(testsDir);

        difficulties.forEach(difficulty => {
            const difficultyPath = path.join(testsDir, difficulty);
            if (fs.statSync(difficultyPath).isDirectory()) {
                testStructure[difficulty] = [];

                const testFiles = fs.readdirSync(difficultyPath);
                testFiles.forEach(file => {
                    if (file.endsWith('.js')) {
                        const testPath = path.join(difficultyPath, file);
                        try {
                            // Use require to load the test metadata
                            delete require.cache[require.resolve(testPath)]; // Clear cache
                            const testData = require(testPath);

                            if (testData.metadata) {
                                testStructure[difficulty].push({
                                    id: file.replace('.js', ''),
                                    ...testData.metadata
                                });
                            }
                        } catch (error) {
                            console.warn(`Error loading test ${file}:`, error.message);
                        }
                    }
                });
            }
        });

        res.json(testStructure);
    } catch (error) {
        console.error('Error reading tests directory:', error);
        res.status(500).json({ error: 'Failed to load tests' });
    }
});

// API endpoint to get specific test questions
app.get('/api/test/:difficulty/:testId', (req, res) => {
    const { difficulty, testId } = req.params;
    const testPath = path.join(__dirname, 'tests', difficulty, `${testId}.js`);

    try {
        // Clear require cache to ensure fresh data
        delete require.cache[require.resolve(testPath)];
        const testData = require(testPath);

        res.json({
            metadata: {
                id: testId,
                ...testData.metadata
            },
            questions: testData.questions
        });
    } catch (error) {
        console.error(`Error loading test ${difficulty}/${testId}:`, error);
        res.status(404).json({ error: 'Test not found' });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(PORT, () => {
    console.log(`Multiple Choice Assessment Platform running at http://localhost:${PORT}`);
    console.log('Server ready for connections');
    console.log('Press Ctrl+C to stop the server');
});

server.on('error', (error) => {
    console.error('Server error:', error);
});

process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down gracefully...');
    server.close(() => {
        process.exit(0);
    });
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});