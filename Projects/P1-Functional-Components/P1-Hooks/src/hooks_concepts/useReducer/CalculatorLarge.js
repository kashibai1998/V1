import React, { useReducer } from "react";

let initialState = {
    firstage: 0,
    secondage: 25
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...state, firstage: state.firstage + action.value }
        case 'Decrement':
            return { ...state, firstage: state.firstage - action.value }
        case 'Increment2':
            return { ...state, secondage: state.secondage + action.value }
        case 'Decrement2':
            return { ...state, secondage: state.secondage - action.value }
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

//For using state and reduer we need object
function CalculatorLarge() {

    const [newState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>Reducer1 : {newState.firstage}</h2>
            <h2>Reducer2 : {newState.secondage}</h2>
            <button onClick={() => dispatch({ type: 'Increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'Decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'Increment2', value: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'Decrement2', value: 5 })}>Decrement</button>
        </div>
    )
}
export default CalculatorLarge;