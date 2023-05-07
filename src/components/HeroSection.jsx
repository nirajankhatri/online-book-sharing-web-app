import React from "react";
import CTAButton from "./CTAButton";
import heroImg from "../assets/images/hero-img.png";

const HeroSection = () => {
  const onLoginHandler = () => {};
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <img src={heroImg} alt="books" />
      <div className="hero-section-info">
        <div className="hero-statement">
        <span>Join our community of book lovers and enjoy the thrill.</span>
        </div>
        <CTAButton onClick={onLoginHandler} label="Add Book" classname="btn-hero-section" />
      </div>
    </section>
  );
};

export default HeroSection;
