import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    
    const timer = useRef();
    const dialog = useRef();

    const [startTimer, setStartTimer] = useState(false);
    const [expiredTimer, setExpiredTimer] = useState(false);

    function StartHandler(){
        setStartTimer(true);
        timer.current = setTimeout(()=>{ 
            setExpiredTimer(true);
            dialog.current.showModal();
         }, targetTime * 1000);
    }
    
    function StopHandler(){
        clearTimeout(timer.current);
        setStartTimer(false);
    }

    return(<>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
        <section className="challenge">
            <h2>{title}</h2>
            {expiredTimer && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={startTimer ? StopHandler : StartHandler}>
                    {startTimer ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={startTimer ? "active" : undefined}>
                {startTimer ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
        </>
    );
}