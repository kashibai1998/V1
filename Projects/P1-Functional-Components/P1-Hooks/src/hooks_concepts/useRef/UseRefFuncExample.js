import React, { useEffect, useState, useRef } from "react";

function UseRefFuncExample() {

    const [timer, setTimer] = useState(0);

    const intervalRef = useRef(null);


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current);
        }

    }, [])



    return (
        <div>
            <h1>UseRef Funcion Example</h1>
            <h2>{timer}</h2>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}


export default UseRefFuncExample;