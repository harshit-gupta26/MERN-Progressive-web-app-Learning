import React from "react";
import "./Team.css";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// import missionBanner from "/src/assets/mission-banner.jpg";
import sarahImg from "/src/assets/sarah.jpg";
import michaelImg from "/src/assets/michael.jpg";
import emmaImg from "/src/assets/emma.jpg";
import alexImg from "/src/assets/alex.jpg";

const teamData = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description:
      "Former tech executive with 15+ years of experience in education technology.",
    image: sarahImg,
  },
  {
    name: "Michael Chen",
    role: "Head of Curriculum",
    description:
      "PhD in Computer Science, former Google engineer with passion for teaching.",
    image: michaelImg,
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Director",
    description:
      "Digital marketing expert who has helped scale multiple EdTech startups.",
    image: emmaImg,
  },
  {
    name: "Alex Kim",
    role: "Lead Designer",
    description:
      "Award-winning UX designer focused on creating intuitive learning experiences.",
    image: alexImg,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Meet Our Team</h2>
        <p>
          Our passionate team of educators, technologists, and innovators work
          together to <br /> create exceptional learning experiences
        </p>
      </div>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
            <div className="social-icons">
              <FaLinkedin />
              <FaTwitter />
              <FaEnvelope />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
