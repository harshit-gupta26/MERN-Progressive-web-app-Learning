import React, { useState } from "react";
import "./ContactForm.css";
import { FaUser, FaEnvelope, FaPen, FaComment } from "react-icons/fa";

const ContactForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setMessage("");
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>Send us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" placeholder="Full Name *" required />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input type="email" placeholder="Email Address *" required />
          </div>

          {/* Subject */}
          <div className="form-group">
            <FaPen className="form-icon" />
            <select required>
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <FaComment className="form-icon" />
            <textarea
              placeholder="Tell us how we can help you..."
              maxLength="500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="char-count">{message.length}/500 characters</div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
