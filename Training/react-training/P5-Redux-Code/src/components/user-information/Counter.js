import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch1 = useDispatch();
    const counter = useSelector((state) => state.counter);
    console.log(counter)

    const incrementHandler = () => {
        dispatch1({ type: 'increment' })
    }

    const decrementHandler = () => {
        dispatch1({ type: 'decrement' })
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={incrementHandler}>Increment</button><br /><br />
            <button onClick={decrementHandler}>Decrement</button><br /><br />
        </div>
    );
}

export default Counter;