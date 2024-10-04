import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Roxy's Little Creations. All rights
          reserved.
        </p>
        <p>Follow me on social media!</p>
      </div>
    </footer>
  );
}

export default Footer;
