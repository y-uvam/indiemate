import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "./routeConstants";
import { colors, commonText } from "../utils";

const NAV_LINKS = [
  { label: commonText.home, path: ROUTES.LANDING },
  { label: commonText.login, path: ROUTES.LOGIN },
  { label: commonText.register, path: ROUTES.REGISTER },
];

const Drawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: colors.transparentBlack30,
          backdropFilter: "blur(4px)",
          zIndex: 998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      <nav
        aria-label="Side navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "280px",
          background: "rgba(21, 28, 42, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRight: `1px solid ${colors.transparentWhite8}`,
          zIndex: 999,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0",
          boxShadow: isOpen ? `8px 0 32px ${colors.transparentBlack30}` : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px 24px",
          }}
        >
          <span
            style={{
              color: colors.white,
              fontWeight: 700,
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
            }}
          >
            {commonText.appName}
          </span>
          <button
            onClick={onClose}
            aria-label="Close navigation"
            style={{
              background: colors.transparentWhite8,
              border: "none",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              color: colors.white,
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: `1px solid ${colors.transparentWhite8}`,
            margin: "0 20px 16px",
          }}
        />

        <ul
          style={{ listStyle: "none", margin: 0, padding: "0 12px", flex: 1 }}
        >
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <button
                onClick={() => handleNavClick(path)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  color: colors.transparentWhite85,
                  fontSize: "0.97rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.transparentWhite8;
                  e.currentTarget.style.color = colors.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = colors.transparentWhite85;
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div
          style={{
            padding: "16px 20px 8px",
            color: colors.dimLabelGray,
            fontSize: "0.75rem",
          }}
        >
          © {new Date().getFullYear()} {commonText.appName}
        </div>
      </nav>
    </>
  );
};

export { Drawer };
