import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const url = "https://66b358917fba54a5b7ec8d2f.mockapi.io";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert("User Registered!");

      try {
        axios.post(`${url}/users`, values);
        console.log(values);

        // location.reload();
      } catch (error) {
        alert("An error occured");
      }
    },
  });
  return (
    <div className="container flex justify-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
