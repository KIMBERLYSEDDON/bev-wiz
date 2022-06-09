import React from "react";

import { Box, Typography } from "@mui/material/";
import BevWizHeader from "../../components/header/header.component";

export default function NightIn() {
  return (
    <Box className="side-display night-in">
      <BevWizHeader />
      <Typography variant="h1">Night In Page Here</Typography>
    </Box>
  );
}
