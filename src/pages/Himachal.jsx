import React, { useState } from "react";
import "./Himachal.css";

const destinations = [
  {
    name: "Manali",
    location: "Himalayan Hill Station",
    image: "/Images/Kashmir/KFH.jpg",
    //image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
    description:
      "Enjoy snow-covered mountains, beautiful valleys and adventure activities.",
  },
  {
    name: "Shimla",
    location: "Queen of Hills",
    image: "/Images/Himachal/Shimla.jpg",
    //image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=900",
    description:
      "Explore colonial architecture, Mall Road and scenic mountain views.",
  },
  {
    name: "Dharamshala",
    location: "Peaceful Mountain Escape",
    image: "/Images/Himachal/Dharamshala.jpg",
    //image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900",
    description:
      "Discover peaceful monasteries, mountain views and Tibetan culture.",
  },
  {
    name: "Kasol",
    location: "Parvati Valley",
    image: "/Images/Himachal/Kasol.jpg",
    // image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    description:
      "Experience riverside cafes, nature trails and beautiful mountain scenery.",
  },
  {
    name: "Dalhousie",
    location: "Nature & Relaxation",
    image: "/Images/Himachal/Dalhousie.jpg",
    // image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
    description:
      "Relax in peaceful surroundings with amazing Himalayan landscapes.",
  },
  {
    name: "Spiti Valley",
    location: "Adventure Destination",
    image: "/Images/Himachal/Spiti.jpg",
    //image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=900",
    description:
      "Explore dramatic mountains, monasteries and unforgettable road trips.",
  },
];

const experiences = [
  {
    icon: "🏔️",
    title: "Mountain Adventures",
    description:
      "Enjoy trekking, hiking and beautiful Himalayan mountain views.",
  },
  {
    icon: "❄️",
    title: "Snow Activities",
    description: "Experience snowfall, skiing and exciting winter adventures.",
  },
  {
    icon: "🚡",
    title: "River & Valley Views",
    description: "Explore peaceful valleys, rivers and scenic landscapes.",
  },
  {
    icon: "🏕️",
    title: "Camping",
    description: "Enjoy mountain camping under beautiful starry skies.",
  },
  {
    icon: "🛕",
    title: "Culture & Heritage",
    description: "Discover local traditions, temples and monasteries.",
  },
  {
    icon: "📸",
    title: "Nature Photography",
    description:
      "Capture beautiful mountains, forests and scenic destinations.",
  },
];

const packages = [
  {
    name: "Manali Holiday Package",
    duration: "4 Days / 3 Nights",
    image: "/Images/Himachal/Manali.jpg",
    //  image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
    description:
      "Enjoy Manali sightseeing, Solang Valley and beautiful mountain views.",
  },
  {
    name: "Shimla Manali Tour",
    duration: "6 Days / 5 Nights",
    image: "/Images/Himachal/ShimlaM.jpg",
    //image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=900",
    description:
      "Explore Shimla and Manali with comfortable stays and sightseeing.",
  },
  {
    name: "Complete Himachal Tour",
    duration: "8 Days / 7 Nights",
    image: "/Images/Himachal/Dharamshala.jpg",
    //image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
    description:
      "Discover the beauty of Himachal with a memorable holiday journey.",
  },
];

