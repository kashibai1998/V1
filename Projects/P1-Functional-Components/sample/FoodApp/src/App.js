import logo from './logo.svg';
import './App.css';
import Myroute from './routes/Myroute'
import Header from './component/header/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      <Myroute/>
    </div>
  );
}

export default App;
