import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Assessment, AvailableAssessments, AssessmentMetadata } from '@/models';

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
    async function loadAvailableAssessments ( force = false ) {
        // Skip if already loaded and not forcing a refresh
        if ( assessmentsLoaded.value && !force ) {
            return;
        }

        try {
            const response = await fetch( '/api/assessments' );
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

    async function loadAssessment ( difficulty: string, assessmentId: string ) {
        try {
            const response = await fetch( `/api/assessment/${difficulty}/${assessmentId}` );
            if ( !response.ok ) {
                throw new Error( 'Failed to load assessment' );
            }
            const assessmentData: Assessment = await response.json();

            currentAssessment.value = assessmentData;
            currentDifficulty.value = difficulty;
            currentQuestionIndex.value = 0;
            userAnswers.value = new Array( assessmentData.questions.length ).fill( null );
            timeLimit.value = assessmentData.metadata.timeLimit;
            startTime.value = new Date();

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
            currentQuestionIndex.value++;
        }
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
            currentQuestionIndex.value = 0;
            userAnswers.value = new Array( currentAssessment.value.questions.length ).fill( null );
            startTime.value = new Date();
        }
    }

    function getAssessmentMetadata ( difficulty: string, assessmentId: string ): ( AssessmentMetadata & { id: string; } ) | null {
        const assessments = availableAssessments.value[difficulty];
        if ( assessments ) {
            return assessments.find( ( assessment: AssessmentMetadata & { id: string; } ) => assessment.id === assessmentId ) || null;
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
        getAssessmentMetadata
    };
} );
