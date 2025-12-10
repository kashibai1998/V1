import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './toolkit';

export default function CounterToolkit() {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();
  const handleInc = (val) => {
    dispatch(counterActions.increment({ value: val }));
  };
  const handleDec = () => {
    dispatch(counterActions.decrement());
  };
  const toggle = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <div>
      <h2>Counter</h2>
      {show && <p>{counter}</p>}
      <button onClick={() => handleInc(1)}>INC</button>
      <button onClick={handleDec}>DEC</button>
      <button onClick={() => handleInc(5)}>increase by 5</button>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
