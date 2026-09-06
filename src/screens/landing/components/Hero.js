import React from "react";
import { commonText, colors } from "../../../utils";
import { cinemaHero } from "../../../assets";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 text-center px-6 max-w-7xl mx-auto"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium"
          style={{
            backgroundColor: "rgba(30, 123, 255, 0.12)",
            borderColor: "rgba(30, 123, 255, 0.3)",
            color: colors.primaryBlue,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: colors.onlineGreen,
              boxShadow: `0 0 8px ${colors.onlineGreen}`,
            }}
          />
          <span>{commonText.screeningRoom}</span>
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
          style={{ color: colors.white }}
        >
          {commonText.heroHeadline}
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: colors.subtitleGray }}
        >
          {commonText.heroSubheadline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#monetization"
            className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide uppercase transition-all shadow-lg hover:opacity-95"
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
            className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide uppercase transition-all border hover:bg-white/5"
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
      </div>

      <div
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden border p-2"
        style={{
          backgroundColor: "rgba(21, 28, 42, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderColor: colors.transparentWhite10,
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="aspect-[21/9] sm:aspect-[2.35/1] w-full rounded-2xl overflow-hidden relative">
          <img
            src={cinemaHero}
            alt={commonText.appName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
