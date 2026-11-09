import React from "react";
import "./Honeymoon.css";

const destinations = [
  {
    name: "Maldives",
    subtitle: "Private Islands & Luxury Resorts",
    price: "Starting from ₹45,999",
    image: "/Images/Honeymoon/Maldives.jpg",
  },
  {
    name: "Bali",
    subtitle: "Romantic Villas & Beaches",
    price: "Starting from ₹32,999",
    image: "/Images/Honeymoon/Bali.jpg",
  },
  {
    name: "Switzerland",
    subtitle: "Snowy Mountains & Scenic Views",
    price: "Starting from ₹89,999",
    image: "/Images/Honeymoon/Switzerland.jpg",
  },
  {
    name: "Paris",
    subtitle: "The City of Love",
    price: "Starting from ₹75,999",
    image: "/Images/Honeymoon/Paris.jpg",
  },
  {
    name: "Goa",
    subtitle: "Beachside Romantic Getaways",
    price: "Starting from ₹18,999",
    image: "/Images/Honeymoon/Goa.jpg",
  },
  {
    name: "Thailand",
    subtitle: "Island Tours & Romantic Stays",
    price: "Starting from ₹29,999",
    image: "/Images/Honeymoon/Thailand.jpg",
  },
];

const experiences = [
  {
    icon: "🏝️",
    title: "Private Beach Dinner",
    description:
      "Enjoy a romantic candlelight dinner beside the beautiful ocean.",
  },
  {
    icon: "🛏️",
    title: "Luxury Stay",
    description:
      "Stay in beautiful resorts, private villas and premium hotels.",
  },
  {
    icon: "🌹",
    title: "Romantic Decoration",
    description: "Special room decoration, flowers and memorable surprises.",
  },
  {
    icon: "📸",
    title: "Couple Photography",
    description: "Capture your beautiful honeymoon moments together.",
  },
];

