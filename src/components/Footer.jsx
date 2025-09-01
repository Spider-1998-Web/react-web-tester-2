import React from "react";
import "../assets/css/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <h2 className="footer-logo">Spotlight Ads</h2>

        <p className="footer-description">
          Creating impactful visuals and video ads to help your brand shine.
        </p>

        <div className="social-links">
          <a href="https://facebook.com" className="social-link" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="social-link" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Spotlight Ads. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
