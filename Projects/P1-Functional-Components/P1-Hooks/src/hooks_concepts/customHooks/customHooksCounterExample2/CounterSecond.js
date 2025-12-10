import React, { useState } from "react";
import useCounter from './CounterHook';

function CounterSecond() {
    const [counter, increment, decrement, reset] = useCounter(0, 1);

    return (
        <div>
            <h1>Counter :{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Rest</button>
        </div>
    )
}
export default CounterSecond;