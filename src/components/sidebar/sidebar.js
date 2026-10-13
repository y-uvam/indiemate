import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appIcons } from "../../assets";
import { colors, commonText } from "../../utils";
import ROUTES from "../../navigation/routeConstants";
import { reset } from "../../navigation/navigationService";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      id: "home",
      label: "Home",
      path: ROUTES.HOME,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      badge: "Feed",
    },
    {
      id: "browse",
      label: "Browse",
      path: ROUTES.BROWSE,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <polygon
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      badge: "Explore",
    },
    {
      id: "reels",
      label: "Reels",
      path: ROUTES.REELS,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      badge: "Shorts",
    },
    {
      id: "chat",
      label: "Chat",
      path: ROUTES.CHAT,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      badge: "Crew",
    },
    {
      id: "profile",
      label: "Profile",
      path: ROUTES.PROFILE,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      badge: "Director",
    },
    {
      id: "movie",
      label: "Film Feature",
      path: ROUTES.MOVIE,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
      badge: "Cinema",
    },
    {
      id: "monetization",
      label: "Creator Fund",
      path: ROUTES.MONETIZATION,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      badge: "Finance",
    },
    {
      id: "notifications",
      label: "Activity",
      path: ROUTES.NOTIFICATIONS,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      badge: "Alerts",
    },
    {
      id: "settings",
      label: "Settings",
      path: ROUTES.SETTINGS,
      icon: (active) => (
        <svg
          className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      badge: "Studio",
    },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleBackToLanding = () => {
    reset(ROUTES.LANDING);
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between py-6 px-4">
      {/* Brand Header */}
      <div>
        <div
          onClick={() => handleNav(ROUTES.HOME)}
          className="flex items-center gap-3 px-3 py-2 cursor-pointer group mb-6 select-none"
        >
          <div className="w-10 h-10 rounded-2xl p-1.5 flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
            <img
              src={appIcons.logo}
              alt={commonText.appName}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span
              className="text-lg font-extrabold tracking-tight block leading-tight"
              style={{ color: colors.white }}
            >
              {commonText.appName}
            </span>
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: colors.storyRing }}
            >
              Creator Studio
            </span>
          </div>
        </div>

        <div
          className="h-px w-full my-4"
          style={{ background: colors.transparentWhite8 }}
        />

        {/* Main Navigation Links */}
        <div className="space-y-1.5">
          <div className="px-3 mb-2">
            <span
              className="text-[11px] font-bold uppercase tracking-wider"
              style={{ color: colors.dimLabelGray }}
            >
              Navigation
            </span>
          </div>

          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === ROUTES.HOME && location.pathname === "/");

            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.path)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl font-medium text-sm transition-all duration-200 group ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(90deg, ${colors.storyRing}28 0%, ${colors.primaryBlue}15 100%)`,
                        border: `1px solid ${colors.storyRing}50`,
                        color: colors.white,
                      }
                    : {
                        border: "1px solid transparent",
                      }
                }
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-1.5 rounded-xl transition-all ${
                      isActive ? "bg-white/10" : "group-hover:bg-white/5"
                    }`}
                  >
                    {item.icon(isActive)}
                  </div>
                  <span className={`font-semibold ${isActive ? "text-white" : ""}`}>
                    {item.label}
                  </span>
                </div>

                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: colors.storyRing }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions & User/Back Area */}
      <div className="pt-6">
        <div
          className="h-px w-full mb-4"
          style={{ background: colors.transparentWhite8 }}
        />

        {/* Return to Landing Page Button */}
        <button
          onClick={handleBackToLanding}
          className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: `1px solid ${colors.transparentWhite12}`,
            color: colors.offwhite,
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Landing</span>
        </button>

        <div className="mt-4 px-2 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
          <span>v1.0.0</span>
          <span>Indiemate Inc.</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 h-16 z-40 px-4 flex items-center justify-between backdrop-blur-xl border-b"
        style={{
          backgroundColor: "rgba(7, 17, 29, 0.9)",
          borderColor: colors.transparentWhite10,
        }}
      >
        <div
          onClick={() => handleNav(ROUTES.HOME)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={appIcons.logo} alt={commonText.appName} className="w-7 h-7 object-contain" />
          <span className="font-extrabold text-base tracking-tight text-white">
            {commonText.appName}
          </span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl text-white bg-white/5 border border-white/10"
          aria-label="Toggle Sidebar Menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar Slide-out */}
      <div
        className={`md:hidden fixed top-0 bottom-0 left-0 w-72 z-50 transition-transform duration-300 ease-in-out border-r backdrop-blur-2xl ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: "rgba(10, 16, 26, 0.98)",
          borderColor: colors.transparentWhite10,
        }}
      >
        {navContent}
      </div>

      {/* Desktop Persistent Sidebar */}
      <aside
        className="hidden md:flex flex-col w-64 lg:w-72 shrink-0 h-screen sticky top-0 border-r backdrop-blur-2xl z-30"
        style={{
          backgroundColor: "rgba(7, 17, 29, 0.75)",
          borderColor: colors.transparentWhite8,
        }}
      >
        {navContent}
      </aside>
    </>
  );
};
