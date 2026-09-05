import React from 'react';
import { colors } from '../../utils';
import {
  Header,
  Hero,
  StudioSlate,
  Stats,
  Features,
  Monetization,
  Faq,
  Footer,
} from './components';

export const Landing = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden font-sans"
      style={{ backgroundColor: colors.background, color: colors.offwhite }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1200px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-28 left-1/4 w-[550px] h-[550px] rounded-full blur-[140px]"
          style={{
            background: `radial-gradient(circle, ${colors.storyRing} 0%, ${colors.pink} 60%, transparent 100%)`,
            opacity: 0.25,
          }}
        />
        <div
          className="absolute top-96 -right-20 w-[650px] h-[650px] rounded-full blur-[150px]"
          style={{
            background: `radial-gradient(circle, ${colors.purple} 0%, ${colors.primaryBlue} 70%, transparent 100%)`,
            opacity: 0.22,
          }}
        />
        <div
          className="absolute top-[1600px] -left-20 w-[550px] h-[550px] rounded-full blur-[130px]"
          style={{
            background: `radial-gradient(circle, ${colors.magenta} 0%, ${colors.darkblue} 70%, transparent 100%)`,
            opacity: 0.35,
          }}
        />
      </div>

      <Header />
      <Hero />
      <StudioSlate />
      <Stats />
      <Features />
      <Monetization />
      <Faq />
      <Footer />
    </div>
  );
};
