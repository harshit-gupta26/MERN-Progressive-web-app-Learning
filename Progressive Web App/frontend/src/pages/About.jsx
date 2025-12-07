import React from "react";
import AboutBanner from "./about/components/AboutBanner";
import Mission from "./about/components/Mission";
import Stats from "./about/components/Stats";
import Values from "./about/components/Values";
import Team from "./about/components/Team";
import OurStory from "./about/components/OurStory";
import Footer from "./about/components/Footer";

const About = () => {
  return (
    <>
      <AboutBanner />
      <Mission />  {/* Mission section added */}
      <Stats /> {/* Stats section added */}
      <Values />  {/* Our Values section added */}
      <Team />  {/* Meet Our Team section added */}
      <OurStory />  {/* Our Story section added */}
      <Footer />

    </>
  );
};

export default About;
