import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Organization from './components/organization/Organization';
import Header from './components/header/Header';
import Hello from './components/hello_funct/Hello';
import Loginform from './components/usermanagement/Loginform';
import UserEdit from './components/usermanagement/UserEdit';
function App() {
  let firstName = 'Lucky'
  return (
    <div className="App">
      <Hello firstName={firstName} />
      {/* <BrowserRouter>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/org" component={Organization} />
        <Route path="/about/:company" component={About} />
        <Route path="/login" component={Loginform} />
        <Route path="/edit" component={UserEdit} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
