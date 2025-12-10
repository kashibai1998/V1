import logo from './logo.svg';
import './App.css';
import Myroute from './routes/Myroute'
import Header from './component/header/Header'
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Myroute />
      </Provider>
    </div>
  );
}

export default App;
