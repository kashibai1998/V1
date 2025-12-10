import { useState, useEffect } from "react";

function UseEffectReactHook() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
   let setTime = setTimeout(() => {
      console.log('Calling useEffect');
      setCount(count + 1);
   }, 1000)
    return () => clearTimeout(setTime);
  }, [car,count]);

  const updateColor = () => {
    setCar(prevState =>{
      return {
        ...prevState,
        color: 'black'
      }
    });
  }

  return (
    <div>
      <h1>My Old {car.brand}</h1>
       <p>
        It is a selling {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
      <h1>Counter value is { count}</h1>
    </div>
  )
}
export default UseEffectReactHook;


              