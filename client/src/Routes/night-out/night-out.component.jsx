import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { Box, Typography } from "@mui/material/";
import CircularProgress from "@mui/material/CircularProgress";
import ActionAreaCard from "../../components/card/ActionAreaCard.component";

import useGeoLocation from "../../hooks/useGeoLocation";

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
  }, [coordinates]);

  return (
    <Box className="side-display">
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
