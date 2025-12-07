import React from "react";
import "./OurStory.css";
// import storyImg from "../assets/ourstory.jpg"; 
import storyImg from "/src/assets/ourstory.jpg";


const OurStory = () => {
  return (
    <section className="ourstory-section">

<div className="ourstory-container">
        <div className="ourstory-image">
          <img src={storyImg} alt="Our Story" />
        </div>

      <div className="ourstory-content">

        <h2>Our Story</h2>
        <p>
          EduLearn was born from a simple observation: traditional education wasn't keeping pace with the rapidly changing demands of the modern workforce. Our founders, Sarah and Michael, experienced this firsthand when they struggled to find quality, practical training for emerging technologies.
        </p>
        <p>
          In 2020, they decided to create the learning platform they wished existed - one that combined expert instruction, practical projects, and flexible scheduling to help anyone, anywhere, develop the skills they need to succeed.
        </p>
        <p>
          Today, EduLearn continues to evolve, always putting our learners first and constantly improving our platform to deliver the best possible educational experience.
        </p>
      </div>
      </div>
    </section>
  );
};

export default OurStory;
