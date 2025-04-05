import React from "react";
import Footer from "../components/Footer.jsx";
import "../styles/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h2>Contact us</h2>
      </section>

      <section className="contact-cards">
      <div className="contact-card">
        <img src="/images/1.jpg" alt="Team member 1" />
      </div>
      <div className="contact-card">
        <img src="/images/2.jpg" alt="Team member 2" />
      </div>
      <div className="contact-card">
        <img src="/images/3.jpg" alt="Team member 3" />
      </div>
    </section>

      <section className="contact-form-section">
        <div className="form-box">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Nikhil" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="text" placeholder="9874563210" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="nikhil@gmail.com" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="Gandhipuram, Coimbatore" />
            </div>
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea rows="5" placeholder="Enter your message here"></textarea>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
