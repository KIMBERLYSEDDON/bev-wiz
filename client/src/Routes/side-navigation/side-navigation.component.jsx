import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

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
    <>
      <Box className="side-nav">
        <Box className={`side-nav-collapse ${open && "show"}`}>
          <IconButton onClick={handleOpenClose} disableRipple>
            <ArrowBackIosNewRoundedIcon className="nav-icon" />
          </IconButton>
          <Link to="/">
            <HomeRoundedIcon className="nav-icon" />
          </Link>
          <Link to="/night-in">
            <LiquorRoundedIcon className="nav-icon" />
          </Link>
          <Link to="/night-out">
            <NightlifeRoundedIcon className="nav-icon" />
          </Link>
          <Link to="/account">
            <AccountBoxRoundedIcon className="nav-icon" />
          </Link>
        </Box>
        <IconButton
          className={`menuBtn ${open && "hide"}`}
          onClick={handleOpenClose}
          disableRipple
        >
          <MenuRoundedIcon
            className={`menu-nav-icon ${open ? "hide" : "show"}`}
          />
        </IconButton>
      </Box>
      <Outlet />
    </>
  );
}
