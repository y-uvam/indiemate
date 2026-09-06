import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ROUTES from "./routeConstants";
import { navigationRef } from "./navigationService";
import { Landing, Splash } from "../screens";

const NavigationInjector = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigationRef.current = navigate;
  }, [navigate]);
  return null;
};

const MainStack = () => {
  return (
    <>
      <NavigationInjector />
      <Splash />
      <Routes>
        <Route path={ROUTES.SPLASH} element={<Splash />} />
        <Route path={ROUTES.LANDING} element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
};

export { MainStack };
