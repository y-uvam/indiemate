import React from "react";
import { commonText, colors } from "../../../utils";
import { cinematographer } from "../../../assets";

export const Features = () => {
  const features = [
    {
      title: commonText.featurePlayerTitle,
      description: commonText.featurePlayerDesc,
      iconColor: colors.orange,
      isHighlighted: false,
    },
    {
      title: commonText.featureCrewTitle,
      description: commonText.featureCrewDesc,
      iconColor: colors.storyRing,
      isHighlighted: true,
    },
    {
      title: commonText.featureGearTitle,
      description: commonText.featureGearDesc,
      iconColor: colors.primaryBlue,
      isHighlighted: false,
    },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          style={{ color: colors.white }}
        >
          {commonText.features}
        </h2>
        <div
          className="w-12 h-1 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border"
            style={{
              backgroundColor: "rgba(21, 28, 42, 0.75)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderColor: item.isHighlighted
                ? colors.storyRing
                : colors.transparentWhite10,
              boxShadow: item.isHighlighted
                ? `0 12px 36px ${colors.storyRing}25`
                : "0 12px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${item.iconColor}18`,
                    borderColor: `${item.iconColor}35`,
                    color: item.iconColor,
                  }}
                >
                  <span className="text-lg font-bold">0{idx + 1}</span>
                </div>
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: item.isHighlighted
                      ? colors.storyRing
                      : colors.dimLabelGray,
                  }}
                >
                  {item.isHighlighted && (
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: colors.storyRing }}
                    />
                  )}
                </div>
              </div>

              <h3
                className="text-xl font-bold tracking-tight mb-3"
                style={{
                  color: item.isHighlighted ? colors.storyRing : colors.white,
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.subtitleGray }}
              >
                {item.description}
              </p>
            </div>

            <div
              className="pt-6 mt-6 border-t flex items-center justify-between text-xs font-medium"
              style={{
                borderColor: colors.transparentWhite8,
                color: colors.dimLabelGray,
              }}
            >
              <span>{commonText.appName}</span>
              <span style={{ color: colors.onlineGreen }}>✓</span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-3xl border overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center"
        style={{
          backgroundColor: "rgba(21, 28, 42, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderColor: colors.transparentWhite10,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="p-8 sm:p-12">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: colors.storyRing }}
          >
            {commonText.monetization}
          </span>
          <h3
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
            style={{ color: colors.white }}
          >
            {commonText.featureGearTitle}
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: colors.subtitleGray }}
          >
            {commonText.featureGearDesc}
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: "rgba(30, 123, 255, 0.12)",
                borderColor: "rgba(30, 123, 255, 0.25)",
                color: colors.primaryBlue,
              }}
            >
              ARRI
            </span>
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: `${colors.storyRing}15`,
                borderColor: `${colors.storyRing}30`,
                color: colors.storyRing,
              }}
            >
              COOKE
            </span>
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: `${colors.orange}15`,
                borderColor: `${colors.orange}30`,
                color: colors.orange,
              }}
            >
              ZEISS
            </span>
          </div>
        </div>
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={cinematographer}
            alt={commonText.appName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
