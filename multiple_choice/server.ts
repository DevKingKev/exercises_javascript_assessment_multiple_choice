// TypeScript Server - Simplified and Working Version
import express, { Request, Response } from 'express';
// NOTE: http-proxy-middleware is added as a devDependency and will be required dynamically in dev mode.
import path from 'path';
import fs from 'fs';

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

// Use current directory (the source will be compiled to dist)
const projectRoot = path.resolve( __dirname, '../' ); // Go up one level from dist to project root

// Decide whether we're running in Vite dev mode. dev-runner sets VITE_DEV=1 when spawning the server.
const viteDev = process.env.VITE_DEV === '1' || process.env.NODE_ENV === 'development';
const vitePort = process.env.VITE_PORT || '5173';

// ============================================================================
// API ROUTES - Must be registered BEFORE proxy middleware!
// ============================================================================

// API endpoint to get available tests
app.get( '/api/tests', ( req: Request, res: Response ) => {
    console.log( '🔍 API /tests endpoint called' );

    const testsDir = path.resolve( projectRoot, 'tests' );
    console.log( '📁 Looking for tests in:', testsDir );

    const testStructure: TestStructure = {};

    try {
        // Check if tests directory exists
        if ( !fs.existsSync( testsDir ) ) {
            console.error( '❌ Tests directory not found:', testsDir );
            return res.status( 404 ).json( { error: 'Tests directory not found' } );
        }

        const difficulties = fs.readdirSync( testsDir );
        console.log( '📋 Found difficulties:', difficulties );

        for ( const difficulty of difficulties ) {
            const difficultyPath = path.join( testsDir, difficulty );

            if ( fs.statSync( difficultyPath ).isDirectory() ) {
                console.log( `📂 Processing difficulty: ${difficulty}` );
                testStructure[difficulty] = [];

                const testFiles = fs.readdirSync( difficultyPath );
                console.log( `📄 Files in ${difficulty}:`, testFiles );

                for ( const file of testFiles ) {
                    if ( file.endsWith( '.js' ) ) {
                        const testPath = path.join( difficultyPath, file );
                        console.log( `🔄 Loading test file: ${testPath}` );

                        try {
                            // Clear require cache to ensure fresh data
                            delete require.cache[require.resolve( testPath )];
                            const testData = require( testPath ) as TestData;

                            if ( testData.metadata ) {
                                testStructure[difficulty].push( {
                                    id: file.replace( '.js', '' ),
                                    ...testData.metadata
                                } );
                                console.log( `✅ Successfully loaded: ${file}` );
                            } else {
                                console.warn( `⚠️  No metadata found in: ${file}` );
                            }
                        } catch ( error ) {
                            console.error( `❌ Error loading test ${file}:`, ( error as Error ).message );
                        }
                    }
                }
            }
        }

        console.log( '📊 Final test structure:', JSON.stringify( testStructure, null, 2 ) );
        res.json( testStructure );
    } catch ( error ) {
        console.error( '💥 Error in /api/tests:', error );
        res.status( 500 ).json( { error: 'Failed to load tests' } );
    }
    return;
} );

// API endpoint to get specific test questions
app.get( '/api/test/:difficulty/:testId', ( req: Request, res: Response ) => {
    const { difficulty, testId } = req.params;
    const testPath = path.resolve( projectRoot, 'tests', difficulty, `${testId}.js` );

    console.log( `🎯 Loading specific test: ${difficulty}/${testId}` );
    console.log( `📁 Test path: ${testPath}` );

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
        console.error( `❌ Error loading test ${difficulty}/${testId}:`, error );
        res.status( 404 ).json( { error: 'Test not found' } );
    }
} );

// ============================================================================
// PROXY OR STATIC FILE SERVING
// ============================================================================

if ( viteDev ) {
    console.log( `↪️  Dev mode detected — proxying non-/api requests to Vite at http://localhost:${vitePort}` );
    // Dynamically require the proxy middleware to avoid import-time failures when not installed in production.
    // The dependency is added as a devDependency in package.json.
    // Only proxy requests that are NOT for /api — keep API routes local.
    // `createProxyMiddleware` accepts a filter function as the first argument.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createProxyMiddleware } = require( 'http-proxy-middleware' );
    app.use( '/', createProxyMiddleware( ( pathname: string ) => {
        return !pathname.startsWith( '/api' );
    }, {
        target: `http://localhost:${vitePort}`,
        changeOrigin: true,
        ws: true,
        logLevel: 'warn'
    } ) );
} else {
    // If a built client exists (vite output) serve that from dist/public. Otherwise fall back to project root.
    const builtClientDir = path.resolve( projectRoot, 'dist', 'public' );
    if ( fs.existsSync( builtClientDir ) ) {
        console.log( '📦 Serving built client from:', builtClientDir );
        app.use( express.static( builtClientDir ) );
    } else {
        console.log( '🧭 Serving static files from project root (dev mode) at', projectRoot );
        app.use( express.static( projectRoot ) );
    }
}

// Serve the main page
app.get( '/', ( req: Request, res: Response ) => {
    // Prefer the built index.html if present
    const builtIndex = path.resolve( projectRoot, 'dist', 'public', 'index.html' );
    if ( fs.existsSync( builtIndex ) ) {
        console.log( '🏠 Serving built index.html from:', builtIndex );
        return res.sendFile( builtIndex );
    }
    const indexPath = path.resolve( projectRoot, 'index.html' );
    console.log( '🏠 Serving index.html from:', indexPath );
    return res.sendFile( indexPath );
} );

// Start server with proper error handling
const server = app.listen( PORT, () => {
    console.log( `🚀 TypeScript Multiple Choice Assessment Platform running at http://localhost:${PORT}` );
    console.log( `📂 Project root: ${projectRoot}` );
    console.log( `📋 Tests directory: ${path.resolve( projectRoot, 'tests' )}` );
    console.log( '⏹️  Press Ctrl+C to stop the server' );
} );

server.on( 'error', ( error: Error ) => {
    console.error( '💥 Server error:', error );
} );

// Graceful shutdown
process.on( 'SIGINT', () => {
    console.log( '\n🛑 Received SIGINT, shutting down gracefully...' );
    server.close( () => {
        console.log( '✅ Server closed' );
        process.exit( 0 );
    } );
} );

export default app;