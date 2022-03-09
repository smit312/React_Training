import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counterValue, setcounterValue] = useState(0);
  const [inputValue, setinputValue] = useState(1);
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="sub-btn">-</button>
      <input
        data-testid="input"
        type="number"
        value={inputValue}
        className="text-center"
      />
      <button data-testid="add-btn">+</button>
    </div>
  );
};

export default Counter;
