import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const toggleValue = useSelector(state => state.cartToggle.toggle);
  console.log(toggleValue, 'toggle');
  return (
    <Layout>
      { toggleValue &&
        <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
