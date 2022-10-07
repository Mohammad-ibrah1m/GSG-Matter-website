import './style.css';
import React from 'react';
import { FaCopyright, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="section footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="categories">
            <h4 className="footer-title section-title">Categories</h4>
            <ul className="category-list">
              <li className="category-list-item">Lorem</li>
              <li className="category-list-item">Lorem</li>
              <li className="category-list-item">Lorem</li>
              <li className="category-list-item">Lorem</li>
              <li className="category-list-item">Lorem</li>
            </ul>
          </div>
          <div className="partners">
            <h4 className="footer-title section-title">Partners</h4>
            <ul className="partners-list">
              <li className="partners-list-item">Support</li>
              <li className="partners-list-item">Lorem</li>
              <li className="partners-list-item">Lorem</li>
              <li className="partners-list-item">Lorem</li>
              <li className="partners-list-item">Lorem</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="footer-title section-title">Contact us</h4>
            <ul className="contact-list">
              <li className="contact-list-item address">26A Pagoda St, TANGS, Singapore, 058187</li>
              <li className="contact-list-item phone-number">+65 6221 5462</li>
            </ul>
          </div>
          <div className="subscribtion">
            <h4 className="footer-title section-title">Subscribe to newsletter</h4>
            <form action="" method="GET">
              <div className="email-input-holder">
                <input type="email" placeholder="Enter your email" className="email-input" />
                <button className="btn-subscribe" type="submit">
                  SUBSCRIBE
                </button>
              </div>
            </form>
            <div className="social-links">
              <a href="index.html" className="social-link twitter">
                <FaTwitter />
              </a>
              <a href="index.html" className="social-link facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">
          <FaCopyright /> Copyright Matter PTE LTD 2017
        </p>
      </div>
    </section>
  );
};

export default Footer;
