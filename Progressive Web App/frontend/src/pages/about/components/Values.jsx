import React from "react";
import { FaLightbulb, FaHeart, FaCheckCircle, FaGlobe } from "react-icons/fa";
import "./Values.css";

const valuesData = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We constantly innovate to provide the best learning experience using cutting-edge technology.",
  },
  {
    icon: <FaHeart />,
    title: "Passion",
    description:
      "We are passionate about education and helping learners achieve their full potential.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality",
    description:
      "We maintain the highest standards in course content and learning outcomes.",
  },
  {
    icon: <FaGlobe />,
    title: "Accessibility",
    description:
      "We believe quality education should be accessible to everyone, everywhere.",
  },
];

const Values = () => {
  return (
    <section className="values-section">
      <div className="values-header">
        <h2>Our Values</h2>
        <p>
          These core values guide everything we do and shape our approach to
          education
        </p>
      </div>
      <div className="values-container">
        {valuesData.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
