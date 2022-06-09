import React from "react";

import { Box, TextField, Typography, Button } from "@mui/material/";

import { useFormik } from "formik";

import axios from "axios";

import "./sign-up.styles.scss";

export default function SignUp() {
  const validate = (values) => {
    const errors = {};

    if (values.username < 5 || values.username > 50) {
      errors.username = "Username must be between 5 to 50 characters long";
    }

    if (values.name < 1 || values.name > 50) {
      errors.name =
        "Name cannot be less than 1 or greater than 50 characters long";
    }

    if (values.password < 8 || values.password > 128) {
      errors.password = "Password must be between 5 to 50 characters long";
    }

    if (!values.repassword || values.password !== values.repassword) {
      errors.repassword = "Passwords do not match";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      repassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box className="sign-up">
      <Typography variant="h3">Sign Up</Typography>

      <Box
        component="form"
        className="sign-up-form"
        onSubmit={async ( values ) => {
          const formData = {
            username: values.username,
            email: values.email,
            password: values.password,
            name: values.name,
          }

          await axios.post(`/api/users/signup`, formData)
            .then((data) => {
              if (data.token) {
                localStorage.setItem("token", data.token);
              } else {
                alert(data);
              }
            })
            .catch((err => console.error(err)));
        }}
      >
        <TextField
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          label="First and Last Name"
          id="name"
          name="name"
          margin="normal"
          color="secondary"
          fullWidth
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="errors">{formik.errors.name}</div>
        ) : null}

        <TextField
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          label="Username"
          id="username"
          name="username"
          margin="normal"
          color="secondary"
          fullWidth
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="errors">{formik.errors.username}</div>
        ) : null}

        <TextField
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          label="Email"
          id="email"
          name="email"
          margin="normal"
          color="secondary"
          fullWidth
        />

        <TextField
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          label="Password"
          id="password"
          name="password"
          type="password"
          margin="normal"
          color="secondary"
          fullWidth
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="errors">{formik.errors.password}</div>
        ) : null}
        <TextField
          onChange={formik.handleChange}
          value={formik.values.repassword}
          onBlur={formik.handleBlur}
          label="Retype Password"
          id="repassword"
          name="repassword"
          type="password"
          margin="normal"
          color="secondary"
          fullWidth
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <div className="errors">{formik.errors.repassword}</div>
        ) : null}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          style={{ marginTop: "8px" }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
