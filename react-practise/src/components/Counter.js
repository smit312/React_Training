import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    const newcounter = count + 1;
    setCount(newcounter);
  };
  const decrementHandler = () => {
    const deccount = count - 1;
    setCount(deccount);
  };
  return (
    <center>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>+</button>
      <br />
      <button onClick={decrementHandler}>-</button>
    </center>
  );
};

export default Counter;
