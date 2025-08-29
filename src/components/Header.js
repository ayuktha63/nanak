'use client'; // This directive is needed for client-side functionality like event listeners and useState.

import { useState } from 'react';
import Image from 'next/image';
import './header.css';
const Header = () => {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-container">
        {/*
          The 'next/image' component automatically optimizes images.
          The path '/header_logo.svg' refers to the file in your 'public' folder.
        */}
        <a href="#home">
          <Image
            src="/header_logo.svg"
            alt="Company Logo"
            width={255} // Updated width based on your design
            height={55} // Updated height based on your design
            className="logo"
          />
        </a>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="nav-links-desktop">
        <a href="#home" className="nav-link">Home</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#about-us" className="nav-link">About Us</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contact-us" className="nav-link">Contact Us</a>
      </nav>

      {/* Hamburger Menu Icon (Mobile) */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          {/* Hamburger Icon */}
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      {/* Navigation Links (Mobile) */}
      {isMenuOpen && (
        <nav className="nav-links-mobile">
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
};

export default Header;
