import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function ReduxComponent() {
    const countValue = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();

    
  return (
    <div>
      Counter : <br />
      {countValue} <br />
      <br />
          <button onClick={() => dispatch(increment()) }>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement()) }>Decrement</button>
      <br />
      <br />
    </div>
  )
}
