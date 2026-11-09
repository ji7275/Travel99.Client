import React, { useState } from "react";
import "./Thailand.css";

const thailandPlaces = [
  {
    name: "Bangkok",
    location: "Capital City",
    image: "/Images/Thailand/Bangkok.jpg",
    description:
      "Explore vibrant streets, beautiful temples, shopping centres and exciting nightlife.",
  },
  {
    name: "Phuket",
    location: "Tropical Island",
    image: "/Images/Thailand/Phuket.jpg",
    description:
      "Enjoy stunning beaches, crystal-clear water and unforgettable island experiences.",
  },
  {
    name: "Krabi",
    location: "Beach Paradise",
    image: "/Images/Thailand/Krabi.jpg",
    description:
      "Discover limestone cliffs, turquoise lagoons and beautiful natural landscapes.",
  },
  {
    name: "Pattaya",
    location: "Coastal Destination",
    image: "/Images/Thailand/Pattaya.jpg",
    description:
      "Experience beach activities, entertainment and exciting coastal attractions.",
  },
];

const thailandPackages = [
  {
    name: "Thailand Explorer",
    duration: "5 Days / 4 Nights",
    price: "₹24,999",
    tag: "Popular Choice",
    image: "/Images/Thailand/ThailandExplorer.jpg",
    description:
      "Explore Bangkok and Pattaya with city sightseeing and memorable experiences.",
  },
  {
    name: "Phuket Island Escape",
    duration: "6 Days / 5 Nights",
    price: "₹32,999",
    tag: "Beach Holiday",
    image: "/Images/Thailand/Phuket.jpg",
    description:
      "Enjoy beautiful beaches, island tours and relaxing tropical experiences.",
  },
  {
    name: "Thailand Family Holiday",
    duration: "7 Days / 6 Nights",
    price: "₹39,999",
    tag: "Family Special",
    image: "/Images/Thailand/ThailandFamily.jpg",
    description:
      "A wonderful holiday with comfortable stays, sightseeing and family activities.",
  },
];

const thailandGallery = [
  "/Images/Thailand/Thailand.jpg",
  "/Images/Thailand/ggg.jpg",
  "/Images/Thailand/gg.jpg",
  "/Images/Thailand/gggg.jpg",
  "/Images/Thailand/Krabi.jpg",
  "/Images/Thailand/Phuket.jpg",
  "/Images/Thailand/Pattaya.jpg",
];

