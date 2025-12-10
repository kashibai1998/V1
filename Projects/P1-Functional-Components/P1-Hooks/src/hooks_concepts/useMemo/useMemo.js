import React, { useEffect, useMemo, useState } from 'react';
import UseMemoChild from './hooks_concepts/UseMemoChild.js';
import './App.css';

function useMemo() {  //we are using memo purpose two files as UserMemoChild and useMemo. 
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect render")
  })

  const memoCounter1 = useMemo(() => {
    return <div><UseMemoChild /></div>
  },[]);

  return (
    <div className="App"><br /><br />
      <h1>useMemo Example</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h2>useMemo calling child component</h2>
      <UseMemoChild />
      <h1>parent useMemo:{memoCounter1}</h1>
    </div>
  )
}

export default useMemo;
