import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import { FaQuestionCircle, FaShieldAlt, FaBookOpen, FaLifeRing } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>EduLearn</h3>
          <p>
            Empowering learners worldwide with high-quality online education. Join thousands of students who have transformed their careers through our courses.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links & Support Side by Side */}
        <div className="footer-links-support">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-support">
            <h4>Support</h4>
            
            <ul>
  <li><FaLifeRing /> <Link to="/support">Support</Link></li>
  <li><FaQuestionCircle /> <Link to="/help">Help Center</Link></li>
  <li><FaShieldAlt /> <Link to="/privacy">Privacy Policy</Link></li>
  <li><FaBookOpen /> <Link to="/terms">Terms of Service</Link></li>
  <li><FaQuestionCircle /> <Link to="/faq">FAQ</Link></li>
</ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 EduLearn. All rights reserved.</p>
        <p>Powered by Readdy.</p>
      </div>
    </footer>
  );
};

export default Footer;
