import { useReducer } from 'react';
import Header from "./Header";

const reducerFun = (state, action) => {
  if (action.type === 'inc') {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === 'dec') {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === 'res') {
    return {
      count: 0,
    };
  }
  return state;
};

export default function Reducer() {
  const [counter, counterDispatch] = useReducer(reducerFun, {
    count: 0,
  });

  console.log("counter")
  const handleInc = () => {
    counterDispatch({
      type: 'inc',
    });
  };
  const handleDec = () => {
    counterDispatch({
      type: 'dec',
    });
  };
  const handleReset = () => {
    counterDispatch({
      type: 'res',
    });
  };
  return (
    <div>
      <h1>Counter Reducer</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleReset}>Reset</button>
      <p>{counter.count}</p>
      <Header/>
    </div>
  );
}
