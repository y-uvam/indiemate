import React, { useState, useEffect } from 'react';
import { appIcons } from '../../../assets';
import { Button } from '../../../components';
import { commonText, colors } from '../../../utils';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 backdrop-blur-xl"
      style={{
        backgroundColor: scrolled ? colors.button : 'transparent',
        borderBottom: `1px solid ${scrolled ? colors.transparentWhite12 : colors.transparentWhite5}`,
        boxShadow: scrolled ? `0 10px 30px ${colors.transparentBlack30}` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
            style={{
              backgroundColor: colors.transparentWhite5,
              border: `1px solid ${colors.transparentWhite15}`,
            }}
          >
            <img src={appIcons.logo} alt="Indiemate Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-extrabold tracking-tight" style={{ color: colors.white }}>
            Indiemate
          </span>
          <span
            className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border"
            style={{
              backgroundColor: colors.magenta,
              color: colors.pink,
              borderColor: colors.storyRing,
            }}
          >
            Studio
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#features" style={{ color: colors.subtitleGray }} className="hover:text-white transition-colors">
              {commonText.content}
            </a>
          </li>
          <li>
            <a href="#studio" style={{ color: colors.subtitleGray }} className="hover:text-white transition-colors">
              {commonText.productionVideoFiles}
            </a>
          </li>
          <li>
            <a href="#monetization" style={{ color: colors.subtitleGray }} className="hover:text-white transition-colors">
              {commonText.monetization}
            </a>
          </li>
          <li>
            <a href="#faq" style={{ color: colors.subtitleGray }} className="hover:text-white transition-colors">
              {commonText.help}
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" href="#studio">
            {commonText.login}
          </Button>
          <Button variant="primary" size="sm" href="#studio">
            {commonText.createAccount}
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-2xl"
          style={{ color: colors.white }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden border-b px-6 py-6 flex flex-col gap-4"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.transparentWhite12,
          }}
        >
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: colors.subtitleGray }}>
            {commonText.content}
          </a>
          <a href="#studio" onClick={() => setMobileMenuOpen(false)} style={{ color: colors.subtitleGray }}>
            {commonText.productionVideoFiles}
          </a>
          <a href="#monetization" onClick={() => setMobileMenuOpen(false)} style={{ color: colors.subtitleGray }}>
            {commonText.monetization}
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: colors.subtitleGray }}>
            {commonText.help}
          </a>
          <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: colors.transparentWhite10 }}>
            <Button variant="ghost" size="sm" href="#studio" onClick={() => setMobileMenuOpen(false)}>
              {commonText.login}
            </Button>
            <Button variant="primary" size="sm" href="#studio" onClick={() => setMobileMenuOpen(false)}>
              {commonText.createAccount}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
