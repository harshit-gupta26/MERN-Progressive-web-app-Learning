import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhp,
  FaJava,
  FaReact,
  FaPython,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaCuttlefish,
  FaCode,
} from "react-icons/fa";
import "./Tutorials.css";

const Tutorials = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      title: "PHP Tutorial",
      desc: "Learn backend scripting with PHP.",
      icon: <FaPhp />,
      path: "/phpstart",
    },
    {
      title: "C++ Tutorial",
      desc: "Master object-oriented programming.",
      icon: <FaCode />,
      path: "/cppstart",
    },
    {
      title: "Java Tutorial",
      desc: "Develop robust backend systems.",
      icon: <FaJava />,
      path: "/javastart",
    },
    {
      title: "React JS Tutorial",
      desc: "React is an open-source front-end JavaScript library. This series will cover React from start to finish — learning React from the ground up!",
      icon: <FaReact />,
      path: "/reactstart",
    },
    {
      title: "C Tutorial",
      desc: "C language is considered the mother of all programming languages. It’s a powerful general-purpose language used to develop OS, compilers, and more.",
      icon: <FaCuttlefish />,
      path: "/cstart",
    },
    {
      title: "Python Tutorial",
      desc: "Python is a high-level, interpreted, general-purpose programming language with easy syntax and vast library support.",
      icon: <FaPython />,
      path: "/pythonstart",
    },
    {
      title: "JavaScript Tutorial",
      desc: "JavaScript is a lightweight, cross-platform, object-oriented language that powers interactivity on the web.",
      icon: <FaJs />,
      path: "/jsstart",
    },
    {
      title: "CSS Tutorial",
      desc: "CSS (Cascading Style Sheets) describes how HTML elements are displayed on screen, paper, or in other media.",
      icon: <FaCss3Alt />,
      path: "/cssstart",
    },
    {
      title: "HTML Tutorial",
      desc: "HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages.",
      icon: <FaHtml5 />,
      path: "/htmlstart",
    },
  ];

  return (
    <section className="tutorials-page">
      <h1>🎓 Explore Tutorials</h1>
      <p>Choose a topic and start learning with interactive guides.</p>

      <div className="tutorials-grid">
        {tutorials.map((tutorial, index) => (
          <div className="tutorial-card" key={index}>
            <div className="tutorial-icon">{tutorial.icon}</div>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.desc}</p>
            <button
              className="learn-btn"
              onClick={() => navigate(tutorial.path)}
            >
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
