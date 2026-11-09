import React, { useState } from "react";
import "./Bali.css";

const baliPackages = [
  {
    name: "Bali Romantic Escape",
    duration: "5 Days / 4 Nights",
    price: "₹29,999",
    image: "/Images/Bali/Bali.jpg",
    //image:
    //"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    description:
      "Enjoy beautiful beaches, candlelight dinners and a romantic Bali getaway.",
    tag: "Couple Special",
  },
  {
    name: "Bali Adventure Tour",
    duration: "6 Days / 5 Nights",
    price: "₹34,999",
    image: "/Images/Bali/BaliA.jpg",
    // image:
    //  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85",
    description:
      "Explore waterfalls, temples, scenic landscapes and exciting activities.",
    tag: "Adventure",
  },
  {
    name: "Bali Family Holiday",
    duration: "7 Days / 6 Nights",
    price: "₹39,999",
    image: "/Images/Bali/BaliFamily.jpg",
    //image:
    //   "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=900&q=85",
    description:
      "A relaxing family holiday with comfortable stays and sightseeing.",
    tag: "Family Special",
  },
];

const baliPlaces = [
  {
    name: "Uluwatu Temple",
    image: "/Images/Bali/Bali.jpg",
    // image:
    //  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=85",
    description: "A beautiful clifftop temple with breathtaking ocean views.",
  },
  {
    name: "Nusa Penida",
    image: "/Images/Bali/Nusa.jpg",
    // image:
    //   "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=700&q=85",
    description: "Discover dramatic cliffs, blue water and stunning beaches.",
  },
  {
    name: "Tegallalang Rice Terrace",
    image: "/Images/Bali/Tegallalang.jpg",
    // image:
    //   "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=700&q=85",
    description: "Experience Bali's famous green rice terraces and nature.",
  },
  {
    name: "Bali Beach",
    image: "/Images/Bali/BaliB.jpg",
    // image:
    //   "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=85",
    description: "Relax on tropical beaches and enjoy beautiful sunsets.",
  },
];
const baliGallery = [
  "/Images/Bali/Bali.jpg",
  "/Images/Bali/BaliA.jpg",
  "/Images/Bali/BaliB.jpg",
  "/Images/Bali/BaliFamily.jpg",
  "/Images/Bali/gg.jpg",
  "/Images/Bali/Nusa.jpg",
  "/Images/Bali/Tegallalang.jpg",
];

// const baliGallery = [
//   "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=900&q=85",
// ];

