import React, { useState } from 'react';
import { Button } from '../../../components';
import { commonText, colors } from '../../../utils';

export const Monetization = () => {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  return (
    <section
      id="monetization"
      className="py-24 px-6 max-w-7xl mx-auto border-t"
      style={{ borderColor: colors.transparentWhite10 }}
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span
          className="text-xs font-bold uppercase tracking-widest block mb-3"
          style={{ color: colors.pink }}
        >
          {commonText.eligibilityChecklist}
        </span>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
          style={{ color: colors.white }}
        >
          {commonText.monetizeMasterpieces}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.subtitleGray }}>
          {commonText.monetizationSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="border rounded-2xl p-8"
          style={{
            backgroundColor: colors.darkblue,
            borderColor: colors.transparentWhite10,
          }}
        >
          <h3 className="text-lg font-bold mb-4" style={{ color: colors.white }}>
            ✓ {commonText.eligibilityChecklist}
          </h3>
          <ul className="space-y-4 text-xs sm:text-sm" style={{ color: colors.offwhite }}>
            <li className="flex items-center gap-2.5">
              <span style={{ color: colors.onlineGreen, fontWeight: 'bold' }}>✓</span> {commonText.reqViews}
            </li>
            <li className="flex items-center gap-2.5">
              <span style={{ color: colors.onlineGreen, fontWeight: 'bold' }}>✓</span> {commonText.reqOriginal}
            </li>
            <li className="flex items-start gap-2.5 leading-relaxed">
              <span style={{ color: colors.onlineGreen, fontWeight: 'bold' }}>✓</span> {commonText.copyrightAgreement}
            </li>
          </ul>
        </div>

        <div
          className="border rounded-2xl p-8 flex flex-col justify-between"
          style={{
            backgroundColor: colors.skeletonBone,
            borderColor: colors.transparentWhite15,
          }}
        >
          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: colors.white }}>
              {commonText.applicationForm}
            </h3>
            <p className="text-xs leading-relaxed mb-6" style={{ color: colors.subtitleGray }}>
              {commonText.termsAgreement}
            </p>
          </div>

          {applicationSubmitted ? (
            <div
              className="p-4 rounded-xl border text-xs font-bold text-center"
              style={{
                backgroundColor: colors.transparentWhite5,
                borderColor: colors.onlineGreen,
                color: colors.onlineGreen,
              }}
            >
              🎉 {commonText.applicationSubmittedTitle} — {commonText.applicationSubmittedDesc}
            </div>
          ) : (
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setApplicationSubmitted(true)}
            >
              {commonText.submitApplication} →
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
