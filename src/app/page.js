'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import the dedicated CSS file for this page
import './home.css';

// Data for the areas we serve
const areas = [
  ['Toronto', 'Mississauga', 'Brampton', 'Etobicoke', 'Vaughan', 'North York', 'Milton', 'East York'],
  ['Scarborough', 'Pickering', 'Ajax', 'Whitby', 'Acton', 'Aurora', 'Bolton', 'Brantford'],
  ['Burlington', 'Caledon', 'Concord', 'Georgetown', 'Guelph', 'Markham', 'Newmarket', 'Oakville'],
  ['Orangeville', 'Richmond Hill', 'Woodbridge', 'London', 'Windsor', 'Niagara Falls', 'Hamilton', 'Kitchener'],
];

// Data for the FAQ section
const faqData = [
  {
    question: "Why should I get my air ducts cleaned?",
    answer: "Regular air duct cleaning removes dust, allergens, pet dander, and other contaminants from your HVAC system. This improves indoor air quality, helps your system run more efficiently, and can reduce energy costs.",
  },
  {
    question: "How often should I have my air ducts cleaned?",
    answer: "For most homes, it's recommended to have your air ducts cleaned every 3 to 5 years. However, if you have pets, allergies, or have recently completed a home renovation, you may want to clean them more frequently.",
  },
  {
    question: "How long does a typical duct cleaning take?",
    answer: "The duration of the cleaning process depends on the size of your home and the complexity of your ductwork. A typical residential cleaning usually takes between 2 to 4 hours.",
  },
  {
    question: "Do you use safe and eco-friendly cleaning methods?",
    answer: "Yes, we use powerful, truck-mounted vacuum systems and specialized tools to agitate and remove contaminants. Our methods are safe for your family, pets, and the environment, without the use of harsh chemicals.",
  },
  {
    question: "What is included in a standard duct cleaning service?",
    answer: "Our standard service includes a thorough cleaning of all supply and return vents, the main trunk lines, and the furnace's blower fan and cabinet. We also provide a complete inspection of your ductwork to ensure no issues are present.",
  },
];

// Reusable component for the accordion-style FAQ
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
// New Services Section Component with Updated Layout
const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Explore the range of services we offer.
      </p>

      <div className="services-container">
        <div className='sample'>
          <div className="services-row">
            <div className="service-box">
              <div className="service-image-container">
                <Image
                  src="/dryer-vent-cleaning.svg"
                alt="Duct Cleaning"
                width={200}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content-container">
              <h5 className="service-heading">Duct Cleaning</h5>
              <p className="service-description">
                Thorough cleaning to enhance air quality and system efficiency.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-image-container">
              <Image
                src="/commercial-air-duct-cleaning.svg"
                alt="Commercial Air Duct Cleaning"
                width={200}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content-container">
              <h5 className="service-heading">Furnace Cleaning</h5>
              <p className="service-description">
                Comprehensive cleaning for better performance and energy savings.
              </p>
            </div>
          </div>
        </div>

        {/* Corrected: Both extended-box and big-image-container are now children of service-details-row */}
        <div className="service-details-row">
          <div className="extended-box">
            <div className="service-image-container">
              <Image
                src="/commercial-air-duct-cleaning.svg"
                alt="Commercial Air Duct Cleaning"
                width={200}
                height={200}
                className="service-image"
              />
            </div>
            <div className='service-content-container'>
            <h3>Specialized Cleaning Solutions</h3>
            <p>
              We offer advanced services to meet specific needs, ensuring your entire HVAC system is in pristine condition.
            </p>
            </div>
          </div>
        </div>
            </div>
          <div className="big-image-container">
            <Image
              src="/seven-years-of-experience.svg"
              alt="Our team at work"
              width={1440}
              height={500}
              className="big-service-image"
            />
          </div>
      </div>
    </section>
  );
};