function Thailand() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "2",
    package: "Thailand Explorer",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const scrollToEnquiry = () => {
    document.getElementById("thailand-enquiry")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Demo form only. Connect your Enquiries API to save data in SQL Server.
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      travellers: "2",
      package: "Thailand Explorer",
      message: "",
    });
  };

  return (
    <main className="thailand-page">
      {/* HERO SECTION */}
      <section className="thailand-hero">
        <div className="thailand-hero-shade"></div>

        <div className="thailand-container thailand-hero-content">
          <div className="thailand-hero-label">
            <span></span> EXPLORE THE LAND OF SMILES
          </div>

          <h1>
            Experience The
            <br />
            Beauty Of <span>Thailand</span>
          </h1>

          <p>
            Discover golden temples, tropical islands, beautiful beaches and
            vibrant cities. Let Travel99 make your Thailand holiday truly
            unforgettable.
          </p>

          <div className="thailand-hero-actions">
            <button
              className="thailand-btn thailand-btn-orange"
              onClick={scrollToEnquiry}
            >
              Plan Your Holiday <span>→</span>
            </button>

            <a
              href="#thailand-packages"
              className="thailand-btn thailand-btn-transparent"
            >
              View Packages
            </a>
          </div>

          <div className="thailand-hero-info">
            <div>
              <strong>5–7</strong>
              <span>Days Holiday</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Popular Places</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Travel Assistance</span>
            </div>
          </div>
        </div>

        <div className="thailand-hero-caption">
          <span>01</span>
          <span className="thailand-caption-line"></span>
          <span>WELCOME TO THAILAND</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="thailand-section">
        <div className="thailand-container thailand-intro-grid">
          <div className="thailand-intro-photo">
            <img
              src="/Images/Thailand/BeautifulThailand.jpg"
              alt="Thailand temple and cultural beauty"
            />
            <div className="thailand-photo-caption">
              <span>DISCOVER ASIA</span>
              <strong>Beautiful Thailand</strong>
            </div>
          </div>

          <div className="thailand-intro-text">
            <span className="thailand-small-heading">
              YOUR TROPICAL GETAWAY
            </span>

            <h2>
              Discover A World Of
              <span> Beauty & Adventure</span>
            </h2>

            <p>
              Thailand is one of Asia's most exciting travel destinations. From
              the lively streets of Bangkok to the peaceful beaches of Phuket
              and Krabi, every corner offers a new experience.
            </p>

            <p>
              Explore ancient temples, taste delicious Thai food, enjoy island
              adventures and experience the warm hospitality of the Land of
              Smiles.
            </p>

            <div className="thailand-intro-points">
              <div>
                <span>✓</span> Beautiful tropical beaches
              </div>
              <div>
                <span>✓</span> Famous temples and cultural attractions
              </div>
              <div>
                <span>✓</span> Exciting shopping and nightlife
              </div>
              <div>
                <span>✓</span> Island tours and adventure activities
              </div>
            </div>

            <button className="thailand-link-button" onClick={scrollToEnquiry}>
              Plan Your Thailand Journey <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="thailand-experience-strip">
        <div className="thailand-container thailand-experience-grid">
          <div className="thailand-experience-item">
            <span className="thailand-experience-icon">🏝️</span>
            <div>
              <strong>Island Adventures</strong>
              <small>Explore tropical islands</small>
            </div>
          </div>

          <div className="thailand-experience-item">
            <span className="thailand-experience-icon">🛕</span>
            <div>
              <strong>Golden Temples</strong>
              <small>Experience Thai culture</small>
            </div>
          </div>

          <div className="thailand-experience-item">
            <span className="thailand-experience-icon">🍜</span>
            <div>
              <strong>Thai Cuisine</strong>
              <small>Discover local flavours</small>
            </div>
          </div>

          <div className="thailand-experience-item">
            <span className="thailand-experience-icon">🌊</span>
            <div>
              <strong>Beach Escapes</strong>
              <small>Relax by the sea</small>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="thailand-section thailand-destinations">
        <div className="thailand-container">
          <div className="thailand-section-title">
            <span className="thailand-small-heading">PLACES YOU WILL LOVE</span>
            <h2>
              Explore Popular <span>Thailand Destinations</span>
            </h2>
            <p>
              From bustling cities to peaceful islands, discover the
              destinations that make Thailand special.
            </p>
          </div>

          <div className="thailand-destination-grid">
            {thailandPlaces.map((place, index) => (
              <article className="thailand-destination-card" key={place.name}>
                <div className="thailand-destination-image">
                  <img src={place.image} alt={place.name} loading="lazy" />
                  <span className="thailand-destination-count">
                    0{index + 1}
                  </span>
                </div>

                <div className="thailand-destination-content">
                  <span>{place.location}</span>
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>

                  <button onClick={scrollToEnquiry}>
                    Explore Destination <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        className="thailand-section thailand-packages"
        id="thailand-packages"
      >
        <div className="thailand-container">
          <div className="thailand-section-title">
            <span className="thailand-small-heading">TRAVEL YOUR WAY</span>
            <h2>
              Our Thailand <span>Holiday Packages</span>
            </h2>
            <p>
              Choose your perfect holiday or ask us to create a customised
              Thailand travel plan.
            </p>
          </div>

          <div className="thailand-package-grid">
            {thailandPackages.map((item) => (
              <article className="thailand-package-card" key={item.name}>
                <div className="thailand-package-photo">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span>{item.tag}</span>
                </div>

                <div className="thailand-package-details">
                  <div className="thailand-package-duration">
                    ◷ {item.duration}
                  </div>

                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className="thailand-package-footer">
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
                      Enquire Now <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="thailand-price-disclaimer">
            *Prices are indicative and subject to travel dates, hotel category,
            availability and inclusions. Contact Travel99 for a final quotation.
          </p>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="thailand-section thailand-activities">
        <div className="thailand-container">
          <div className="thailand-section-title">
            <span className="thailand-small-heading">
              MAKE EVERY MOMENT COUNT
            </span>
            <h2>
              Unforgettable <span>Thailand Experiences</span>
            </h2>
            <p>
              Make your holiday more exciting with memorable local experiences.
            </p>
          </div>

          <div className="thailand-activity-grid">
            <div className="thailand-activity-card">
              <span>01</span>
              <div>
                <h3>Island Hopping</h3>
                <p>Explore beautiful islands and enjoy clear blue waters.</p>
              </div>
            </div>

            <div className="thailand-activity-card">
              <span>02</span>
              <div>
                <h3>Temple Visits</h3>
                <p>Discover Thailand's impressive architecture and heritage.</p>
              </div>
            </div>

            <div className="thailand-activity-card">
              <span>03</span>
              <div>
                <h3>Local Markets</h3>
                <p>Experience colourful markets, shopping and street food.</p>
              </div>
            </div>

            <div className="thailand-activity-card">
              <span>04</span>
              <div>
                <h3>Beach Activities</h3>
                <p>Enjoy relaxing beach days and optional water activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="thailand-section thailand-itinerary">
        <div className="thailand-container thailand-itinerary-grid">
          <div className="thailand-itinerary-content">
            <span className="thailand-small-heading">A SAMPLE TRAVEL PLAN</span>
            <h2>
              Your 5-Day <span>Thailand Journey</span>
            </h2>
            <p>
              Get an idea of how your Thailand holiday can look. We can
              customise the itinerary based on your interests, budget and travel
              dates.
            </p>

            <div className="thailand-day-list">
              <div className="thailand-day-item">
                <span>01</span>
                <div>
                  <h3>Arrival & Bangkok</h3>
                  <p>
                    Arrive in Thailand, transfer to your hotel and enjoy leisure
                    time.
                  </p>
                </div>
              </div>

              <div className="thailand-day-item">
                <span>02</span>
                <div>
                  <h3>Bangkok Sightseeing</h3>
                  <p>
                    Explore selected city attractions, temples and local
                    markets.
                  </p>
                </div>
              </div>

              <div className="thailand-day-item">
                <span>03</span>
                <div>
                  <h3>Travel To Pattaya</h3>
                  <p>
                    Enjoy the coastal atmosphere and explore nearby attractions.
                  </p>
                </div>
              </div>

              <div className="thailand-day-item">
                <span>04</span>
                <div>
                  <h3>Leisure & Experiences</h3>
                  <p>Enjoy optional activities, shopping or a relaxing day.</p>
                </div>
              </div>

              <div className="thailand-day-item">
                <span>05</span>
                <div>
                  <h3>Departure</h3>
                  <p>
                    Check out and transfer to the airport for your return
                    journey.
                  </p>
                </div>
              </div>
            </div>

            <button
              className="thailand-btn thailand-btn-orange"
              onClick={scrollToEnquiry}
            >
              Get Custom Itinerary <span>→</span>
            </button>
          </div>

          <div className="thailand-itinerary-photo">
            <img
              src="/Images/Thailand/Discover More.jpg"
              alt="Thailand travel experience"
              loading="lazy"
            />

            <div className="thailand-itinerary-badge">
              <strong>Discover More</strong>
              <span>Experience Thailand with Travel99</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="thailand-section thailand-gallery">
        <div className="thailand-container">
          <div className="thailand-section-title">
            <span className="thailand-small-heading">
              THAILAND THROUGH OUR LENS
            </span>
            <h2>
              Explore The <span>Beauty Of Thailand</span>
            </h2>
            <p>A glimpse of the wonderful experiences waiting for you.</p>
          </div>

          <div className="thailand-gallery-grid">
            {thailandGallery.map((image, index) => (
              <div
                className={`thailand-gallery-item thailand-gallery-${index + 1}`}
                key={image}
              >
                <img
                  src={image}
                  alt={`Thailand travel gallery ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL99 */}
      <section className="thailand-why">
        <div className="thailand-container thailand-why-grid">
          <div className="thailand-why-intro">
            <span className="thailand-small-heading">YOUR TRAVEL PARTNER</span>
            <h2>
              Why Choose <span>Travel99?</span>
            </h2>
            <p>
              We make holiday planning easier with personalised travel
              suggestions and assistance for your Thailand journey.
            </p>

            <button
              className="thailand-btn thailand-btn-orange"
              onClick={scrollToEnquiry}
            >
              Talk To Our Team <span>→</span>
            </button>
          </div>

          <div className="thailand-why-list">
            <div>
              <span>01</span>
              <section>
                <h3>Personalised Holiday Plans</h3>
                <p>Travel plans based on your preferences and budget.</p>
              </section>
            </div>

            <div>
              <span>02</span>
              <section>
                <h3>Hotel & Sightseeing Assistance</h3>
                <p>Get help planning stays and destination experiences.</p>
              </section>
            </div>

            <div>
              <span>03</span>
              <section>
                <h3>Dedicated Travel Support</h3>
                <p>Assistance while organising your holiday requirements.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section
        className="thailand-section thailand-enquiry"
        id="thailand-enquiry"
      >
        <div className="thailand-container thailand-enquiry-grid">
          <div className="thailand-enquiry-intro">
            <span className="thailand-small-heading">
              LET'S PLAN SOMETHING AMAZING
            </span>
            <h2>
              Start Planning Your <span>Thailand Holiday</span>
            </h2>

            <p>
              Share your travel details with us. Our team will help you explore
              suitable holiday options for your Thailand trip.
            </p>

            <div className="thailand-contact-info">
              <div>
                <span>☎</span>
                <section>
                  <small>Call us</small>
                  <strong>+91 9871735122</strong>
                </section>
              </div>

              <div>
                <span>✉</span>
                <section>
                  <small>Email us</small>
                  <strong>travelhigh99@gmail.com</strong>
                </section>
              </div>

              <div>
                <span>⌖</span>
                <section>
                  <small>Office</small>
                  <strong>New Delhi, India</strong>
                </section>
              </div>
            </div>
          </div>

          <form className="thailand-enquiry-form" onSubmit={handleSubmit}>
            <h3>Thailand Trip Enquiry</h3>
            <p>Enter your details and we will help you plan your trip.</p>

            {submitted && (
              <div className="thailand-success">
                Thank you! Your form has been submitted in this demo. Connect
                your enquiry API to save the details.
              </div>
            )}

            <div className="thailand-form-row">
              <div className="thailand-form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="thailand-form-group">
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

            <div className="thailand-form-row">
              <div className="thailand-form-group">
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

              <div className="thailand-form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="thailand-form-row">
              <div className="thailand-form-group">
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

              <div className="thailand-form-group">
                <label>Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  {thailandPackages.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Custom Thailand Package">
                    Custom Thailand Package
                  </option>
                </select>
              </div>
            </div>

            <div className="thailand-form-group">
              <label>Additional Requirements</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your budget and travel preferences..."
              ></textarea>
            </div>

            <button type="submit" className="thailand-submit-button">
              Submit Enquiry <span>→</span>
            </button>

            <small className="thailand-form-note">
              We will help you explore a suitable Thailand holiday plan.
            </small>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="thailand-final-cta">
        <div className="thailand-container">
          <span>YOUR NEXT ADVENTURE STARTS HERE</span>
          <h2>Thailand Is Waiting For You!</h2>
          <p>Let's make your next holiday full of beautiful memories.</p>

          <button
            className="thailand-btn thailand-btn-white"
            onClick={scrollToEnquiry}
          >
            Plan Your Thailand Trip <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Thailand;

// import React, { useState } from "react";
// import "./Thailand.css";

// // All images use separate URLs
// const thailandPlaces = [
//   {
//     name: "Bangkok",
//     location: "Capital City",
//     image:
//       "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=85",
//     description:
//       "Explore vibrant streets, beautiful temples, shopping centres and exciting nightlife.",
//   },
//   {
//     name: "Phuket",
//     location: "Tropical Island",
//     image:
//       "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=85",
//     description:
//       "Enjoy stunning beaches, crystal-clear water and unforgettable island experiences.",
//   },
//   {
//     name: "Krabi",
//     location: "Beach Paradise",
//     image:
//       "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=85",
//     description:
//       "Discover limestone cliffs, turquoise lagoons and beautiful natural landscapes.",
//   },
//   {
//     name: "Pattaya",
//     location: "Coastal Destination",
//     image:
//       "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
//     description:
//       "Experience beach activities, entertainment and exciting coastal attractions.",
//   },
// ];

// const thailandPackages = [
//   {
//     name: "Thailand Explorer",
//     duration: "5 Days / 4 Nights",
//     price: "₹24,999",
//     tag: "Popular Choice",
//     image:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
//     description:
//       "Explore Bangkok and Pattaya with city sightseeing and memorable experiences.",
//   },
//   {
//     name: "Phuket Island Escape",
//     duration: "6 Days / 5 Nights",
//     price: "₹32,999",
//     tag: "Beach Holiday",
//     image:
//       "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
//     description:
//       "Enjoy beautiful beaches, island tours and relaxing tropical experiences.",
//   },
//   {
//     name: "Thailand Family Holiday",
//     duration: "7 Days / 6 Nights",
//     price: "₹39,999",
//     tag: "Family Special",
//     image:
//       "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
//     description:
//       "A wonderful holiday with comfortable stays, sightseeing and family activities.",
//   },
// ];

// const thailandGallery = [
//   "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=85",
//   "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85",
// ];

// function Thailand() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     travelDate: "",
//     travellers: "2",
//     package: "Thailand Explorer",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const scrollToEnquiry = () => {
//     document.getElementById("thailand-enquiry")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//     setSubmitted(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     // Demo form only. Connect your Enquiries API to save data in SQL Server.
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       travelDate: "",
//       travellers: "2",
//       package: "Thailand Explorer",
//       message: "",
//     });
//   };

//   return (
//     <main className="thailand-page">
//       {/* HERO SECTION */}
//       <section
//         className="thailand-hero"
//         style={{
//           backgroundImage: `url("https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2000&q=90")`,
//         }}
//       >
//         <div className="thailand-hero-shade"></div>

//         <div className="thailand-container thailand-hero-content">
//           <div className="thailand-hero-label">
//             <span></span> EXPLORE THE LAND OF SMILES
//           </div>

//           <h1>
//             Experience The
//             <br />
//             Beauty Of <span>Thailand</span>
//           </h1>

//           <p>
//             Discover golden temples, tropical islands, beautiful beaches and
//             vibrant cities. Let Travel99 make your Thailand holiday truly
//             unforgettable.
//           </p>

//           <div className="thailand-hero-actions">
//             <button
//               className="thailand-btn thailand-btn-orange"
//               onClick={scrollToEnquiry}
//             >
//               Plan Your Holiday <span>→</span>
//             </button>

//             <a
//               href="#thailand-packages"
//               className="thailand-btn thailand-btn-transparent"
//             >
//               View Packages
//             </a>
//           </div>

//           <div className="thailand-hero-info">
//             <div>
//               <strong>5–7</strong>
//               <span>Days Holiday</span>
//             </div>
//             <div>
//               <strong>4+</strong>
//               <span>Popular Places</span>
//             </div>
//             <div>
//               <strong>100%</strong>
//               <span>Travel Assistance</span>
//             </div>
//           </div>
//         </div>

//         <div className="thailand-hero-caption">
//           <span>01</span>
//           <span className="thailand-caption-line"></span>
//           <span>WELCOME TO THAILAND</span>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <section className="thailand-section">
//         <div className="thailand-container thailand-intro-grid">
//           <div className="thailand-intro-photo">
//             <img
//               src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85"
//               alt="Thailand temple and cultural beauty"
//               loading="lazy"
//             />
//             <div className="thailand-photo-caption">
//               <span>DISCOVER ASIA</span>
//               <strong>Beautiful Thailand</strong>
//             </div>
//           </div>

//           <div className="thailand-intro-text">
//             <span className="thailand-small-heading">
//               YOUR TROPICAL GETAWAY
//             </span>

//             <h2>
//               Discover A World Of
//               <span> Beauty & Adventure</span>
//             </h2>

//             <p>
//               Thailand is one of Asia's most exciting travel destinations. From
//               the lively streets of Bangkok to the peaceful beaches of Phuket
//               and Krabi, every corner offers a new experience.
//             </p>

//             <p>
//               Explore ancient temples, taste delicious Thai food, enjoy island
//               adventures and experience the warm hospitality of the Land of
//               Smiles.
//             </p>

//             <div className="thailand-intro-points">
//               <div>
//                 <span>✓</span> Beautiful tropical beaches
//               </div>
//               <div>
//                 <span>✓</span> Famous temples and cultural attractions
//               </div>
//               <div>
//                 <span>✓</span> Exciting shopping and nightlife
//               </div>
//               <div>
//                 <span>✓</span> Island tours and adventure activities
//               </div>
//             </div>

//             <button className="thailand-link-button" onClick={scrollToEnquiry}>
//               Plan Your Thailand Journey <span>→</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE STRIP */}
//       <section className="thailand-experience-strip">
//         <div className="thailand-container thailand-experience-grid">
//           <div className="thailand-experience-item">
//             <span className="thailand-experience-icon">🏝️</span>
//             <div>
//               <strong>Island Adventures</strong>
//               <small>Explore tropical islands</small>
//             </div>
//           </div>

//           <div className="thailand-experience-item">
//             <span className="thailand-experience-icon">🛕</span>
//             <div>
//               <strong>Golden Temples</strong>
//               <small>Experience Thai culture</small>
//             </div>
//           </div>

//           <div className="thailand-experience-item">
//             <span className="thailand-experience-icon">🍜</span>
//             <div>
//               <strong>Thai Cuisine</strong>
//               <small>Discover local flavours</small>
//             </div>
//           </div>

//           <div className="thailand-experience-item">
//             <span className="thailand-experience-icon">🌊</span>
//             <div>
//               <strong>Beach Escapes</strong>
//               <small>Relax by the sea</small>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* DESTINATIONS */}
//       <section className="thailand-section thailand-destinations">
//         <div className="thailand-container">
//           <div className="thailand-section-title">
//             <span className="thailand-small-heading">PLACES YOU WILL LOVE</span>
//             <h2>
//               Explore Popular <span>Thailand Destinations</span>
//             </h2>
//             <p>
//               From bustling cities to peaceful islands, discover the
//               destinations that make Thailand special.
//             </p>
//           </div>

//           <div className="thailand-destination-grid">
//             {thailandPlaces.map((place, index) => (
//               <article className="thailand-destination-card" key={place.name}>
//                 <div className="thailand-destination-image">
//                   <img src={place.image} alt={place.name} loading="lazy" />
//                   <span className="thailand-destination-count">
//                     0{index + 1}
//                   </span>
//                 </div>

//                 <div className="thailand-destination-content">
//                   <span>{place.location}</span>
//                   <h3>{place.name}</h3>
//                   <p>{place.description}</p>

//                   <button onClick={scrollToEnquiry}>
//                     Explore Destination <span>→</span>
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PACKAGES */}
//       <section
//         className="thailand-section thailand-packages"
//         id="thailand-packages"
//       >
//         <div className="thailand-container">
//           <div className="thailand-section-title">
//             <span className="thailand-small-heading">TRAVEL YOUR WAY</span>
//             <h2>
//               Our Thailand <span>Holiday Packages</span>
//             </h2>
//             <p>
//               Choose your perfect holiday or ask us to create a customised
//               Thailand travel plan.
//             </p>
//           </div>

//           <div className="thailand-package-grid">
//             {thailandPackages.map((item) => (
//               <article className="thailand-package-card" key={item.name}>
//                 <div className="thailand-package-photo">
//                   <img src={item.image} alt={item.name} loading="lazy" />
//                   <span>{item.tag}</span>
//                 </div>

//                 <div className="thailand-package-details">
//                   <div className="thailand-package-duration">
//                     ◷ {item.duration}
//                   </div>

//                   <h3>{item.name}</h3>
//                   <p>{item.description}</p>

//                   <div className="thailand-package-footer">
//                     <div>
//                       <small>Starting from</small>
//                       <strong>{item.price}</strong>
//                       <small>Per person*</small>
//                     </div>

//                     <button
//                       onClick={() => {
//                         setFormData((prev) => ({
//                           ...prev,
//                           package: item.name,
//                         }));
//                         scrollToEnquiry();
//                       }}
//                     >
//                       Enquire Now <span>→</span>
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <p className="thailand-price-disclaimer">
//             *Prices are indicative and subject to travel dates, hotel category,
//             availability and inclusions. Contact Travel99 for a final quotation.
//           </p>
//         </div>
//       </section>

//       {/* THINGS TO DO */}
//       <section className="thailand-section thailand-activities">
//         <div className="thailand-container">
//           <div className="thailand-section-title">
//             <span className="thailand-small-heading">
//               MAKE EVERY MOMENT COUNT
//             </span>
//             <h2>
//               Unforgettable <span>Thailand Experiences</span>
//             </h2>
//             <p>
//               Make your holiday more exciting with memorable local experiences.
//             </p>
//           </div>

//           <div className="thailand-activity-grid">
//             <div className="thailand-activity-card">
//               <span>01</span>
//               <div>
//                 <h3>Island Hopping</h3>
//                 <p>Explore beautiful islands and enjoy clear blue waters.</p>
//               </div>
//             </div>

//             <div className="thailand-activity-card">
//               <span>02</span>
//               <div>
//                 <h3>Temple Visits</h3>
//                 <p>Discover Thailand's impressive architecture and heritage.</p>
//               </div>
//             </div>

//             <div className="thailand-activity-card">
//               <span>03</span>
//               <div>
//                 <h3>Local Markets</h3>
//                 <p>Experience colourful markets, shopping and street food.</p>
//               </div>
//             </div>

//             <div className="thailand-activity-card">
//               <span>04</span>
//               <div>
//                 <h3>Beach Activities</h3>
//                 <p>Enjoy relaxing beach days and optional water activities.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ITINERARY */}
//       <section className="thailand-section thailand-itinerary">
//         <div className="thailand-container thailand-itinerary-grid">
//           <div className="thailand-itinerary-content">
//             <span className="thailand-small-heading">A SAMPLE TRAVEL PLAN</span>
//             <h2>
//               Your 5-Day <span>Thailand Journey</span>
//             </h2>
//             <p>
//               Get an idea of how your Thailand holiday can look. We can
//               customise the itinerary based on your interests, budget and travel
//               dates.
//             </p>

//             <div className="thailand-day-list">
//               <div className="thailand-day-item">
//                 <span>01</span>
//                 <div>
//                   <h3>Arrival & Bangkok</h3>
//                   <p>
//                     Arrive in Thailand, transfer to your hotel and enjoy leisure
//                     time.
//                   </p>
//                 </div>
//               </div>

//               <div className="thailand-day-item">
//                 <span>02</span>
//                 <div>
//                   <h3>Bangkok Sightseeing</h3>
//                   <p>
//                     Explore selected city attractions, temples and local
//                     markets.
//                   </p>
//                 </div>
//               </div>

//               <div className="thailand-day-item">
//                 <span>03</span>
//                 <div>
//                   <h3>Travel To Pattaya</h3>
//                   <p>
//                     Enjoy the coastal atmosphere and explore nearby attractions.
//                   </p>
//                 </div>
//               </div>

//               <div className="thailand-day-item">
//                 <span>04</span>
//                 <div>
//                   <h3>Leisure & Experiences</h3>
//                   <p>Enjoy optional activities, shopping or a relaxing day.</p>
//                 </div>
//               </div>

//               <div className="thailand-day-item">
//                 <span>05</span>
//                 <div>
//                   <h3>Departure</h3>
//                   <p>
//                     Check out and transfer to the airport for your return
//                     journey.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <button
//               className="thailand-btn thailand-btn-orange"
//               onClick={scrollToEnquiry}
//             >
//               Get Custom Itinerary <span>→</span>
//             </button>
//           </div>

//           <div className="thailand-itinerary-photo">
//             <img
//               src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=85"
//               alt="Thailand travel experience"
//               loading="lazy"
//             />

//             <div className="thailand-itinerary-badge">
//               <strong>Discover More</strong>
//               <span>Experience Thailand with Travel99</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GALLERY */}
//       <section className="thailand-section thailand-gallery">
//         <div className="thailand-container">
//           <div className="thailand-section-title">
//             <span className="thailand-small-heading">
//               THAILAND THROUGH OUR LENS
//             </span>
//             <h2>
//               Explore The <span>Beauty Of Thailand</span>
//             </h2>
//             <p>A glimpse of the wonderful experiences waiting for you.</p>
//           </div>

//           <div className="thailand-gallery-grid">
//             {thailandGallery.map((image, index) => (
//               <div
//                 className={`thailand-gallery-item thailand-gallery-${index + 1}`}
//                 key={image}
//               >
//                 <img
//                   src={image}
//                   alt={`Thailand travel gallery ${index + 1}`}
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY TRAVEL99 */}
//       <section className="thailand-why">
//         <div className="thailand-container thailand-why-grid">
//           <div className="thailand-why-intro">
//             <span className="thailand-small-heading">YOUR TRAVEL PARTNER</span>
//             <h2>
//               Why Choose <span>Travel99?</span>
//             </h2>
//             <p>
//               We make holiday planning easier with personalised travel
//               suggestions and assistance for your Thailand journey.
//             </p>

//             <button
//               className="thailand-btn thailand-btn-orange"
//               onClick={scrollToEnquiry}
//             >
//               Talk To Our Team <span>→</span>
//             </button>
//           </div>

//           <div className="thailand-why-list">
//             <div>
//               <span>01</span>
//               <section>
//                 <h3>Personalised Holiday Plans</h3>
//                 <p>Travel plans based on your preferences and budget.</p>
//               </section>
//             </div>

//             <div>
//               <span>02</span>
//               <section>
//                 <h3>Hotel & Sightseeing Assistance</h3>
//                 <p>Get help planning stays and destination experiences.</p>
//               </section>
//             </div>

//             <div>
//               <span>03</span>
//               <section>
//                 <h3>Dedicated Travel Support</h3>
//                 <p>Assistance while organising your holiday requirements.</p>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ENQUIRY */}
//       <section
//         className="thailand-section thailand-enquiry"
//         id="thailand-enquiry"
//       >
//         <div className="thailand-container thailand-enquiry-grid">
//           <div className="thailand-enquiry-intro">
//             <span className="thailand-small-heading">
//               LET'S PLAN SOMETHING AMAZING
//             </span>
//             <h2>
//               Start Planning Your <span>Thailand Holiday</span>
//             </h2>

//             <p>
//               Share your travel details with us. Our team will help you explore
//               suitable holiday options for your Thailand trip.
//             </p>

//             <div className="thailand-contact-info">
//               <div>
//                 <span>☎</span>
//                 <section>
//                   <small>Call us</small>
//                   <strong>+91 9871735122</strong>
//                 </section>
//               </div>

//               <div>
//                 <span>✉</span>
//                 <section>
//                   <small>Email us</small>
//                   <strong>travelhigh99@gmail.com</strong>
//                 </section>
//               </div>

//               <div>
//                 <span>⌖</span>
//                 <section>
//                   <small>Office</small>
//                   <strong>New Delhi, India</strong>
//                 </section>
//               </div>
//             </div>
//           </div>

//           <form className="thailand-enquiry-form" onSubmit={handleSubmit}>
//             <h3>Thailand Trip Enquiry</h3>
//             <p>Enter your details and we will help you plan your trip.</p>

//             {submitted && (
//               <div className="thailand-success">
//                 Thank you! Your form has been submitted in this demo. Connect
//                 your enquiry API to save the details.
//               </div>
//             )}

//             <div className="thailand-form-row">
//               <div className="thailand-form-group">
//                 <label>Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div className="thailand-form-group">
//                 <label>Email Address *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="thailand-form-row">
//               <div className="thailand-form-group">
//                 <label>Phone Number *</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter phone number"
//                   required
//                 />
//               </div>

//               <div className="thailand-form-group">
//                 <label>Travel Date</label>
//                 <input
//                   type="date"
//                   name="travelDate"
//                   value={formData.travelDate}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="thailand-form-row">
//               <div className="thailand-form-group">
//                 <label>Travellers</label>
//                 <select
//                   name="travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                 >
//                   <option value="1">1 Traveller</option>
//                   <option value="2">2 Travellers</option>
//                   <option value="3">3 Travellers</option>
//                   <option value="4">4 Travellers</option>
//                   <option value="5">5 Travellers</option>
//                   <option value="6+">6+ Travellers</option>
//                 </select>
//               </div>

//               <div className="thailand-form-group">
//                 <label>Select Package</label>
//                 <select
//                   name="package"
//                   value={formData.package}
//                   onChange={handleChange}
//                 >
//                   {thailandPackages.map((item) => (
//                     <option key={item.name} value={item.name}>
//                       {item.name}
//                     </option>
//                   ))}
//                   <option value="Custom Thailand Package">
//                     Custom Thailand Package
//                   </option>
//                 </select>
//               </div>
//             </div>

//             <div className="thailand-form-group">
//               <label>Additional Requirements</label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Tell us about your budget and travel preferences..."
//               ></textarea>
//             </div>

//             <button type="submit" className="thailand-submit-button">
//               Submit Enquiry <span>→</span>
//             </button>

//             <small className="thailand-form-note">
//               We will help you explore a suitable Thailand holiday plan.
//             </small>
//           </form>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section
//         className="thailand-final-cta"
//         style={{
//           backgroundImage: `linear-gradient(rgba(20,30,40,.55), rgba(20,30,40,.65)), url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85")`,
//         }}
//       >
//         <div className="thailand-container">
//           <span>YOUR NEXT ADVENTURE STARTS HERE</span>
//           <h2>Thailand Is Waiting For You!</h2>
//           <p>Let's make your next holiday full of beautiful memories.</p>

//           <button
//             className="thailand-btn thailand-btn-white"
//             onClick={scrollToEnquiry}
//           >
//             Plan Your Thailand Trip <span>→</span>
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Thailand;
