import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counterValue, setcounterValue] = useState(0);
  const [inputValue, setinputValue] = useState(1);

  const addToCouter = () => {
    setcounterValue(counterValue + inputValue);
  };
  const subtractFromCouter = () => {
    setcounterValue(counterValue - inputValue);
  };

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
      >
        {counterValue}
      </h2>
      <button data-testid="sub-btn" onClick={subtractFromCouter}>
        -
      </button>

      <input
        data-testid="input"
        type="number"
        value={inputValue}
        className="text-center"
        onChange={(e) => {
          setinputValue(parseInt(e.target.value));
        }}
      />

      <button data-testid="add-btn" onClick={addToCouter}>
        +
      </button>
    </div>
  );
};

export default Counter;
