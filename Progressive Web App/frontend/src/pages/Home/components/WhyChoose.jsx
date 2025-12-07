import React from "react";
import { FaVideo, FaCertificate, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import "./WhyChoose.css"; // Import CSS

const features = [
  {
    icon: <FaVideo className="feature-icon icon-video" />,
    title: "Interactive Video Lessons",
    description: "Learn through engaging video content with interactive elements and real-time feedback.",
  },
  {
    icon: <FaCertificate className="feature-icon icon-certificate" />,
    title: "Certified Courses",
    description: "Earn industry-recognized certificates upon successful completion of our courses.",
  },
  {
    icon: <FaChalkboardTeacher className="feature-icon icon-instructor" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: <FaClock className="feature-icon icon-clock" />,
    title: "Learn at Your Pace",
    description: "Flexible scheduling allows you to learn whenever and wherever you want.",
  },
];

const WhyChoose = () => {
  return (
   
    <section className="why-choose-section">
       {/* ✅ Subscribe Section */}
    <div className="hero-subscribe">
    <h3>Stay Updated!</h3>
    <input type="email" placeholder="Enter your email" />
    <button className="btn-primary">Subscribe</button>
  </div>
      <h2>Why Choose EduLearn?</h2>
      <p>
        We provide the best learning experience with cutting-edge technology and expert guidance
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>


    </section>
  );
};

export default WhyChoose;
