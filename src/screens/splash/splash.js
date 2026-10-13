import React, { useState, useEffect } from "react";
import { appIcons } from "../../assets";
import { colors, commonText } from "../../utils";

export const Splash = ({ onFinish, duration = 3000 }) => {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration - 300);

    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) {
        onFinish();
      }
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between p-12 transition-all duration-300 select-none ${
        isFading
          ? "opacity-0 pointer-events-none scale-105"
          : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: colors.background, zIndex: 99999 }}
    >
      <div className="flex-1" />

      <div className="w-24 h-24 flex items-center justify-center animate-splash-logo">
        <img
          src={appIcons.logo}
          alt={commonText.appName}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-end gap-1.5 animate-splash-footer">
        <span
          className="text-xs uppercase tracking-widest font-medium"
          style={{ color: colors.dimLabelGray }}
        >
          {commonText.from}
        </span>
        <span
          className="text-lg font-extrabold tracking-wider"
          style={{
            background: `linear-gradient(115deg, ${colors.storyRing} 0%, ${colors.pink} 50%, ${colors.primaryBlue} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {commonText.appNameCaps}
        </span>
      </div>
    </div>
  );
};
