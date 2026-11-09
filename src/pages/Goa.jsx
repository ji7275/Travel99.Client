import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Goa.css";

const goaImages = {
  hero: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=2000",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
  fort: "https://images.unsplash.com/photo-1590050752117-23a9d7fc7b5b?w=900",
  water: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900",
  church: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900",
  hotel: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
  sunset: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900",
};

const places = [
  {
    name: "Baga Beach",
    location: "North Goa",
    image: "/Images/bb.jpg",
    description: "Enjoy beach vibes, water sports, cafes and lively nightlife.",
  },
  {
    name: "Aguada Fort",
    location: "Candolim",
    image: "/Images/AF.jpg",
    description:
      "Explore the historic Portuguese fort and beautiful sea views.",
  },
  {
    name: "Water Sports",
    location: "Calangute Beach",
    image: "/Images/ws.jpg",
    description: "Enjoy parasailing, jet skiing and exciting water activities.",
  },
  {
    name: "Old Goa",
    location: "South Goa",
    image: "/Images/og.jpg",
    description: "Discover heritage churches, architecture and local culture.",
  },
];

// const places = [
//   {
//     name: "Baga Beach",
//     location: "North Goa",
//     image: goaImages.beach,
//     description: "Enjoy beach vibes, water sports, cafes and lively nightlife.",
//   },
//   {
//     name: "Aguada Fort",
//     location: "Candolim",
//     image:
//       "https://s7ap1.scene7.com/is/image/incredibleindia/fort-aguada-goa-7-musthead-hero?qlt=82&ts=1742168017997",
//     description:
//       "Explore the historic Portuguese fort and beautiful sea views.",
//   },
//   {
//     name: "Water Sports",
//     location: "Calangute Beach",
//     image: goaImages.water,
//     description: "Enjoy parasailing, jet skiing and exciting water activities.",
//   },
//   {
//     name: "Old Goa",
//     location: "South Goa",
//     image: goaImages.church,
//     description: "Discover heritage churches, architecture and local culture.",
//   },
// ];

const packages = [
  {
    title: "Goa Budget Escape",
    duration: "3 Days / 2 Nights",
    price: "Get Best Price",
    image: "/Images/gbe.jpg",
    //image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900",
    features: ["Hotel Stay", "Breakfast", "Sightseeing"],
    type: "Budget",
  },
  {
    title: "Goa Beach Holiday",
    duration: "4 Days / 3 Nights",
    price: "Get Best Price",
    image: "/Images/gbh.jpg",
    //image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
    features: ["Hotel Stay", "Breakfast", "Beach Visit"],
    type: "Popular",
  },
  {
    title: "Goa Premium Experience",
    duration: "5 Days / 4 Nights",
    price: "Get Best Price",
    image: "/Images/gpe.jpg",
    //image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
    features: ["Premium Hotel", "Breakfast", "Private Transfer"],
    type: "Premium",
  },
];

function Goa() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travellers: "2",
    package: "Goa Beach Holiday",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Travel High 99,
