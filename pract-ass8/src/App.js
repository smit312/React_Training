import React from "react";
import "./App.css";
import imgs from "./assets/images/img.png";
import { useFormik, Formik } from "formik";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.ChangePages.data);
  return (
    <>
      <h1></h1>
    </>
    // <div className="con">
    //   <div className="container">
    //     <h1>signup</h1>
    //     <br />
    //     <button className="btn">photo+</button>
    //     <br />
    //     <input type="file" id="img" name="img" accept="image/*" />
    //     <p> name :</p>
    //     <input placeholder="enter name " className="setvalue" />
    //     <p>Email :</p>
    //     <input placeholder="enter Email" className="setvalue" />
    //     <p>PhoneNo : </p>
    //     <input placeholder="enter phone no" className="setvalue" />
    //     <p>password : </p>
    //     <input placeholder="enter password" className="setvalue" /> <br />
    //     <p> Confirm Password :</p>
    //     <input placeholder="enter confirm password" className="setvalue" />
    //     <div className="flex-container">
    //       <button type="submit" className="btn-submit">
    //         submit
    //       </button>
    //       <button type="reset" className="btn-reset">
    //         reset
    //       </button>
    //     </div>
    //   </div>
    //   <h1>{data.email}</h1>
    //   <img src={imgs} className="img" alt="img" />
    // </div>
  );
}

export default App;
