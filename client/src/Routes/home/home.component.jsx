import React from "react";

import { Box, Typography } from "@mui/material/";
import BevWizHeader from "../../components/header/header.component";

export default function Home() {
  return (
    <Box className="side-display home">
      <BevWizHeader />
      <Typography variant="h2">Home Page Here</Typography>
    </Box>
  );
}
