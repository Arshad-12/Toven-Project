import React from "react";
import "../styles/howItWorks.css";
import "../styles/subscription.css";

const HowItWorks = () => {
  return (
    <>
    <section className="how-it-works">
      <h2 className="how-title">HOW IT WORKS</h2>
      <div className="steps-container">
        <div className="step">01</div>
        <span className="arrow">➜</span>
        <div className="step">02</div>
        <span className="arrow">➜</span>
        <div className="step">03</div>
        <span className="arrow">➜</span>
        <div className="step">04</div>
      </div>
    </section>
    <div className="subscription-container">
    <button className="subscribe-button">Subscribe Now</button>
    </div>
    </>
  );
};

export default HowItWorks;
