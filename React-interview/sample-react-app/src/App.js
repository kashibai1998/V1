import logo from "./logo.svg";
import { Hello } from "./components/Hello";
import { Clock } from "./components/Clock";
import "./App.css";
import HelloFunc from "./components/func_component/hello_func";
import ClockFunc from "./components/func_component/clock_func";
import ProductApp from "./components/ProductApplication/productApp/ProductApp";
import Count from "./components/func_component/Count";

function App() {
  let str = "Hi Lucky";
  return (
    <div className="App">
      {/* <HelloFunc firstName={str} /> */}
      <ProductApp/>
      {/* <Clock/>  */}
      {/* <Count /> */}
      {/* <HelloFunc/> */}
    </div>
  );
}

export default App;
