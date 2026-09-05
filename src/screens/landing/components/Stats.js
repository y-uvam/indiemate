import React from 'react';
import { commonText, colors } from '../../../utils';

export const Stats = () => {
  return (
    <section
      className="border-y py-12 px-6"
      style={{
        backgroundColor: colors.button,
        borderColor: colors.transparentWhite10,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl sm:text-4xl font-black" style={{ color: colors.white }}>
            10,000+
          </div>
          <div className="text-xs sm:text-sm mt-1" style={{ color: colors.subtitleGray }}>
            {commonText.posts} & {commonText.bites}
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-black" style={{ color: colors.pink }}>
            45,000+
          </div>
          <div className="text-xs sm:text-sm mt-1" style={{ color: colors.subtitleGray }}>
            {commonText.followers} & {commonText.following}
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-black" style={{ color: colors.primaryBlue }}>
            100%
          </div>
          <div className="text-xs sm:text-sm mt-1" style={{ color: colors.subtitleGray }}>
            {commonText.reqOriginal}
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-black" style={{ color: colors.onlineGreen }}>
            48 hrs
          </div>
          <div className="text-xs sm:text-sm mt-1" style={{ color: colors.subtitleGray }}>
            {commonText.applicationSubmittedDesc.slice(0, 32)}...
          </div>
        </div>
      </div>
    </section>
  );
};
