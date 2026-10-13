import React, { useState } from 'react';
import { commonText, colors } from '../../../utils';

export const StudioSlate = () => {
  const [activeTab, setActiveTab] = useState('production');

  return (
    <section id="studio" className="px-6 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl p-[1px] shadow-2xl"
          style={{
            background: `linear-gradient(180deg, ${colors.transparentWhite15} 0%, ${colors.transparentWhite5} 100%)`,
            boxShadow: `0 20px 60px ${colors.transparentBlack30}`,
          }}
        >
          <div
            className="rounded-2xl overflow-hidden border text-left"
            style={{
              backgroundColor: colors.darkblue,
              borderColor: colors.transparentWhite10,
            }}
          >
            <div
              className="h-12 border-b px-5 flex items-center justify-between"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.transparentWhite10,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.red }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.yellow }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.green }} />
              </div>

              <div className="flex items-center gap-1">
                <button
                  className="px-3.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    backgroundColor: activeTab === 'production' ? colors.transparentWhite15 : 'transparent',
                    color: activeTab === 'production' ? colors.white : colors.subtitleGray,
                  }}
                  onClick={() => setActiveTab('production')}
                >
                  🎥 {commonText.productionVideoFiles}
                </button>
                <button
                  className="px-3.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    backgroundColor: activeTab === 'crew' ? colors.transparentWhite15 : 'transparent',
                    color: activeTab === 'crew' ? colors.white : colors.subtitleGray,
                  }}
                  onClick={() => setActiveTab('crew')}
                >
                  👥 {commonText.castAndCrewLabel}
                </button>
                <button
                  className="px-3.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    backgroundColor: activeTab === 'posters' ? colors.transparentWhite15 : 'transparent',
                    color: activeTab === 'posters' ? colors.white : colors.subtitleGray,
                  }}
                  onClick={() => setActiveTab('posters')}
                >
                  🎨 {commonText.promotionalPosters}
                </button>
              </div>

              <div className="hidden sm:block text-xs font-mono" style={{ color: colors.dimLabelGray }}>
                {commonText.profileSetup}
              </div>
            </div>

            <div className="p-6 sm:p-8 min-h-[380px]">
              {activeTab === 'production' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div
                    className="lg:col-span-6 border rounded-xl p-5 space-y-4"
                    style={{
                      backgroundColor: colors.transparentWhite5,
                      borderColor: colors.transparentWhite10,
                    }}
                  >
                    <div className="font-bold text-sm flex items-center justify-between" style={{ color: colors.white }}>
                      <span>{commonText.projectTitle}</span>
                      <span className="text-xs" style={{ color: colors.onlineGreen }}>
                        4K UHD • {commonText.oneVideoSelected}
                      </span>
                    </div>
                    <input
                      type="text"
                      defaultValue="The Indie Masterpiece"
                      className="w-full border rounded-lg px-3.5 py-2 text-sm focus:outline-none"
                      style={{
                        backgroundColor: colors.background,
                        borderColor: colors.transparentWhite15,
                        color: colors.white,
                      }}
                      placeholder={commonText.projectTitlePlaceholder}
                    />
                    <div>
                      <label className="block text-xs mb-1" style={{ color: colors.subtitleGray }}>
                        {commonText.filmTagline}
                      </label>
                      <input
                        type="text"
                        defaultValue={commonText.taglinePlaceholder}
                        className="w-full border rounded-lg px-3.5 py-2 text-xs focus:outline-none"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: colors.transparentWhite15,
                          color: colors.offwhite,
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1" style={{ color: colors.subtitleGray }}>
                        {commonText.synopsisAndStoryline}
                      </label>
                      <textarea
                        rows="3"
                        defaultValue={commonText.synopsisPlaceholder}
                        className="w-full border rounded-lg px-3.5 py-2 text-xs focus:outline-none"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: colors.transparentWhite15,
                          color: colors.offwhite,
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="lg:col-span-6 border rounded-xl p-6 flex flex-col justify-between"
                    style={{
                      backgroundColor: colors.skeletonBone,
                      borderColor: colors.transparentWhite15,
                    }}
                  >
                    <div>
                      <span
                        className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 border"
                        style={{
                          backgroundColor: colors.magenta,
                          color: colors.pink,
                          borderColor: colors.storyRing,
                        }}
                      >
                        {commonText.officialTrailerTeaser}
                      </span>
                      <h3 className="text-xl font-bold mb-2" style={{ color: colors.white }}>
                        {commonText.trailerAttached} (2.39:1 Cinema Format)
                      </h3>
                      <p className="text-xs leading-relaxed mb-4" style={{ color: colors.subtitleGray }}>
                        {commonText.recommendedTrailerLength} • {commonText.audioSoundDesign}: {commonText.originalStudioSound}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-3 border-t" style={{ borderColor: colors.transparentWhite10 }}>
                      <span
                        className="text-xs px-2.5 py-1 rounded-md border"
                        style={{
                          backgroundColor: colors.transparentWhite5,
                          borderColor: colors.transparentWhite10,
                          color: colors.offwhite,
                        }}
                      >
                        🎬 {commonText.selectTrailer}
                      </span>
                      <span
                        className="text-xs px-2.5 py-1 rounded-md border"
                        style={{
                          backgroundColor: colors.transparentWhite5,
                          borderColor: colors.onlineGreen,
                          color: colors.onlineGreen,
                        }}
                      >
                        ✓ {commonText.enableTipButton}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'crew' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    className="border rounded-xl p-4"
                    style={{
                      backgroundColor: colors.profileCardBg,
                      borderColor: colors.transparentWhite10,
                    }}
                  >
                    <div className="text-xs font-bold mb-1" style={{ color: colors.pink }}>
                      Director & Creator
                    </div>
                    <div className="font-bold text-sm" style={{ color: colors.white }}>
                      {commonText.profileName}
                    </div>
                    <div className="text-xs mt-1" style={{ color: colors.profileHandleText }}>
                      @{commonText.profileHandle}
                    </div>
                  </div>

                  <div
                    className="border rounded-xl p-4"
                    style={{
                      backgroundColor: colors.profileCardBg,
                      borderColor: colors.transparentWhite10,
                    }}
                  >
                    <div className="text-xs font-bold mb-1" style={{ color: colors.primaryBlue }}>
                      Cinematographer
                    </div>
                    <div className="font-bold text-sm" style={{ color: colors.white }}>
                      Kaelen Wright
                    </div>
                    <div className="text-xs mt-1" style={{ color: colors.profileHandleText }}>
                      {commonText.addAs} Director of Photography
                    </div>
                  </div>

                  <div
                    className="border rounded-xl p-4"
                    style={{
                      backgroundColor: colors.profileCardBg,
                      borderColor: colors.transparentWhite10,
                    }}
                  >
                    <div className="text-xs font-bold mb-1" style={{ color: colors.storyRing }}>
                      {commonText.audioSoundDesign}
                    </div>
                    <div className="font-bold text-sm" style={{ color: colors.white }}>
                      Marcus Vance
                    </div>
                    <div className="text-xs mt-1" style={{ color: colors.profileHandleText }}>
                      {commonText.originalStudioSound}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'posters' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="border rounded-xl p-5 flex items-center justify-between"
                    style={{
                      backgroundColor: colors.profileCardBg,
                      borderColor: colors.transparentWhite10,
                    }}
                  >
                    <div>
                      <div className="text-xs font-bold" style={{ color: colors.storyRing }}>
                        {commonText.portraitPoster}
                      </div>
                      <div className="text-xs mt-1" style={{ color: colors.subtitleGray }}>
                        {commonText.forFeedDiscovery} (2:3 Aspect)
                      </div>
                    </div>
                    <span className="text-xs font-bold" style={{ color: colors.onlineGreen }}>
                      {commonText.published} ✓
                    </span>
                  </div>

                  <div
                    className="border rounded-xl p-5 flex items-center justify-between"
                    style={{
                      backgroundColor: colors.profileCardBg,
                      borderColor: colors.transparentWhite10,
                    }}
                  >
                    <div>
                      <div className="text-xs font-bold" style={{ color: colors.purple }}>
                        {commonText.landscapeBackdrop}
                      </div>
                      <div className="text-xs mt-1" style={{ color: colors.subtitleGray }}>
                        {commonText.forCinemaBanner} (16:9 Aspect)
                      </div>
                    </div>
                    <span className="text-xs font-bold" style={{ color: colors.onlineGreen }}>
                      {commonText.published} ✓
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
