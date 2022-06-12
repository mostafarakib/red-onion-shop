import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer p-5 mt-5">
      <Container className="footer-container">
        <img className="footer-img mb-5" src="images/logo2.png" alt="" />
        <div className="footer_content-container ">
          <div>
            <ul>
              <li>About Online food</li>
              <li>Read Our Blog</li>
              <li>Sign Up to Deliver</li>
              <li>Add to Favourite</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Get Help</li>
              <li>Read FAQs</li>
              <li>View All Cities</li>
              <li>Restaurants near me</li>
            </ul>
          </div>
        </div>
      </Container>
      <p className="copyright-text">Copyright &copy; 2022 Mostafa Rakib</p>
    </div>
  );
};

export default Footer;
