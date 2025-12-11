import './App.css';
//import ProductApp from './components/product_app';
import ProductAppFunc from './components/product_app_func';
import Home from './Screens/Home';
function App(props) {
  return (
    <div className="App">
      {/* <ProductAppFunc store={props.store} /> */}
    <Home/>
    </div>
  );
}

export default App;
 