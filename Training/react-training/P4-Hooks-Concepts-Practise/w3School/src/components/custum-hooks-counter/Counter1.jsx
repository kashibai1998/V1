import React, { useState } from "react";
import useCounter from "./useCounter";

function Counter1() {
  const counterVal = useCounter(0);
  return (
    <div>
      <h2>Counter is:{counterVal.counter}</h2><br/>
      <div>
        <button onClick={counterVal.incrementMethod}>Increment1</button>
        <br /><br/>
        <button onClick={counterVal.decrementMethod}>Increment1</button>
      </div>
    </div>
  );
}
export default Counter1;
