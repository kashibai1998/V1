import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hooks from "./Hooks";
// import Redux from "./Redux";
import { Provider } from 'react-redux'
// import store from "./store";
// import store from "./store/multiToolkit";
// import store from "./thunk";
// import ReduxThunkAction from "./ReduxThunkAction";
import store from "./thunk/action";
import RoutePage from "./Route";
// import ReduxUseEffect from "./ReduxUseEffect";
// import ReduxToolkit from "./ReduxToolkit";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      {/* <Hooks/> */}
      {/* <Redux /> */}
      {/* <ReduxToolkit /> */}
      {/* <ReduxUseEffect /> */}
      {/* <ReduxThunkAction /> */}
      {/* <RoutePage /> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
