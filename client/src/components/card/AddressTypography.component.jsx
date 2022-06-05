import React from "react";
import { Typography } from "@mui/material";

export default function AddressTypo({ address }) {
  const { display_address } = address;
  const combAddress = display_address.join(" ");
  return (
    <Typography variant="body2" color="text.secondary">
      {combAddress}
    </Typography>
  );
}
