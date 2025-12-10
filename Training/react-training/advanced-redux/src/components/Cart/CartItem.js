import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartItemActions } from '../../redux/reducer/cartItem';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();
  const addNewItemToCart = () => {
    dispatch(cartItemActions.addItemToCart({
      id,
      price,
      quantity,
      title
    }));
  }

  const removeItemFromCart = () => {
    dispatch(cartItemActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addNewItemToCart}>+</button>
          <button onClick={removeItemFromCart}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
