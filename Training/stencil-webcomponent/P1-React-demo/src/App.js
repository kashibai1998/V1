import './App.css';
import Homepage from './components/homepage.jsx';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* <my-card card="card2" card-desc=""></my-card> */}
      
      <Homepage />
      <my-card tutorial-name="Stencil tutorial videos"></my-card>
    </div>
  );
}

export default App;