function Bali() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "2",
    package: "Bali Romantic Escape",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Frontend demo: connect this form to your enquiry API to save enquiries.
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      travellers: "2",
      package: "Bali Romantic Escape",
      message: "",
    });
  };

  const scrollToEnquiry = () => {
    document.getElementById("bali-enquiry")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bali-page">
      {/* HERO SECTION */}
      <section className="bali-hero">
        <div className="bali-hero-overlay"></div>

        <div className="bali-container bali-hero-content">
          <span className="bali-eyebrow">
            <span></span> EXPLORE THE BEAUTY OF INDONESIA
          </span>

          <h1>
            Discover the Magic
            <br />
            of <span>Bali</span>
          </h1>

          <p>
            From tropical beaches and peaceful temples to breathtaking sunsets,
            experience an unforgettable holiday in Bali with Travel99.
          </p>

          <div className="bali-hero-buttons">
            <button
              onClick={scrollToEnquiry}
              className="bali-btn bali-btn-primary"
            >
              Plan Your Bali Trip <span>→</span>
            </button>

            <a href="#bali-packages" className="bali-btn bali-btn-outline">
              Explore Packages
            </a>
          </div>

          <div className="bali-hero-stats">
            <div>
              <strong>5–7</strong>
              <span>Days Packages</span>
            </div>
            <div>
              <strong>4.8/5</strong>
              <span>Guest Experience</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Travel Support</span>
            </div>
          </div>
        </div>

        <div className="bali-hero-bottom">
          <span>01</span>
          <div className="bali-hero-line"></div>
          <span>DISCOVER BALI</span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bali-intro bali-section">
        <div className="bali-container bali-intro-grid">
          <div className="bali-intro-image">
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85"
              alt="Beautiful tropical Bali landscape"
            />
            <div className="bali-image-label">
              <strong>Bali, Indonesia</strong>
              <span>Your tropical escape awaits</span>
            </div>
          </div>

          <div className="bali-intro-content">
            <span className="bali-section-label">WELCOME TO PARADISE</span>
            <h2>
              Bali Is More Than
              <span> Just A Destination</span>
            </h2>
            <p>
              Bali is a tropical paradise famous for its beautiful beaches,
              green rice terraces, ancient temples and warm hospitality. Whether
              you are planning a romantic escape, a family holiday or an
              adventure trip, Bali has something special for everyone.
            </p>
            <p>
              Let Travel99 make your journey easy with thoughtfully planned
              holiday packages, hotel stays and travel assistance.
            </p>

            <div className="bali-feature-list">
              <div>
                <span>✓</span> Beautiful beaches and island views
              </div>
              <div>
                <span>✓</span> Temples, culture and local experiences
              </div>
              <div>
                <span>✓</span> Romantic and family-friendly stays
              </div>
              <div>
                <span>✓</span> Customised holiday packages
              </div>
            </div>

            <button onClick={scrollToEnquiry} className="bali-text-button">
              Start Planning Your Trip <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bali-highlights">
        <div className="bali-container bali-highlight-grid">
          <div className="bali-highlight">
            <span>🏝️</span>
            <div>
              <strong>Beautiful Beaches</strong>
              <small>Relax by the ocean</small>
            </div>
          </div>
          <div className="bali-highlight">
            <span>🌿</span>
            <div>
              <strong>Natural Beauty</strong>
              <small>Explore green landscapes</small>
            </div>
          </div>
          <div className="bali-highlight">
            <span>🛕</span>
            <div>
              <strong>Rich Culture</strong>
              <small>Discover local traditions</small>
            </div>
          </div>
          <div className="bali-highlight">
            <span>🌅</span>
            <div>
              <strong>Beautiful Sunsets</strong>
              <small>Make special memories</small>
            </div>
          </div>
        </div>
      </section>

      {/* PLACES TO VISIT */}
      <section className="bali-section bali-places-section">
        <div className="bali-container">
          <div className="bali-section-heading">
            <span className="bali-section-label">EXPLORE THE ISLAND</span>
            <h2>
              Popular Places To Visit In <span>Bali</span>
            </h2>
            <p>Discover some of the most beautiful places Bali has to offer.</p>
          </div>

          <div className="bali-places-grid">
            {baliPlaces.map((place, index) => (
              <article className="bali-place-card" key={place.name}>
                <div className="bali-place-image">
                  <img src={place.image} alt={place.name} loading="lazy" />
                  <span className="bali-place-number">0{index + 1}</span>
                </div>
                <div className="bali-place-info">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <button onClick={scrollToEnquiry}>
                    Explore Place <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        className="bali-section bali-packages-section"
        id="bali-packages"
      >
        <div className="bali-container">
          <div className="bali-section-heading">
            <span className="bali-section-label">CHOOSE YOUR HOLIDAY</span>
            <h2>
              Our Exclusive <span>Bali Packages</span>
            </h2>
            <p>
              Find a holiday package that matches your travel style and budget.
            </p>
          </div>

          <div className="bali-packages-grid">
            {baliPackages.map((item) => (
              <article className="bali-package-card" key={item.name}>
                <div className="bali-package-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="bali-package-tag">{item.tag}</span>
                </div>
                <div className="bali-package-info">
                  <span className="bali-duration">◷ {item.duration}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="bali-package-bottom">
                    <div>
                      <small>Starting from</small>
                      <strong>{item.price}</strong>
                      <small>Per person*</small>
                    </div>
                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          package: item.name,
                        }));
                        scrollToEnquiry();
                      }}
                    >
                      Enquire <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="bali-price-note">
            *Package prices are indicative and may change according to travel
            dates, hotel selection and availability. Contact Travel99 for a
            customised quote.
          </p>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="bali-section bali-itinerary-section">
        <div className="bali-container bali-itinerary-grid">
          <div className="bali-itinerary-content">
            <span className="bali-section-label">YOUR JOURNEY, DAY BY DAY</span>
            <h2>
              A Glimpse Of Your <span>Bali Itinerary</span>
            </h2>
            <p>
              Here is an example of a 5-day Bali holiday. Your itinerary can be
              customised according to your travel dates and interests.
            </p>

            <div className="bali-timeline">
              <div className="bali-timeline-item">
                <span>01</span>
                <div>
                  <h3>Arrival in Bali</h3>
                  <p>Airport pickup, hotel check-in and leisure time.</p>
                </div>
              </div>
              <div className="bali-timeline-item">
                <span>02</span>
                <div>
                  <h3>Ubud Sightseeing</h3>
                  <p>
                    Explore scenic landscapes, rice terraces and local
                    attractions.
                  </p>
                </div>
              </div>
              <div className="bali-timeline-item">
                <span>03</span>
                <div>
                  <h3>Island Adventure</h3>
                  <p>
                    Discover beautiful island views and enjoy a memorable day
                    trip.
                  </p>
                </div>
              </div>
              <div className="bali-timeline-item">
                <span>04</span>
                <div>
                  <h3>Temple and Beach Visit</h3>
                  <p>
                    Explore cultural attractions and enjoy a beautiful sunset.
                  </p>
                </div>
              </div>
              <div className="bali-timeline-item">
                <span>05</span>
                <div>
                  <h3>Departure</h3>
                  <p>Enjoy breakfast, check out and transfer to the airport.</p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToEnquiry}
              className="bali-btn bali-btn-primary"
            >
              Get Custom Itinerary <span>→</span>
            </button>
          </div>

          <div className="bali-itinerary-image">
            <img
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=85"
              alt="Bali tropical destination"
              loading="lazy"
            />
            <div className="bali-itinerary-note">
              <span>✦</span>
              <div>
                <strong>Make Every Moment Special</strong>
                <small>Travel with Travel99</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bali-section bali-gallery-section">
        <div className="bali-container">
          <div className="bali-section-heading">
            <span className="bali-section-label">A VISUAL JOURNEY</span>
            <h2>
              Beautiful Moments In <span>Bali</span>
            </h2>
            <p>Get inspired by the beauty of this tropical island.</p>
          </div>

          <div className="bali-gallery-grid">
            {baliGallery.map((image, index) => (
              <div
                className={`bali-gallery-item bali-gallery-${index + 1}`}
                key={image}
              >
                <img
                  src={image}
                  alt={`Bali holiday view ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL99 */}
      <section className="bali-why-section">
        <div className="bali-container bali-why-grid">
          <div>
            <span className="bali-section-label">TRAVEL WITH CONFIDENCE</span>
            <h2>
              Why Plan Your Bali Trip With <span>Travel99?</span>
            </h2>
            <p>
              We help make your holiday planning simple, comfortable and
              memorable with travel support at every step.
            </p>
          </div>
          <div className="bali-why-points">
            <div>
              <span>01</span>
              <div>
                <h3>Customised Packages</h3>
                <p>Holiday plans designed around your preferences.</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Travel Assistance</h3>
                <p>Support with hotels, sightseeing and trip planning.</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Personal Guidance</h3>
                <p>Get help choosing the right holiday experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="bali-section bali-enquiry-section" id="bali-enquiry">
        <div className="bali-container bali-enquiry-grid">
          <div className="bali-enquiry-content">
            <span className="bali-section-label">LET'S PLAN YOUR HOLIDAY</span>
            <h2>
              Your Dream Bali Trip Starts <span>Here!</span>
            </h2>
            <p>
              Tell us a little about your travel plans. Our team can help you
              explore suitable Bali holiday options.
            </p>

            <div className="bali-contact-details">
              <div>
                <span>☎</span>
                <div>
                  <small>Call us</small>
                  <strong>+91 9871735122</strong>
                </div>
              </div>
              <div>
                <span>✉</span>
                <div>
                  <small>Email us</small>
                  <strong>travelhigh99@gmail.com</strong>
                </div>
              </div>
              <div>
                <span>⌖</span>
                <div>
                  <small>Visit us</small>
                  <strong>New Delhi, India</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="bali-enquiry-form" onSubmit={handleSubmit}>
            <h3>Plan Your Bali Holiday</h3>
            <p>Fill in your details and share your travel requirements.</p>

            {submitted && (
              <div className="bali-success-message">
                Thank you! Your details have been submitted in this demo.
                Connect the form to your enquiry API to save them.
              </div>
            )}

            <div className="bali-form-row">
              <div className="bali-form-group">
                <label>Your Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="bali-form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="bali-form-row">
              <div className="bali-form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="bali-form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="bali-form-row">
              <div className="bali-form-group">
                <label>Number of Travellers</label>
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
              <div className="bali-form-group">
                <label>Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  {baliPackages.map((item) => (
                    <option value={item.name} key={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Custom Bali Package">
                    Custom Bali Package
                  </option>
                </select>
              </div>
            </div>

            <div className="bali-form-group">
              <label>Additional Requirements</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your budget or travel preferences..."
              ></textarea>
            </div>

            <button type="submit" className="bali-submit-button">
              Submit Enquiry <span>→</span>
            </button>
            <small className="bali-form-note">
              Our team can help you plan a customised Bali holiday.
            </small>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bali-final-cta">
        <div className="bali-container">
          <span>YOUR NEXT ADVENTURE IS CALLING</span>
          <h2>Ready To Explore The Beauty Of Bali?</h2>
          <p>Let's create beautiful travel memories together with Travel99.</p>
          <button onClick={scrollToEnquiry} className="bali-btn bali-btn-light">
            Enquire Now <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Bali;
