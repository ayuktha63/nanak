import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';

// Import the dedicated CSS file for this page
import './home.css';

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
          <div className="hero-box">
            
            {/* The image on the left has been removed */}
            
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

        {/*
          Contact Us Section
        */}
        <section id="contact-us" className="section container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We'd love to hear from you. Get in touch to discuss your needs or schedule a service.
          </p>
        </section>
      </main>
    </>
  );
}
