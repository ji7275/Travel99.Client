import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

/* WHY CHOOSE US DATA */

// const features = [
//   {
//     icon: "fa-user-check",
//     title: "Personalized Travel",
//     desc: "Travel plans designed around your interests, preferences and budget.",
//   },
//   {
//     icon: "fa-wallet",
//     title: "Affordable Packages",
//     desc: "Explore suitable holiday options for every type of traveller.",
//   },
//   {
//     icon: "fa-earth-asia",
//     title: "Worldwide Destinations",
//     desc: "Discover beautiful destinations across India and around the world.",
//   },
//   {
//     icon: "fa-headset",
//     title: "Travel Assistance",
//     desc: "Get helpful guidance throughout your travel planning journey.",
//   },
//   {
//     icon: "fa-plane-departure",
//     title: "Complete Travel Services",
//     desc: "Explore flights, hotels, holiday packages and visa assistance.",
//   },
//   {
//     icon: "fa-heart",
//     title: "Memorable Experiences",
//     desc: "We aim to make every journey special and full of beautiful memories.",
//   },
// ];

const features = [
  {
    icon: "✈️",
    title: "Personalized Travel",
    desc: "Travel plans designed around your interests, preferences and budget.",
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    desc: "Explore suitable holiday options for every type of traveller.",
  },
  {
    icon: "🌍",
    title: "Worldwide Destinations",
    desc: "Discover beautiful destinations across India and around the world.",
  },
  {
    icon: "🎧",
    title: "Travel Assistance",
    desc: "Get helpful guidance throughout your travel planning journey.",
  },
  {
    icon: "🧳",
    title: "Complete Travel Services",
    desc: "Explore flights, hotels, holiday packages and visa assistance.",
  },
  {
    icon: "❤️",
    title: "Memorable Experiences",
    desc: "We aim to make every journey special and full of beautiful memories.",
  },
];
const services = [
  {
    icon: "✈️",
    title: "Flight Booking",
    desc: "Explore domestic and international flight options for your journey.",
  },
  {
    icon: "🏨",
    title: "Hotel Reservations",
    desc: "Discover comfortable accommodation options for every type of trip.",
  },
  {
    icon: "🌍",
    title: "Holiday Packages",
    desc: "Explore planned holidays and customized travel experiences.",
  },
  {
    icon: "🛂",
    title: "Visa Assistance",
    desc: "Get guidance on visa documentation and application procedures.",
  },
  {
    icon: "🚗",
    title: "Travel Transfers",
    desc: "Plan convenient transportation for your destination.",
  },
  {
    icon: "🧳",
    title: "Customized Trips",
    desc: "Build a travel plan around your interests and preferences.",
  },
];

// const services = [
//   {
//     icon: "✈️",
//     title: "Flight Booking",
//     text: "Explore domestic and international flight options for your journey.",
//   },
//   {
//     icon: "🏨",
//     title: "Hotel Reservations",
//     text: "Discover comfortable accommodation options for every type of trip.",
//   },
//   {
//     icon: "🌍",
//     title: "Holiday Packages",
//     text: "Explore planned holidays and customized travel experiences.",
//   },
//   {
//     icon: "🛂",
//     title: "Visa Assistance",
//     text: "Get guidance on visa documentation and application procedures.",
//   },
//   {
//     icon: "🚗",
//     title: "Travel Transfers",
//     text: "Plan convenient transportation for your destination.",
//   },
//   {
//     icon: "🧳",
//     title: "Customized Trips",
//     text: "Build a travel plan around your interests and preferences.",
//   },
// ];

/* HOW IT WORKS DATA */
const steps = [
  {
    number: "01",
    title: "Share Your Plan",
    desc: "Tell us where you want to travel and your preferred dates.",
  },
  {
    number: "02",
    title: "Choose Your Package",
    desc: "Explore suitable travel options based on your needs.",
  },
  {
    number: "03",
    title: "Confirm Your Trip",
    desc: "Finalize your preferred travel arrangements with our team.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    desc: "Get ready to explore new places and create memories.",
  },
];

