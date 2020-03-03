import React from "react";
import "../styles/Contact.css";

const Contact = () => (
  <div className="contact">
    <h3>Please feel free to contact me</h3>
    <div className="contact-section">
      <span className="fa fa-phone" />
      <span>(415) 827-4485</span>
    </div>
    <div className="contact-section">
      <span className="fa fa-envelope" />
      <span>
        <a href="mailto:jonwyuen@gmail.com">jonwyuen@gmail.com</a>
      </span>
    </div>
    <div className="contact-section">
      <span className="fa fa-map-marker" />
      <span>San Francisco, CA</span>
    </div>
  </div>
);

export default Contact;
