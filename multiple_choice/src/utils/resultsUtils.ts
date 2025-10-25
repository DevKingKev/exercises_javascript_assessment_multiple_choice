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
