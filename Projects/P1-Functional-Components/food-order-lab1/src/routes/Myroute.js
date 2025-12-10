import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Signupform from "../features/signup/form/Signupform";
import Loginform from "../features/login/form/Loginform";
import Dashboard from "../features/dashboard/dashboard/Dashboard";

const customHistory = createBrowserHistory();

const Myroute = () => (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={Loginform}></Route>
      <Route path="/signup" component={Signupform}></Route>
       <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
);
export default Myroute;
