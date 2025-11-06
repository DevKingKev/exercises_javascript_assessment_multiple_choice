import type { TopicBreakdown, ScoreBadgeClass } from '../models';

export function getScoreBadgeClass ( percentage: number ): ScoreBadgeClass {
    if ( percentage >= 90 ) return 'score-excellent';
    if ( percentage >= 75 ) return 'score-good';
    if ( percentage >= 60 ) return 'score-average';
    return 'score-poor';
}

export function getImprovementTopics ( topicBreakdown: TopicBreakdown ): string[] {
    const improvementTopics: string[] = [];
    Object.entries( topicBreakdown ).forEach( ( [topic, scores] ) => {
        const typedScores = scores as { correct: number; total: number; };
        const percentage = ( typedScores.correct / typedScores.total ) * 100;
        if ( percentage < 70 ) { // Topics with less than 70% need improvement
            improvementTopics.push( topic );
        }
    } );
    return improvementTopics;
}

export function formatTimeTaken ( startTime: Date | null ): string {
    if ( !startTime ) return '0:00';

    const endTime = new Date();
    const timeTaken = endTime.getTime() - startTime.getTime();
    const minutes = Math.floor( timeTaken / ( 1000 * 60 ) );
    const seconds = Math.floor( ( timeTaken % ( 1000 * 60 ) ) / 1000 );

    return `${minutes}:${seconds.toString().padStart( 2, '0' )}`;
}

// Aggregation helpers moved here from resultsAggregates for reuse across
// components and the store. These are pure helpers and well-covered by tests.

import type { ResultRecord, ResultsHistory } from '@/models';

export function countResultsForDifficulty ( assessmentsMap?: { [k: string]: ResultRecord[]; } | null ): number {
    if ( !assessmentsMap || typeof assessmentsMap !== 'object' ) return 0;
    let total = 0;
    for ( const key of Object.keys( assessmentsMap ) ) {
        const list = ( assessmentsMap as any )[key];
        if ( Array.isArray( list ) ) total += list.length;
    }
    return total;
}

export function averageAcrossAllAttemptsForDifficulty ( assessmentsMap?: { [k: string]: ResultRecord[]; } | null ): number {
    if ( !assessmentsMap || typeof assessmentsMap !== 'object' ) return 0;
    const values: number[] = [];
    for ( const key of Object.keys( assessmentsMap ) ) {
        const list = ( assessmentsMap as any )[key];
        if ( !Array.isArray( list ) || list.length === 0 ) continue;
        for ( const rec of list ) {
            if ( rec && typeof rec.percentage === 'number' ) values.push( rec.percentage );
        }
    }

    if ( values.length === 0 ) return 0;
    const sum = values.reduce( ( a, b ) => a + b, 0 );
    return Math.round( sum / values.length );
}

export function countResultsInHistoryByDifficulty ( history: ResultsHistory, difficulty: string ): number {
    return countResultsForDifficulty( history?.[difficulty] as any );
}

export function averageAcrossAllAttemptsInHistoryByDifficulty ( history: ResultsHistory, difficulty: string ): number {
    return averageAcrossAllAttemptsForDifficulty( history?.[difficulty] as any );
}
