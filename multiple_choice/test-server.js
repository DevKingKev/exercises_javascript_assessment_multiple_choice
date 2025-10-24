const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3002; // Use a different port

// Simple test endpoint
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// Test the file system access
app.get('/api/tests', (req, res) => {
    console.log('API /tests endpoint hit');

    const testsDir = path.join(__dirname, 'tests');
    console.log('Tests directory:', testsDir);

    try {
        const exists = fs.existsSync(testsDir);
        console.log('Tests directory exists:', exists);

        if (!exists) {
            return res.status(404).json({ error: 'Tests directory not found' });
        }

        const difficulties = fs.readdirSync(testsDir);
        console.log('Found difficulties:', difficulties);

        const result = {};

        for (const difficulty of difficulties) {
            const difficultyPath = path.join(testsDir, difficulty);
            const stat = fs.statSync(difficultyPath);

            if (stat.isDirectory()) {
                console.log(`Processing difficulty: ${difficulty}`);
                result[difficulty] = [];

                const testFiles = fs.readdirSync(difficultyPath);
                console.log(`Test files in ${difficulty}:`, testFiles);

                for (const file of testFiles) {
                    if (file.endsWith('.js')) {
                        console.log(`Processing file: ${file}`);
                        const testPath = path.join(difficultyPath, file);

                        try {
                            // Clear cache
                            delete require.cache[require.resolve(testPath)];
                            const testData = require(testPath);

                            if (testData.metadata) {
                                result[difficulty].push({
                                    id: file.replace('.js', ''),
                                    ...testData.metadata
                                });
                                console.log(`Added test: ${file}`);
                            } else {
                                console.warn(`No metadata in ${file}`);
                            }
                        } catch (error) {
                            console.error(`Error loading ${file}:`, error.message);
                        }
                    }
                }
            }
        }

        console.log('Sending result:', Object.keys(result));
        res.json(result);
    } catch (error) {
        console.error('Error in /api/tests:', error);
        res.status(500).json({ error: error.message });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Test server running at http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.error('Server error:', error);
});