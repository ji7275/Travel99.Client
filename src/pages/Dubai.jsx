import React, { useState } from "react";
import "./Dubai.css";

const destinations = [
  {
    name: "Burj Khalifa",
    category: "Iconic Landmark",
    image: "/Images/Dubai/Burj.jpg",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
    description:
      "Visit the world's tallest building and enjoy spectacular city views.",
  },
  {
    name: "Dubai Marina",
    category: "Waterfront Destination",
    image: "/Images/Dubai/DubaiM.jpg",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900",
    description:
      "Enjoy waterfront dining, luxury yachts and beautiful skyline views.",
  },
  {
    name: "Palm Jumeirah",
    category: "Luxury Island",
    image: "/Images/Dubai/Palm.jpg",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900",
    description:
      "Explore the famous palm-shaped island, beaches and luxury resorts.",
  },
  {
    name: "Desert Safari",
    category: "Adventure Experience",
    image: "/Images/Dubai/Desert.jpg",
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=900",
    description:
      "Experience golden sand dunes, sunset views and desert adventures.",
  },
  {
    name: "Dubai Frame",
    category: "Modern Architecture",
    image: "/Images/Dubai/DubaiF.jpg",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=900",
    description: "Discover a unique landmark connecting old and modern Dubai.",
  },
  {
    name: "Jumeirah Beach",
    category: "Beach Destination",
    image: "/Images/Dubai/Dharamshala.jpg",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900",
    description: "Relax by the sea and enjoy beautiful beachside surroundings.",
  },
];

const experiences = [
  {
    icon: "🏜️",
    title: "Desert Safari",
    description:
      "Enjoy dune bashing, sunset views and a memorable desert experience.",
  },
  {
    icon: "🏙️",
    title: "City Sightseeing",
    description:
      "Explore famous landmarks, modern architecture and vibrant city life.",
  },
  {
    icon: "🛍️",
    title: "Shopping Experience",
    description:
      "Discover world-class malls, traditional souks and shopping destinations.",
  },
  {
    icon: "🚢",
    title: "Dhow Cruise",
    description:
      "Enjoy a relaxing cruise with beautiful waterfront and skyline views.",
  },
  {
    icon: "🏖️",
    title: "Beach Holidays",
    description: "Spend relaxing moments at Dubai's beautiful beaches.",
  },
  {
    icon: "🎡",
    title: "Theme Parks",
    description: "Enjoy exciting attractions and entertainment for all ages.",
  },
];

const packages = [
  {
    name: "Dubai City Explorer",
    duration: "4 Days / 3 Nights",
    image: "/Images/Dubai/Burj.jpg",
    // image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
    description:
      "Explore Burj Khalifa, Dubai Mall, city attractions and local highlights.",
  },
  {
    name: "Dubai Desert & Marina Tour",
    duration: "5 Days / 4 Nights",
    image: "/Images/Dubai/Desert.jpg",
    // image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900",
    description:
      "Enjoy desert safari, marina sightseeing and memorable Dubai experiences.",
  },
  {
    name: "Dubai Family Holiday",
    duration: "6 Days / 5 Nights",
    image: "/Images/Dubai/DubaiF.jpg",
    //image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900",
    description:
      "A relaxing Dubai holiday with sightseeing and family-friendly attractions.",
  },
];

