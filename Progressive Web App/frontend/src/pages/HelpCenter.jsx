import React, { useState } from "react";
import { FaSearch, FaBookOpen, FaVideo, FaThumbsUp, FaThumbsDown, FaGlobe, FaFilePdf, FaComments } from "react-icons/fa";
import "./HelpCenter.css";

const faqsData = [
  { category: "Account", question: "How to reset password?", answer: "Click on 'Forgot Password' on login page." },
  { category: "Account", question: "How to update profile?", answer: "Go to account settings and edit your profile." },
  { category: "Billing", question: "How to view invoices?", answer: "Check your billing section under account settings." },
  { category: "Technical", question: "Video not playing?", answer: "Ensure your browser supports HTML5 video and check your internet connection." },
];

const guidesData = [
  { title: "Account Setup Guide", link: "/notes/account-setup.pdf", tag: "Beginner" },
  { title: "Accessing Courses Guide", link: "/notes/course-access.pdf", tag: "Quick Start" },
];

const videosData = [
  { title: "Platform Walkthrough", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Walkthrough" },
  { title: "Quick Tips", url: "https://www.youtube.com/embed/9bZkp7q19f0", tag: "Tips" },
];

const categories = ["All", "Account", "Billing", "Technical"];

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chatOpen, setChatOpen] = useState(false);

  const filteredFaqs = faqsData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="help-center-page">
      {/* Sticky Contact Info */}
      <div className="sticky-contact">
        <p>Email: support@edulearn.com | Phone: +1 (555) 123-4567</p>
      </div>

      {/* Page Header */}
      <div className="help-header">
        <h1>Help Center <FaGlobe title="Multi-language support available" /></h1>
        <p>Find answers to common questions, guides, tutorials, and video walkthroughs.</p>
      </div>

      {/* Search Bar */}
      <div className="help-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search Help..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="faq-categories">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="help-faqs">
        <h2>Frequently Asked Questions</h2>
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4 onClick={() => toggleFaq(index)}>
              {faq.question} {expandedFaq === index ? "▲" : "▼"}
            </h4>
            {expandedFaq === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
                <div className="faq-feedback">
                  <span>Was this helpful? </span>
                  <button><FaThumbsUp /></button>
                  <button><FaThumbsDown /></button>
                </div>
              </div>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && <p>No results found.</p>}
      </div>

      {/* Guides / PDFs */}
      <div className="help-guides">
        <h2><FaFilePdf /> Guides & Tutorials</h2>
        <ul>
          {guidesData.map((guide, idx) => (
            <li key={idx}>
              <a href={guide.link} target="_blank" rel="noopener noreferrer">
                {guide.title} ({guide.tag})
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Tutorials */}
      <div className="help-videos">
        <h2><FaVideo /> Video Tutorials</h2>
        <div className="video-grid">
          {videosData.map((video, idx) => (
            <div key={idx} className="video-card">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>{video.title} ({video.tag})</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Chat Widget */}
      <div className={`live-chat-widget ${chatOpen ? "open" : ""}`}>
        <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
          <FaComments /> {chatOpen ? "Close Chat" : "Live Chat"}
        </button>
        {chatOpen && (
          <div className="chat-box">
            <p>Hi! How can we assist you today?</p>
            <textarea placeholder="Type your message..." />
            <button>Send</button>
          </div>
        )}
      </div>

      {/* Recent Announcements */}
      <div className="help-announcements">
        <h2>Recent Announcements</h2>
        <ul>
          <li>New courses added: React Advanced & Python ML</li>
          <li>Platform maintenance scheduled for 12th Oct 2025</li>
        </ul>
      </div>
    </section>
  );
};

export default HelpCenter;
