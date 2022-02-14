import React, { useState } from "react";

const LocalStore = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoggedin, setIsloggedin] = useState(false);
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setpassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "1");
    setIsloggedin(true);
    const Data = {
      email: email,
      password: password,
    };
    console.log(Data);
    setEmail("");
    setpassword("");
  };
  return (
    <center>
      <form onSubmit={submitHandler}>
        <h1>Hello from The LocalStorage</h1>
        <input
          type="email"
          value={email}
          placeholder="enter email here"
          onChange={emailHandler}
        />
        <input
          type="text"
          value={password}
          placeholder="enter password here"
          onChange={passwordHandler}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </center>
  );
};

export default LocalStore;
