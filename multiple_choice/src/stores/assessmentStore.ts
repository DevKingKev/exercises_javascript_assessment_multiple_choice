import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Assessment, AvailableAssessments, AssessmentMetadata } from '@/models';
import resolveTopics from '../utils/topicResolver';
import { useGlobalStore } from '@/stores/globalStore';

export const useAssessmentStore = defineStore( 'assessment', () => {
    // State
    const availableAssessments = ref<AvailableAssessments>( {} );
    const assessmentsLoaded = ref<boolean>( false );
    const currentAssessment = ref<Assessment | null>( null );
    const currentDifficulty = ref<string>( 'easy' );
    const currentQuestionIndex = ref<number>( 0 );
    const userAnswers = ref<( string | null )[]>( [] );
    const startTime = ref<Date | null>( null );
    const timeLimit = ref<number>( 30 ); // minutes

    // Computed
    const currentQuestion = computed( () => {
        if ( !currentAssessment.value || currentQuestionIndex.value >= currentAssessment.value.questions.length ) {
            return null;
        }
        return currentAssessment.value.questions[currentQuestionIndex.value];
    } );

    const totalQuestions = computed( () => {
        return currentAssessment.value?.questions.length || 0;
    } );

    const isFirstQuestion = computed( () => currentQuestionIndex.value === 0 );

    const isLastQuestion = computed( () => {
        return currentQuestionIndex.value === totalQuestions.value - 1;
    } );

    const progressPercentage = computed( () => {
        if ( totalQuestions.value === 0 ) return 0;
        return ( ( currentQuestionIndex.value + 1 ) / totalQuestions.value ) * 100;
    } );

    const unansweredCount = computed( () => {
        return userAnswers.value.filter( answer => answer === null ).length;
    } );

    const answeredCount = computed( () => {
        return userAnswers.value.filter( answer => answer !== null ).length;
    } );

    const assessmentsByDifficulty = computed( () => {
        return ( difficulty: string ) => availableAssessments.value[difficulty] || [];
    } );

    const assessmentCount = computed( () => {
        return ( difficulty: string ) => availableAssessments.value[difficulty]?.length || 0;
    } );

    // Actions
    async function loadAvailableAssessments ( force = false, language?: string ) {
        // Skip if already loaded and not forcing a refresh
        if ( assessmentsLoaded.value && !force ) {
            return;
        }

        try {
            // Resolve language: prefer explicit param, then global store, then fallback
            let lang = language;
            try {
                if ( !lang ) {
                    const gs = useGlobalStore();
                    lang = gs.languageNormalized || undefined;
                }
            } catch ( e ) {
                // ignore and fall back
            }
            if ( !lang ) lang = 'javascript';

            // Use path-style language endpoint (e.g. /api/assessments/javascript)
            const response = await fetch( `/api/assessments/${encodeURIComponent( lang )}` );
            if ( !response.ok ) {
                throw new Error( 'Failed to load assessments' );
            }
            const data: AvailableAssessments = await response.json();
            availableAssessments.value = data;
            assessmentsLoaded.value = true;
        } catch ( error ) {
            console.error( '❌ Error loading assessments:', error );
            throw error;
        }
    }

    async function loadAssessment ( difficulty: string, assessmentId: string, language?: string ) {
        try {
            // resolve language similar to loadAvailableAssessments
            let lang = language;
            try {
                if ( !lang ) {
                    const gs = useGlobalStore();
                    lang = gs.languageNormalized || undefined;
                }
            } catch ( e ) {
                // ignore
            }
            if ( !lang ) lang = 'javascript';

            const response = await fetch( `/api/assessment/${encodeURIComponent( lang )}/${encodeURIComponent( difficulty )}/${encodeURIComponent( assessmentId )}` );
            if ( !response.ok ) {
                throw new Error( 'Failed to load assessment' );
            }
            const assessmentData: Assessment = await response.json();

            // Enrich each question with resolvedTopics using metadata.topicLinks.
            // Support assessments where questions may not have topic data (tests/mocks).
            const topicLinks = ( assessmentData.metadata && ( assessmentData.metadata as any ).topicLinks ) || [];

            if ( Array.isArray( assessmentData.questions ) ) {
                for ( const q of assessmentData.questions ) {
                    // topic names might be stored at q.topic.topics or q.topics depending on source
                    const names: string[] = ( q && ( ( q as any ).topic && ( q as any ).topic.topics ) ) || ( ( q as any ).topics ) || [];
                    ( q as any ).resolvedTopics = resolveTopics( names, topicLinks );
                }
            }

            currentAssessment.value = assessmentData;
            currentDifficulty.value = difficulty;
            currentQuestionIndex.value = 0;
            userAnswers.value = new Array( assessmentData.questions.length ).fill( null );
            timeLimit.value = assessmentData.metadata.timeLimit;
            startTime.value = new Date();

            // Try to restore any saved progress for this assessment from localStorage
            try {
                const key = getProgressKeyForAssessment( assessmentData );
                const raw = localStorage.getItem( key );
                if ( raw ) {
                    const saved = JSON.parse( raw );
                    // Only restore if shapes look correct
                    if ( saved && Array.isArray( saved.userAnswers ) ) {
                        // ensure length matches
                        if ( saved.userAnswers.length === assessmentData.questions.length ) {
                            userAnswers.value = saved.userAnswers;
                        }
                    }
                    if ( typeof saved.currentQuestionIndex === 'number' ) {
                        // clamp to valid range
                        const idx = Math.max( 0, Math.min( saved.currentQuestionIndex, assessmentData.questions.length - 1 ) );
                        currentQuestionIndex.value = idx;
                    }
                    if ( typeof saved.elapsedMs === 'number' ) {
                        // adjust startTime so that elapsedMs have already passed
                        startTime.value = new Date( Date.now() - saved.elapsedMs );
                    }
                }
            } catch ( e ) {
                // ignore parse errors and continue with fresh state
                // keep the existing startTime and userAnswers
                console.error( 'Error restoring assessment progress:', e );
            }

            return assessmentData;
        } catch ( error ) {
            console.error( 'Error loading assessment:', error );
            throw error;
        }
    }

    function selectAnswer ( answerLetter: string ) {
        userAnswers.value[currentQuestionIndex.value] = answerLetter;
    }

    function nextQuestion () {
        if ( currentQuestionIndex.value < totalQuestions.value - 1 ) {
            // Before advancing, persist current progress (including the selected answer and elapsed time)
            try {
                saveCurrentProgress();
            } catch ( e ) {
                console.error( 'Error saving assessment progress:', e );
            }

            currentQuestionIndex.value++;
        }
    }

    function saveCurrentProgress () {
        if ( !currentAssessment.value ) return;

        const key = getProgressKeyForAssessment( currentAssessment.value );
        const elapsedMs = startTime.value ? ( Date.now() - startTime.value.getTime() ) : 0;
        const payload = {
            currentQuestionIndex: currentQuestionIndex.value,
            userAnswers: userAnswers.value,
            elapsedMs
        };
        localStorage.setItem( key, JSON.stringify( payload ) );
    }

    function clearSavedProgressForCurrent () {
        if ( !currentAssessment.value ) return;
        const key = getProgressKeyForAssessment( currentAssessment.value );
        localStorage.removeItem( key );
    }

    function getProgressKeyForAssessment ( assessment: any ) {
        // Prefer assessment.metadata.assessmentUniqueId if present, fallback to id/assessmentId and difficulty
        const meta = assessment.metadata || {};
        const unique = meta.assessmentUniqueId || meta.assessmentId || meta.id || assessment.id;
        const diff = assessment.metadata?.difficulty || currentDifficulty.value || 'unknown';
        const lang = assessment.metadata?.language || ( () => {
            try { return useGlobalStore().languageNormalized || 'javascript'; } catch { return 'javascript'; }
        } )();
        return `assessment-progress:${String( lang )}:${diff}:${String( unique )}`;
    }

    function previousQuestion () {
        if ( currentQuestionIndex.value > 0 ) {
            currentQuestionIndex.value--;
        }
    }

    function jumpToQuestion ( index: number ) {
        if ( index >= 0 && index < totalQuestions.value ) {
            currentQuestionIndex.value = index;
        }
    }

    function resetAssessment () {
        currentAssessment.value = null;
        currentQuestionIndex.value = 0;
        userAnswers.value = [];
        startTime.value = null;
        timeLimit.value = 30;
    }

    function retakeAssessment () {
        if ( currentAssessment.value ) {
            // Clear any saved progress for this assessment (we're starting fresh)
            try {
                clearSavedProgressForCurrent();
            } catch ( e ) {
                console.error( 'Error clearing saved progress on retake:', e );
            }

            currentQuestionIndex.value = 0;
            userAnswers.value = new Array( currentAssessment.value.questions.length ).fill( null );
            startTime.value = new Date();
        }
    }

    function getAssessmentMetadata ( difficulty: string, assessmentId: string ): ( AssessmentMetadata & { id: string; } ) | null {
        const assessments = availableAssessments.value[difficulty];
        if ( !assessments || !Array.isArray( assessments ) ) return null;

        const target = String( assessmentId );

        for ( const item of assessments ) {
            // item may be either the metadata object itself or a wrapper that contains `metadata`.
            const candidateMeta: any = ( item && ( item as any ).metadata ) ? ( item as any ).metadata : item;

            if ( !candidateMeta ) continue;

            // Try a few possible id fields that might appear in different assessment sources
            const candidates = [candidateMeta.id, candidateMeta.assessmentId, ( item as any ).id, ( item as any ).assessmentId];

            for ( const c of candidates ) {
                if ( c !== undefined && c !== null && String( c ) === target ) {
                    // Ensure returned metadata has an `id` property (some sources only provide assessmentId)
                    const out: any = Object.assign( {}, candidateMeta );
                    out.id = out.id || ( item as any ).id || String( target );
                    return out as AssessmentMetadata & { id: string; };
                }
            }
        }

        return null;
    }

    return {
        // State
        availableAssessments,
        assessmentsLoaded,
        currentAssessment,
        currentDifficulty,
        currentQuestionIndex,
        userAnswers,
        startTime,
        timeLimit,

        // Computed
        currentQuestion,
        totalQuestions,
        isFirstQuestion,
        isLastQuestion,
        progressPercentage,
        unansweredCount,
        answeredCount,
        assessmentsByDifficulty,
        assessmentCount,

        // Actions
        loadAvailableAssessments,
        loadAssessment,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        jumpToQuestion,
        resetAssessment,
        retakeAssessment,
        clearSavedProgressForCurrent,
        getAssessmentMetadata
    };
} );
