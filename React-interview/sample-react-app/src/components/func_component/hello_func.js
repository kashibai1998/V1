import React from "react";
import incrementAction from "../../actions/incrementAction";
import decrementAction from "../../actions/decrementAction";
import { useDispatch, useSelector } from "react-redux";

const HelloFunc = (props) => {
  let currentCountValue = useSelector((state) => state);
  let dispatcher = useDispatch();

  const handlerIncrement = () => {
    dispatcher(incrementAction(currentCountValue));
  };

  const handlerDecrement = () => {
    dispatcher(decrementAction(currentCountValue));
  };

  return (
    <div>
      <h1>Redux Example</h1>
      <br />
      Counter = {currentCountValue}
      <br />
      <br />
      <input type="button" value="Ïnc" onClick={handlerIncrement} />
      <br />
      <br />
      <br />
      <input type="button" value="Dec" onClick={handlerDecrement} />
    </div>
  );
};
export default HelloFunc;
