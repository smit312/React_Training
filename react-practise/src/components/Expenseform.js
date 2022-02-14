import React, { useState } from "react";
import "../App";

const Expenseform = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneHandler = (event) => {
    setNum(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: name,
      email: email,
      phoneNumber: num,
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setName("");
    setEmail("");
    setNum("");
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>name</label>
        <input type="text" onChange={nameHandler} value={name} /> <br />
        <label>email</label>
        <input type="email" onChange={emailHandler} value={email} /> <br />
        <label>PoneNumber</label>
        <input type="number" onChange={phoneHandler} value={num} /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Expenseform;
