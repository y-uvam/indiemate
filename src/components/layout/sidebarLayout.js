import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";
import { AppBackground } from "../background/appBackground";

export const SidebarLayout = () => {
  return (
    <AppBackground glowVariant="cinema">
      <div className="flex w-full min-h-screen">
        {/* Persistent Desktop Sidebar & Mobile Drawer */}
        <Sidebar />

        {/* Dynamic Screen Content Route Container */}
        <main className="flex-1 w-full min-h-screen overflow-y-auto pt-16 md:pt-0 relative z-10">
          <Outlet />
        </main>
      </div>
    </AppBackground>
  );
};
