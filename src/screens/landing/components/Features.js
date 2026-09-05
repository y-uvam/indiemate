import React from 'react';
import { commonText, colors } from '../../../utils';

export const Features = () => {
  const featureCards = [
    {
      icon: '🎬',
      title: commonText.productionVideoFiles,
      desc: commonText.officialTrailerTeaser + ' & ' + commonText.recommendedTrailerLength,
      tag: commonText.videoFormatResolution,
    },
    {
      icon: '👥',
      title: commonText.castAndCrewLabel,
      desc: commonText.addActorDirectorCrew + ' — ' + commonText.selectRoleToAssign,
      tag: commonText.tagPeople,
    },
    {
      icon: '🎨',
      title: commonText.promotionalPosters,
      desc: `${commonText.portraitPoster} (${commonText.forFeedDiscovery}) & ${commonText.landscapeBackdrop} (${commonText.forCinemaBanner})`,
      tag: commonText.cover,
    },
    {
      icon: '💰',
      title: commonText.monetizeMasterpieces,
      desc: commonText.monetizationSubtitle,
      tag: commonText.enableTipButton,
    },
    {
      icon: '🎞️',
      title: commonText.studioThoughtUpdate,
      desc: commonText.storyTextPlaceholder,
      tag: commonText.slateTopicMood,
    },
    {
      icon: '⭐',
      title: commonText.reviews,
      desc: commonText.enableCommunityFeedback + ' & ' + commonText.ratings,
      tag: commonText.achievementVault,
    },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span
          className="text-xs font-bold uppercase tracking-widest block mb-3"
          style={{ color: colors.storyRing }}
        >
          {commonText.chooseATypeToGetStarted}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: colors.white }}>
          {commonText.whatAreYouCreating}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.subtitleGray }}>
          {commonText.synopsisPlaceholder}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards.map((feature, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: colors.transparentWhite5,
              borderColor: colors.transparentWhite10,
            }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border"
                style={{
                  backgroundColor: colors.darkblue,
                  borderColor: colors.transparentWhite12,
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2.5" style={{ color: colors.white }}>
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: colors.subtitleGray }}>
                {feature.desc}
              </p>
            </div>
            <span className="text-xs font-semibold" style={{ color: colors.pink }}>
              {feature.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
