import { Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../views/homepage/HomePage";
import ProductMaster from "../views/productmaster/ProductMaster";

const customHistory = createBrowserHistory();

const Myroute = () => {
    return (
        <Router history={customHistory}>
            <div>
                <Route path="/" component={HomePage} exact />
                <Route path="/productMaster" component={ProductMaster} />
            </div>
        </Router>
    );
}
export default Myroute;