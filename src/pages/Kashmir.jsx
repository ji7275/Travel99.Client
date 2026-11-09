import React, { useState } from "react";
import "./Kashmir.css";

const places = [
  {
    name: "Srinagar",
    subtitle: "The City of Lakes",
    image: "/Images/Kashmir/srinagar.jpg",
    //image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=900",
    description:
      "Enjoy the beauty of Dal Lake, traditional houseboats, Shikara rides and beautiful Mughal gardens.",
  },
  {
    name: "Gulmarg",
    subtitle: "The Meadow of Flowers",
    image: "/Images/Kashmir/Gulmarg.jpg",
    // image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900",
    description:
      "Experience snow-covered mountains, Gondola rides, skiing and breathtaking alpine landscapes.",
  },
  {
    name: "Pahalgam",
    subtitle: "The Valley of Shepherds",
    image: "/Images/Kashmir/Pahalgam.jpg",
    // image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=900",
    description:
      "Discover green valleys, flowing rivers, pine forests and peaceful mountain surroundings.",
  },
  {
    name: "Sonamarg",
    subtitle: "The Meadow of Gold",
    image: "/Images/Kashmir/Sonamarg.jpg",
    //image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
    description:
      "Explore majestic mountain views, glaciers and beautiful landscapes surrounded by nature.",
  },
];

const experiences = [
  {
    icon: "🚣",
    title: "Shikara Ride",
    text: "Enjoy a peaceful boat ride across the beautiful Dal Lake.",
  },
  {
    icon: "🏔️",
    title: "Snow Adventures",
    text: "Experience snow activities and mountain views in Gulmarg.",
  },
  {
    icon: "🏡",
    title: "Houseboat Stay",
    text: "Experience traditional Kashmiri hospitality on a houseboat.",
  },
  {
    icon: "🌲",
    title: "Nature Exploration",
    text: "Discover green valleys, pine forests and scenic landscapes.",
  },
];

const packages = [
  {
    name: "Kashmir Budget Escape",
    duration: "4 Nights / 5 Days",
    price: "Get Best Price",
    image: "/Images/Kashmir/KBE.jpg",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    features: [
      "Hotel Accommodation",
      "Local Sightseeing",
      "Breakfast",
      "Private Transfers",
    ],
  },
  {
    name: "Kashmir Family Holiday",
    duration: "5 Nights / 6 Days",
    price: "Get Best Price",
    image: "/Images/Kashmir/KFH.jpg",
    // image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
    features: [
      "Family Stay",
      "Srinagar Sightseeing",
      "Gulmarg Excursion",
      "Travel Assistance",
    ],
  },
  {
    name: "Kashmir Premium Escape",
    duration: "6 Nights / 7 Days",
    price: "Get Best Price",
    image: "/Images/Kashmir/KPE.jpg",
    // image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
    features: [
      "Premium Hotels",
      "Houseboat Experience",
      "Private Cab",
      "Personalised Itinerary",
    ],
  },
];

function Kashmir() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travellers: "2",
    package: "Kashmir Budget Escape",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Travel High 99,

I want to enquire about a Kashmir trip.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Travel Date: ${formData.travelDate || "Not decided"}
Travellers: ${formData.travellers}
Package: ${formData.package}
Message: ${formData.message || "No additional message"}

