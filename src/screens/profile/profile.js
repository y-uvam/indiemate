import React from "react";
import { ScreenContainer } from "../../components";
import { colors } from "../../utils";

export const Profile = () => {
  return (
    <ScreenContainer
      title="Profile"
      badge="CREATOR IDENTITY & FILMOGRAPHY"
      accentColor={colors.yellow}
      tagline="Your official director profile, verified film credits, and monetization status."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      }
      description="This is the Profile screen of Indiemate. It is your digital cinema resume and portfolio showcase, highlighting your verified credits, awards, technical gear inventory, and Creator Monetization Fund status."
      features={[
        {
          title: "Verified Film Credits",
          desc: "Present your complete filmography with confirmed roles as Director, Cinematographer, Sound Mixer, or Editor.",
        },
        {
          title: "Creator Fund Earnings",
          desc: "Track total portfolio views, monetization eligibility milestones, and direct Stripe payout distributions.",
        },
        {
          title: "Gear Locker & Kit",
          desc: "Display your personal production gear, lenses, and drone packages to attract collaborating productions.",
        },
      ]}
    />
  );
};
