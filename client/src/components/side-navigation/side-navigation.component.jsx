import React, { useState } from "react";

import { IconButton, Box } from "@mui/material/";

import LiquorRoundedIcon from "@mui/icons-material/LiquorRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import NightlifeRoundedIcon from "@mui/icons-material/NightlifeRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import "./side-navigation.styles.scss";

export default function SideNav() {
  const [open, setOpen] = useState(false);

  const handleOpenClose = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Box className="side-nav">
      <Box className={`side-nav-collapse ${open && "show"}`}>
        <IconButton onClick={handleOpenClose}>
          <ArrowBackIosNewRoundedIcon className="nav-icon" />
        </IconButton>
        <IconButton>
          <LiquorRoundedIcon className="nav-icon" />
        </IconButton>
        <IconButton>
          <NightlifeRoundedIcon className="nav-icon" />
        </IconButton>
        <IconButton>
          <HomeRoundedIcon className="nav-icon" />
        </IconButton>
        <IconButton>
          <AccountBoxRoundedIcon className="nav-icon" />
        </IconButton>
      </Box>
      <IconButton className="iconBtn" onClick={handleOpenClose}>
        <MenuRoundedIcon className={`menu-nav-icon ${open && "hide"}`} />
      </IconButton>
    </Box>
  );
}
