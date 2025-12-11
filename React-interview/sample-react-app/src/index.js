import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
// import counterReducer from "./reducers/counterReducer";
import productReducer from "./reducers/productapp/productReducer";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk"

// const myStore = createStore(counterReducer);
const myStore = createStore(productReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));

// myStore.subscribe(() => console.log("STORE_STATE :", myStore.getState())); //optional

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
