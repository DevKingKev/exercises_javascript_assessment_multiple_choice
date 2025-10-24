// TypeScript Server Configuration and Types
const express = require( 'express' );
const path = require( 'path' );
const fs = require( 'fs' );
const open = require( 'open' );

import type { Request, Response } from 'express';

// Define interfaces for better type safety
interface TestMetadata {
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];
}

interface TestQuestion {
    question: string;
    options: { [key: string]: string; };
    correct: string;
    explanation?: string;
}

interface TestData {
    metadata: TestMetadata;
    questions: TestQuestion[];
}

interface TestStructure {
    [difficulty: string]: ( TestMetadata & { id: string; } )[];
}

const app = express();
const PORT = 3001;

// Get project root directory (go up two levels from dist/src/)
const projectRoot = path.resolve( __dirname, '../../' );

// Serve static files from the project root directory
app.use( express.static( projectRoot ) );

// API endpoint to get available tests
app.get( '/api/tests', ( req: Request, res: Response ) => {
    const testsDir = path.join( projectRoot, 'tests' );
    const testStructure: TestStructure = {};

    try {
        const difficulties = fs.readdirSync( testsDir );

        difficulties.forEach( ( difficulty: string ) => {
            const difficultyPath = path.join( testsDir, difficulty );
            if ( fs.statSync( difficultyPath ).isDirectory() ) {
                testStructure[difficulty] = [];

                const testFiles = fs.readdirSync( difficultyPath );
                testFiles.forEach( ( file: string ) => {
                    if ( file.endsWith( '.js' ) ) {
                        const testPath = path.join( difficultyPath, file );
                        try {
                            // Use require to load the test metadata
                            delete require.cache[require.resolve( testPath )]; // Clear cache
                            const testData = require( testPath ) as TestData;

                            if ( testData.metadata ) {
                                testStructure[difficulty].push( {
                                    id: file.replace( '.js', '' ),
                                    ...testData.metadata
                                } );
                            }
                        } catch ( error ) {
                            console.warn( `Error loading test ${file}:`, ( error as Error ).message );
                        }
                    }
                } );
            }
        } );

        res.json( testStructure );
    } catch ( error ) {
        console.error( 'Error reading tests directory:', error );
        res.status( 500 ).json( { error: 'Failed to load tests' } );
    }
} );

// API endpoint to get specific test questions
app.get( '/api/test/:difficulty/:testId', ( req: Request, res: Response ) => {
    const { difficulty, testId } = req.params;
    const testPath = path.join( projectRoot, 'tests', difficulty, `${testId}.js` );

    try {
        // Clear require cache to ensure fresh data
        delete require.cache[require.resolve( testPath )];
        const testData = require( testPath ) as TestData;

        res.json( {
            metadata: {
                id: testId,
                ...testData.metadata
            },
            questions: testData.questions
        } );
    } catch ( error ) {
        console.error( `Error loading test ${difficulty}/${testId}:`, error );
        res.status( 404 ).json( { error: 'Test not found' } );
    }
} );

// Serve the main page
app.get( '/', ( req: Request, res: Response ) => {
    res.sendFile( path.join( projectRoot, 'index.html' ) );
} );

app.listen( PORT, () => {
    console.log( `TypeScript Multiple Choice Assessment Platform running at http://localhost:${PORT}` );
    console.log( 'Server started successfully - ready to accept connections' );
    console.log( `Project root: ${projectRoot}` );
    console.log( `Tests directory: ${path.join( projectRoot, 'tests' )}` );
    
    // Test if tests directory exists
    const testsDir = path.join( projectRoot, 'tests' );
    if ( fs.existsSync( testsDir ) ) {
        console.log( '✓ Tests directory found' );
        const difficulties = fs.readdirSync( testsDir );
        console.log( 'Available difficulties:', difficulties );
    } else {
        console.log( '✗ Tests directory not found at:', testsDir );
    }
    
    // Comment out browser opening for now
    // open( `http://localhost:${PORT}` );
} );

module.exports = app;