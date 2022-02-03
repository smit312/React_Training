import React, { useState } from "react";

export const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItem] = useState([]);
  const addItem = () => {
    if (!inputdata) {
      console.log("enter a value");
    } else {
      setItem([...items, inputdata]);
      setInputData("");
    }
  };
  return (
    <center>
      <h1>todo list</h1>
      <input
        placeholder="enter item"
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addItem();
          }
        }}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <ul>
        {items.map((elem, index) => {
          return (
            <div key={index}>
              <ul>{elem}</ul>
            </div>
          );
        })}
      </ul>
    </center>
  );
};
