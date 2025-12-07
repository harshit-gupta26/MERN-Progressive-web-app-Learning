import React from "react";
import "./Mission.css";
import missionBanner from "/src/assets/mission-banner.jpg";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          At EduLearn, we believe that education is the key to unlocking human
          potential. Our mission is to provide world-class online education that
          empowers learners to achieve their goals and transform their lives.
        </p>{" "}
        <br />
        <p>
          Since our founding in 2020, we've helped over 50,000 students <br />{" "}
          worldwide develop new skills, advance their careers, and pursue their
          passions through our comprehensive online courses.
        </p>
      </div>

      <div className="mission-banner">
        <img src={missionBanner} alt="Our Mission Banner" />
      </div>
    </section>
  );
};

export default Mission;
