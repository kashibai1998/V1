import React from 'react';
import './App.css';
import CounterOne from './hooks_concepts/customHooks/customHooksCounterExample2/CounterOne';
import CounterSecond from './hooks_concepts/customHooks/customHooksCounterExample2/CounterSecond';


function App() {

  return (
    <div className="App"><br /><br />
      <CounterOne /><br/>
      <CounterSecond />
    </div>
  )
}

export default App;
