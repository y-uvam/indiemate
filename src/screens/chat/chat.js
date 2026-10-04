import React from "react";
import { ScreenContainer } from "../../components";
import { colors } from "../../utils";

export const Chat = () => {
  return (
    <ScreenContainer
      title="Chat"
      badge="DIRECTOR'S LOUNGE & CREW"
      accentColor={colors.onlineGreen}
      tagline="Real-time communication with production crews, collaborators, and film talent."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      }
      description="This is the Chat screen of Indiemate. It is the central communication room for indie productions, allowing directors, writers, sound engineers, and actors to collaborate, review cut revisions, and discuss casting opportunities."
      features={[
        {
          title: "Crew Project Rooms",
          desc: "Set up organized channels for camera, sound, art department, and production logistics with instant file sharing.",
        },
        {
          title: "Direct Filmmaker DMs",
          desc: "Network directly with directors, writers, and investors with rich media previews and timecoded video notes.",
        },
        {
          title: "Call Sheets & Slates",
          desc: "Distribute daily shooting schedules, call sheets, and gear lists with read receipts across your production team.",
        },
      ]}
    />
  );
};
