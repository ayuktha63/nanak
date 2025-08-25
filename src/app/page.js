// home.js
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';

// Import the dedicated CSS file for this page
import './home.css';
import Footer from '@/components/Footer'; // Import the new Footer component

export default function Home() {
  return (
    <>
      <Head>
        <title>Duct Cleaning Services</title>
        <meta name="description" content="Professional duct cleaning services for a healthier home. Fast, reliable, and affordable." />
      </Head>
      
      {/*
        The Header component is a client component due to its interactive
        state for the mobile menu. It is placed here so it remains at the top
        of the page and is easily accessible.
      */}
      <Header />

      {/*
        The <main> tag contains all the primary content of the page,
        providing semantic structure for accessibility and SEO.
      */}
      <main className="main-content">
        {/*
          Home Section - The entry point of the website.
          We use separate CSS classes to lay out the hero section.
        */}
        <section id="home" className="home-section">
          
          {/* The person image container is now a sibling to the hero-box.
              This is the key to fixing the z-index issue.
          */}
          <div className="hero-person-container">
            <Image
              src="/home-person.svg"
              alt="A person performing a duct cleaning service"
              width={500}
              height={500}
              className="hero-person-image"
            />
          </div>

          <div className="hero-box">
            
            {/* Content in the middle */}
            <div className="hero-content-container">
              <h1 className="hero-title">
                Duct Cleaning Services
              </h1>
              <p className="hero-subtitle">
                Improve your home's air quality with our expert cleaning.
              </p>
              
              <div className="button-group">
                {/* Book Now Button */}
                <button className="book-now-button">
                  Book Now
                </button>
                {/* Get a Free Quote Button */}
                <button className="get-quote-button">
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Logo on the right side of the main box */}
            <div className="hero-logo-container">
              <div className="logo-box">
                <Image
                  src="/logo.svg"
                  alt="Company Logo"
                  width={400}
                  height={400}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/*
          Services Section - Combines services, benefits, and results.
        */}
        <section id="services" className="section container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            We provide a comprehensive range of professional services.
            Our expert team ensures every job is completed with the highest standards.
          </p>
          
          <div className="sub-section mt-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Benefits</h3>
            <p className="text-gray-600">
              Discover the benefits of our work. Our solutions are designed
              to deliver lasting results and improve your daily life.
            </p>
          </div>

          <div className="sub-section mt-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Our Results</h3>
            <p className="text-gray-600">
              See the incredible transformation our services can provide.
              We take pride in showing our high-quality work.
            </p>
          </div>
        </section>

        {/*
          About Us Section
        */}
        <section id="about-us" className="section container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Learn more about who we are and our mission. We are dedicated
            to providing excellence in everything we do.
          </p>
        </section>

        {/*
          Testimonials Section
        */}
        <section id="testimonials" className="section container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-700">
            Read reviews from satisfied clients who have experienced our service firsthand.
          </p>
        </section>

        {/*
          FAQ Section
        */}
        <section id="faq" className="section container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Have a question? Check out our FAQ section to find quick answers.
          </p>
        </section>

        {/* Updated Contact Us Section */}
        <section id="contact-us" className="section contact-us-section">
          <div className="contact-content-wrapper">
            {/* Left Column: Image */}
            <div className="contact-left">
              <Image
                src="/phone on plate with outline.svg"
                alt="Phone on plate"
                width={500}
                height={500}
                className="contact-image"
              />
            </div>
            
            {/* Middle Column: Text and Contact Info */}
            <div className="contact-middle">
              <div className="contact-info">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-subtitle">Get in touch for a free quote.</p>
                <div className="contact-details">
                  <p>Sanyam Setia: ‪+1 (416) 729-1521‬</p>
                  <p>Himanshu: ‪+1 (647) 838-5799</p>
                  <p>Email: nanakductcleaning@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-right">
              <div className="contact-form-container">
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" className="form-input" />
                  <input type="email" placeholder="Email" className="form-input" />
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                  <textarea placeholder="Message" className="form-textarea"></textarea>
                  <button type="submit" className="form-button">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5731747723944!2d-79.72572072433802!3d43.740192946800825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84d1c08d7e37c381%3A0xba0e7a9314944ed9!2sNanak%20duct%20cleaning!5e0!3m2!1sen!2sin!4v1756155577044!5m2!1sen!2sin" width="1100" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}