import React, { useReducer } from "react";

let initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

function Calculator() {

    const [newState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>{newState}</h2>
            <button onClick={() => dispatch('Increment')}>Increment</button>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
        </div>
    )
}
export default Calculator;