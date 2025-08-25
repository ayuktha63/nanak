import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';

// Import the dedicated CSS file for this page
import './home.css';
import Footer from '@/components/Footer'; // Import the new Footer component

// Data for the areas we serve
const areas = [
  ['Toronto', 'Mississauga', 'Brampton', 'Etobicoke', 'Vaughan', 'North York', 'Milton', 'East York'],
  ['Scarborough', 'Pickering', 'Ajax', 'Whitby', 'Acton', 'Aurora', 'Bolton', 'Brantford'],
  ['Burlington', 'Caledon', 'Concord', 'Georgetown', 'Guelph', 'Markham', 'Newmarket', 'Oakville'],
  ['Orangeville', 'Richmond Hill', 'Woodbridge', 'London', 'Windsor', 'Niagara Falls', 'Hamilton', 'Kitchener'],
];

export default function Home() {
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
                Improve your home&apos;s air quality with our expert cleaning.
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

            <div className="hero-logo-container" >
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
          Services Section
        */}
        <section id="services" className="section container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Our Services</h2>
          <p className="text-lg text-gray-700" data-aos="fade-up" data-aos-delay="100">
            We provide a comprehensive range of professional services.
            Our expert team ensures every job is completed with the highest standards.
          </p>
          
          <div className="sub-section mt-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Benefits</h3>
            <p className="text-gray-600">
              Discover the benefits of our work. Our solutions are designed
              to deliver lasting results and improve your daily life.
            </p>
          </div>

          <div className="sub-section mt-8" data-aos="fade-up" data-aos-delay="300">
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
        <section id="about-us" className="section container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Learn more about who we are and our mission. We are dedicated
            to providing excellence in everything we do.
          </p>
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
          FAQ Section
        */}
        <section id="faq" className="section container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Have a question? Check out our FAQ section to find quick answers.
          </p>
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