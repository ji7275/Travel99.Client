import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css";

const serviceData = {
  "flight-booking": {
    title: "Flight Booking",
    subtitle: "Book Your Flights with Travel99",
    icon: "✈️",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85",
    description:
      "Travel99 helps you explore domestic and international flight options. Plan your journey with convenient booking assistance and travel support.",
    features: [
      "Domestic Flight Booking",
      "International Flight Booking",
      "One Way and Round Trip Options",
      "Flight Booking Assistance",
      "Travel Schedule Guidance",
    ],
  },

  "hotel-booking": {
    title: "Hotel Booking",
    subtitle: "Find Your Perfect Stay",
    icon: "🏨",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
    description:
      "Find comfortable accommodation for your next trip. From budget hotels to luxury resorts, we help you explore suitable stay options.",
    features: [
      "Budget Hotel Booking",
      "Luxury Hotel Booking",
      "Resort Reservations",
      "Family Accommodation",
      "Hotel Booking Assistance",
    ],
  },

  "holiday-packages": {
    title: "Holiday Packages",
    subtitle: "Discover Amazing Holiday Destinations",
    icon: "🌍",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85",
    description:
      "Discover beautiful destinations across India and around the world. Choose a holiday package according to your interests and budget.",
    features: [
      "Domestic Holiday Packages",
      "International Holiday Packages",
      "Family Tour Packages",
      "Honeymoon Packages",
      "Adventure and Weekend Trips",
    ],
  },

  "visa-assistance": {
    title: "Visa Assistance",
    subtitle: "Get Ready for Your International Journey",
    icon: "🛂",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85",
    description:
      "Get guidance regarding visa documentation and application procedures for your international travel plans.",
    features: [
      "Visa Documentation Guidance",
      "Application Process Assistance",
      "Travel Document Checklist",
      "Appointment Guidance",
      "International Travel Support",
    ],
  },

  "travel-insurance": {
    title: "Travel Insurance",
    subtitle: "Travel with More Confidence",
    icon: "🛡️",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    description:
      "Explore travel insurance options that can help protect your trip against eligible unexpected situations.",
    features: [
      "Domestic Travel Insurance Options",
      "International Travel Insurance Options",
      "Medical Emergency Coverage Guidance",
      "Trip Protection Options",
      "Insurance Plan Assistance",
    ],
  },

  "airport-transfers": {
    title: "Airport Transfers",
    subtitle: "Comfortable Airport Pickup and Drop",
    icon: "🚘",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=85",
    description:
      "Make your airport journey easier with convenient pickup and drop arrangements for your travel plans.",
    features: [
      "Airport Pickup",
      "Airport Drop",
      "Private Transfer Options",
      "Family Transfer Assistance",
      "Travel Transportation Guidance",
    ],
  },
};

function ServiceDetails() {
  const { serviceName } = useParams();
  const service = serviceData[serviceName];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/#services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      {/* HERO */}
      <section
        className="service-details-hero"
        style={{ backgroundImage: `url("${service.image}")` }}
      >
        <div className="service-details-overlay">
          <div className="service-details-hero-content">
            <span>{service.icon} TRAVEL99 SERVICES</span>
            <h1>{service.title}</h1>
            <p>{service.subtitle}</p>
            <div className="service-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/#services">Services</Link>
              <span>/</span>
              <strong>{service.title}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CONTENT */}
      <section className="service-details-content">
        <div className="service-details-container">
          <div className="service-details-left">
            <span className="service-details-label">
              TRAVEL99 – {service.title.toUpperCase()}
            </span>

            <h2>{service.subtitle}</h2>

            <p>{service.description}</p>

            <Link to="/#contact" className="service-enquiry-btn">
              Enquire Now →
            </Link>
          </div>

          <div className="service-features-box">
            <h3>What We Offer</h3>

            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="service-details-banner">
        <h2>Plan Your Next Journey with Travel99</h2>
        <p>Contact our team and let us help you plan a comfortable journey.</p>
        <Link to="/#contact">Contact Us →</Link>
      </section>
    </div>
  );
}

export default ServiceDetails;
