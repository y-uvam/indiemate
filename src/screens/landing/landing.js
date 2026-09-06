import React from "react";
import { AppBackground } from "../../components";
import {
  Header,
  Hero,
  Features,
  Monetization,
  Footer,
} from "./components";

export const Landing = () => {
  return (
    <AppBackground>
      <Header />
      <Hero />
      <Features />
      <Monetization />
      <Footer />
    </AppBackground>
  );
};
