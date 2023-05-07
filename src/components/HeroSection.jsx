import React from "react";
import CTAButton from "./CTAButton";
import heroImg from "../assets/images/hero-img.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const onAddBookHandler = () => {
    navigate("/addbook");
  };
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <img src={heroImg} alt="books" />
      <div className="hero-section-info">
        <div className="hero-statement">
          <span>Join our community of book lovers and enjoy the thrill.</span>
        </div>
        <CTAButton
          onClick={onAddBookHandler}
          label="Add Book"
          classname="btn-hero-section"
        />
      </div>
    </section>
  );
};

export default HeroSection;
