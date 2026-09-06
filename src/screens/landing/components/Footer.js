import React from "react";
import { appIcons } from "../../../assets";
import { commonText, colors } from "../../../utils";

export const Footer = () => {
  return (
    <footer
      className="border-t py-16 px-6"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.transparentWhite10,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-xl border p-1 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(21, 28, 42, 0.75)",
              borderColor: colors.transparentWhite10,
            }}
          >
            <img
              src={appIcons.logo}
              alt={commonText.appName}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="font-bold tracking-tight"
            style={{ color: colors.white }}
          >
            {commonText.appName}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="transition-colors hover:text-white"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.screeningRoom}
          </a>
          <a
            href="#features"
            className="transition-colors hover:text-white"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.features}
          </a>
          <a
            href="#monetization"
            className="transition-colors hover:text-white"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.monetization}
          </a>
        </div>

        <div style={{ color: colors.dimLabelGray }}>
          © {new Date().getFullYear()} {commonText.appName}. {commonText.yourPostIsLive}
        </div>
      </div>
    </footer>
  );
};
