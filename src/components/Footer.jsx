import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const services = [
    { label: "Flight Booking", id: "flight-booking" },
    { label: "Hotel Booking", id: "hotel-booking" },
    { label: "Holiday Packages", id: "holiday-packages" },
    { label: "Visa Assistance", id: "visa-assistance" },
    { label: "Travel Insurance", id: "travel-insurance" },
    { label: "Tour Packages", id: "tour-packages" },
    { label: "Airport Transfers", id: "airport-transfers" },
  ];

  return (
    <footer className="travel-footer">
      <div className="footer-container">
        {/* FOOTER MAIN GRID */}
        <div className="footer-grid">
          {/* ABOUT */}
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <img
                src={`${import.meta.env.BASE_URL}Images/logo.png`}
                alt="Travel High 99 Logo"
                className="footer-logo"
              />

              <span className="footer-logo-text">
                <span className="footer-logo-title">
                  Travel High <strong>99</strong>
                </span>
                <small>EXPLORE THE WORLD</small>
              </span>
            </Link>

            <p
              style={{
                textAlign: "justify",
                textAlignLast: "left",
                lineHeight: "1.8",
                width: "100%",
                margin: "0 auto",
                padding: "0 10px",
                boxSizing: "border-box",
              }}
            >
              Travel High 99 is your trusted travel partner for unforgettable
              journeys. We provide holiday packages, flight bookings, hotel
              reservations, visa assistance and complete travel solutions to
              make your journey comfortable and memorable.
            </p>

            {/* SOCIAL LINKS */}
            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/#destinations">Destinations</Link>
            <Link to="/#packages">Holiday Packages</Link>
            <Link to="/#services">Our Services</Link>
            <Link to="/#contact">Contact Us</Link>
          </div>

          {/* SERVICES */}
          <div className="footer-links">
            <h3>Our Services</h3>

            {services.map((service) => (
              <Link key={service.id} to={`/#${service.id}`}>
                {service.label}
              </Link>
            ))}
          </div>

          {/* USEFUL LINKS */}
          <div className="footer-links">
            <h3>Useful Links</h3>

            <Link to="/#destinations">Popular Destinations</Link>
            <Link to="/#packages">Best Holiday Deals</Link>
            <Link to="/#contact">Plan Your Trip</Link>
            <Link to="/#contact">Travel Enquiry</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Contact Information</h3>

            <div className="footer-contact-item">
              <span className="contact-icon">⌖</span>
              <p>New Delhi, India</p>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">☎</span>
              <div className="footer-phone-numbers">
                <a href="tel:+919871735122">+91 9871735122</a>
                <a href="tel:+919667859420">+91 9667859420</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">☎</span>
              <div className="footer-phone-numbers">
                <a href="tel:+918586096704">+91 8586096704</a>
                <a href="tel:+919582356257">+91 9582356257</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">✉</span>
              <div className="footer-email-list">
                <a href="mailto:travelhigh99@gmail.com">
                  travelhigh99@gmail.com
                </a>
                <a href="mailto:info@travelhigh99.com">info@travelhigh99.com</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">◷</span>
              <p>
                Monday - Saturday
                <br />
                10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="footer-cta">
          <div>
            <span>START YOUR NEXT ADVENTURE</span>
            <h3>Ready to explore the world with Travel High 99?</h3>
          </div>

          <Link to="/#contact" className="footer-cta-btn">
            Plan Your Trip <span>↗</span>
          </Link>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>Travel High 99</strong>. All
            Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          {/* SSTech CREDIT */}
          <div className="footer-credit-slider">
            <div className="footer-credit-track">
              {[1, 2, 3, 4].map((item) => (
                <a
                  key={item}
                  href="https://www.sstechnetwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-credit"
                  aria-hidden={item !== 1}
                  tabIndex={item !== 1 ? -1 : 0}
                >
                  Designed and Cared by SSTech Networking Solution.
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="travel-footer">
//       <div className="footer-container">
//         {/* FOOTER MAIN GRID */}
//         <div className="footer-grid">
//           {/* ABOUT */}
//           <div className="footer-about">
//             <a href="/" className="footer-logo">
//               {/* <img src="/Images/logo.png" alt="Travel99 Logo" /> */}
//               <img
//                 src="/Travel99.Client/Images/logo.png"
//                 alt="Travel99 Logo"
//                 className="footer-logo"
//               />
//               <span className="footer-logo-text">
//                 <span className="footer-logo-title">
//                   Travel High <strong>99</strong>
//                 </span>
//                 <small>EXPLORE THE WORLD</small>
//               </span>
//             </a>
//             <p
//               style={{
//                 textAlign: "justify",
//                 textAlignLast: "left",
//                 lineHeight: "1.8",
//                 width: "100%",
//                 margin: "0 auto",
//                 padding: "0 10px",
//                 boxSizing: "border-box",
//               }}
//             >
//               Travel High 99 is your trusted travel partner for unforgettable
//               journeys. We provide holiday packages, flight bookings, hotel
//               reservations, visa assistance and complete travel solutions to
//               make your journey comfortable and memorable.
//             </p>
//             {/* <p>
//               Travel High 99 is your trusted travel partner for unforgettable
//               journeys. We provide holiday packages, flight bookings, hotel
//               reservations, visa assistance and complete travel solutions to
//               make your journey comfortable and memorable.
//             </p> */}

//             <div className="footer-social">
//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//               >
//                 f
//               </a>
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//               >
//                 ◎
//               </a>
//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//               >
//                 in
//               </a>
//               <a
//                 href="https://www.youtube.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="YouTube"
//               >
//                 ▶
//               </a>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="footer-links">
//             <h3>Quick Links</h3>
//             <a href="/">Home</a>
//             <a href="/about">About Us</a>
//             <a href="/#destinations">Destinations</a>
//             <a href="/#packages">Holiday Packages</a>
//             <a href="/#services">Our Services</a>
//             <a href="/#contact">Contact Us</a>
//           </div>

//           {/* SERVICES */}
//           <div className="footer-links">
//             <h3>Our Services</h3>
//             <a href="/#services">Flight Booking</a>
//             <a href="/#services">Hotel Booking</a>
//             <a href="/#services">Holiday Packages</a>
//             <a href="/#visa">Visa Assistance</a>
//             <a href="/#services">Travel Insurance</a>
//             <a href="/#services">Tour Packages</a>
//             <a href="/#services">Airport Transfers</a>
//           </div>

//           {/* USEFUL LINKS */}
//           <div className="footer-links">
//             <h3>Useful Links</h3>
//             <a href="/#destinations">Popular Destinations</a>
//             <a href="/#packages">Best Holiday Deals</a>
//             <a href="/#contact">Plan Your Trip</a>
//             <a href="/#contact">Travel Enquiry</a>
//             <a href="/privacy-policy">Privacy Policy</a>
//             <a href="/terms">Terms &amp; Conditions</a>
//           </div>

//           {/* CONTACT */}
//           <div className="footer-contact">
//             <h3>Contact Information</h3>

//             <div className="footer-contact-item">
//               <span className="contact-icon">⌖</span>
//               <p>New Delhi, India</p>
//             </div>

//             <div className="footer-contact-item">
//               <span className="contact-icon">☎</span>
//               <div className="footer-phone-numbers">
//                 <a href="tel:+919871735122">+91 9871735122</a>
//                 <a href="tel:+919667859420">+91 9667859420</a>
//               </div>
//             </div>

//             <div className="footer-contact-item">
//               <span className="contact-icon">☎</span>
//               <div className="footer-phone-numbers">
//                 <a href="tel:+918586096704">+91 8586096704</a>
//                 <a href="tel:+919582356257">+91 9582356257</a>
//               </div>
//             </div>

//             <div className="footer-contact-item">
//               <span className="contact-icon">✉</span>
//               <div className="footer-email-list">
//                 <a href="mailto:travelhigh99@gmail.com">
//                   travelhigh99@gmail.com
//                 </a>
//                 <a href="mailto:info@travelhigh99.com">info@travelhigh99.com</a>
//               </div>
//             </div>

//             <div className="footer-contact-item">
//               <span className="contact-icon">◷</span>
//               <p>
//                 Monday - Saturday
//                 <br />
//                 10:00 AM - 6:00 PM
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CALL TO ACTION */}
//         <div className="footer-cta">
//           <div>
//             <span>START YOUR NEXT ADVENTURE</span>
//             <h3>Ready to explore the world with Travel High 99?</h3>
//           </div>

//           <a href="/#contact" className="footer-cta-btn">
//             Plan Your Trip <span>↗</span>
//           </a>
//         </div>

//         {/* FOOTER BOTTOM */}
//         <div className="footer-bottom">
//           <p className="footer-copyright">
//             © {new Date().getFullYear()} <strong>Travel High 99</strong>. All
//             Rights Reserved.
//           </p>

//           <div className="footer-bottom-links">
//             <a href="/privacy-policy">Privacy Policy</a>
//             <a href="/terms">Terms &amp; Conditions</a>
//           </div>

//           {/* SSTech CREDIT */}
//           <div className="footer-credit-slider">
//             <div className="footer-credit-track">
//               {[1, 2, 3, 4].map((item) => (
//                 <a
//                   key={item}
//                   href="https://www.sstechnetwork.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="footer-credit"
//                   aria-hidden={item !== 1}
//                   tabIndex={item !== 1 ? -1 : 0}
//                 >
//                   Designed and Cared by SSTech Networking Solution.
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
