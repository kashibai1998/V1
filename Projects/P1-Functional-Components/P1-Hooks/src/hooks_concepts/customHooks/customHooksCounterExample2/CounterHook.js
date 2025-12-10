import React, { useState } from "react";

function CounterOne(initialCount, value) {

    const [counter, setCounter] = useState(initialCount);

    const increment = () => {
        setCounter(preCounter => preCounter + value);
    }

    const decrement = () => {
        setCounter(preCounter => preCounter - value);
    }

    const reset = () => {
        setCounter(initialCount);
    }

    return [counter, increment, decrement, reset];
}
export default CounterOne;