I want to enquire about a Goa trip.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Travel Date: ${formData.travelDate}
Travellers: ${formData.travellers}
Package: ${formData.package}
Message: ${formData.message}`;

    window.open(
      `https://wa.me/919871735122?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main className="goa-page">
      {/* HERO SECTION */}
      <section
        className="goa-hero"
        style={{ backgroundImage: `url(${goaImages.hero})` }}
      >
        <div className="goa-hero-overlay"></div>

        <div className="goa-container goa-hero-content">
          <span className="goa-tag">TRAVEL HIGH 99 PRESENTS</span>

          <h1>
            Discover The Beauty
            <br />
            <span>Of Goa</span>
          </h1>

          <p>
            Golden beaches, beautiful sunsets, exciting adventures and
            unforgettable holiday experiences. Your Goa journey starts here.
          </p>

          <div className="goa-hero-buttons">
            <a href="#goa-packages" className="goa-btn goa-btn-orange">
              Explore Goa Packages →
            </a>
            <a href="#goa-enquiry" className="goa-btn goa-btn-outline">
              Plan Your Trip
            </a>
          </div>

          <div className="goa-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Destinations</span>
            <span>/</span>
            <span>Goa</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="goa-intro goa-section">
        <div className="goa-container goa-intro-grid">
          <div className="goa-intro-image">
            <img src="/Images/Goa.jpg" alt="Beautiful Goa beach sunset" />
            <div className="goa-image-label">
              <strong>Goa</strong>
              <span>Sun, Sand & Memories</span>
            </div>
          </div>

          <div className="goa-intro-content">
            <span className="goa-section-tag">WELCOME TO GOA</span>
            <h2>
              Your Perfect Beach
              <span> Holiday Awaits</span>
            </h2>

            <p>
              Goa is one of India's most loved holiday destinations. From
              peaceful beaches and Portuguese heritage to delicious food and
              exciting nightlife, Goa offers something for every traveller.
            </p>

            <p>
              Travel High 99 helps you plan a comfortable Goa holiday with
              thoughtfully designed packages, hotel options and travel
              assistance.
            </p>

            <div className="goa-highlights">
              <div>
                <span>☀</span>
                <strong>Beautiful Beaches</strong>
              </div>
              <div>
                <span>🏝</span>
                <strong>Relaxing Holidays</strong>
              </div>
              <div>
                <span>🚤</span>
                <strong>Adventure Activities</strong>
              </div>
              <div>
                <span>📸</span>
                <strong>Memorable Experiences</strong>
              </div>
            </div>

            <a href="#goa-places" className="goa-text-link">
              Explore Goa <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* DESTINATION PLACES */}
      <section className="goa-places goa-section" id="goa-places">
        <div className="goa-container">
          <div className="goa-section-heading">
            <span className="goa-section-tag">EXPLORE GOA</span>
            <h2>Popular Places To Visit</h2>
            <p>
              Discover beautiful beaches, historic landmarks and exciting
              experiences in Goa.
            </p>
          </div>

          <div className="goa-place-grid">
            {places.map((place, index) => (
              <article className="goa-place-card" key={index}>
                <div className="goa-place-image">
                  <img src={place.image} alt={place.name} />
                  <span>{place.location}</span>
                </div>
                <div className="goa-place-info">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <a href="#goa-enquiry">Plan a Visit →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="goa-experience goa-section">
        <div className="goa-container">
          <div className="goa-section-heading">
            <span className="goa-section-tag">MAKE YOUR TRIP SPECIAL</span>
            <h2>Experiences You Will Love</h2>
            <p>Make every moment of your Goa holiday memorable.</p>
          </div>

          <div className="goa-experience-grid">
            <div className="goa-experience-card">
              <span>🏖️</span>
              <h3>Beach Relaxation</h3>
              <p>Spend peaceful moments by the beautiful coastline.</p>
            </div>
            <div className="goa-experience-card">
              <span>🚤</span>
              <h3>Water Adventures</h3>
              <p>Enjoy exciting water sports and boating experiences.</p>
            </div>
            <div className="goa-experience-card">
              <span>🌅</span>
              <h3>Sunset Views</h3>
              <p>Watch stunning sunsets and capture beautiful memories.</p>
            </div>
            <div className="goa-experience-card">
              <span>🍽️</span>
              <h3>Local Food</h3>
              <p>Explore local flavours, cafes and popular restaurants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOA PACKAGES */}
      <section className="goa-packages goa-section" id="goa-packages">
        <div className="goa-container">
          <div className="goa-section-heading">
            <span className="goa-section-tag">CHOOSE YOUR HOLIDAY</span>
            <h2>Goa Holiday Packages</h2>
            <p>
              Choose a package that suits your travel style. Contact us for the
              latest price and availability.
            </p>
          </div>

          <div className="goa-package-grid">
            {packages.map((item, index) => (
              <article className="goa-package-card" key={index}>
                <div className="goa-package-image">
                  <img src={item.image} alt={item.title} />
                  <span>{item.type}</span>
                </div>

                <div className="goa-package-info">
                  <div className="goa-duration">◷ {item.duration}</div>
                  <h3>{item.title}</h3>

                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>

                  <div className="goa-package-bottom">
                    <strong>{item.price}</strong>
                    <a
                      href="#goa-enquiry"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          package: item.title,
                        }))
                      }
                    >
                      Enquire Now →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="goa-why goa-section">
        <div className="goa-container goa-why-grid">
          <div>
            <span className="goa-section-tag">WHY TRAVEL HIGH 99</span>
            <h2>Let's Make Your Goa Trip Easy & Memorable</h2>
            <p>
              We help you plan your holiday with suitable package options, hotel
              assistance and travel support.
            </p>
            <a href="#goa-enquiry" className="goa-btn goa-btn-orange">
              Talk To Our Team →
            </a>
          </div>

          <div className="goa-why-list">
            <div>
              <span>✓</span>
              <div>
                <h3>Personalised Packages</h3>
                <p>Travel plans based on your preferences.</p>
              </div>
            </div>
            <div>
              <span>✓</span>
              <div>
                <h3>Hotel Assistance</h3>
                <p>Options for different budgets and travel styles.</p>
              </div>
            </div>
            <div>
              <span>✓</span>
              <div>
                <h3>Travel Support</h3>
                <p>Assistance while planning your holiday.</p>
              </div>
            </div>
            <div>
              <span>✓</span>
              <div>
                <h3>Easy Enquiry</h3>
                <p>Connect with our team to discuss your trip.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL ENQUIRY SECTION */}
      <section className="goa-enquiry goa-section" id="goa-enquiry">
        <div className="goa-container goa-enquiry-grid">
          {/* LEFT CONTACT INFORMATION */}
          <div className="goa-enquiry-content">
            <span className="goa-section-tag">LET'S PLAN YOUR TRIP</span>

            <h2>
              Your Dream Goa Holiday
              <span> Starts Here!</span>
            </h2>

            <p className="goa-enquiry-description">
              Planning a relaxing beach holiday or an exciting Goa adventure?
              Share your requirements with us. Our travel experts will help you
              plan the perfect trip at the best price.
            </p>

            <div className="goa-contact-heading">
              <h3>Get In Touch With Us</h3>
              <p>We are always happy to help you.</p>
            </div>

            {/* PHONE NUMBERS */}
            <div className="goa-contact-detail">
              <div className="goa-contact-icon">☎</div>
              <div>
                <small>Call Us / WhatsApp</small>
                <a href="tel:+919871735122">+91 9871735122</a>
                <a href="tel:+919667859420">+91 9667859420</a>
              </div>
            </div>

            {/* EMAIL ADDRESSES */}
            <div className="goa-contact-detail">
              <div className="goa-contact-icon">✉</div>
              <div>
                <small>Email Us</small>
                <a href="mailto:travelhigh99@gmail.com">
                  travelhigh99@gmail.com
                </a>
                <a href="mailto:info@travelhigh99.com">info@travelhigh99.com</a>
              </div>
            </div>

            <div className="goa-contact-note">
              <span>✦</span>
              <p>
                Personalised packages | Best travel deals | Expert assistance
              </p>
            </div>
          </div>

          {/* RIGHT ENQUIRY FORM */}
          <form className="goa-enquiry-form" onSubmit={handleSubmit}>
            <div className="goa-form-heading">
              <span>TRAVEL ENQUIRY</span>
              <h3>Plan Your Goa Trip</h3>
              <p>Fill in your details and our team will contact you.</p>
            </div>

            <div className="goa-form-grid">
              <div className="goa-form-group">
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="goa-form-group">
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9+\-\s]{10,15}"
                  required
                />
              </div>

              <div className="goa-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="goa-form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>

              <div className="goa-form-group">
                <label>Travellers</label>
                <select
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                >
                  <option value="1">1 Traveller</option>
                  <option value="2">2 Travellers</option>
                  <option value="3">3 Travellers</option>
                  <option value="4">4 Travellers</option>
                  <option value="5">5 Travellers</option>
                  <option value="6+">6+ Travellers</option>
                </select>
              </div>

              <div className="goa-form-group">
                <label>Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  <option value="Goa Budget Escape">Goa Budget Escape</option>
                  <option value="Goa Beach Holiday">Goa Beach Holiday</option>
                  <option value="Goa Premium Experience">
                    Goa Premium Experience
                  </option>
                  <option value="Custom Goa Package">Custom Goa Package</option>
                </select>
              </div>

              <div className="goa-form-group goa-form-full">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your travel requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="goa-submit-btn">
              Send Enquiry on WhatsApp <span>→</span>
            </button>

            <small className="goa-form-note">
              🔒 Your details are safe with Travel High 99.
            </small>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="goa-final-cta">
        <div className="goa-container">
          <h2>Your Goa Holiday Is Just One Step Away!</h2>
          <p>Let's plan a trip filled with sunshine, beaches and memories.</p>
          <a href="#goa-enquiry" className="goa-btn goa-btn-orange">
            Plan My Goa Trip →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Goa;
