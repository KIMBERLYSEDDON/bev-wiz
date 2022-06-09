import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { Box, Typography, CircularProgress } from "@mui/material/";

import BevWizHeader from "../../components/header/header.component";
import ActionAreaCard from "../../components/card/ActionAreaCard.component";

import useGeoLocation from "../../hooks/useGeoLocation";

import "./night-out.styles.scss";

export default function NightOut() {
  const [nightOutLocations, setNightOutLocations] = useState();
  const location = useGeoLocation();
  const { coordinates } = location;

  useEffect(() => {
    axios
      .post("/nightOutAPI", {
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      })
      .then((res) => {
        console.log(res.data);
        setNightOutLocations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [coordinates, nightOutLocations]);

  return (
    <Box className="side-display night-out">
      <BevWizHeader />
      <Typography variant="h1">Night Out Page Here</Typography>

      <Box
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        component={motion.div}
        layout
      >
        {!nightOutLocations ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="secondary" size={"8rem"} />
          </Box>
        ) : (
          <AnimatePresence>
            {nightOutLocations?.map((business) => (
              <ActionAreaCard business={business} key={business.id} />
            ))}
          </AnimatePresence>
        )}
      </Box>
    </Box>
  );
}