function About() {
  return (
    <main className="travel-about">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-container">
            <div className="about-hero-content">
              <span className="about-kicker">
                DISCOVER THE WORLD WITH TRAVEL HIGH 99
              </span>

              <h1>
                We Make Your Travel
                <span> Dreams Come True.</span>
              </h1>

              <p>
                Discover beautiful destinations, experience new cultures and
                create unforgettable memories with Travel High 99. Your journey
                begins with us.
              </p>

              <div className="about-hero-buttons">
                <Link to="/contact" className="about-btn">
                  Plan Your Trip
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

                <Link to="/packages" className="about-outline-btn">
                  Explore Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-main-section">
        <div className="about-page-heading">
          <span></span>
          <h2>ABOUT US</h2>
          <span></span>
        </div>

        {/* FIRST ROW */}
        <div className="about-content-row">
          <div className="about-image-box about-first-image">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1000"
              alt="Travel around the world"
            />
          </div>

          <div className="about-content-box">
            <h2>
              What is Travel High 99?
              <br />
              Who are we?
            </h2>

            <p>
              Travel High 99 is a travel company dedicated to helping people
              discover beautiful destinations and enjoy memorable journeys. We
              bring together convenient travel services and suitable travel
              options for different needs and budgets.
            </p>

            <p>
              Travellers can explore our services for domestic and international
              trips. We aim to make travel planning easier with helpful guidance
              and personalized assistance.
            </p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="about-content-row about-second-row">
          <div className="about-content-box about-second-content">
            <span className="about-small-label">
              Your travel planning partner
            </span>

            <h2>
              Travel around the world with
              <br className="desktop-break" />
              our company
            </h2>

            <p>
              Our company is focused on helping tourists plan their journeys,
              whether they travel alone, with family, or as part of a group.
            </p>

            <p>
              We help travellers explore suitable destinations and travel
              arrangements. Our goal is to make every journey convenient,
              enjoyable and memorable.
            </p>

            <p>
              From booking assistance to holiday planning, our team aims to
              guide customers through their travel planning experience.
            </p>

            <div className="about-achievements">
              <div className="about-achievement-item">
                <i className="fa-solid fa-globe"></i>
                <span>Domestic & International Travel</span>
              </div>

              <div className="about-achievement-item">
                <i className="fa-solid fa-headset"></i>
                <span>Personalized Travel Assistance</span>
              </div>
            </div>

            <Link to="/contact" className="about-read-more">
              READ MORE
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="about-image-box about-second-image">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000"
              alt="Modern building and sky"
            />
          </div>
        </div>
      </section>

      {/* TRAVEL HIGHLIGHTS */}
      <section className="about-stats">
        <div className="about-container about-stats-grid">
          <div className="about-stat">
            <i className="fa-solid fa-plane"></i>
            <h3>Domestic</h3>
            <p>Explore India</p>
          </div>

          <div className="about-stat">
            <i className="fa-solid fa-earth-americas"></i>
            <h3>International</h3>
            <p>Explore The World</p>
          </div>

          <div className="about-stat">
            <i className="fa-solid fa-suitcase-rolling"></i>
            <h3>Complete</h3>
            <p>Travel Services</p>
          </div>

          <div className="about-stat">
            <i className="fa-solid fa-heart"></i>
            <h3>Memorable</h3>
            <p>Travel Experiences</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="about-container">
          <div className="about-heading">
            <span className="about-label">WHY TRAVEL HIGH 99</span>

            <h2>
              Why Choose <span>Travel High 99?</span>
            </h2>

            <p>
              Your journey deserves the best planning. Discover why travellers
              choose Travel High 99 for convenient, comfortable and memorable
              travel experiences.
            </p>
          </div>

          <div className="about-feature-grid">
            {features.map((item, index) => (
              <div className="about-feature-card" key={item.title}>
                <div className="about-feature-top">
                  <div className="about-feature-icon">
                    <span>{item.icon}</span>
                  </div>

                  <span className="about-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="about-feature-bottom">
                  <span>Travel with confidence</span>
                  <span className="about-feature-arrow">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* BANNER */}
          <div className="about-why-banner">
            <div className="about-why-banner-icon">
              <span>🌎</span>
            </div>

            <div className="about-why-banner-content">
              <h3>Ready to Explore the World?</h3>

              <p>
                Let Travel High 99 help you plan your next domestic or
                international journey.
              </p>
            </div>

            <Link to="/contact" className="about-why-banner-btn">
              Plan Your Trip
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="about-services">
        <div className="about-container">
          <div className="about-heading">
            <span className="about-label">WHAT WE OFFER</span>

            <h2>
              Our <span>Travel Services</span>
            </h2>

            <p>
              Everything you need to plan your next adventure, all in one place.
              Explore our travel services and enjoy a comfortable journey.
            </p>
          </div>

          <div className="about-service-grid">
            {services.map((item) => (
              <div className="about-service-card" key={item.title}>
                <div className="about-service-icon">
                  <span>{item.icon}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <Link to="/contact" className="about-service-link">
                  Enquire Now
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose">
        <div className="about-container">
          <div className="about-heading">
            <span className="about-label">OUR PURPOSE</span>

            <h2>
              Our Mission <span>& Vision</span>
            </h2>

            <p>
              Our purpose is to make travel planning more convenient and
              enjoyable.
            </p>
          </div>

          <div className="about-purpose-grid">
            {/* MISSION CARD */}
            <div className="about-purpose-card">
              <div className="about-purpose-icon">
                <span>🎯</span>
              </div>

              <span className="about-purpose-tag">OUR GOAL</span>

              <h3>Our Mission</h3>

              <p>
                To make travel planning simpler by offering helpful travel
                services, relevant information and suitable options for
                different travellers and budgets. We aim to make every journey
                comfortable, convenient and memorable.
              </p>

              <div className="about-purpose-bottom">
                <span>Making Every Journey Special</span>
                <span>→</span>
              </div>
            </div>

            {/* VISION CARD */}
            <div className="about-purpose-card">
              <div className="about-purpose-icon">
                <span>👁️</span>
              </div>

              <span className="about-purpose-tag">OUR FUTURE</span>

              <h3>Our Vision</h3>

              <p>
                To become a preferred travel planning destination where people
                can discover new places, explore opportunities and create
                unforgettable memories. We want to make the world easier to
                explore for every traveller.
              </p>

              <div className="about-purpose-bottom">
                <span>Exploring The World Together</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="about-process">
        <div className="about-container">
          <div className="about-heading">
            <span className="about-label">YOUR JOURNEY STARTS HERE</span>

            <h2>How We Work</h2>

            <p>Plan your next trip in four simple steps.</p>
          </div>

          <div className="about-process-grid">
            {steps.map((step) => (
              <div className="about-process-card" key={step.number}>
                <div className="about-process-number">{step.number}</div>

                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta">
        <div className="about-container">
          <span className="about-kicker">LET'S EXPLORE TOGETHER</span>

          <h2>Your Next Adventure Awaits!</h2>

          <p>
            From beautiful Indian destinations to exciting international
            holidays, let Travel High 99 help you plan your next journey.
          </p>

          <Link to="/contact" className="about-btn">
            Plan Your Trip Now
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
