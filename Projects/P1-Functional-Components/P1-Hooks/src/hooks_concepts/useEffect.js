import React, { useState, useEffect } from 'react';
import './App.css';

const simple = () => {
  console.log("Outside main funct")
}

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("useEffect render")
    document.title = `You clicked ${count} times`;
    return () => {
      console.log("component is getting cleared")
    }
  })

  useEffect(() => {
    console.log("useEffect render2")


  }, [simple()])


  return (
    <div className="App"><br /><br />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App;
