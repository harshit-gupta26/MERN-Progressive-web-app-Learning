import React, { useState, useEffect } from "react";
import { FaFileAlt, FaGlobe } from "react-icons/fa";
import jsPDF from "jspdf";
import "./Terms.css";

const Terms = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Load dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const termsSections = [
    { title: "1. Introduction", content: "Welcome to EduLearn! By using our platform, you agree to comply with our terms and conditions." },
    { title: "2. User Responsibilities", content: "Users must provide accurate information, maintain account security, and use the platform ethically." },
    { title: "3. Intellectual Property", content: "All content, courses, and materials are property of EduLearn and protected under copyright laws." },
    { title: "4. Limitation of Liability", content: "EduLearn is not liable for any indirect damages arising from use of our platform." },
    { title: "5. Account Termination", content: "We reserve the right to suspend or terminate accounts that violate our terms." },
    { title: "6. Changes to Terms", content: "We may update our terms periodically. Users are encouraged to review them regularly." },
  ];

  // Filter sections based on search
  const filteredSections = termsSections.filter(sec =>
    sec.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // PDF download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("EduLearn Terms of Service", 10, 20);
    doc.setFontSize(12);
    let y = 30;
    termsSections.forEach(sec => {
      doc.text(sec.title, 10, y);
      y += 8;
      const lines = doc.splitTextToSize(sec.content, 180);
      doc.text(lines, 10, y);
      y += lines.length * 8 + 4;
      if (y > 280) doc.addPage() && (y = 20);
    });
    doc.save("EduLearn-Terms-of-Service.pdf");
  };

  return (
    <section className={`terms-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="terms-header">
        <h1><FaFileAlt /> Terms of Service</h1>
        <p style={{ textAlign: "center", fontFamily: "Arial, sans-serif", 
  fontSize: "18px"}}>Read our rules, responsibilities, and legal disclaimers before using EduLearn.</p>
        <small style={{ textAlign: "center", fontFamily: "Arial, sans-serif", 
  fontSize: "18px"}}>Last Updated: October 10, 2025</small>
      </div>

      {/* Dark Mode */}
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Multi-language & PDF */}
      <div className="terms-tools">
        <button><FaGlobe /> English / Hindi</button>
        <button onClick={handleDownloadPDF}><FaFileAlt /> Download PDF</button>
      </div>

      {/* Search */}
      <div className="terms-search">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sections */}
      <div className="terms-content">
        {filteredSections.map((sec, index) => (
          <div key={index} className={`terms-section ${expanded === index ? "open" : ""}`}>
            <h3 onClick={() => setExpanded(expanded === index ? null : index)}>
              {sec.title} {expanded === index ? "▲" : "▼"}
            </h3>
            {expanded === index && <p>{sec.content}</p>}
          </div>
        ))}
        {filteredSections.length === 0 && <p>No results found.</p>}
      </div>

      {/* Sticky Contact */}
      <div className="terms-contact">
        <p>Have questions? Email us at <a href="mailto:privacy@edulearn.com">privacy@edulearn.com</a></p>
      </div>
    </section>
  );
};

export default Terms;
