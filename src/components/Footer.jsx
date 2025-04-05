import React from "react";
import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-left">
        <span>Contact No : 9865471234</span>
        <FaInstagram className="insta-icon" />
      </div>
      <div className="footer-right">
        <a href="/terms">Terms and Condition</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/refund">Refund Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
