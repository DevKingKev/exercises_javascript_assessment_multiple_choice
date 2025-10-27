// TypeScript Server - Simplified and Working Version
import express, { Request, Response } from 'express';
// NOTE: http-proxy-middleware is added as a devDependency and will be required dynamically in dev mode.
import path from 'path';
import fs from 'fs';

// Define interfaces for better type safety
interface AssessmentMetadata {
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    timeLimit: number;
    questionCount: number;
    topics?: string[];
}

interface AssessmentQuestion {
    question: string;
    options: { [key: string]: string; };
    correct: string;
    explanation?: string;
}

interface AssessmentData {
    metadata: AssessmentMetadata;
    questions: AssessmentQuestion[];
}

interface AssessmentStructure {
    [difficulty: string]: ( AssessmentMetadata & { id: string; } )[];
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

// API endpoint to get available assessments
app.get( '/api/assessments', ( req: Request, res: Response ) => {
    console.log( '🔍 API /assessments endpoint called' );

    const assessmentsDir = path.resolve( projectRoot, 'assessments' );
    console.log( '📁 Looking for assessments in:', assessmentsDir );

    const assessmentStructure: AssessmentStructure = {};

    try {
        // Check if assessments directory exists
        if ( !fs.existsSync( assessmentsDir ) ) {
            console.error( '❌ Assessments directory not found:', assessmentsDir );
            return res.status( 404 ).json( { error: 'Assessments directory not found' } );
        }

        const difficulties = fs.readdirSync( assessmentsDir );
        console.log( '📋 Found difficulties:', difficulties );

        for ( const difficulty of difficulties ) {
            const difficultyPath = path.join( assessmentsDir, difficulty );

            if ( fs.statSync( difficultyPath ).isDirectory() ) {
                console.log( `📂 Processing difficulty: ${difficulty}` );
                assessmentStructure[difficulty] = [];

                const assessmentFiles = fs.readdirSync( difficultyPath );
                console.log( `📄 Files in ${difficulty}:`, assessmentFiles );

                for ( const file of assessmentFiles ) {
                    if ( file.endsWith( '.js' ) ) {
                        const assessmentPath = path.join( difficultyPath, file );
                        console.log( `🔄 Loading assessment file: ${assessmentPath}` );

                        try {
                            // Clear require cache to ensure fresh data
                            delete require.cache[require.resolve( assessmentPath )];
                            const assessmentData = require( assessmentPath ) as AssessmentData;

                            if ( assessmentData.metadata ) {
                                assessmentStructure[difficulty].push( {
                                    id: file.replace( '.js', '' ),
                                    ...assessmentData.metadata
                                } );
                                console.log( `✅ Successfully loaded: ${file}` );
                            } else {
                                console.warn( `⚠️  No metadata found in: ${file}` );
                            }
                        } catch ( error ) {
                            console.error( `❌ Error loading assessment ${file}:`, ( error as Error ).message );
                        }
                    }
                }
            }
        }

        console.log( '📊 Final assessment structure:', JSON.stringify( assessmentStructure, null, 2 ) );
        res.json( assessmentStructure );
    } catch ( error ) {
        console.error( '💥 Error in /api/assessments:', error );
        res.status( 500 ).json( { error: 'Failed to load assessments' } );
    }
    return;
} );

// API endpoint to get specific assessment questions
app.get( '/api/assessment/:difficulty/:assessmentId', ( req: Request, res: Response ) => {
    const { difficulty, assessmentId } = req.params;
    const assessmentPath = path.resolve( projectRoot, 'assessments', difficulty, `${assessmentId}.js` );

    console.log( `🎯 Loading specific assessment: ${difficulty}/${assessmentId}` );
    console.log( `📁 Assessment path: ${assessmentPath}` );

    try {
        // Clear require cache to ensure fresh data
        delete require.cache[require.resolve( assessmentPath )];
        const assessmentData = require( assessmentPath ) as AssessmentData;

        res.json( {
            metadata: {
                id: assessmentId,
                ...assessmentData.metadata
            },
            questions: assessmentData.questions
        } );
    } catch ( error ) {
        console.error( `❌ Error loading assessment ${difficulty}/${assessmentId}:`, error );
        res.status( 404 ).json( { error: 'Assessment not found' } );
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
    console.log( `🚀 Virtuarama - Multiple Choice Assessment Platform running at http://localhost:${PORT}` );
    console.log( `📂 Project root: ${projectRoot}` );
    console.log( `📋 Assessments directory: ${path.resolve( projectRoot, 'assessments' )}` );
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