import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaShieldAlt,
  FaGlobe,
  FaFilePdf,
  FaLock,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";
import jsPDF from "jspdf";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    requestType: "Delete My Data",
  });

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect personal details like name, email, and course preferences to provide a personalized experience.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "Your information is used for communication, course recommendations, analytics, and improving our services.",
    },
    {
      title: "3. Data Protection & Security",
      content:
        "We implement SSL encryption, secure databases, and limited employee access to safeguard your data.",
    },
    {
      title: "4. Cookies Policy",
      content:
        "Our website uses cookies to enhance user experience. You can disable cookies in browser settings.",
    },
    {
      title: "5. Third-Party Services",
      content:
        "We may share limited data with trusted partners like payment gateways or analytics providers.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, modify, or delete your personal data. Contact us at privacy@edulearn.com.",
    },
  ];

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("EduLearn Privacy Policy", 10, 20);
    doc.setFontSize(12);
    let y = 30;
    sections.forEach((sec) => {
      doc.text(sec.title, 10, y);
      y += 8;
      const lines = doc.splitTextToSize(sec.content, 180);
      doc.text(lines, 10, y);
      y += lines.length * 8 + 4;
      if (y > 280) doc.addPage() && (y = 20);
    });
    doc.save("EduLearn-PrivacyPolicy.pdf");
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Request submitted:\nEmail: ${formData.email}\nRequest Type: ${formData.requestType}`
    );
    setFormData({ email: "", requestType: "Delete My Data" });
  };

  return (
    <section
      className={`privacy-page ${darkMode ? "dark-mode" : ""}`}
      aria-label="Privacy Policy Page"
    >
      <div className="privacy-header">
        <h1>
          <FaShieldAlt /> Privacy Policy
        </h1>
        <p>Your privacy is our priority. Learn how we protect and handle your data.</p>
        <small>Last Updated: October 10, 2025</small>
      </div>

      {/* Dark Mode Toggle */}
      <button
        className="dark-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Multi-language & PDF Download */}
      <div className="privacy-tools">
        <button aria-label="Switch language"><FaGlobe /> English / Hindi</button>
        <button onClick={handleDownloadPDF} aria-label="Download privacy policy as PDF">
          <FaFilePdf /> Download PDF
        </button>
      </div>

      {/* Search Bar */}
      <div className="privacy-search">
        <FaSearch aria-hidden="true" />
        <input
          type="text"
          placeholder="Search policy..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search privacy policy"
        />
      </div>

      {/* Collapsible Sections */}
      <div className="privacy-content">
        {filteredSections.map((sec, index) => (
          <div
            key={index}
            className={`policy-section ${expanded === index ? "open" : ""}`}
          >
            <h3
              tabIndex={0}
              onClick={() => setExpanded(expanded === index ? null : index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setExpanded(expanded === index ? null : index);
                }
              }}
              aria-expanded={expanded === index}
              aria-controls={`section-${index}`}
            >
              {sec.title} {expanded === index ? "▲" : "▼"}
            </h3>
            {expanded === index && (
              <p id={`section-${index}`} aria-live="polite">
                {sec.content}
              </p>
            )}
          </div>
        ))}
        {filteredSections.length === 0 && <p>No results found.</p>}
      </div>

      {/* Trust Badges / Compliance Logos */}
      <div className="trust-badges">
        <div
          className="badge"
          onClick={() => window.open("/ssl-info", "_blank")}
          tabIndex={0}
          role="button"
          aria-label="SSL Secured information"
        >
          <FaLock /> SSL Secured
        </div>
        <div
          className="badge"
          onClick={() => window.open("/gdpr-info", "_blank")}
          tabIndex={0}
          role="button"
          aria-label="GDPR compliance information"
        >
          <FaCheckCircle /> GDPR Compliant
        </div>
        <div
          className="badge"
          onClick={() => window.open("/cgpa-info", "_blank")}
          tabIndex={0}
          role="button"
          aria-label="CCPA compliance information"
        >
          <FaFileAlt /> CCPA Ready
        </div>
      </div>

      {/* Data Access Request Form */}
      <form className="data-request-form" onSubmit={handleFormSubmit} aria-label="Data access request form">
        <h3>Request Your Data</h3>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleFormChange}
          required
          aria-label="Email address"
        />
        <select
          name="requestType"
          value={formData.requestType}
          onChange={handleFormChange}
          aria-label="Select data request type"
        >
          <option>Delete My Data</option>
          <option>Export My Data</option>
          <option>Modify My Information</option>
        </select>
        <button type="submit" aria-label="Submit data request">Submit Request</button>
      </form>

      {/* Sticky Contact Info */}
      <div className="privacy-contact">
        <p>
          Have questions? Email us at{" "}
          <a href="mailto:privacy@edulearn.com">privacy@edulearn.com</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
