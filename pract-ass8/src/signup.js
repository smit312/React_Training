import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import imgs from "./assets/images/img.png";
import { useDispatch } from "react-redux";
import { Login } from "./strore/actions";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, "must be 15 character")
    .min(15, "enter 15 chaeacter")
    .required("required"),
  email: Yup.string().email("email is invalid").required("required"),
  phonenumber: Yup.string()
    .max(10, "number must be lenght of 10")
    .min(10, "number must be lenght of 10 "),

  password: Yup.string().required("Password is required"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const Signup = () => {
  const dispatch = useDispatch();
  return (
    <div className="con">
      <div className="container">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phonenumber: "",
            password: "",
            cpassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            dispatch(Login(values));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <br />
              <button className="btn">photo+</button>
              <br />
              <input type="file" id="img" accept="image/*" />
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
                <button type="submit" className="btn-submit">
                  submit
                </button>
                <button type="reset" className="btn-reset">
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
