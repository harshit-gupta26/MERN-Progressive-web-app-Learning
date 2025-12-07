

import React from "react";
import { FaBookOpen } from "react-icons/fa";
import "./CoursesHeader.css";

const CoursesHeader = () => {
  return (
    <section
      className="courses-header">

        <div className="overlay"></div>
      <div className="courses-header-content">
        <FaBookOpen className="courses-icon" />
        <h1>Explore Our Courses</h1>
        <p>
          Discover a wide range of courses designed to help you master new
          skills and advance your career.
        </p>
      </div>
    </section>
  );
};

export default CoursesHeader;
