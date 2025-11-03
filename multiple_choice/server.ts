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
    // Millisecond timestamp representing when the assessment file was created/added
    assessmentUniqueId?: number;
    // Type of the assessment (e.g. 'multiple-choice')
    testType?: string;
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

// NOTE: The server now exposes language-scoped assessment listings via
// `GET /api/assessments/:language` (e.g. `/api/assessments/javascript`).
// The old query-param form `/api/assessments?language=...` has been removed
// to avoid ambiguity. Use the path-style endpoint instead.

// Backwards/alternate route that accepts language as a path segment: /api/assessments/:language
app.get( '/api/assessments/:language', ( req: Request, res: Response ) => {
    console.log( '🔍 API /assessments/:language endpoint called' );

    const assessmentsDir = path.resolve( projectRoot, 'assessments' );
    console.log( '📁 Looking for assessments in:', assessmentsDir );

    const assessmentStructure: AssessmentStructure = {};

    try {
        if ( !fs.existsSync( assessmentsDir ) ) {
            console.error( '❌ Assessments directory not found:', assessmentsDir );
            return res.status( 404 ).json( { error: 'Assessments directory not found' } );
        }

        const lang = ( req.params.language || '' ).toString().trim();
        if ( !lang ) {
            return res.status( 400 ).json( { error: 'language path parameter is required' } );
        }

        const langDir = path.join( assessmentsDir, lang );
        if ( !fs.existsSync( langDir ) ) {
            console.error( `❌ Language directory not found for '${lang}':`, langDir );
            return res.status( 404 ).json( { error: 'Language not found' } );
        }

        const difficulties = fs.readdirSync( langDir );
        console.log( '📋 Found difficulties for', lang, ':', difficulties );

        for ( const difficulty of difficulties ) {
            const difficultyPath = path.join( langDir, difficulty );

            if ( fs.statSync( difficultyPath ).isDirectory() ) {
                assessmentStructure[difficulty] = [];

                const assessmentFiles = fs.readdirSync( difficultyPath );

                for ( const file of assessmentFiles ) {
                    if ( file.endsWith( '.js' ) ) {
                        const assessmentPath = path.join( difficultyPath, file );
                        try {
                            delete require.cache[require.resolve( assessmentPath )];
                            const assessmentData = require( assessmentPath ) as AssessmentData;

                            if ( assessmentData.metadata ) {
                                assessmentStructure[difficulty].push( {
                                    id: file.replace( '.js', '' ),
                                    ...assessmentData.metadata
                                } );
                            }
                        } catch ( error ) {
                            console.error( `❌ Error loading assessment ${file}:`, ( error as Error ).message );
                        }
                    }
                }
            }
        }

        res.json( assessmentStructure );
    } catch ( error ) {
        console.error( '💥 Error in /api/assessments/:language:', error );
        res.status( 500 ).json( { error: 'Failed to load assessments' } );
    }
    return;
} );

// API endpoint to get specific assessment questions
// New route expects language, difficulty, and assessment id: /api/assessment/:language/:difficulty/:assessmentId
app.get( '/api/assessment/:language/:difficulty/:assessmentId', ( req: Request, res: Response ) => {
    const { language, difficulty, assessmentId } = req.params;
    const assessmentPath = path.resolve( projectRoot, 'assessments', language, difficulty, `${assessmentId}.js` );

    console.log( `🎯 Loading specific assessment: ${language}/${difficulty}/${assessmentId}` );
    console.log( `📁 Assessment path: ${assessmentPath}` );

    try {
        // Clear require cache to ensure fresh data
        delete require.cache[require.resolve( assessmentPath )];
        const assessmentData = require( assessmentPath ) as AssessmentData;

        // Attach language into metadata for downstream usage
        const metadata = Object.assign( {}, assessmentData.metadata || {}, { id: assessmentId, language } );

        res.json( {
            metadata,
            questions: assessmentData.questions
        } );
    } catch ( error ) {
        console.error( `❌ Error loading assessment ${language}/${difficulty}/${assessmentId}:`, error );
        res.status( 404 ).json( { error: 'Assessment not found' } );
    }
} );

// Backwards-compatible route for older layout: /api/assessment/:difficulty/:assessmentId
app.get( '/api/assessment/:difficulty/:assessmentId', ( req: Request, res: Response ) => {
    const { difficulty, assessmentId } = req.params;
    const assessmentPath = path.resolve( projectRoot, 'assessments', difficulty, `${assessmentId}.js` );

    console.log( `🎯 Loading specific assessment (legacy): ${difficulty}/${assessmentId}` );
    console.log( `📁 Assessment path (legacy): ${assessmentPath}` );

    try {
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
    app.use( '/', createProxyMiddleware( ( pathname: string, req: any ) => {
        const shouldProxy = !pathname.startsWith( '/api' );
        console.log( `🔀 Proxy decision for ${pathname}: ${shouldProxy ? 'PROXY to Vite' : 'LOCAL to Express'}` );
        return shouldProxy;
    }, {
        target: `http://localhost:${vitePort}`,
        changeOrigin: true,
        ws: true,
        logLevel: 'debug',
        onProxyReq: ( proxyReq: any, req: any ) => {
            console.log( `➡️  Proxying ${req.method} ${req.url} to Vite` );
        },
        onProxyRes: ( proxyRes: any, req: any ) => {
            console.log( `⬅️  Response from Vite for ${req.url}: ${proxyRes.statusCode}` );
        },
        onError: ( err: any, req: any, res: any ) => {
            console.error( `❌ Proxy error for ${req.url}:`, err.message );
        }
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

    // Serve the main page (only in production/non-proxy mode)
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
}

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