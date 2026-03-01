import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="thank-you-message">
        <h2> Thank You!</h2>
        <p> Let 's collaborate and build something amazing together.</p>
      </div>

      <div className="contact-info">
        <p> Contact me at:</p>
        <div className="contact-details">
          <a href="mailto:yassine.aoun20@gmail.com" className="contact-link">
            <FaEnvelope /> yassine.aoun20@gmail.com
          </a>{" "}
          <br></br>
          <a href="tel:+21652480690" className="contact-link">
            <FaPhone /> +216 52 480 690
          </a>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://linkedin.com/in/yassine-aoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Yassine-aoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
export default Contact;
