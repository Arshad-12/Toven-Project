import React from "react";
import "../styles/aboutUs.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const AboutUs = () => {
  return (
    <div className="aboutus-wrapper">
      <main className="main-content">
        {/* Section 1 */}
        <section className="about-section">
          <div className="about-row">
            <div className="about-img placeholder-img" />
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                We are passionate food lovers delivering delightful, healthy meals to our customers. Our mission is to make healthy eating simple, affordable, and fun!
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-row reverse">
            <div className="about-img placeholder-img" />
            <div className="about-text">
              <h2>What We Do</h2>
              <p>
                We serve a wide variety of meal plans crafted to cater to everyone — students, elders, and corporate professionals. Freshness and quality guaranteed in every bite.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
        </section>
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default AboutUs;
