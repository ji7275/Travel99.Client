import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    destination: "",
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

    const emailSubject = encodeURIComponent(
      formData.subject || "New Travel Enquiry",
    );

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Destination: ${formData.destination}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:travelhigh99@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-hero-label">WE ARE HERE TO HELP YOU</span>

          <h1>
            Contact <span>Travel High 99</span>
          </h1>

          <p>
            Have a question or planning your next trip? Get in touch with our
            travel experts and let us help you plan your perfect journey.
          </p>

          <div className="contact-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Contact Us</strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="contact-intro section-space">
        <div className="contact-container">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's Plan Your Next <span>Adventure</span>
          </h2>

          <p>
            Whether you need help with holiday packages, flight bookings, hotel
            reservations or visa assistance, our team is ready to assist you.
            Contact us today and make your travel planning simple and
            stress-free.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">⌖</div>
              <h3>Our Location</h3>
              <p>
                304, 3rd Floor, 5096 Main Bazar, Pahar Ganj, New Delhi - 110055
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5096+Main+Bazar+Pahar+Ganj+New+Delhi+110055"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">☎</div>
              <h3>Call Us</h3>
              <div className="contact-phone-list">
                <a href="tel:+919871735122">+91 9871735122</a>
                <a href="tel:+919667859420">+91 9667859420</a>
                <a href="tel:+918586096704">+91 8586096704</a>
                <a href="tel:+919582356257">+91 9582356257</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">✉</div>
              <h3>Email Us</h3>
              <p>Send your travel enquiry to our team.</p>
              <a href="mailto:travelhigh99@gmail.com">travelhigh99@gmail.com</a>
              <a href="mailto:travelhigh99@gmail.com">
                <span>✉</span>
                info@travelhigh99.com
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">◷</div>
              <h3>Working Hours</h3>
              <p>
                Monday - Saturday
                <br />
                10:00 AM - 6:00 PM
              </p>
              <span className="contact-open-label">
                Available for your enquiries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FORM AND CONTACT DETAILS */}
      <section className="contact-main-section section-space">
        <div className="contact-container">
          <div className="contact-main-grid">
            {/* LEFT CONTENT */}
            <div className="contact-left-content">
              <span className="contact-eyebrow">CONTACT OUR TEAM</span>

              <h2>
                We'd Love To <span>Hear From You</span>
              </h2>

              <p className="contact-left-description">
                Tell us about your travel plans. Our team will help you find the
                right destination, package and travel solution according to your
                needs.
              </p>

              <div className="contact-help-item">
                <span className="contact-help-icon">✈</span>
                <div>
                  <h4>Holiday Packages</h4>
                  <p>Plan memorable domestic and international trips.</p>
                </div>
              </div>

              <div className="contact-help-item">
                <span className="contact-help-icon">⌂</span>
                <div>
                  <h4>Flight & Hotel Booking</h4>
                  <p>Get assistance with flights and hotel reservations.</p>
                </div>
              </div>

              <div className="contact-help-item">
                <span className="contact-help-icon">◎</span>
                <div>
                  <h4>Visa Assistance</h4>
                  <p>Get guidance for your travel documentation.</p>
                </div>
              </div>

              <div className="contact-direct-box">
                <h3>Need Quick Assistance?</h3>
                <p>Talk directly with our travel team.</p>
                <a href="tel:+919871735122">☎ +91 9871735122</a>
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span>PLAN YOUR JOURNEY</span>
                <h2>Send Us An Enquiry</h2>
                <p>Fill in the details below and tell us how we can help.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
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

                  <div className="contact-form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9+\-\s]{7,18}"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Destination</label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Where do you want to go?"
                      value={formData.destination}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Holiday Packages">Holiday Packages</option>
                    <option value="Flight Booking">Flight Booking</option>
                    <option value="Hotel Booking">Hotel Booking</option>
                    <option value="Visa Assistance">Visa Assistance</option>
                    <option value="International Tours">
                      International Tours
                    </option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your travel requirements here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Submit Enquiry <span>→</span>
                </button>

                {submitted && (
                  <p className="contact-form-notice">
                    Your email application should open with your enquiry. Please
                    send the email to complete your submission.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-map-heading">
            <span className="contact-eyebrow">FIND OUR OFFICE</span>
            <h2>
              Visit <span>Our Location</span>
            </h2>
            <p>We look forward to helping you plan your next journey.</p>
          </div>

          <div className="contact-map-frame">
            <iframe
              title="Travel High 99 Office Location"
              src="https://www.google.com/maps?q=5096%20Main%20Bazar%20Pahar%20Ganj%20New%20Delhi%20110055&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta">
        <div className="contact-container">
          <div>
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Ready To Explore The World?</h2>
            <p>
              Connect with Travel High 99 and let us help you create
              unforgettable travel memories.
            </p>
          </div>

          <a href="tel:+919871735122">Contact Our Team →</a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
