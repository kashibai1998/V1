import logo from './logo.svg';
import './App.css';
import UserInfo from './components/user-information/UserInfo';
import Counter from './components/user-information/Counter';
function App() {
  return (
    <div className="App">
      <h1>Redux Tutorials</h1>
      {/* <UserInfo /> */}
      <Counter/>
    </div>
  );
}

export default App;
