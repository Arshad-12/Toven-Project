import React from "react";
import "../styles/pricing.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const PricingPage = () => {
  return (
    <div className="pricing-wrapper">
      <main className="main-content">
        <div className="header-section">
          <h2 className="pricing-title">Our Plans</h2>
          <div className="location-checker">
            <input
              type="text"
              placeholder="Enter Location"
              className="location-input"
            />
            <button className="check-button">Check</button>
          </div>
        </div>

        <div className="plans-section-wrapper">
          <div className="plans-section">
            <div className="plan-card">Students</div>
            <div className="plan-card">Elders</div>
            <div className="plan-card">Corporate</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
