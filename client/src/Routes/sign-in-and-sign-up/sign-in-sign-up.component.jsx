import React from "react";

import { Box } from "@mui/material/";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-sign-up.styles.scss";

export default function SignInSignUp() {
  return (
    <Box className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </Box>
  );
}