function Himachal() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travellers: "2",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectPackage = (packageName) => {
    setFormData({
      ...formData,
      package: packageName,
    });

    document.getElementById("himachal-enquiry")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Himachal Pradesh Tour Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Travel Date: ${formData.travelDate}
Travellers: ${formData.travellers}
Package: ${formData.package}
Message: ${formData.message}
`;

    window.open(
      `https://wa.me/919871735122?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main className="himachal-page">
      {/* HERO SECTION */}
      <section className="himachal-hero">
        <div className="himachal-container">
          <div className="himachal-hero-content">
            <span className="himachal-hero-tag">
              WELCOME TO THE LAND OF MOUNTAINS
            </span>

            <h1>
              Discover The
              <br />
              Beautiful <span>Himachal Pradesh</span>
            </h1>

            <p>
              Explore snow-covered mountains, peaceful valleys, beautiful hill
              stations and unforgettable holiday experiences with Travel High
              99.
            </p>

            <div className="himachal-hero-buttons">
              <a href="#himachal-packages" className="himachal-btn">
                Explore Packages
              </a>

              <a href="#himachal-enquiry" className="himachal-btn-outline">
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="himachal-section">
        <div className="himachal-container himachal-about-grid">
          <div className="himachal-about-image">
            <img
              src="/Images/Himachal/Himachal.jpg"
              alt="Beautiful Kashmir mountain landscape"
            />
            {/* <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200"
              alt="Beautiful Himachal Pradesh mountains"
            /> */}
            <div className="himachal-image-label">Explore The Himalayas</div>
          </div>

          <div className="himachal-about-content">
            <span className="himachal-tag">ABOUT HIMACHAL</span>
            <h2>
              Experience The Magic Of
              <span> Himachal Pradesh</span>
            </h2>

            <p>
              Himachal Pradesh is one of India's most beautiful travel
              destinations, known for its snow-covered mountains, green valleys,
              peaceful hill stations and natural beauty.
            </p>

            <p>
              From the scenic beauty of Manali and Shimla to the peaceful
              surroundings of Dharamshala and Dalhousie, every destination
              offers a unique holiday experience.
            </p>

            <a href="#himachal-enquiry" className="himachal-btn">
              Plan Your Holiday
            </a>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="himachal-section himachal-destinations">
        <div className="himachal-container">
          <div className="himachal-heading">
            <span className="himachal-tag">EXPLORE HIMACHAL</span>
            <h2>Popular Destinations</h2>
            <p>Discover beautiful places and create unforgettable memories.</p>
          </div>

          <div className="himachal-destination-grid">
            {destinations.map((item) => (
              <div className="himachal-destination-card" key={item.name}>
                <div className="himachal-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="himachal-card-content">
                  <span>{item.location}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => selectPackage(item.name + " Tour")}>
                    Explore More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="himachal-section himachal-experiences">
        <div className="himachal-container">
          <div className="himachal-heading">
            <span className="himachal-tag">UNFORGETTABLE MOMENTS</span>
            <h2>Experiences In Himachal</h2>
            <p>
              Make your holiday special with amazing activities and experiences.
            </p>
          </div>

          <div className="himachal-experience-grid">
            {experiences.map((item) => (
              <div className="himachal-experience-card" key={item.title}>
                <div className="himachal-experience-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        className="himachal-section himachal-packages"
        id="himachal-packages"
      >
        <div className="himachal-container">
          <div className="himachal-heading">
            <span className="himachal-tag">OUR HOLIDAY DEALS</span>
            <h2>Himachal Tour Packages</h2>
            <p>
              Choose your favourite package and start planning your holiday.
            </p>
          </div>

          <div className="himachal-package-grid">
            {packages.map((item) => (
              <div className="himachal-package-card" key={item.name}>
                <div className="himachal-package-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span>{item.duration}</span>
                </div>

                <div className="himachal-package-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => selectPackage(item.name)}>
                    Enquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="himachal-section himachal-why">
        <div className="himachal-container">
          <div className="himachal-heading">
            <span className="himachal-tag">TRAVEL WITH CONFIDENCE</span>
            <h2>Why Choose Travel High 99?</h2>
          </div>

          <div className="himachal-why-grid">
            <div className="himachal-why-card">
              <span>✈️</span>
              <h3>Easy Trip Planning</h3>
              <p>Simple and convenient holiday planning for your journey.</p>
            </div>

            <div className="himachal-why-card">
              <span>🏨</span>
              <h3>Comfortable Stays</h3>
              <p>Stay options selected for a comfortable travel experience.</p>
            </div>

            <div className="himachal-why-card">
              <span>🤝</span>
              <h3>Travel Assistance</h3>
              <p>Get support while planning your Himachal holiday.</p>
            </div>

            <div className="himachal-why-card">
              <span>💰</span>
              <h3>Flexible Packages</h3>
              <p>Holiday options according to your travel preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section
        className="himachal-section himachal-enquiry"
        id="himachal-enquiry"
      >
        <div className="himachal-container himachal-enquiry-grid">
          <div className="himachal-enquiry-info">
            <span className="himachal-tag">LET'S PLAN YOUR TRIP</span>
            <h2>Plan Your Himachal Holiday With Us</h2>

            <p>
              Tell us about your travel plans. Our team will help you plan a
              memorable Himachal Pradesh holiday.
            </p>

            <div className="himachal-contact-item">
              <span>📞</span>
              <div>
                <h4>Call Us</h4>
                <p>+91 9871735122</p>
                <p>+91 9667859420</p>
              </div>
            </div>

            <div className="himachal-contact-item">
              <span>✉️</span>
              <div>
                <h4>Email Us</h4>
                <p>travelhigh99@gmail.com</p>
                <p>info@travelhigh99.com</p>
              </div>
            </div>

            <div className="himachal-contact-item">
              <span>📍</span>
              <div>
                <h4>Our Office</h4>
                <p>
                  304, 3rd Floor, 5096 Main Bazar, Pahar Ganj, New Delhi -
                  110055
                </p>
              </div>
            </div>
          </div>

          <form className="himachal-enquiry-form" onSubmit={handleSubmit}>
            <h3>Send Your Enquiry</h3>
            <p>Fill in your details to plan your trip.</p>

            <div className="himachal-form-grid">
              <div className="himachal-form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="himachal-form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="himachal-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="himachal-form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>

              <div className="himachal-form-group">
                <label>Number Of Travellers</label>
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

              <div className="himachal-form-group">
                <label>Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  <option value="">Select a package</option>
                  <option value="Manali Holiday Package">
                    Manali Holiday Package
                  </option>
                  <option value="Shimla Manali Tour">Shimla Manali Tour</option>
                  <option value="Complete Himachal Tour">
                    Complete Himachal Tour
                  </option>
                  <option value="Custom Himachal Tour">
                    Custom Himachal Tour
                  </option>
                </select>
              </div>

              <div className="himachal-form-group himachal-form-full">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your travel requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="himachal-submit-btn">
              Send Enquiry on WhatsApp →
            </button>

            <small>Your enquiry will open in WhatsApp for submission.</small>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="himachal-cta">
        <div className="himachal-container">
          <h2>Your Himalayan Adventure Awaits!</h2>
          <p>
            Explore Himachal Pradesh with Travel High 99 and make memories that
            last forever.
          </p>
          <a href="#himachal-enquiry" className="himachal-btn">
            Book Your Holiday
          </a>
        </div>
      </section>
    </main>
  );
}

export default Himachal;
