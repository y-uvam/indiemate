import React, { useState } from "react";
import { commonText, colors } from "../../../utils";

export const Monetization = () => {
  const [applied, setApplied] = useState(false);

  return (
    <section
      id="monetization"
      className="py-24 px-6 max-w-7xl mx-auto border-t"
      style={{ borderColor: colors.transparentWhite10 }}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          style={{ color: colors.white }}
        >
          {commonText.monetizationHeader}
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: colors.subtitleGray }}
        >
          {commonText.monetizationCopy}
        </p>
      </div>

      <div
        className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 border"
        style={{
          backgroundColor: "rgba(21, 28, 42, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderColor: colors.transparentWhite10,
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
              style={{
                backgroundColor: `${colors.storyRing}15`,
                color: colors.storyRing,
              }}
            >
              <span>{commonText.monetization}</span>
              <span style={{ color: colors.onlineGreen }}>✓</span>
            </div>
            <div
              className="text-xl font-bold tracking-tight mb-2"
              style={{ color: colors.white }}
            >
              {commonText.appName} Creator Fund
            </div>
            <div
              className="text-xs"
              style={{ color: colors.dimLabelGray }}
            >
              Stripe Connect • Performance Payouts
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            {applied ? (
              <div
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center border"
                style={{
                  backgroundColor: `${colors.onlineGreen}15`,
                  borderColor: colors.onlineGreen,
                  color: colors.onlineGreen,
                }}
              >
                ✓ {commonText.applicationSubmittedTitle}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setApplied(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:opacity-95"
                style={{
                  background: `linear-gradient(90deg, ${colors.orange} 0%, ${colors.storyRing} 100%)`,
                  color: colors.white,
                  boxShadow: `0 8px 24px ${colors.storyRing}45`,
                }}
              >
                {commonText.ctaApplyMonetization}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
