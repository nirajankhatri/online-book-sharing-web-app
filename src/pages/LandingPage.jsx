import React from "react";
import HeroSection from "../components/HeroSection";
import CardGlider from "../containers/books/glider/CardGlider";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CardGlider />
      <CardGlider />
    </React.Fragment>
  );
};

export default LandingPage;
