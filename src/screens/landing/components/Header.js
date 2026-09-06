import React, { useState, useEffect } from "react";
import { appIcons } from "../../../assets";
import { colors, commonText } from "../../../utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(5, 20, 36, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: `1px solid ${scrolled ? colors.transparentWhite10 : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl p-1.5 flex items-center justify-center ">
            <img
              src={appIcons.logo}
              alt={commonText.appName}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ color: colors.white }}
          >
            {commonText.appName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a
              href="#hero"
              className="transition-colors hover:text-white"
              style={{ color: colors.subtitleGray }}
            >
              {commonText.screeningRoom}
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="transition-colors hover:text-white"
              style={{ color: colors.subtitleGray }}
            >
              {commonText.features}
            </a>
          </li>
          <li>
            <a
              href="#monetization"
              className="transition-colors hover:text-white"
              style={{ color: colors.subtitleGray }}
            >
              {commonText.monetization}
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#monetization"
            className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all shadow-md hover:opacity-95"
            style={{
              background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
              color: colors.white,
              boxShadow: `0 4px 16px ${colors.storyRing}40`,
            }}
          >
            {commonText.ctaApplyMonetization}
          </a>
        </div>

        <button
          className="md:hidden p-2 text-xl"
          style={{ color: colors.white }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-5 border-b"
          style={{
            backgroundColor: "rgba(5, 20, 36, 0.95)",
            backdropFilter: "blur(24px)",
            borderColor: colors.transparentWhite10,
          }}
        >
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.screeningRoom}
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.features}
          </a>
          <a
            href="#monetization"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.monetization}
          </a>
          <div
            className="pt-4 border-t"
            style={{ borderColor: colors.transparentWhite10 }}
          >
            <a
              href="#monetization"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded-full text-xs font-bold uppercase tracking-wide"
              style={{
                background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
                color: colors.white,
              }}
            >
              {commonText.ctaApplyMonetization}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
