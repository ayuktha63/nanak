// Footer.jsx
import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* New container for the top row to hold the copyright and links */}
      <div className="footer-top-row">
        {/* Copyright text on the left */}
        <div className="footer-copyright">
          © 2025 Nanak Duct Cleaning. All rights reserved.
        </div>
        
        {/* Container for the links */}
        <div className="footer-links-container">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>

      {/* Designed by text in the center, as a separate row */}
      <div className="footer-designed-by">
        Designed By <a href="https://www.orqueinnovations.com" target="_blank" rel="noopener noreferrer">Orque Innovations LLP</a>
      </div>
    </footer>
  );
};

export default Footer;

