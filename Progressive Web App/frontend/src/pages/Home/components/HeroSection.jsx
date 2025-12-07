import { useState } from "react";
import {
  FaPlayCircle,
  FaArrowRight,
  FaTimes,
  FaFilePdf,
  FaCode,
} from "react-icons/fa";
import "./HeroSection.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  // ✅ Initialize particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero">
      {/* 🌌 Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0d47a1" } }, // or transparent if you already have bg image
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Learn Skills That <br />
            <span>Shape Your Future</span>
          </h1>
          <p>
            Join thousands of learners worldwide and master in-demand skills
            with our expert-led courses. Start your journey to success today.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary">
              <FaArrowRight /> Start Learning Now
            </Link>

            <button className="btn-outline" onClick={() => setShowDemo(true)}>
              <FaPlayCircle /> Watch Demo
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>50K+</h3>
              <p>Learners Enrolled</p>
            </div>
            <div>
              <h3>120+</h3>
              <p>Expert Instructors</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Courses Available</p>
            </div>
          </div>
        </div>

        <div className="hero-categories">
          <h3>Top Categories</h3>
          <div className="category-tags">
            <span>💻 Web Development</span>
            <span>📱 App Development</span>
            <span>📈 Data Science</span>
            <span>🎨 UI/UX Design</span>
          </div>
        </div>
      </div>

      {/* ✅ Interactive Demo Modal */}
      {showDemo && (
        <div className="demo-modal">
          <div className="demo-content">
            {/* ❌ Close Icon */}
            <button className="close-btn" onClick={() => setShowDemo(false)}>
              <FaTimes />
            </button>

            {/* 🎥 YouTube Video */}
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>






              
            </div>

            {/* 🌟 Platform Highlights */}
            <div className="demo-highlights">
              <h2>Why Learn with EduLearn?</h2>
              <div className="features">
                <div className="feature">
                  <h3>🎯 Interactive Learning</h3>
                  <p>
                    Learn by doing through hands-on projects, quizzes, and
                    real-world examples.
                  </p>
                </div>
                <div className="feature">
                  <h3>📊 Progress Tracking</h3>
                  <p>
                    Monitor your performance and stay motivated with our
                    personalized dashboard.
                  </p>
                </div>
                <div className="feature">
                  <h3>🤝 Community Support</h3>
                  <p>
                    Connect with mentors and fellow learners for guidance and
                    collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* 🧾 Notes (PDFs) */}
            <div className="demo-notes">
              <h2>
                <FaFilePdf /> Downloadable Notes
              </h2>
              <ul>
                <li>
                  <a
                    href="/notes/webdev-basics.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Development Basics
                  </a>
                </li>
                <li>
                  <a
                    href="/notes/python-data-science.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python for Data Science
                  </a>
                </li>
                <li>
                  <a
                    href="/notes/digital-marketing-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Digital Marketing Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* 💻 Coding Concepts */}
            <div className="demo-coding">
              <h2>
                <FaCode /> Key Coding Concepts
              </h2>
              <div className="concepts">
                <div className="concept-card">
                  <h4>Variables & Data Types</h4>
                  <p>
                    Learn how to store and manage data effectively using
                    variables.
                  </p>
                </div>
                <div className="concept-card">
                  <h4>Functions & Loops</h4>
                  <p>
                    Write reusable code blocks and automate repetitive tasks
                    efficiently.
                  </p>
                </div>
                <div className="concept-card">
                  <h4>APIs & Integrations</h4>
                  <p>
                    Connect applications and access powerful external services
                    easily.
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ Instructor Spotlight */}
            <div className="demo-instructor">
              <img src="/images/instructor1.jpg" alt="Instructor" />
              <div>
                <h3>Meet John Doe</h3>
                <p>
                  Full-Stack Developer & Senior Instructor with 10+ years of
                  experience.
                </p>
              </div>
            </div>

            {/* ✅ Testimonials Section */}
            <div className="demo-testimonials">
              <h2>What Learners Say</h2>

              <div className="testimonial">
                <img
                  src="/images/sarah.jpg"
                  alt="Sarah J."
                  className="testimonial-avatar"
                />
                <p>The best online learning platform! Super interactive.</p>
                <h4>– Sarah J., Web Developer</h4>
              </div>

              <div className="testimonial">
                <img
                  src="/images/mark.jpg"
                  alt="Mark L."
                  className="testimonial-avatar"
                />
                <p>
                  I learned so much in such a short time. Highly recommended!
                </p>
                <h4>– Mark L., Data Analyst</h4>
              </div>

              <div className="testimonial">
                <img
                  src="/images/priya.jpg"
                  alt="Priya S."
                  className="testimonial-avatar"
                />
                <p>The courses are practical, engaging, and easy to follow.</p>
                <h4>– Priya S., UI/UX Designer</h4>
              </div>
            </div>

            {/* 🚀 Action Buttons */}
            <div className="demo-actions">
              <Link
                to="/courses"
                className="btn-primary cta-btn"
                onClick={() => setShowDemo(false)}
              >
                <FaArrowRight /> Start Learning Now
              </Link>

              <button
                className="btn-close-demo"
                onClick={() => setShowDemo(false)}
              >
                Close Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
