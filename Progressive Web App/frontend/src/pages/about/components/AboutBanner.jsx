import React from "react";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <section className="about-banner">
      <div className="about-overlay">
        <div className="about-content">
          <h1>About EduLearn</h1>
          <p>
            We're on a mission to democratize education and make high-quality
            learning accessible to everyone, everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