function Honeymoon() {
  return (
    <div className="honeymoon-page">
      {/* HERO SECTION */}
      <section className="honeymoon-hero">
        <div className="honeymoon-hero-overlay">
          <div className="honeymoon-hero-content">
            <span className="honeymoon-tag">LOVE • TRAVEL • TOGETHER</span>

            <h1>
              Begin Your Beautiful
              <br />
              <span>Forever Journey</span>
            </h1>

            <p>
              Celebrate your love with unforgettable honeymoon holidays.
              Discover romantic destinations, luxury stays and beautiful
              experiences with Travel99.
            </p>

            <a href="#honeymoon-packages" className="honeymoon-btn">
              Explore Honeymoon Packages
            </a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="honeymoon-intro section-padding">
        <div className="honeymoon-intro-image">
          <img
            src="/Images/Honeymoon/Honeymoon.jpg"
            alt="Romantic couple honeymoon"
          />
        </div>

        <div className="honeymoon-intro-content">
          <span className="section-subtitle">SPECIAL MOMENTS TOGETHER</span>

          <h2>
            Make Your Honeymoon
            <span> Truly Unforgettable</span>
          </h2>

          <p>
            Your honeymoon is the beginning of a beautiful new chapter. At
            Travel99, we help you plan a memorable romantic holiday with
            carefully selected destinations, comfortable stays and personalized
            travel experiences.
          </p>

          <p>
            Whether you dream of relaxing on tropical beaches, exploring
            beautiful European cities or enjoying mountain views, we make your
            romantic getaway special.
          </p>

          <a href="#honeymoon-packages" className="honeymoon-outline-btn">
            Discover Packages
          </a>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="honeymoon-destinations section-padding">
        <div className="honeymoon-heading">
          <span className="section-subtitle">ROMANTIC GETAWAYS</span>
          <h2>Top Honeymoon Destinations</h2>
          <p>Explore beautiful places for your first journey together.</p>
        </div>

        <div className="honeymoon-destination-grid">
          {destinations.map((place, index) => (
            <div className="honeymoon-destination-card" key={index}>
              <div className="honeymoon-destination-image">
                <img src={place.image} alt={place.name} />
                <span className="honeymoon-heart">♡</span>
              </div>

              <div className="honeymoon-destination-info">
                <h3>{place.name}</h3>
                <p>{place.subtitle}</p>

                <div className="honeymoon-card-bottom">
                  <strong>{place.price}</strong>
                  <a href="#honeymoon-contact">Enquire Now →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="honeymoon-experiences section-padding">
        <div className="honeymoon-heading">
          <span className="section-subtitle">MADE FOR TWO</span>
          <h2>Romantic Experiences</h2>
          <p>Add special moments to your honeymoon journey.</p>
        </div>

        <div className="honeymoon-experience-grid">
          {experiences.map((item, index) => (
            <div className="honeymoon-experience-card" key={index}>
              <div className="experience-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="honeymoon-banner">
        <div className="honeymoon-banner-overlay">
          <span>YOUR LOVE STORY DESERVES A BEAUTIFUL JOURNEY</span>
          <h2>Travel Together, Create Memories Forever</h2>
          <p>
            Let Travel99 plan a romantic escape that you will remember for a
            lifetime.
          </p>
          <a href="#honeymoon-contact" className="honeymoon-btn">
            Plan Your Honeymoon
          </a>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        className="honeymoon-packages section-padding"
        id="honeymoon-packages"
      >
        <div className="honeymoon-heading">
          <span className="section-subtitle">CHOOSE YOUR JOURNEY</span>
          <h2>Popular Honeymoon Packages</h2>
          <p>Find the perfect holiday package for your special journey.</p>
        </div>

        <div className="honeymoon-package-grid">
          <div className="honeymoon-package-card">
            <img
              src="/Images/Honeymoon/Maldives.jpg"
              alt="Maldives honeymoon"
            />
            <div className="honeymoon-package-info">
              <span>5 Days / 4 Nights</span>
              <h3>Maldives Romantic Escape</h3>
              <p>
                Luxury island stay, beach activities and couple experiences.
              </p>
              <div className="package-price">
                <strong>₹45,999</strong>
                <small> / Couple onwards</small>
              </div>
              <a href="#honeymoon-contact">Book This Package →</a>
            </div>
          </div>

          <div className="honeymoon-package-card">
            <img src="/Images/Honeymoon/Bali.jpg" alt="Bali honeymoon" />
            <div className="honeymoon-package-info">
              <span>6 Days / 5 Nights</span>
              <h3>Bali Love Journey</h3>
              <p>Romantic villa, sightseeing and beautiful island views.</p>
              <div className="package-price">
                <strong>₹32,999</strong>
                <small> / Couple onwards</small>
              </div>
              <a href="#honeymoon-contact">Book This Package →</a>
            </div>
          </div>

          <div className="honeymoon-package-card">
            <img
              src="/Images/Honeymoon/Switzerland.jpg"
              alt="Switzerland honeymoon"
            />
            <div className="honeymoon-package-info">
              <span>7 Days / 6 Nights</span>
              <h3>Switzerland Dream Holiday</h3>
              <p>Mountain adventures, scenic train rides and romantic stays.</p>
              <div className="package-price">
                <strong>₹89,999</strong>
                <small> / Couple onwards</small>
              </div>
              <a href="#honeymoon-contact">Book This Package →</a>
            </div>
          </div>
        </div>

        <p className="honeymoon-price-note">
          *Prices are indicative and may vary according to travel dates,
          availability and selected services. Confirm the final price with
          Travel99 before booking.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="honeymoon-why section-padding">
        <div className="honeymoon-heading">
          <span className="section-subtitle">TRAVEL WITH CONFIDENCE</span>
          <h2>Why Choose Travel99?</h2>
        </div>

        <div className="honeymoon-why-grid">
          <div>
            <span>✈️</span>
            <h3>Customized Trips</h3>
            <p>Honeymoon plans designed around your preferences.</p>
          </div>

          <div>
            <span>🏨</span>
            <h3>Quality Stays</h3>
            <p>Comfortable hotels and romantic accommodation options.</p>
          </div>

          <div>
            <span>💬</span>
            <h3>Travel Assistance</h3>
            <p>Support to help make your journey smooth and enjoyable.</p>
          </div>

          <div>
            <span>💝</span>
            <h3>Special Experiences</h3>
            <p>Thoughtful experiences for your memorable moments.</p>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="honeymoon-contact" id="honeymoon-contact">
        <div className="honeymoon-contact-content">
          <span>LET'S PLAN YOUR LOVE STORY</span>
          <h2>Your Dream Honeymoon Starts Here!</h2>
          <p>
            Tell us your dream destination and travel dates. Our team will help
            you plan a beautiful honeymoon holiday.
          </p>

          <a href="tel:+919871735122" className="honeymoon-btn">
            Call Travel99: +91 9871735122
          </a>

          <a
            href="mailto:travelhigh99@gmail.com?subject=Honeymoon%20Holiday%20Enquiry"
            className="honeymoon-email-link"
          >
            Email: travelhigh99@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default Honeymoon;

// import React from "react";
// import "./Honeymoon.css";

// const destinations = [
//   {
//     name: "Maldives",
//     subtitle: "Private Islands & Luxury Resorts",
//     price: "Starting from ₹45,999",
//     image:
//       "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000",
//   },
//   {
//     name: "Bali",
//     subtitle: "Romantic Villas & Beaches",
//     price: "Starting from ₹32,999",
//     image:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000",
//   },
//   {
//     name: "Switzerland",
//     subtitle: "Snowy Mountains & Scenic Views",
//     price: "Starting from ₹89,999",
//     image:
//       "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1000",
//   },
//   {
//     name: "Paris",
//     subtitle: "The City of Love",
//     price: "Starting from ₹75,999",
//     image:
//       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000",
//   },
//   {
//     name: "Goa",
//     subtitle: "Beachside Romantic Getaways",
//     price: "Starting from ₹18,999",
//     image:
//       "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000",
//   },
//   {
//     name: "Thailand",
//     subtitle: "Island Tours & Romantic Stays",
//     price: "Starting from ₹29,999",
//     image:
//       "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1000",
//   },
// ];

// const experiences = [
//   {
//     icon: "🏝️",
//     title: "Private Beach Dinner",
//     description:
//       "Enjoy a romantic candlelight dinner beside the beautiful ocean.",
//   },
//   {
//     icon: "🛏️",
//     title: "Luxury Stay",
//     description:
//       "Stay in beautiful resorts, private villas and premium hotels.",
//   },
//   {
//     icon: "🌹",
//     title: "Romantic Decoration",
//     description: "Special room decoration, flowers and memorable surprises.",
//   },
//   {
//     icon: "📸",
//     title: "Couple Photography",
//     description: "Capture your beautiful honeymoon moments together.",
//   },
// ];

// function Honeymoon() {
//   return (
//     <div className="honeymoon-page">
//       {/* HERO SECTION */}
//       <section className="honeymoon-hero">
//         <div className="honeymoon-hero-overlay">
//           <div className="honeymoon-hero-content">
//             <span className="honeymoon-tag">LOVE • TRAVEL • TOGETHER</span>

//             <h1>
//               Begin Your Beautiful
//               <br />
//               <span>Forever Journey</span>
//             </h1>

//             <p>
//               Celebrate your love with unforgettable honeymoon holidays.
//               Discover romantic destinations, luxury stays and beautiful
//               experiences with Travel99.
//             </p>

//             <a href="#honeymoon-packages" className="honeymoon-btn">
//               Explore Honeymoon Packages
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* INTRO SECTION */}
//       <section className="honeymoon-intro section-padding">
//         <div className="honeymoon-intro-image">
//           <img
//             src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1000"
//             alt="Romantic couple honeymoon"
//           />
//         </div>

//         <div className="honeymoon-intro-content">
//           <span className="section-subtitle">SPECIAL MOMENTS TOGETHER</span>
//           <h2>
//             Make Your Honeymoon
//             <span> Truly Unforgettable</span>
//           </h2>

//           <p>
//             Your honeymoon is the beginning of a beautiful new chapter. At
//             Travel99, we help you plan a memorable romantic holiday with
//             carefully selected destinations, comfortable stays and personalized
//             travel experiences.
//           </p>

//           <p>
//             Whether you dream of relaxing on tropical beaches, exploring
//             beautiful European cities or enjoying mountain views, we make your
//             romantic getaway special.
//           </p>

//           <a href="#honeymoon-packages" className="honeymoon-outline-btn">
//             Discover Packages
//           </a>
//         </div>
//       </section>

//       {/* DESTINATIONS */}
//       <section className="honeymoon-destinations section-padding">
//         <div className="honeymoon-heading">
//           <span className="section-subtitle">ROMANTIC GETAWAYS</span>
//           <h2>Top Honeymoon Destinations</h2>
//           <p>Explore beautiful places for your first journey together.</p>
//         </div>

//         <div className="honeymoon-destination-grid">
//           {destinations.map((place, index) => (
//             <div className="honeymoon-destination-card" key={index}>
//               <div className="honeymoon-destination-image">
//                 <img src={place.image} alt={place.name} />
//                 <span className="honeymoon-heart">♡</span>
//               </div>

//               <div className="honeymoon-destination-info">
//                 <h3>{place.name}</h3>
//                 <p>{place.subtitle}</p>
//                 <div className="honeymoon-card-bottom">
//                   <strong>{place.price}</strong>
//                   <a href="#honeymoon-contact">Enquire Now →</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* EXPERIENCES */}
//       <section className="honeymoon-experiences section-padding">
//         <div className="honeymoon-heading">
//           <span className="section-subtitle">MADE FOR TWO</span>
//           <h2>Romantic Experiences</h2>
//           <p>Add special moments to your honeymoon journey.</p>
//         </div>

//         <div className="honeymoon-experience-grid">
//           {experiences.map((item, index) => (
//             <div className="honeymoon-experience-card" key={index}>
//               <div className="experience-icon">{item.icon}</div>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURE BANNER */}
//       <section className="honeymoon-banner">
//         <div className="honeymoon-banner-overlay">
//           <span>YOUR LOVE STORY DESERVES A BEAUTIFUL JOURNEY</span>
//           <h2>Travel Together, Create Memories Forever</h2>
//           <p>
//             Let Travel99 plan a romantic escape that you will remember for a
//             lifetime.
//           </p>
//           <a href="#honeymoon-contact" className="honeymoon-btn">
//             Plan Your Honeymoon
//           </a>
//         </div>
//       </section>

//       {/* PACKAGES */}
//       <section
//         className="honeymoon-packages section-padding"
//         id="honeymoon-packages"
//       >
//         <div className="honeymoon-heading">
//           <span className="section-subtitle">CHOOSE YOUR JOURNEY</span>
//           <h2>Popular Honeymoon Packages</h2>
//           <p>Find the perfect holiday package for your special journey.</p>
//         </div>

//         <div className="honeymoon-package-grid">
//           <div className="honeymoon-package-card">
//             <img
//               src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900"
//               alt="Maldives honeymoon"
//             />
//             <div className="honeymoon-package-info">
//               <span>5 Days / 4 Nights</span>
//               <h3>Maldives Romantic Escape</h3>
//               <p>
//                 Luxury island stay, beach activities and couple experiences.
//               </p>
//               <div className="package-price">
//                 <strong>₹45,999</strong>
//                 <small> / Couple onwards</small>
//               </div>
//               <a href="#honeymoon-contact">Book This Package →</a>
//             </div>
//           </div>

//           <div className="honeymoon-package-card">
//             <img
//               src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900"
//               alt="Bali honeymoon"
//             />
//             <div className="honeymoon-package-info">
//               <span>6 Days / 5 Nights</span>
//               <h3>Bali Love Journey</h3>
//               <p>Romantic villa, sightseeing and beautiful island views.</p>
//               <div className="package-price">
//                 <strong>₹32,999</strong>
//                 <small> / Couple onwards</small>
//               </div>
//               <a href="#honeymoon-contact">Book This Package →</a>
//             </div>
//           </div>

//           <div className="honeymoon-package-card">
//             <img
//               src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900"
//               alt="Switzerland honeymoon"
//             />
//             <div className="honeymoon-package-info">
//               <span>7 Days / 6 Nights</span>
//               <h3>Switzerland Dream Holiday</h3>
//               <p>Mountain adventures, scenic train rides and romantic stays.</p>
//               <div className="package-price">
//                 <strong>₹89,999</strong>
//                 <small> / Couple onwards</small>
//               </div>
//               <a href="#honeymoon-contact">Book This Package →</a>
//             </div>
//           </div>
//         </div>
//         <p className="honeymoon-price-note">
//           *Prices are indicative and may vary according to travel dates,
//           availability and selected services. Confirm the final price with
//           Travel99 before booking.
//         </p>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="honeymoon-why section-padding">
//         <div className="honeymoon-heading">
//           <span className="section-subtitle">TRAVEL WITH CONFIDENCE</span>
//           <h2>Why Choose Travel99?</h2>
//         </div>

//         <div className="honeymoon-why-grid">
//           <div>
//             <span>✈️</span>
//             <h3>Customized Trips</h3>
//             <p>Honeymoon plans designed around your preferences.</p>
//           </div>
//           <div>
//             <span>🏨</span>
//             <h3>Quality Stays</h3>
//             <p>Comfortable hotels and romantic accommodation options.</p>
//           </div>
//           <div>
//             <span>💬</span>
//             <h3>Travel Assistance</h3>
//             <p>Support to help make your journey smooth and enjoyable.</p>
//           </div>
//           <div>
//             <span>💝</span>
//             <h3>Special Experiences</h3>
//             <p>Thoughtful experiences for your memorable moments.</p>
//           </div>
//         </div>
//       </section>

//       {/* ENQUIRY */}
//       <section className="honeymoon-contact" id="honeymoon-contact">
//         <div className="honeymoon-contact-content">
//           <span>LET'S PLAN YOUR LOVE STORY</span>
//           <h2>Your Dream Honeymoon Starts Here!</h2>
//           <p>
//             Tell us your dream destination and travel dates. Our team will help
//             you plan a beautiful honeymoon holiday.
//           </p>

//           <a href="tel:+919871735122" className="honeymoon-btn">
//             Call Travel99: +91 9871735122
//           </a>
//           <a
//             href="mailto:travelhigh99@gmail.com?subject=Honeymoon%20Holiday%20Enquiry"
//             className="honeymoon-email-link"
//           >
//             Email: travelhigh99@gmail.com
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Honeymoon;
