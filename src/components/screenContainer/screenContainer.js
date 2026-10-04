import React from "react";
import { colors } from "../../utils";

export const ScreenContainer = ({
  title,
  badge = "SCREEN",
  tagline,
  description,
  accentColor = colors.storyRing,
  icon,
  features = [],
  children,
}) => {
  return (
    <div className="w-full min-h-screen p-6 sm:p-10 lg:p-14 flex flex-col justify-start max-w-6xl mx-auto">
      {/* Top Breadcrumb & Badge */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase"
          style={{
            background: `${accentColor}1A`,
            color: accentColor,
            border: `1px solid ${accentColor}40`,
          }}
        >
          {badge}
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
          Indiemate Studio
        </span>
      </div>

      {/* Main Header Title */}
      <div className="flex items-center gap-4 mb-3">
        {icon && (
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${accentColor}25 0%, rgba(255,255,255,0.05) 100%)`,
              border: `1px solid ${accentColor}30`,
              color: accentColor,
            }}
          >
            {icon}
          </div>
        )}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
          style={{ color: colors.white }}
        >
          {title}
        </h1>
      </div>

      {tagline && (
        <p
          className="text-base sm:text-lg font-medium max-w-2xl mb-8"
          style={{ color: colors.subtitleGray }}
        >
          {tagline}
        </p>
      )}

      {/* Primary What Is This Screen Card */}
      <div
        className="relative overflow-hidden rounded-3xl p-8 sm:p-10 mb-8 backdrop-blur-xl border transition-all duration-300"
        style={{
          background: "linear-gradient(145deg, rgba(21, 28, 42, 0.75) 0%, rgba(10, 16, 26, 0.9) 100%)",
          borderColor: colors.transparentWhite12,
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.4), 0 0 40px ${accentColor}10`,
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: accentColor }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: accentColor }}
            />
            <span
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: accentColor }}
            >
              Screen Overview
            </span>
          </div>

          <h2
            className="text-xl sm:text-2xl font-bold tracking-tight mb-3"
            style={{ color: colors.white }}
          >
            What is this screen?
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed font-normal"
            style={{ color: colors.offwhite }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      {features.length > 0 && (
        <div className="mb-8">
          <h3
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: colors.dimLabelGray }}
          >
            Key Capabilities & Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 backdrop-blur-lg border transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "rgba(21, 28, 42, 0.45)",
                  borderColor: colors.transparentWhite8,
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center mb-3 text-sm font-bold"
                  style={{
                    background: `${accentColor}20`,
                    color: accentColor,
                  }}
                >
                  {idx + 1}
                </div>
                <h4
                  className="text-base font-bold mb-1.5"
                  style={{ color: colors.white }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.subtitleGray }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
