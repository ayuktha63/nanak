'use client'; // This directive is needed for client-side functionality like event listeners and useState.

import { useState } from 'react';
import Image from 'next/image';
import './header.css';
const Header = () => {
  // State to manage the mobile menu's open/closed status
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

return (
  <header className="header">
    <div className="logo-container">
      <a href="#home">
        <img src="/header_logo.svg" alt="Logo" className="logo" />
      </a>
    </div>
    <nav className="nav-links-desktop">
      <a href="#home" className="nav-link">Home</a>
      <a href="#services" className="nav-link">Services</a>
      <a href="#testimonials" className="nav-link">Testimonials</a>
      <a href="#about-us" className="nav-link">About Us</a>
      <a href="#faq" className="nav-link">FAQ</a>
      <a href="#contact-us" className="nav-link">Contact Us</a>
    </nav>
    <button className="hamburger-menu" onClick={toggleMenu}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    </button>
    {isMenuOpen && (
      <nav className="nav-links-mobile open">
        <a href="#home" onClick={toggleMenu} className="nav-link-mobile">Home</a>
        <a href="#services" onClick={toggleMenu} className="nav-link-mobile">Services</a>
        <a href="#about-us" onClick={toggleMenu} className="nav-link-mobile">About Us</a>
        <a href="#testimonials" onClick={toggleMenu} className="nav-link-mobile">Testimonials</a>
        <a href="#faq" onClick={toggleMenu} className="nav-link-mobile">FAQ</a>
        <a href="#contact-us" onClick={toggleMenu} className="nav-link-mobile">Contact Us</a>
      </nav>
    )}
  </header>
);
}

export default Header;