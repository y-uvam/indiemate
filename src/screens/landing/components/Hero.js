import React from 'react';
import { Button } from '../../../components';
import { commonText, colors } from '../../../utils';

export const Hero = () => {
  return (
    <header id="hero" className="relative pt-36 pb-12 md:pt-44 md:pb-16 text-center z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md mb-8 text-xs sm:text-sm shadow-xl"
          style={{
            backgroundColor: colors.transparentWhite5,
            borderColor: colors.transparentWhite12,
            color: colors.offwhite,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.onlineGreen, boxShadow: `0 0 8px ${colors.onlineGreen}` }}
          />
          <span>{commonText.letsGetStarted} — {commonText.yourJOurneyBegingHere}</span>
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6"
          style={{ color: colors.white }}
        >
          {commonText.welcomeMessage}{' '}
          <span
            className="block sm:inline"
            style={{
              background: `linear-gradient(135deg, ${colors.storyRing} 0%, ${colors.pink} 50%, ${colors.primaryBlue} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {commonText.whatAreYouCreating}
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          style={{ color: colors.subtitleGray }}
        >
          {commonText.letstart}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button variant="primary" size="lg" href="#studio">
            {commonText.letsGo} 🚀
          </Button>
          <Button variant="secondary" size="lg" href="#monetization">
            {commonText.monetizeMasterpieces}
          </Button>
        </div>
      </div>
    </header>
  );
};
