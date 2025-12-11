import React from "react";
import { useState, useEffect } from "react";

const ClockFunc = (props) => {
  // console.log("Clcok Function called");
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );
  const [count, setCount] = useState(5);

  useEffect(() => {
    // console.log("useEffect");
    setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
  },currentDateTime);

  return (
    <div>
      <h1>{currentDateTime}</h1>
    </div>
  );
};
export default ClockFunc;
