import React from "react";
import Navigation from "../Layout/Navigation";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Travel Baseball Team Budget App</p>

      <p>Quick Links</p>

      <div className="navFoot">
        <Navigation />
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Travel Baseball Team Budget App <br />
        Created by Frank Spitzock <br />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;