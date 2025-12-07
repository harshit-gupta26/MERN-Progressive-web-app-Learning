import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaChartLine } from "react-icons/fa";
import "./StatsSection.css";

const stats = [
  {
    icon: <FaUserGraduate className="stat-icon" />,
    value: "50K+",
    label: "Active Students",
  },
  {
    icon: <FaChalkboardTeacher className="stat-icon" />,
    value: "200+",
    label: "Expert Instructors",
  },
  {
    icon: <FaBook className="stat-icon" />,
    value: "500+",
    label: "Online Courses",
  },
  {
    icon: <FaChartLine className="stat-icon" />,
    value: "98%",
    label: "Success Rate",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            {stat.icon}
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
