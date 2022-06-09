import React from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import "./header.styles.scss";

export default function BevWizHeader() {
  return (
    <Box className="header-box">
      <Box component="header">
        <Link to="/">
          <Typography variant="h1">BevWiz</Typography>
        </Link>
      </Box>
    </Box>
  );
}