// ... (rest of your Home component and CSS remains the same as previously provided)

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleFaqClick = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Duct Cleaning Services</title>
        <meta name="description" content="Professional duct cleaning services for a healthier home. Fast, reliable, and affordable." />
      </Head>

      <Header />

      <main className="main-content">
        {/*
          Home Section
        */}
        <section id="home" className="home-section" data-aos="fade-in">
          <div className="hero-person-container" data-aos="fade-right">
            <Image
              src="/home-person.svg"
              alt="A person performing a duct cleaning service"
              width={500}
              height={500}
              className="hero-person-image"
            />
          </div>

          <div className="hero-box" data-aos="zoom-in-up">
            <div className="hero-content-container">
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Duct Cleaning Services
              </h1>
              <p className="hero-subtitle">
                Improve your home's air quality with our expert cleaning.
              </p>
              <div className="button-group" data-aos="fade-up" data-aos-delay="600">
                <button className="book-now-button">
                  Book Now
                </button>
                <button className="get-quote-button">
                  Get a Free Quote
                </button>
              </div>
            </div>
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
          Services Section (New)
        */}
        <ServicesSection />


        {/*
          About Us Section
        */}
        <section id="about-us" className="section about-us-section" data-aos="fade-up">
          <h2 className="about-us-title" data-aos="fade-up">About Us</h2>
          <div className="about-us-box" data-aos="zoom-in">
            <p className="about-us-text">
              We’re <strong>Sanyam</strong> and <strong>Himanshu</strong> — brothers, business partners, and proud founders of a Nanak Duct Cleaning based in Brampton, Ontario. Our journey began in 2019 when we came to Canada as international students, eager to learn, grow, and build a better future.
              <br /><br />
              After working various jobs and gaining valuable hands-on experience in the duct cleaning industry, we discovered a passion for the work and a clear opportunity to do things better. With over 7 years of combined industry experience, we launched our own business with a simple mission: to provide honest, affordable and high-quality duct cleaning services that homeowners and businesses can trust.
              <br /><br />
              Today, we proudly serve clients across Brampton, the Greater Toronto Area, and major cities throughout Ontario — helping create cleaner, healthier indoor environments with every job we take on.
              <br /><br />
              At the heart of our business is a commitment to hard work, integrity, and treating every customer like family.
            </p>
          </div>
        </section>

        {/*
          Testimonials Section
        */}
        <section id="testimonials" className="section container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-700">
            Read reviews from satisfied clients who have experienced our service firsthand.
          </p>
        </section>

        {/*
          FAQ Section (Accordion Style)
        */}
        <section id="faq" className="section faq-section" data-aos="fade-up">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqIndex === index}
                onClick={() => handleFaqClick(index)}
              />
            ))}
          </div>
        </section>

        {/* Updated Contact Us Section */}
        <section id="contact-us" className="section contact-us-section" data-aos="fade-up">
          <div className="contact-content-wrapper">
            <div className="contact-left" data-aos="fade-right">
              <Image
                src="/phone on plate with outline.svg"
                alt="Phone on plate"
                width={500}
                height={500}
                className="contact-image"
              />
            </div>
            <div className="contact-middle" data-aos="fade-up" data-aos-delay="200">
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
            <div className="contact-right" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-form-container">
                <form className="contact-form">
                  <input type="text" id="name" placeholder="Your Name" className="form-input" />
                  <input type="email" id="email" placeholder="Email" className="form-input" />
                  <input type="tel" id="phone" placeholder="Phone Number" className="form-input" />
                  <textarea id="message" placeholder="Message" className="form-textarea"></textarea>
                  <button type="submit" className="form-button small-button">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section" data-aos="fade-up">
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5731747723944!2d-79.72572072433802!3d43.740192946800825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84d1c08d7e37c381%3A0xba0e7a9314944ed9!2sNanak%20duct%20cleaning!5e0!3m2!1sen!2sin!4v1756155577044!5m2!1sen!2sin" width="1100" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <h2 className="areas-title" data-aos="fade-up">Areas We Serve</h2>
        <section id="areas-we-serve" className="areas-we-serve" data-aos="fade-up">
          <div className="areas-list">
            {areas.map((column, index) => (
              <div key={index} className="areas-column" data-aos="fade-up" data-aos-delay={index * 100}>
                {column.map((city) => (
                  <p key={city}>
                    <a href={`https://www.google.com/search?q=${encodeURIComponent(city)}`} target="_blank" rel="noopener noreferrer">
                      {city}
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}