function Dubai() {
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
    setFormData((prev) => ({
      ...prev,
      package: packageName,
    }));

    document.getElementById("dubai-enquiry")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Dubai Tour Enquiry - Travel High 99

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
    <main className="dubai-page">
      {/* HERO SECTION */}
      <section className="dubai-hero">
        <div className="dubai-container">
          <div className="dubai-hero-content">
            <span className="dubai-hero-tag">WELCOME TO THE CITY OF GOLD</span>

            <h1>
              Discover The
              <br />
              Beautiful <span>Dubai</span>
            </h1>

            <p>
              Experience iconic skyscrapers, golden desert adventures, luxury
              shopping and unforgettable holiday moments with Travel High 99.
            </p>

            <div className="dubai-hero-buttons">
              <a href="#dubai-packages" className="dubai-btn">
                Explore Packages
              </a>

              <a href="#dubai-enquiry" className="dubai-btn-outline">
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DUBAI */}
      <section className="dubai-section">
        <div className="dubai-container dubai-about-grid">
          <div className="dubai-about-image">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200"
              alt="Dubai skyline"
            />
            <div className="dubai-image-label">Experience Amazing Dubai</div>
          </div>

          <div className="dubai-about-content">
            <span className="dubai-tag">ABOUT DUBAI</span>

            <h2>
              Discover The Wonders Of
              <span> Dubai</span>
            </h2>

            <p>
              Dubai is a world-famous destination known for its iconic skyline,
              luxurious experiences, beautiful beaches and exciting desert
              adventures.
            </p>

            <p>
              From the magnificent Burj Khalifa and Palm Jumeirah to traditional
              markets and desert safaris, Dubai offers something special for
              every traveller.
            </p>

            <a href="#dubai-enquiry" className="dubai-btn">
              Plan Your Holiday
            </a>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="dubai-section dubai-destinations">
        <div className="dubai-container">
          <div className="dubai-heading">
            <span className="dubai-tag">EXPLORE DUBAI</span>
            <h2>Popular Places To Visit</h2>
            <p>
              Discover the most famous attractions and beautiful places in
              Dubai.
            </p>
          </div>

          <div className="dubai-destination-grid">
            {destinations.map((item) => (
              <div className="dubai-destination-card" key={item.name}>
                <div className="dubai-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="dubai-card-content">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <button
                    onClick={() => selectPackage(item.name + " Experience")}
                  >
                    Explore More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="dubai-section dubai-experiences">
        <div className="dubai-container">
          <div className="dubai-heading">
            <span className="dubai-tag">MAKE MEMORIES</span>
            <h2>Unforgettable Dubai Experiences</h2>
            <p>
              Make your holiday special with exciting activities and unique
              experiences.
            </p>
          </div>

          <div className="dubai-experience-grid">
            {experiences.map((item) => (
              <div className="dubai-experience-card" key={item.title}>
                <div className="dubai-experience-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="dubai-section dubai-packages" id="dubai-packages">
        <div className="dubai-container">
          <div className="dubai-heading">
            <span className="dubai-tag">OUR HOLIDAY DEALS</span>
            <h2>Dubai Tour Packages</h2>
            <p>
              Choose your favourite package and start planning your Dubai
              holiday.
            </p>
          </div>

          <div className="dubai-package-grid">
            {packages.map((item) => (
              <div className="dubai-package-card" key={item.name}>
                <div className="dubai-package-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span>{item.duration}</span>
                </div>

                <div className="dubai-package-content">
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
      <section className="dubai-section dubai-why">
        <div className="dubai-container">
          <div className="dubai-heading">
            <span className="dubai-tag">TRAVEL WITH CONFIDENCE</span>
            <h2>Why Choose Travel High 99?</h2>
          </div>

          <div className="dubai-why-grid">
            <div className="dubai-why-card">
              <span>✈️</span>
              <h3>Easy Trip Planning</h3>
              <p>Simple and convenient holiday planning for your journey.</p>
            </div>

            <div className="dubai-why-card">
              <span>🏨</span>
              <h3>Comfortable Stays</h3>
              <p>Hotel options to suit your travel preferences.</p>
            </div>

            <div className="dubai-why-card">
              <span>🤝</span>
              <h3>Travel Assistance</h3>
              <p>Get support while planning your Dubai holiday.</p>
            </div>

            <div className="dubai-why-card">
              <span>🌍</span>
              <h3>Memorable Experiences</h3>
              <p>Explore Dubai with thoughtfully planned travel experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="dubai-section dubai-enquiry" id="dubai-enquiry">
        <div className="dubai-container dubai-enquiry-grid">
          <div className="dubai-enquiry-info">
            <span className="dubai-tag">LET'S PLAN YOUR TRIP</span>

            <h2>Plan Your Dubai Holiday With Us</h2>

            <p>
              Share your travel requirements with us. Our team will help you
              plan a memorable Dubai holiday.
            </p>

            <div className="dubai-contact-item">
              <span>📞</span>
              <div>
                <h4>Call Us</h4>
                <p>+91 9871735122</p>
                <p>+91 9667859420</p>
              </div>
            </div>

            <div className="dubai-contact-item">
              <span>✉️</span>
              <div>
                <h4>Email Us</h4>
                <p>travelhigh99@gmail.com</p>
                <p>info@travelhigh99.com</p>
              </div>
            </div>

            <div className="dubai-contact-item">
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

          <form className="dubai-enquiry-form" onSubmit={handleSubmit}>
            <h3>Send Your Enquiry</h3>
            <p>Fill in your details to plan your Dubai trip.</p>

            <div className="dubai-form-grid">
              <div className="dubai-form-group">
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

              <div className="dubai-form-group">
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

              <div className="dubai-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="dubai-form-group">
                <label>Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>

              <div className="dubai-form-group">
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

              <div className="dubai-form-group">
                <label>Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  <option value="">Select a package</option>
                  <option value="Dubai City Explorer">
                    Dubai City Explorer
                  </option>
                  <option value="Dubai Desert & Marina Tour">
                    Dubai Desert & Marina Tour
                  </option>
                  <option value="Dubai Family Holiday">
                    Dubai Family Holiday
                  </option>
                  <option value="Custom Dubai Tour">Custom Dubai Tour</option>
                </select>
              </div>

              <div className="dubai-form-group dubai-form-full">
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

            <button type="submit" className="dubai-submit-btn">
              Send Enquiry on WhatsApp →
            </button>

            <small>Your enquiry will open in WhatsApp for submission.</small>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="dubai-cta">
        <div className="dubai-container">
          <h2>Your Dubai Holiday Starts Here!</h2>
          <p>
            Discover luxury, adventure and unforgettable experiences with Travel
            High 99.
          </p>
          <a href="#dubai-enquiry" className="dubai-btn">
            Plan Your Dubai Trip
          </a>
        </div>
      </section>
    </main>
  );
}

export default Dubai;
