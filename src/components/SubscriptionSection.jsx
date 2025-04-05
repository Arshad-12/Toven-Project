import React from "react";
import "../styles/subscription.css";

const SubscriptionSection = () => {
  const subscriptionImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
  ];

  return (
    <div className="subscription-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="title">Fresh, Home-Cooked Meals</h2>
          <p className="subtitle">Delivered to Your Door</p>
        </div>
        <div className="image-slider-placeholder">
          {subscriptionImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Subscription ${index + 1}`}
              className="subscription-img"
            />
          ))}
        </div>
      </div>
      <button className="subscribe-button">Subscribe Now</button>
    </div>
  );
};

export default SubscriptionSection;
