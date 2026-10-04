import React from "react";
import { ScreenContainer } from "../../components";
import { colors } from "../../utils";

export const Home = () => {
  return (
    <ScreenContainer
      title="Home"
      badge="STUDIO DASHBOARD"
      accentColor={colors.storyRing}
      tagline="Your primary studio dispatch, daily slates, and personalized cinema feed."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      }
      description="This is the Home screen of Indiemate. It serves as your personal cinema launchpad, displaying premier independent films, daily production slates, trending creator projects, and curated watchlists tailored to your filmmaking tastes."
      features={[
        {
          title: "Curated Screenings",
          desc: "Stream recently uploaded indie features, short films, and festival selections directly in ultra-crisp resolution.",
        },
        {
          title: "Daily Slates & Notes",
          desc: "Read behind-the-scenes production updates, equipment insights, and quick slates shared by verified filmmakers.",
        },
        {
          title: "Network Feed",
          desc: "Keep up with crew collaborations, festival selections, and screenings across your creative network in real time.",
        },
      ]}
    />
  );
};
