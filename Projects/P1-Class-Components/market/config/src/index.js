import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import store from './configStore';
import Layout from "./layouts/Layout.jsx";

store.subscribe(() => {
    console.log(store.getState());
});
 
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/admin" render={props => <Layout {...props} />} />
                <Redirect from="/" to="/admin/home" />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);