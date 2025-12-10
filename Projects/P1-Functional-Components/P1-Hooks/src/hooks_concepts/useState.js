import React, { useState } from 'react';
import './App.css';

//------always function-------
// const setValue = () => {
//   console.log("Function is calling in render");
//   return 4;
// }

function App() {
  const [count, setCount] = useState(5)
  // const [count, setCount] = useState(setValue())      -----calling the outside function for setting the values-----

  const [theme, setTheme] = useState("Blue");


  const incrementFunc = () => {
    setCount(prevState => prevState + 1);
    setTheme("Red");
  }

  const decrementFunc = () => {
    setCount(prevState => prevState - 1);
    setTheme("Blue");
  }

  return (
    <div className="App"><br /><br />
      <button onClick={decrementFunc}>-</button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={incrementFunc}>+</button>
    </div>
  );
}

export default App;
