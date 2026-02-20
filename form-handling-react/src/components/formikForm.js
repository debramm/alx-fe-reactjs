import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6, "Min 6 chars").required("Required"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" />
          <ErrorMessage name="username" component="p" />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
