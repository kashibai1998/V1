import React, { Suspense } from 'react';
import './App.css';
// import FetchCall from './components/api-call/FetchCall';

const FetchCall = React.lazy(() => import('./components/api-call/FetchCall'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading....</h1>}>
        <FetchCall />
      </Suspense>
    </div>
  );
}

export default App;
