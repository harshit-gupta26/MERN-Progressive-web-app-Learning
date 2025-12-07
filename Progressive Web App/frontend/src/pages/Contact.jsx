import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./components/ContactForm"; // adjust the path if needed
import Footer from "./about/components/Footer";


const Contact = () => {
  return (
    <>
    <section className="contact-section">
      <div className="contact-container">
        {/* 🔹 Header */}
        <div className="contact-header">
          <h2 style={{ color: "white" }}>Get in Touch</h2>
          <p style={{ color: "white" }}>
            Have questions about our courses? Need help with your learning
            journey? We're here to help!
            
          </p>
        </div>

        {/* 🔹 Contact Info Cards */}
        <div className="contact-info">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email Us</h3>
            <p className="contact-detail">support@edulearn.com</p>
            <p className="contact-desc">
              Send us an email and we'll respond within 24 hours
            </p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Call Us</h3>
            <p className="contact-detail">+1 (555) 123-4567</p>
            <p className="contact-desc">Mon–Fri from 8am to 6pm EST</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Visit Us</h3>
            <p className="contact-detail">
              123 Education St, Learning City, LC 12345
            </p>
            <p className="contact-desc">Come visit our headquarters.</p>
          </div>
        </div>
      </div>
    </section>

    <ContactForm />


      {/* Google Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="EduLearn Headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903260123456!2d90.412345678!3d23.810345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c123456789%3A0xabcdef123456789!2s123%20Education%20St%2C%20Learning%20City!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0  }}  /* ← Left side margin */

            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>




      {/* 🔹 FAQ Section */}
<section className="faq-section">
  <div className="faq-container">
    <h2>Frequently Asked Questions</h2>
    <p>Find answers to common questions about our courses and platform</p>

    <div className="faq-item">
      <h4>How do I enroll in a course?</h4>
      <p>Simply browse our courses, click on the one you're interested in, and click the "Enroll Now" button. You'll be guided through the payment process.</p>
    </div>

    <div className="faq-item">
      <h4>Can I get a refund if I'm not satisfied?</h4>
      <p>Yes! We offer a 30-day money-back guarantee. If you're not satisfied with your course, contact us within 30 days for a full refund.</p>
    </div>

    <div className="faq-item">
      <h4>Do I get a certificate upon completion?</h4>
      <p>Yes, you'll receive a certificate of completion for each course you finish. These certificates are industry-recognized and can be shared on LinkedIn.</p>
    </div>

    <div className="faq-item">
      <h4>How long do I have access to the course materials?</h4>
      <p>Once you enroll in a course, you have lifetime access to all course materials, including any future updates.</p>
    </div>
  </div>
</section>


<Footer />

    </>

  );
};

export default Contact;
