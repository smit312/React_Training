import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import "../App.css";

import { Logout } from "../strore/actions";
const Homepage = () => {
  const data = useSelector((state) => state.ChangePages.data);
  const isLogin = useSelector((state) => state.ChangePages.isLogin);
  const dispatch = useDispatch();
  return (
    <center>
      {!isLogin && <Navigate to="/Signup" />}
      <div class="card">
        <img src={data.profile} alt="Avatar" className="imgavtar" />
        <div class="container">
          <h4>
            <b>Hello ! {data.name}</b>
          </h4>
          <p> Email : {data.email}</p>
          <p>Phone no : {data.phonenumber}</p>
        </div>
      </div>
      {/* <h1>Hello {data.email}</h1> */}
      {/* <img src={data.profile} alt="img not display don't worry" /> <br /> <br /> */}
      <Link to="/">
        {" "}
        <button
          className="logut-btn"
          onClick={() => {
            dispatch(Logout());
          }}
        >
          Logout
        </button>
      </Link>
    </center>
  );
};

export default Homepage;
