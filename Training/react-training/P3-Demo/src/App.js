import logo from './logo.svg';
import './App.css';
import HomePage from './views/homepage/HomePage';
import { Garage } from './components/sidebar/SideBar';
import UserInfo from './views/userinfo/UserInfo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <HomePage /> */}
      <UserInfo/>
      {/* <Garage/> */}

    </div>

  );
}

export default App;
