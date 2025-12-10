import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  console.log(counter)
  const dispatch = useDispatch();

  const incHandler = () => {
    console.log('hiii');
    dispatch({ type: 'INC' })
  }
  const decHandler = () => {
    dispatch({ type: 'DEC' })
  }
  return (
    <div>
      Hello Redux
      <h2>Counter : {counter}</h2>
      <div>
        <button onClick={incHandler}>incremnet</button>
        <button onClick={decHandler}>decrement</button>
      </div>
    </div>
  );
}

export default App;
