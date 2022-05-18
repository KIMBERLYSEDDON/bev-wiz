import React, { useEffect } from "react";

import { Box, TextField, Typography, Button } from "@mui/material/";

import { GoogleLogin } from "react-google-login";

import { gapi } from "gapi-script";

import { useFormik } from "formik";

import "./sign-in.styles.scss";

const googleClientId =
  "375492864563-ggneos781k89kl8hv6vpeltgr4mv5q1i.apps.googleusercontent.com";

export default function SignIn() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: googleClientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });
  const validate = (values) => {
    const errors = {};

    if (values.username < 5 || values.username > 50) {
      errors.username = "Username must be between 5 to 50 characters long";
    }

    if (values.name < 1 || values.name > 50) {
      errors.username =
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
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onFailure = (res) => {
    console.log(res);
  };
  const onSuccess = (res) => {
    console.log("hit", res.profileObj);
  };
  return (
    <Box className="sign-in">
      <Typography variant="h3">Sign In</Typography>
      <Box
        component="form"
        className="sign-in-form"
        onSubmit={formik.handleSubmit}
      >
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
        <Box className="login-btns-container">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ marginTop: "8px" }}
          >
            Sign In
          </Button>
          <GoogleLogin
            clientId={googleClientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </Box>
      </Box>
    </Box>
  );
}
