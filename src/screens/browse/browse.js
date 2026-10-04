import React from "react";
import { ScreenContainer } from "../../components";
import { colors } from "../../utils";

export const Browse = () => {
  return (
    <ScreenContainer
      title="Browse"
      badge="DISCOVERY VAULT"
      accentColor={colors.primaryBlue}
      tagline="Explore independent cinema across genres, camera rigs, and festival selections."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <polygon
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      description="This is the Browse screen of Indiemate. Here you can explore a vast directory of independent films, filter by cinema genres, find certified production crews, and discover projects shot on specific camera and lens configurations."
      features={[
        {
          title: "Genre & Theme Filters",
          desc: "Browse curated collections ranging from Psychological Thriller and Neo-Noir to Documentary and Avant-Garde.",
        },
        {
          title: "Camera & Gear Specs",
          desc: "Filter and study films shot on specific cinema packages like ARRI Alexa Mini, RED V-Raptor, or Cooke Anamorphic glass.",
        },
        {
          title: "Festival Selections",
          desc: "Discover award-winning independent films recognized at Sundance, Cannes, Tribeca, and underground film circuits.",
        },
      ]}
    />
  );
};
