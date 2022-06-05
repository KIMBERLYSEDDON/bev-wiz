import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { Box, TextField, Typography, Button } from "@mui/material/";

import { GoogleLogin } from "react-google-login";

import { gapi } from "gapi-script";

import { useFormik } from "formik";

import "./mutual-form.styles.scss";

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function MutualForm() {
  const [signUpPage, setSignUpPage] = useState(false);

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

  const onFailure = (res) => {
    console.log(res);
  };

  const onSuccess = (res) => {
    console.log("Successfully signed in with Google account", res.profileObj);
  };

  return (
    <Box className="sign-in-sign-up">
      <Typography variant="h2">
        {signUpPage ? "Create an account below" : "Welcome Back!"}
      </Typography>
      <Button
        disableRipple={true}
        disableFocusRipple={true}
        color="secondary"
        sx={{ fontSize: "12px" }}
        onClick={() => setSignUpPage(!signUpPage)}
      >
        {signUpPage
          ? "Already have an account? Login here"
          : "Don't have an acccount yet? Create one here!"}
      </Button>
      <Box
        component="form"
        className="sign-in-sign-up-form"
        onSubmit={async (values) => {
          if (!signUpPage) {
            const formData = {
              username: values.username,
              password: values.password,
            };
            await axios
              .post(`/api/users/login`, formData)
              .then((data) => {
                if (data.token) {
                  localStorage.setItem("token", data.token);
                } else {
                  alert(data);
                }
              })
              .catch((err) => console.error(err));
          } else {
            const formData = {
              username: values.username,
              email: values.email,
              password: values.password,
              name: values.name,
            };

            await axios
              .post(`/api/users/signup`, formData)
              .then((data) => {
                if (data.token) {
                  localStorage.setItem("token", data.token);
                } else {
                  alert(data);
                }
              })
              .catch((err) => console.error(err));
          }
        }}
      >
        {signUpPage ? (
          <AnimatePresence>
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
              key={123456}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
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
              key={1234567}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
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
              key={12345678}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
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
              key={123456789}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
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
              key={12345678910}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <div className="errors">{formik.errors.repassword}</div>
            ) : null}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ marginTop: "8px" }}
              component={motion.button}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              Sign Up
            </Button>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
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
              key={1234567891011}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
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
              key={123456789101112}
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errors">{formik.errors.password}</div>
            ) : null}
            <Box
              className="login-btns-container"
              component={motion.div}
              animate={{ y: -10 }}
              initial={{ y: -250 }}
              exit={{ y: 250, opacity: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
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
          </AnimatePresence>
        )}
      </Box>
    </Box>
  );
}
