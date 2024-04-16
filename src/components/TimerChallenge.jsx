import { useState } from "react";

export default function TimerChallenge({title, targetTime}){
    
    const [startTimer, setStartTimer] = useState(false);
    const [expiredTimer, setExpiredTimer] = useState(false);

    function StartHandler(){
        setStartTimer(true);
        setTimeout(()=>{ setExpiredTimer(true) }, targetTime * 1000);
    }
    
    function StopHandler(){

    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {expiredTimer && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={StartHandler}>
                    {startTimer ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={startTimer ? "active" : undefined}>
                {startTimer ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
    )
}