Please contact me with the details.
    `;

    const whatsappURL = `https://wa.me/919871735122?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="kashmir-page">
      {/* HERO SECTION */}
      <section className="kashmir-hero">
        <div className="kashmir-hero-overlay"></div>

        <div className="kashmir-container kashmir-hero-content">
          <span className="kashmir-hero-tag">TRAVEL HIGH 99 PRESENTS</span>

          <h1>
            Discover The Magic
            <span> Of Kashmir</span>
          </h1>

          <p>
            Snow-covered mountains, beautiful valleys and unforgettable
            experiences. Let your Kashmir journey begin with us.
          </p>

          <div className="kashmir-hero-buttons">
            <a
              href="#kashmir-packages"
              className="kashmir-btn kashmir-btn-orange"
            >
              Explore Packages →
            </a>
            <a
              href="#kashmir-enquiry"
              className="kashmir-btn kashmir-btn-outline"
            >
              Plan Your Trip
            </a>
          </div>

          <div className="kashmir-hero-bottom">
            <span>✦ Mountains</span>
            <span>✦ Lakes</span>
            <span>✦ Beautiful Memories</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="kashmir-intro kashmir-section">
        <div className="kashmir-container kashmir-intro-grid">
          <div className="kashmir-intro-image">
            <img
              src="/Images/Kashmir/Kashmir1.jpg"
              alt="Beautiful Kashmir mountain landscape"
            />

            <div className="kashmir-image-caption">
              <strong>Kashmir</strong>
              <span>Paradise on Earth</span>
            </div>
          </div>

          <div className="kashmir-intro-content">
            <span className="kashmir-section-tag">WELCOME TO KASHMIR</span>

            <h2>
              A Destination Full Of
              <span> Natural Wonders</span>
            </h2>

            <p>
              Kashmir welcomes you with breathtaking mountain views, beautiful
              lakes, lush green valleys and unforgettable experiences. Whether
              you are planning a family vacation, honeymoon or adventure
              holiday, Kashmir has something special for every traveller.
            </p>

            <p>
              From a peaceful Shikara ride on Dal Lake to the snowy landscapes
              of Gulmarg, discover the beauty of Kashmir with Travel High 99.
            </p>

            <div className="kashmir-intro-points">
              <div>✓ Beautiful Mountain Views</div>
              <div>✓ Comfortable Hotel Stays</div>
              <div>✓ Family & Honeymoon Trips</div>
              <div>✓ Personalised Travel Plans</div>
            </div>

            <a href="#kashmir-enquiry" className="kashmir-text-link">
              Plan Your Kashmir Holiday →
            </a>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="kashmir-places kashmir-section">
        <div className="kashmir-container">
          <div className="kashmir-section-heading">
            <span className="kashmir-section-tag">EXPLORE THE VALLEY</span>
            <h2>Popular Places In Kashmir</h2>
            <p>
              Explore beautiful destinations and make every moment of your
              holiday memorable.
            </p>
          </div>

          <div className="kashmir-place-grid">
            {places.map((place, index) => (
              <article className="kashmir-place-card" key={place.name}>
                <div className="kashmir-place-image">
                  <img src={place.image} alt={place.name} />
                  <span className="kashmir-place-number">0{index + 1}</span>
                </div>

                <div className="kashmir-place-info">
                  <span>{place.subtitle}</span>
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <a href="#kashmir-enquiry">Explore Destination →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="kashmir-experience kashmir-section">
        <div className="kashmir-container">
          <div className="kashmir-section-heading">
            <span className="kashmir-section-tag">MAKE YOUR TRIP SPECIAL</span>
            <h2>Unforgettable Kashmir Experiences</h2>
            <p>
              Discover wonderful experiences that make your Kashmir holiday
              truly memorable.
            </p>
          </div>

          <div className="kashmir-experience-grid">
            {experiences.map((item) => (
              <div className="kashmir-experience-card" key={item.title}>
                <div className="kashmir-experience-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE SECTION */}
      <section
        className="kashmir-packages kashmir-section"
        id="kashmir-packages"
      >
        <div className="kashmir-container">
          <div className="kashmir-section-heading">
            <span className="kashmir-section-tag">CHOOSE YOUR HOLIDAY</span>
            <h2>Our Kashmir Holiday Packages</h2>
            <p>
              Choose a holiday plan that matches your travel style. Contact us
              for a customised quotation.
            </p>
          </div>

          <div className="kashmir-package-grid">
            {packages.map((item) => (
              <article className="kashmir-package-card" key={item.name}>
                <div className="kashmir-package-image">
                  <img src={item.image} alt={item.name} />
                  <span>{item.duration}</span>
                </div>

                <div className="kashmir-package-content">
                  <h3>{item.name}</h3>
                  <div className="kashmir-package-price">{item.price}</div>

                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>✓ {feature}</li>
                    ))}
                  </ul>

                  <a
                    href="#kashmir-enquiry"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        package: item.name,
                      }))
                    }
                  >
                    Enquire Now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="kashmir-why">
        <div className="kashmir-container kashmir-why-grid">
          <div>
            <span className="kashmir-section-tag">TRAVEL WITH CONFIDENCE</span>
            <h2>Why Choose Travel High 99?</h2>
            <p>
              We help you plan a comfortable and memorable Kashmir holiday with
              personalised travel assistance.
            </p>
          </div>

          <div className="kashmir-why-items">
            <div>
              <span>01</span>
              <section>
                <h3>Personalised Packages</h3>
                <p>Holiday plans designed around your travel needs.</p>
              </section>
            </div>

            <div>
              <span>02</span>
              <section>
                <h3>Travel Assistance</h3>
                <p>Support and guidance throughout your trip planning.</p>
              </section>
            </div>

            <div>
              <span>03</span>
              <section>
                <h3>Comfortable Stays</h3>
                <p>Hotel and accommodation options for your budget.</p>
              </section>
            </div>

            <div>
              <span>04</span>
              <section>
                <h3>Flexible Itineraries</h3>
                <p>Plan your trip according to your time and preferences.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section className="kashmir-enquiry kashmir-section" id="kashmir-enquiry">
        <div className="kashmir-container kashmir-enquiry-grid">
          <div className="kashmir-enquiry-content">
            <span className="kashmir-section-tag">LET'S PLAN YOUR JOURNEY</span>

            <h2>
              Your Kashmir Holiday
              <span> Starts Here!</span>
            </h2>

            <p>
              Tell us about your travel plans. Our team will help you find the
              right Kashmir holiday package for your needs.
            </p>

            <h3>Contact Our Travel Team</h3>
            <p className="kashmir-contact-label">Call Us / WhatsApp</p>

            <div className="kashmir-contact-box">
              <span>☎</span>
              <div>
                <a href="tel:+919871735122">+91 9871735122</a>
                <a href="tel:+919667859420">+91 9667859420</a>
              </div>
            </div>

            <p className="kashmir-contact-label">Email Us</p>

            <div className="kashmir-contact-box">
              <span>✉</span>
              <div>
                <a href="mailto:travelhigh99@gmail.com">
                  travelhigh99@gmail.com
                </a>
                <a href="mailto:info@travelhigh99.com">info@travelhigh99.com</a>
              </div>
            </div>
          </div>

          <form className="kashmir-enquiry-form" onSubmit={handleSubmit}>
            <div className="kashmir-form-heading">
              <span>TRAVEL ENQUIRY</span>
              <h3>Plan Your Kashmir Trip</h3>
              <p>Fill in your details and we will contact you.</p>
            </div>

            <div className="kashmir-form-grid">
              <div className="kashmir-form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="kashmir-form-group">
                <label>Phone Number *</label>
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

              <div className="kashmir-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="kashmir-form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>

              <div className="kashmir-form-group">
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

              <div className="kashmir-form-group">
                <label>Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  <option value="Kashmir Budget Escape">
                    Kashmir Budget Escape
                  </option>
                  <option value="Kashmir Family Holiday">
                    Kashmir Family Holiday
                  </option>
                  <option value="Kashmir Premium Escape">
                    Kashmir Premium Escape
                  </option>
                  <option value="Custom Kashmir Package">
                    Custom Kashmir Package
                  </option>
                </select>
              </div>

              <div className="kashmir-form-group kashmir-form-full">
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

            <button type="submit" className="kashmir-submit-btn">
              Send Enquiry on WhatsApp →
            </button>

            <small className="kashmir-form-note">
              Your enquiry will open in WhatsApp for sending.
            </small>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="kashmir-final-cta">
        <div className="kashmir-container">
          <span>YOUR NEXT ADVENTURE AWAITS</span>
          <h2>Let's Make Your Kashmir Memories Beautiful</h2>
          <p>Contact Travel High 99 and start planning your dream holiday.</p>
          <a href="#kashmir-enquiry">Plan Your Kashmir Trip →</a>
        </div>
      </section>
    </main>
  );
}

export default Kashmir;
