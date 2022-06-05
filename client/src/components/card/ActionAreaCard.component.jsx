import React from "react";

import { motion } from "framer-motion";

import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";

import AddressTypo from "./AddressTypography.component";
export default function ActionAreaCard({ business }) {
  const { name, image_url, location, coordinates, categories, phone, rating } =
    business;
  return (
    <Card
      sx={{ width: "20%", marginInline: "2.5%", marginBottom: "1.5%" }}
      component={motion.div}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      layout
      whileHover={{ scale: 1.1 }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image_url} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
          <AddressTypo address={location} />{" "}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
