import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./FAQ.css"; // Custom CSS file

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(null);

  // Sample FAQ Data
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Browse our courses, click on the one you're interested in, and click the 'Enroll Now' button."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee. Contact support within 30 days for a full refund."
    },
    {
      question: "How do I change my password?",
      answer: "Go to your profile settings, click 'Change Password', and follow the instructions."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, upon successful completion of a course, you will receive a digital certificate."
    },
    // Add more FAQs here
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq-page" >
      <div className="faq-header" >
        <h1 ><FaQuestionCircle /> Frequently Asked Questions</h1>
        <p>Find answers to common questions about our courses and platform.</p>
      </div>

      {/* Search Bar */}
      <div className="faq-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search FAQs"
        />
      </div>

      {/* FAQ Accordion */}
      <div className="faq-list">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${expanded === index ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => setExpanded(expanded === index ? null : index)}
                tabIndex={0} // keyboard accessible
                onKeyDown={(e) => { if (e.key === "Enter") setExpanded(expanded === index ? null : index); }}
              >
                <span>{faq.question}</span>
                {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expanded === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))
        ) : (
          <p>No FAQs found for your search.</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
