import React from "react";
import { ScreenContainer } from "../../components";
import { colors } from "../../utils";

export const Reels = () => {
  return (
    <ScreenContainer
      title="Reels"
      badge="VERTICAL CINEMA & BITES"
      accentColor={colors.pink}
      tagline="Bite-sized cinematic storytelling, showreels, and production breakdowns."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }
      description="This is the Reels screen of Indiemate. Designed for dynamic vertical playback, this feed is dedicated to high-impact short cinema, cinematography showreels, lighting breakdowns, and director proof-of-concept teasers."
      features={[
        {
          title: "Vertical Cinema Cuts",
          desc: "Experience continuous vertical scrolling through creative micro-films, teasers, and concept trailers in 4K.",
        },
        {
          title: "Lighting & VFX Breakdowns",
          desc: "Watch creators reveal their lighting setups, node-based color grading, and on-set practical effects tricks.",
        },
        {
          title: "Creator Direct Tipping",
          desc: "Send instant support and tips to filmmakers directly from their bite-sized vertical video player.",
        },
      ]}
    />
  );
};
