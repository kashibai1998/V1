import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const handleInc = (val) => {
    dispatch({
      type: 'inc',
      payload: {
        value: val,
      },
    });
  };
  const handleDec = () => {
    dispatch({
      type: 'dec',
    });
  };
  const toggle = () => {
    dispatch({
      type: 'toggle',
    });
  };

  return (
    <div>
      <h1>REDUX </h1>
      {show && <p>{counter}</p>}
      <button onClick={() => handleInc(1)}>INC</button>
      <button onClick={handleDec}>DEC</button>
      <button onClick={() => handleInc(5)}>increase by 5</button>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
