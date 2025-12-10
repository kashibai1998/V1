import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggleActions } from '../../redux/reducer/cartToggle';

const CartButton = (props) => {
  const disptach = useDispatch();

  const cartQuantity = useSelector(state => state.cartItem.totalQuantity);
  console.log(cartQuantity, 'cart-quantity');
  
  const toggleHandler = () => {
    console.log('cliked')
    disptach(cartToggleActions.cartToggle());
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
