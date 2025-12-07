import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle, FaFilePdf, FaComments, FaStar, FaGlobe } from "react-icons/fa";
import "./Support.css";

const faqsData = [
  { category: "Courses", question: "How do I enroll in a course?", answer: "Simply browse courses and click 'Enroll Now'." },
  { category: "Billing", question: "Can I get a refund?", answer: "Yes! We offer a 30-day money-back guarantee." },
  { category: "Courses", question: "How do I access my course materials?", answer: "You get lifetime access to all enrolled courses." },
];

const categories = ["All", "Billing", "Technical", "Courses", "Account", "Other"];

const guides = [
  { title: "Web Development Basics", link: "/notes/webdev-basics.pdf" },
  { title: "Python for Data Science", link: "/notes/python-data-science.pdf" },
  { title: "Digital Marketing Guide", link: "/notes/digital-marketing-guide.pdf" },
];

const Support = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Filter FAQs by search term & category
  const filteredFaqs = faqsData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || faq.category === selectedCategory)
  );

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="support-page">
      {/* Sticky Contact Info */}
      <div className="sticky-contact">
        <p>Email: support@edulearn.com | Phone: +1 (555) 123-4567</p>
      </div>

      {/* Support Header */}
      <div className="support-header">
        <h1>Support Center <FaGlobe title="Multi-language support available" /></h1>
        <p>We’re here to help! Find answers or contact us directly.</p>
      </div>

      {/* Support Methods */}
      <div className="support-methods">
        <div className="support-card">
          <FaEnvelope className="support-icon" />
          <h3>Email Us</h3>
          <p>support@edulearn.com</p>
          <p>We typically respond within 24 hours.</p>
        </div>
        <div className="support-card">
          <FaPhoneAlt className="support-icon" />
          <h3>Call Us</h3>
          <p>+1 (555) 123-4567</p>
          <p>Mon–Fri from 8am to 6pm EST</p>
        </div>
        <div className="support-card">
          <FaQuestionCircle className="support-icon" />
          <h3>FAQ</h3>
          <p>Find answers to common questions.</p>
        </div>
      </div>

      {/* Searchable FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <input
          type="text"
          placeholder="Search FAQ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

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

        <div className="faq-list">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4 onClick={() => toggleFaq(index)}>
                {faq.question} {expandedFaq === index ? "▲" : "▼"}
              </h4>
              {expandedFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                  {/* Feedback */}
                  <div className="faq-feedback">
                    <span>Was this helpful? </span>
                    <button>👍</button>
                    <button>👎</button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && <p>No matching results.</p>}
        </div>
      </div>

      {/* Guides / PDFs */}
      <div className="support-guides">
        <h2><FaFilePdf /> Downloadable Guides & Video Tutorials</h2>
        <ul>
          {guides.map((guide, index) => (
            <li key={index}>
              <a href={guide.link} target="_blank" rel="noopener noreferrer">{guide.title}</a>
            </li>
          ))}
        </ul>
        {/* Optional: Video tutorial embed */}
        <iframe
          title="Quick Start Guide"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact / Ticket Form */}
      <div className="support-contact-form">
        <h2>Submit a Ticket / Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Question or Message" required></textarea>
          <button type="submit">Submit Ticket</button>
        </form>
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

      {/* Announcements */}
      <div className="support-announcements">
        <h2>Recent Announcements</h2>
        <ul>
          <li>New courses added: React Advanced & Python ML</li>
          <li>Platform maintenance scheduled for 12th Oct 2025</li>
        </ul>
      </div>
    </section>
  );
};

export default Support;
