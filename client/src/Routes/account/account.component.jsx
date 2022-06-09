import React from "react";

import { Box, Typography } from "@mui/material/";

import BevWizHeader from "../../components/header/header.component";

export default function UserAccount() {
  return (
    <Box className="side-display">
      <BevWizHeader />
      <Typography variant="h1">User Account Page Here</Typography>
    </Box>
  );
}
