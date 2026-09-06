import React from "react";
import { commonText, colors } from "../../../utils";
import { appImages } from "../../../assets";
import { GridDistortion } from "../../../components";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-36 pb-24 md:pt-48 md:pb-36 text-center px-6 overflow-hidden w-full"
    >
      {/* Background Interactive Grid Distortion Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-auto">
        <GridDistortion
          imageSrc={appImages.intro4}
          grid={16}
          mouse={0.12}
          strength={0.2}
          relaxation={0.9}
          className="w-full h-full opacity-70"
        />

        {/* Ambient Dark Cinema Gradients for Readability and Seamless Blending */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(6, 15, 33, 0.45) 0%, rgba(11, 15, 23, 0.8) 60%, #0B0F17 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-36 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${colors.background} 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${colors.background} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Hero Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 drop-shadow-xl"
          style={{ color: colors.white }}
        >
          {commonText.heroHeadline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md"
          style={{ color: colors.subtitleGray }}
        >
          {commonText.heroSubheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#monetization"
            className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide uppercase transition-all shadow-lg hover:opacity-95 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
              color: colors.white,
              boxShadow: `0 8px 24px ${colors.storyRing}45`,
            }}
          >
            {commonText.ctaApplyMonetization}
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide uppercase transition-all border hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundColor: "rgba(21, 28, 42, 0.75)",
              backdropFilter: "blur(20px)",
              borderColor: colors.transparentWhite12,
              color: colors.white,
            }}
          >
            {commonText.ctaExplorePortfolios}
          </a>
        </div>

        {/* Floating Feature Spec Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
          <div
            className="px-4 py-2 rounded-full border flex items-center gap-2 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(21, 28, 42, 0.65)",
              borderColor: colors.transparentWhite10,
              color: colors.white,
            }}
          >
            <span style={{ color: colors.storyRing }}>✦</span>
            <span>4K Lossless Playback</span>
          </div>
          <div
            className="px-4 py-2 rounded-full border flex items-center gap-2 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(21, 28, 42, 0.65)",
              borderColor: colors.transparentWhite10,
              color: colors.white,
            }}
          >
            <span style={{ color: colors.orange }}>✦</span>
            <span>Verified Crew Network</span>
          </div>
          <div
            className="px-4 py-2 rounded-full border flex items-center gap-2 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(21, 28, 42, 0.65)",
              borderColor: colors.transparentWhite10,
              color: colors.white,
            }}
          >
            <span style={{ color: colors.onlineGreen }}>✦</span>
            <span>100% Creator Fund</span>
          </div>
        </div>
      </div>
    </section>
  );
};

