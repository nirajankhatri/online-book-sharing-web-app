import React from "react";
import CTAButton from "./CTAButton";
import heroImg from "../assets/images/hero-img.png";

const HeroSection = () => {
  const onLoginHandler = () => {};
  return (
    <section className="hero-section">
      <img src={heroImg} alt="books" />
      <div className="hero-section-info">
        <div className="hero-statement">
          Join our community of book lovers and enjoy the thrill of discovering
          new titles.
        </div>
        <CTAButton onClick={onLoginHandler} label="Add Book" />
      </div>
    </section>
  );
};

export default HeroSection;
