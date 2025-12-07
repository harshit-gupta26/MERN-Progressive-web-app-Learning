import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaEnvelope } from "react-icons/fa";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p>
          Join our community of learners and unlock your potential with our comprehensive courses
        </p>
        <div className="cta-buttons">
          <Link to="/courses" className="cta-btn cta-browse">
            <FaBookOpen className="cta-icon" /> Browse Courses
          </Link>
          <Link to="/contact" className="cta-btn cta-contact">
            <FaEnvelope className="cta-icon" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
