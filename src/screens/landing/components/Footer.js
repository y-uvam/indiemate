import React from 'react';
import { appIcons } from '../../../assets';
import { commonText, colors } from '../../../utils';

export const Footer = () => {
  return (
    <footer
      className="border-t py-16 px-6"
      style={{
        backgroundColor: colors.darkblack,
        borderColor: colors.transparentWhite10,
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        style={{ color: colors.dimLabelGray }}
      >
        <div className="flex items-center gap-3">
          <img src={appIcons.logo} alt="Indiemate" className="w-6 h-6 object-contain" />
          <span style={{ color: colors.white, fontWeight: 'bold' }}>Indiemate Studio</span>
        </div>
        <div>© {new Date().getFullYear()} Indiemate. {commonText.yourPostIsLive}</div>
      </div>
    </footer>
  );
};
