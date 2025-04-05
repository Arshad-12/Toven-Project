import React from "react";
import "../styles/subscription.css";

const SubscriptionSection = () => {
  return (
    <div className="subscription-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="title">Fresh, Home-Cooked Meals</h2>
          <p className="subtitle">Delivered to Your Door</p>
        </div>
        <div className="image-slider-placeholder">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>
      </div>
      <button className="subscribe-button">Subscribe Now</button>
    </div>
  );
};

export default SubscriptionSection;
