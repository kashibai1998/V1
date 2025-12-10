import { useState } from "react";

function UseEffectReactHook() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  
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
    </div>
  )
}
export default UseEffectReactHook;


              