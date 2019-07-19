import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { axiosAuth } from "./axiosAuth";
import { Redirect } from "react-router-dom";

function Login({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/dataList" />;
  }

  return (
    <Form className="form">
      <div className="form-group">
        <label className="label">Username</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.email && errors.email}</p>
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button className="btn">Submit &rarr;</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  // validationSchema: Yup.object().shape({
  //   email: Yup.string()
  //     .required(),
  //   password: Yup.string()
  //     .min(6)
  //     .required()
  // }),
  handleSubmit(values, formikBag) {
    console.log("submitting")
    console.log(values)
    const url =
      "/register";
    axiosAuth()
      .post(url, values)
      .then(response => {
        console.log("response", response)
        localStorage.setItem("token", response.data.token);
        // formikBag.props.history.push("/dataList");
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }
})(Login);

