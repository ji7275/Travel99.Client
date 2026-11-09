import React, { useState } from "react";
import "./Kerala.css";

function Kerala() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travellers: "2",
    package: "Kerala Complete Holiday",
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

I want to enquire about a Kerala Holiday Package.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Travel Date: ${formData.travelDate}
Travellers: ${formData.travellers}
Package: ${formData.package}
Message: ${formData.message}

Please share package details and pricing.
`;

    window.open(
      `https://wa.me/919871735122?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  //   const destinations = [
  //     {
  //       name: "Munnar",
  //       location: "Hill Station",
  //       image:
  //         "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=900",
  //       description:
  //         "Explore beautiful tea gardens, misty mountains and peaceful valleys.",
  //     },
  //     {
  //       name: "Alleppey",
  //       location: "Backwater Destination",
  //       image:
  //         "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900",
  //       description:
  //         "Enjoy a relaxing houseboat journey through beautiful backwaters.",
  //     },
  //     {
  //       name: "Wayanad",
  //       location: "Nature & Wildlife",
  //       image:
  //         "https://images.unsplash.com/photo-1511497584788-876760111969?w=900",
  //       description:
  //         "Discover waterfalls, green forests and scenic mountain views.",
  //     },
  //     {
  //       name: "Kochi",
  //       location: "Heritage City",
  //       image:
  //         "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=900",
  //       description:
  //         "Experience historic streets, beautiful beaches and local culture.",
  //     },
  //   ];

  //   const packages = [
  //     {
  //       name: "Munnar Holiday Package",
  //       duration: "3 Days / 2 Nights",
  //       image:
  //         "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=900",
  //       description:
  //         "Explore tea gardens, mountain views and the peaceful beauty of Munnar.",
  //     },
  //     {
  //       name: "Kerala Backwater Escape",
  //       duration: "4 Days / 3 Nights",
  //       image:
  //         "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900",
  //       description:
  //         "Enjoy Alleppey backwaters, houseboat experiences and scenic views.",
  //     },
  //     {
  //       name: "Complete Kerala Tour",
  //       duration: "6 Days / 5 Nights",
  //       image:
  //         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
  //       description:
  //         "Discover Munnar, Thekkady and Alleppey in one memorable holiday.",
  //     },
  //   ];

  const destinations = [
    {
      name: "Munnar",
      location: "Hill Station",
      image: "/Images/Kerala/Munnar.jpg",
      description:
        "Explore beautiful tea gardens, misty mountains and peaceful valleys.",
    },
    {
      name: "Alleppey",
      location: "Backwater Destination",
      image: "/Images/Kerala/Alleppey.jpg",
      description:
        "Enjoy a relaxing houseboat journey through beautiful backwaters.",
    },
    {
      name: "Wayanad",
      location: "Nature & Wildlife",
      image: "/Images/Kerala/Wayanad.jpg",
      description:
        "Discover waterfalls, green forests and scenic mountain views.",
    },
    {
      name: "Kochi",
      location: "Heritage City",
      image: "/Images/Kerala/Kochi.jpg",
      description:
        "Experience historic streets, beautiful beaches and local culture.",
    },
  ];

  const experiences = [
    {
      icon: "🚤",
      title: "Houseboat Experience",
      description: "Enjoy a memorable stay on a traditional Kerala houseboat.",
    },
    {
      icon: "🌿",
      title: "Tea Garden Tours",
      description:
        "Walk through beautiful tea plantations in the hills of Munnar.",
    },
    {
      icon: "🐘",
      title: "Wildlife & Nature",
      description:
        "Explore Kerala's beautiful forests, wildlife and natural landscapes.",
    },
    {
      icon: "🏖️",
      title: "Beach Holidays",
      description:
        "Relax on beautiful beaches and enjoy peaceful coastal views.",
    },
    {
      icon: "💆",
      title: "Ayurveda & Wellness",
      description: "Experience traditional Ayurvedic wellness and relaxation.",
    },
    {
      icon: "🍛",
      title: "Kerala Food",
      description:
        "Taste authentic Kerala cuisine and traditional local dishes.",
    },
  ];

  const packages = [
    {
      name: "Munnar Holiday Package",
      duration: "3 Days / 2 Nights",
      image: "/Images/Kerala/Munnar.jpg",
      description:
        "Explore tea gardens, mountain views and the peaceful beauty of Munnar.",
    },
    {
      name: "Kerala Backwater Escape",
      duration: "4 Days / 3 Nights",
      image: "/Images/Kerala/Alleppey.jpg",
      description:
        "Enjoy Alleppey backwaters, houseboat experiences and scenic views.",
    },
    {
      name: "Complete Kerala Tour",
      duration: "6 Days / 5 Nights",
      image: "/Images/Kerala/CKT.jpg",
      description:
        "Discover Munnar, Thekkady and Alleppey in one memorable holiday.",
    },
  ];

  const choosePackage = (packageName) => {
    setFormData((prev) => ({
      ...prev,
      package: packageName,
    }));

    document
      .getElementById("kerala-enquiry")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="kerala-page">
      {/* HERO SECTION */}
      <section className="kerala-hero">
        <div className="kerala-hero-content">
          <span>WELCOME TO GOD'S OWN COUNTRY</span>

          <h1>
            Discover The
            <br />
            Beautiful Kerala
          </h1>

          <p>
            Explore green mountains, peaceful backwaters, beautiful beaches and
            unforgettable holiday experiences with Travel High 99.
          </p>

          <div className="kerala-hero-buttons">
            <a href="#kerala-packages" className="kerala-btn">
              Explore Packages
            </a>

            <a href="#kerala-enquiry" className="kerala-btn kerala-btn-outline">
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT KERALA */}
      <section className="kerala-section kerala-about">
        <div className="kerala-container">
          <div className="kerala-about-grid">
            <div className="kerala-about-image">
              <img
                src="/Images/Kerala/WELCOME.jpg"
                alt="Beautiful Kerala backwaters"
              />

              <div className="kerala-image-label">
                <strong>Kerala</strong>
                <span>God's Own Country</span>
              </div>
            </div>

            <div className="kerala-about-content">
              <span className="kerala-tag">EXPLORE KERALA</span>

              <h2>Experience The Natural Beauty Of Kerala</h2>

              <p>
                Kerala is one of India's most beautiful travel destinations,
                famous for its lush green landscapes, peaceful backwaters, tea
                plantations and beautiful beaches.
              </p>

              <p>
                From the misty hills of Munnar to the relaxing houseboats of
                Alleppey, Kerala offers wonderful experiences for families,
                couples and adventure lovers.
              </p>

              <p>
                Plan your next memorable holiday with Travel High 99 and
                discover the beauty, culture and hospitality of Kerala.
              </p>

              <a href="#kerala-enquiry" className="kerala-btn">
                Plan Your Kerala Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="kerala-section kerala-destinations">
        <div className="kerala-container">
          <div className="kerala-heading">
            <span className="kerala-tag">POPULAR PLACES</span>
            <h2>Explore Beautiful Destinations In Kerala</h2>
            <p>
              Discover Kerala's most beautiful destinations and create memories
              that last forever.
            </p>
          </div>

          <div className="kerala-destination-grid">
            {destinations.map((place, index) => (
              <article className="kerala-destination-card" key={index}>
                <div className="kerala-card-image">
                  <img src={place.image} alt={place.name} />
                  <span>{place.location}</span>
                </div>

                <div className="kerala-card-content">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>

                  <a href="#kerala-enquiry">Explore Destination →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="kerala-section kerala-experiences">
        <div className="kerala-container">
          <div className="kerala-heading">
            <span className="kerala-tag">UNFORGETTABLE EXPERIENCES</span>
            <h2>Things To Experience In Kerala</h2>
            <p>
              Enjoy nature, adventure, relaxation and authentic Kerala culture.
            </p>
          </div>

          <div className="kerala-experience-grid">
            {experiences.map((item, index) => (
              <div className="kerala-experience-card" key={index}>
                <div className="kerala-experience-icon">{item.icon}</div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="kerala-section kerala-packages" id="kerala-packages">
        <div className="kerala-container">
          <div className="kerala-heading">
            <span className="kerala-tag">OUR HOLIDAY PACKAGES</span>
            <h2>Popular Kerala Tour Packages</h2>
            <p>
              Choose a holiday package and let us help you plan your perfect
              Kerala journey.
            </p>
          </div>

          <div className="kerala-package-grid">
            {packages.map((item, index) => (
              <article className="kerala-package-card" key={index}>
                <div className="kerala-package-image">
                  <img src={item.image} alt={item.name} />
                  <span>{item.duration}</span>
                </div>

                <div className="kerala-package-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <button
                    type="button"
                    className="kerala-btn"
                    onClick={() => choosePackage(item.name)}
                  >
                    Enquire Now →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="kerala-section kerala-why">
        <div className="kerala-container">
          <div className="kerala-heading">
            <span className="kerala-tag">WHY TRAVEL HIGH 99</span>
            <h2>Why Choose Travel High 99?</h2>
            <p>
              We make your Kerala holiday comfortable, memorable and
              hassle-free.
            </p>
          </div>

          <div className="kerala-why-grid">
            <div className="kerala-why-card">
              <span>✈️</span>
              <h3>Easy Trip Planning</h3>
              <p>Simple and convenient holiday planning for every traveller.</p>
            </div>

            <div className="kerala-why-card">
              <span>🏨</span>
              <h3>Hotel Assistance</h3>
              <p>Stay options to suit your travel preferences and budget.</p>
            </div>

            <div className="kerala-why-card">
              <span>🚗</span>
              <h3>Travel Assistance</h3>
              <p>Convenient transport and sightseeing arrangements.</p>
            </div>

            <div className="kerala-why-card">
              <span>🤝</span>
              <h3>Customer Support</h3>
              <p>Friendly assistance throughout your holiday planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="kerala-section kerala-enquiry" id="kerala-enquiry">
        <div className="kerala-container">
          <div className="kerala-enquiry-grid">
            <div className="kerala-enquiry-info">
              <span className="kerala-tag">PLAN YOUR HOLIDAY</span>

              <h2>Let's Plan Your Dream Kerala Trip</h2>

              <p>
                Looking for a relaxing Kerala holiday? Share your travel details
                with us. Our team will help you plan your trip.
              </p>

              <div className="kerala-contact-item">
                <span>📞</span>
                <div>
                  <strong>Call Us</strong>
                  <a href="tel:+919871735122">+91 9871735122</a>
                  <a href="tel:+919667859420">+91 9667859420</a>
                </div>
              </div>

              <div className="kerala-contact-item">
                <span>✉️</span>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:travelhigh99@gmail.com">
                    travelhigh99@gmail.com
                  </a>
                  <a href="mailto:info@travelhigh99.com">
                    info@travelhigh99.com
                  </a>
                </div>
              </div>

              <div className="kerala-contact-item">
                <span>📍</span>
                <div>
                  <strong>Our Office</strong>
                  <p>
                    304, 3rd Floor, 5096 Main Bazar, Pahar Ganj, New Delhi -
                    110055
                  </p>
                </div>
              </div>
            </div>

            <form className="kerala-enquiry-form" onSubmit={handleSubmit}>
              <h3>Kerala Holiday Enquiry</h3>

              <div className="kerala-form-grid">
                <div className="kerala-form-group">
                  <label htmlFor="kerala-name">Full Name *</label>
                  <input
                    id="kerala-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="kerala-form-group">
                  <label htmlFor="kerala-phone">Phone Number *</label>
                  <input
                    id="kerala-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    pattern="[0-9+\-\s]{10,15}"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="kerala-form-group">
                  <label htmlFor="kerala-email">Email Address</label>
                  <input
                    id="kerala-email"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="kerala-form-group">
                  <label htmlFor="kerala-date">Travel Date *</label>
                  <input
                    id="kerala-date"
                    type="date"
                    name="travelDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="kerala-form-group">
                  <label htmlFor="kerala-travellers">
                    Number Of Travellers
                  </label>
                  <select
                    id="kerala-travellers"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                    <option value="6">6 Persons</option>
                    <option value="7+">7+ Persons</option>
                  </select>
                </div>

                <div className="kerala-form-group">
                  <label htmlFor="kerala-package">Select Package</label>
                  <select
                    id="kerala-package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                  >
                    <option value="Kerala Complete Holiday">
                      Kerala Complete Holiday
                    </option>
                    <option value="Munnar Holiday Package">
                      Munnar Holiday Package
                    </option>
                    <option value="Kerala Backwater Escape">
                      Kerala Backwater Escape
                    </option>
                    <option value="Complete Kerala Tour">
                      Complete Kerala Tour
                    </option>
                    <option value="Custom Kerala Package">
                      Custom Kerala Package
                    </option>
                  </select>
                </div>

                <div className="kerala-form-group kerala-form-full">
                  <label htmlFor="kerala-message">Your Requirements</label>
                  <textarea
                    id="kerala-message"
                    name="message"
                    placeholder="Tell us about your travel requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="kerala-submit-btn">
                Send Enquiry On WhatsApp →
              </button>

              <p className="kerala-form-note">
                Your enquiry will open in WhatsApp with your travel details.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="kerala-cta">
        <div className="kerala-container">
          <h2>Your Kerala Holiday Is Waiting!</h2>
          <p>
            Explore the beauty of God's Own Country with Travel High 99. Start
            planning your journey today.
          </p>

          <a href="#kerala-enquiry" className="kerala-btn">
            Book Your Kerala Holiday
          </a>
        </div>
      </section>
    </main>
  );
}

export default Kerala;
