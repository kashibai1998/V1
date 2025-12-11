import React from "react";
import incrementAction from "../../actions/incrementAction";
import decrementAction from "../../actions/decrementAction";
import { useDispatch, useSelector } from 'react-redux';

const Count = (props) => {
  let dispatcher = useDispatch();
  var currentCountValue = useSelector((state) => state);
  console.log(currentCountValue);

  const handlerIncrement = () => {
    dispatcher(incrementAction(currentCountValue));
  };

  const handlerDecrement = () => {
      dispatcher(decrementAction(currentCountValue));
  };

  return (
    <div>
      <br />
          Counter = {currentCountValue}<br />
      <br />
      <input type="button" value="Ïncrment" onClick={handlerIncrement} />
      <br />
      <br />
      <br />
      <input type="button" value="Decrement" onClick={handlerDecrement} />
    </div>
  );
};
export default Count;
