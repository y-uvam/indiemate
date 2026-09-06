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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-40 bg-transparent pointer-events-none transition-all duration-500">
      <div
        className={`header-nav-container h-full flex items-center justify-between pointer-events-auto ${
          scrolled ? "scrolled" : ""
        }`}
      >
        {/* Left Side: Logo moves to left & App name smoothly hides */}
        <a
          href="#hero"
          className={`header-logo-brand flex items-center group ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <div
            className={`w-10 h-10 rounded-2xl p-1.5 flex items-center justify-center transition-transform duration-500 ${
              scrolled ? "scale-105" : "scale-100"
            }`}
          >
            <img
              src={appIcons.logo}
              alt={commonText.appName}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className={`header-app-name ${scrolled ? "hidden-name" : ""}`}>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ color: colors.white }}
            >
              {commonText.appName}
            </span>
          </div>
        </a>

        <div
          className={`header-cta-group flex items-center gap-4 ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <div className="hidden md:flex items-center">
            <a
              href="#monetization"
              className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-md hover:opacity-95 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
                color: colors.white,
                boxShadow: scrolled
                  ? `0 6px 20px ${colors.storyRing}60`
                  : `0 4px 16px ${colors.storyRing}40`,
              }}
            >
              {commonText.continue}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-xl transition-transform duration-300 active:scale-90"
            style={{ color: colors.white }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 pt-3 pb-6 flex flex-col gap-4 border-b pointer-events-auto"
          style={{
            backgroundColor: "rgba(7, 9, 14, 0.96)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <a
            href="#monetization"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-full text-sm font-bold tracking-wide shadow-md"
            style={{
              background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
              color: colors.white,
            }}
          >
            {commonText.continueYourJourney}
          </a>
        </div>
      )}
    </nav>
  );
};
