import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Views/Dashboard/Dashboard';
import Registration from './Component/Registration/Registration.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent from './Views/LoginComponent/LoginComponent';

ReactDOM.render(
  <Router>
   <Route path="/" exact component={LoginComponent} />
   <Route path="/dashboard" component={Dashboard} />
   <Route path="/signUp" component={Registration} />
</Router>,
 document.getElementById('root')
);
