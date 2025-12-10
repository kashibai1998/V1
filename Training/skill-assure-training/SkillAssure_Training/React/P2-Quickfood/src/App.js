import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/header/HeaderComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from './components/pagenotfound/PageNotFound';
import Course from './components/course/Course';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/course"component={Course}/>
          <Route component={PageNotFound} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
