import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import imgs from "../assets/images/img.png";
import { useDispatch } from "react-redux";
import { Login } from "../strore/actions";
import { useNavigate } from "react-router-dom";
import { SignupSchema } from "./validation/validationSchema";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef();
  return (
    <div className="con">
      <div className="container">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            profile: null,
            name: "",
            email: "",
            phonenumber: "",
            password: "",
            cpassword: "",
          }}
          validationSchema={SignupSchema} //validate schema
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            // dispatch(Login(values));
            dispatch(
              Login({
                name: values.name,
                profile: URL.createObjectURL(values.profile),
                email: values.email,
                phonenumber: values.phonenumber,
                password: values.password,
                cpassword: values.cpassword,
              })
            );
            navigate("/home");
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <br />
              <input
                hidden
                ref={fileRef}
                accept="image/*"
                id="profile"
                type="file"
                name="profile"
                onChange={(e) => {
                  setFieldValue("profile", e.target.files[0]);
                }}
              />
              {errors.profile && touched.profile ? (
                <div>{errors.profile}</div>
              ) : null}
              <button
                className="btn"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                photo+
              </button>
              {/* <input type="file" id="profile" name="profile" accept="image/*" /> */}
              <p>
                {" "}
                <label htmlFor="name">First Name</label>
              </p>
              <Field name="name" className="setvalue" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <p>
                {" "}
                <label htmlFor="name">Email Address</label>
              </p>
              <Field name="email" type="email" className="setvalue" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <p>
                {" "}
                <label htmlFor="name">phone number</label>{" "}
              </p>
              <Field name="phonenumber" type="number" className="setvalue" />
              {errors.phonenumber && touched.phonenumber ? (
                <div>{errors.phonenumber}</div>
              ) : null}
              <p>
                {" "}
                <label htmlFor="password">password</label>{" "}
              </p>
              <Field name="password" type="password" className="setvalue" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <p>
                {" "}
                <label htmlFor="cpassword">cpassword</label>{" "}
              </p>
              <Field name="cpassword" type="password" className="setvalue" />
              {errors.cpassword && touched.cpassword ? (
                <div>{errors.cpassword}</div>
              ) : null}
              <div className="flex-container">
                {" "}
                <button type="submit" className="btn-submit">
                  submit
                </button>
                <button
                  type="reset"
                  className="btn-reset"
                  onClick={() => {
                    values = "";
                  }}
                >
                  reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <img src={imgs} className="img" alt="img" />
    </div>
  );
};
