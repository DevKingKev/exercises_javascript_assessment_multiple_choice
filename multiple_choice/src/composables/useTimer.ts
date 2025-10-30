import { ref, computed, onUnmounted } from 'vue';

export function useTimer ( timeLimitMinutes: number, onTimeUp: () => void ) {
    const startTime = ref<Date | null>( null );
    const timeRemaining = ref<number>( timeLimitMinutes * 60 * 1000 ); // in milliseconds
    const timerInterval = ref<number | null>( null );

    const formattedTime = computed( () => {
        const totalSeconds = Math.floor( timeRemaining.value / 1000 );
        const minutes = Math.floor( totalSeconds / 60 );
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart( 2, '0' )}:${seconds.toString().padStart( 2, '0' )}`;
    } );

    const isRunning = computed( () => timerInterval.value !== null );

    function start () {
        if ( timerInterval.value !== null ) return; // Already running

        startTime.value = new Date();
        const endTime = new Date( startTime.value.getTime() + timeRemaining.value );

        timerInterval.value = window.setInterval( () => {
            const now = new Date();
            const remaining = endTime.getTime() - now.getTime();

            if ( remaining <= 0 ) {
                timeRemaining.value = 0;
                stop();
                onTimeUp();
                return;
            }

            timeRemaining.value = remaining;
        }, 1000 );
    }

    function stop () {
        if ( timerInterval.value !== null ) {
            clearInterval( timerInterval.value );
            timerInterval.value = null;
        }
    }

    function reset ( newTimeLimitMinutes?: number ) {
        stop();
        if ( newTimeLimitMinutes !== undefined ) {
            timeRemaining.value = newTimeLimitMinutes * 60 * 1000;
        } else {
            timeRemaining.value = timeLimitMinutes * 60 * 1000;
        }
        startTime.value = null;
    }

    // Cleanup on component unmount
    onUnmounted( () => {
        stop();
    } );

    return {
        startTime,
        timeRemaining,
        formattedTime,
        isRunning,
        start,
        stop,
        reset
    };
}
