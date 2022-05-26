import React from "react";

import { Routes, Route } from "react-router-dom";

import SideNav from "./side-navigation/side-navigation.component";
import Home from "./home/home.component";
import SignInSignUp from "./sign-in-and-sign-up/sign-in-sign-up.component";
import NightIn from "./night-in/night-in.component";
import NightOut from "./night-out/night-out.component";
import UserAccount from "./account/account.component";

const BevWizRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SideNav />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignInSignUp />} />
        <Route path="/night-in" element={<NightIn />} />
        <Route path="/night-out" element={<NightOut />} />
        <Route path="/account" element={<UserAccount />} />
      </Route>
    </Routes>
  );
};

export default BevWizRoutes;
