import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ROUTES from "./routeConstants";
import { navigationRef } from "./navigationService";
import {
  Landing,
  Splash,
  Home,
  Browse,
  Reels,
  Chat,
  Profile,
  Movie,
  Notification,
  Settings,
  Monetization,
} from "../screens";
import { SidebarLayout } from "../components";

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
        <Route path={ROUTES.LOGIN} element={<Landing />} />

        {/* Sidebar Navigation Layout Screens */}
        <Route element={<SidebarLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BROWSE} element={<Browse />} />
          <Route path={ROUTES.REELS} element={<Reels />} />
          <Route path={ROUTES.CHAT} element={<Chat />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.MOVIE} element={<Movie />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<Notification />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.MONETIZATION} element={<Monetization />} />
          <Route path={ROUTES.INSIGHTS} element={<Monetization />} />
        </Route>

        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
};

export { MainStack };
