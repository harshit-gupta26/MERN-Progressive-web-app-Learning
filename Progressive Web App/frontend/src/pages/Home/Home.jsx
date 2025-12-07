

import React from "react";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import PopularCourses from "./components/PopularCourses";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"; // Import CSS for button styling
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChoose />

      <PopularCourses />

      {/* View All Courses Button */}
      <section className="view-all-courses-section">
        <Link to="/courses" className="view-all-btn">
          View All Courses <FaArrowRight className="arrow-icon" />
        </Link>
      </section>
      <StatsSection />
      <CTASection />  {/* Add CTA section here */}
      <Footer /> {/* Footer added at the bottom */}

    </div>
  );
};

export default Home;
