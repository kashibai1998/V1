import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartItemActions } from '../../redux/reducer/cartItem';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const addHandler = () => {
    console.log('Add item');
    dispatch(cartItemActions.addItemToCart({
      id,
      title,
      price,
      description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
