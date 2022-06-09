import React from "react";

import { Box } from "@mui/material/";

import BevWizHeader from "../../components/header/header.component";
import MutualForm from "../../components/mutual-form/mutual-form.component";

import "./sign-in-sign-up.styles.scss";

export default function SignInSignUp() {
  return (
    <Box className="sign-in-sign-up side-display">
      <BevWizHeader />
      <MutualForm />
    </Box>
  );
}
