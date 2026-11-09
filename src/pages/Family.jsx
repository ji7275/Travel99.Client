// import React from "react";
// import "./Family.css";

// const familyDestinations = [
//   {
//     name: "Goa",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",
//     description: "Enjoy beautiful beaches, exciting water activities and memorable family time.",
//   },
//   {
//     name: "Kashmir",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=85",
//     description: "Explore beautiful valleys, snow-covered mountains and peaceful surroundings.",
//   },
//   {
//     name: "Dubai",
//     country: "UAE",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
//     description: "Enjoy luxury shopping, desert safari and exciting family attractions.",
//   },
//   {
//     name: "Thailand",
//     country: "Asia",
//     image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=85",
//     description: "Discover beautiful islands, cultural attractions and fun activities.",
//   },
//   {
//     name: "Singapore",
//     country: "Asia",
//     image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85",
//     description: "Experience amazing attractions, beautiful gardens and family entertainment.",
//   },
//   {
//     name: "Switzerland",
//     country: "Europe",
//     image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85",
//     description: "Create unforgettable memories among mountains, lakes and scenic landscapes.",
//   },
// ];

// const familyPackages = [
//   {
//     name: "Goa Family Getaway",
//     duration: "4 Days / 3 Nights",
//     location: "Goa, India",
//     price: "₹14,999",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
//   },
//   {
//     name: "Kashmir Family Tour",
//     duration: "5 Days / 4 Nights",
//     location: "Kashmir, India",
//     price: "₹24,999",
//     image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85",
//   },
//   {
//     name: "Dubai Family Vacation",
//     duration: "5 Days / 4 Nights",
//     location: "Dubai, UAE",
//     price: "₹49,999",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
//   },
// ];

// function Family() {
//   return (
//     <div className="family-page">
//       {/* HERO SECTION */}
//       <section className="family-hero">
//         <div className="family-hero-overlay">
//           <div className="family-hero-content">
//             <span className="family-tag">
//               TRAVEL TOGETHER, CREATE MEMORIES FOREVER
//             </span>

//             <h1>
//               Family Holidays <br />
//               <span>Made for Beautiful Memories</span>
//             </h1>

//             <p>
//               Discover exciting destinations, enjoy wonderful experiences
//               and make every family vacation special with Travel99.
//             </p>

//             <div className="family-hero-buttons">
//               <a href="#family-packages" className="family-btn">
//                 Explore Packages <i className="fa fa-arrow-right"></i>
//               </a>

//               <a href="#family-contact" className="family-btn-outline">
//                 Plan Your Trip
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO SECTION */}
//       <section className="family-intro section-padding">
//         <div className="family-intro-image">
//           <img
//             src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1100&q=85"
//             alt="Family enjoying a holiday together"
//           />

//           <div className="family-image-badge">
//             <strong>Travel99</strong>
//             <span>Travel Together, Smile Together</span>
//           </div>
//         </div>

//         <div className="family-intro-content">
//           <span className="family-subtitle">WELCOME TO TRAVEL99</span>

//           <h2 className="family-heading">
//             Make Every Family Trip
//             <span> Truly Special</span>
//           </h2>

//           <p>
//             Family holidays are all about spending quality time together,
//             exploring new places and creating memories that last a lifetime.
//             At Travel99, we help you plan comfortable, enjoyable and
//             memorable family vacations.
//           </p>

//           <p>
//             Whether you want a relaxing beach holiday, a mountain adventure
//             or an international vacation, we offer travel experiences
//             suitable for every family.
//           </p>

//           <div className="family-intro-points">
//             <div><i className="fa fa-check-circle"></i> Comfortable Family Stays</div>
//             <div><i className="fa fa-check-circle"></i> Exciting Family Activities</div>
//             <div><i className="fa fa-check-circle"></i> Customized Holiday Packages</div>
//             <div><i className="fa fa-check-circle"></i> Dedicated Travel Assistance</div>
//           </div>

//           <a href="#family-contact" className="family-btn">
//             Discover More <i className="fa fa-arrow-right"></i>
//           </a>
//         </div>
//       </section>

//       {/* DESTINATIONS SECTION */}
//       <section className="family-destinations section-padding">
//         <div className="family-section-title">
//           <span className="family-subtitle">EXPLORE THE WORLD</span>
//           <h2 className="family-heading">
//             Popular Family <span>Destinations</span>
//           </h2>
//           <p>Explore beautiful destinations perfect for your next family vacation.</p>
//         </div>

//         <div className="family-destination-grid">
//           {familyDestinations.map((place) => (
//             <div className="family-destination-card" key={place.name}>
//               <div className="family-destination-image">
//                 <img src={place.image} alt={place.name} loading="lazy" />
//                 <span className="family-location-label">{place.country}</span>
//               </div>

//               <div className="family-destination-info">
//                 <h3>{place.name}</h3>
//                 <p>{place.description}</p>
//                 <a href="#family-contact">
//                   Explore Destination <i className="fa fa-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAMILY EXPERIENCES */}
//       <section className="family-experiences section-padding">
//         <div className="family-section-title">
//           <span className="family-subtitle">ENJOY EVERY MOMENT</span>
//           <h2 className="family-heading">
//             Wonderful Experiences <span>For Everyone</span>
//           </h2>
//           <p>
//             From relaxing holidays to exciting adventures, there is something
//             for every member of your family.
//           </p>
//         </div>

//         <div className="family-experience-grid">
//           <div className="family-experience-card">
//             <div className="family-experience-icon"><i className="fa fa-umbrella-beach"></i></div>
//             <h3>Beach Holidays</h3>
//             <p>Relax on beautiful beaches and enjoy fun water activities with your family.</p>
//           </div>

//           <div className="family-experience-card">
//             <div className="family-experience-icon"><i className="fa fa-mountain"></i></div>
//             <h3>Mountain Adventures</h3>
//             <p>Explore scenic mountains, beautiful valleys and peaceful natural surroundings.</p>
//           </div>

//           <div className="family-experience-card">
//             <div className="family-experience-icon"><i className="fa fa-landmark"></i></div>
//             <h3>Cultural Experiences</h3>
//             <p>Discover local traditions, historical places and different cultures together.</p>
//           </div>

//           <div className="family-experience-card">
//             <div className="family-experience-icon"><i className="fa fa-child"></i></div>
//             <h3>Kids Activities</h3>
//             <p>Make holidays more exciting with enjoyable activities for children and families.</p>
//           </div>
//         </div>
//       </section>

//       {/* BANNER SECTION */}
//       <section className="family-banner">
//         <div className="family-banner-overlay">
//           <div className="family-banner-content">
//             <span>YOUR FAMILY, YOUR ADVENTURE</span>
//             <h2>
//               The Best Memories Are Made
//               <br />
//               When We Travel Together
//             </h2>
//             <p>
//               Let Travel99 make your next family vacation comfortable,
//               exciting and unforgettable.
//             </p>
//             <a href="#family-contact" className="family-btn">
//               Start Planning <i className="fa fa-arrow-right"></i>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* PACKAGES SECTION */}
//       <section className="family-packages section-padding" id="family-packages">
//         <div className="family-section-title">
//           <span className="family-subtitle">SPECIAL HOLIDAY DEALS</span>
//           <h2 className="family-heading">
//             Best Family <span>Holiday Packages</span>
//           </h2>
//           <p>Choose your favourite destination and enjoy a wonderful family vacation.</p>
//         </div>

//         <div className="family-package-grid">
//           {familyPackages.map((pkg) => (
//             <div className="family-package-card" key={pkg.name}>
//               <div className="family-package-image">
//                 <img src={pkg.image} alt={pkg.name} loading="lazy" />
//                 <span>Family Special</span>
//               </div>

//               <div className="family-package-info">
//                 <div className="family-package-location">
//                   <i className="fa fa-map-marker-alt"></i> {pkg.location}
//                 </div>

//                 <h3>{pkg.name}</h3>

//                 <div className="family-package-duration">
//                   <i className="fa fa-clock"></i> {pkg.duration}
//                 </div>

//                 <div className="family-package-bottom">
//                   <div>
//                     <small>Starting From</small>
//                     <h4>{pkg.price}</h4>
//                   </div>
//                   <a href="#family-contact">
//                     Enquire Now <i className="fa fa-arrow-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="family-why section-padding">
//         <div className="family-section-title">
//           <span className="family-subtitle">WHY TRAVEL WITH US</span>
//           <h2 className="family-heading">
//             Why Choose <span>Travel99?</span>
//           </h2>
//           <p>We make family travel planning simple, convenient and enjoyable.</p>
//         </div>

//         <div className="family-why-grid">
//           <div className="family-why-card">
//             <i className="fa fa-wallet"></i>
//             <h3>Affordable Packages</h3>
//             <p>Holiday options designed for different family budgets.</p>
//           </div>

//           <div className="family-why-card">
//             <i className="fa fa-hotel"></i>
//             <h3>Comfortable Stays</h3>
//             <p>Enjoy convenient accommodation during your family trip.</p>
//           </div>

//           <div className="family-why-card">
//             <i className="fa fa-headset"></i>
//             <h3>Travel Assistance</h3>
//             <p>Get support and assistance throughout your journey.</p>
//           </div>

//           <div className="family-why-card">
//             <i className="fa fa-route"></i>
//             <h3>Customised Trips</h3>
//             <p>Plan your vacation according to your family's preferences.</p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="family-contact" id="family-contact">
//         <div className="family-contact-overlay">
//           <div className="family-contact-content">
//             <span>LET'S PLAN YOUR NEXT HOLIDAY</span>
//             <h2>
//               Ready for Your Next
//               <br />
//               Family Adventure?
//             </h2>
//             <p>
//               Tell us about your travel plans. Our team will help you create
//               a memorable family holiday.
//             </p>

//             <div className="family-contact-buttons">
//               <a href="tel:+919871735122" className="family-btn">
//                 <i className="fa fa-phone"></i> Call Us
//               </a>
//               <a href="mailto:travelhigh99@gmail.com" className="family-contact-outline">
//                 <i className="fa fa-envelope"></i> Email Us
//               </a>
//             </div>

//             <div className="family-contact-details">
//               <span><i className="fa fa-phone"></i> +91 9871735122</span>
//               <span><i className="fa fa-envelope"></i> travelhigh99@gmail.com</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Family;

import React from "react";
import "./Family.css";

const familyDestinations = [
  {
    name: "Goa",
    country: "India",
    image: "/Images/Family/Goa.jpg",
    description:
      "Enjoy beautiful beaches, exciting water activities and memorable family time.",
  },
  {
    name: "Kashmir",
    country: "India",
    image: "/Images/Family/Kashmir.jpg",
    description:
      "Explore beautiful valleys, snow-covered mountains and peaceful surroundings.",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "/Images/Family/Dubai.jpg",
    description:
      "Enjoy luxury shopping, desert safari and exciting family attractions.",
  },
  {
    name: "Thailand",
    country: "Asia",
    image: "/Images/Family/Thailand.jpg",
    description:
      "Discover beautiful islands, cultural attractions and fun activities.",
  },
  {
    name: "Singapore",
    country: "Asia",
    image: "/Images/Family/Singapore.jpg",
    description:
      "Experience amazing attractions, beautiful gardens and family entertainment.",
  },
  {
    name: "Switzerland",
    country: "Europe",
    image: "/Images/Family/Switzerland.jpg",
    description:
      "Create unforgettable memories among mountains, lakes and scenic landscapes.",
  },
];

const familyPackages = [
  {
    name: "Goa Family Getaway",
    duration: "4 Days / 3 Nights",
    location: "Goa, India",
    price: "₹14,999",
    image: "/Images/Family/Goa Family.jpg",
  },
  {
    name: "Kashmir Family Tour",
    duration: "5 Days / 4 Nights",
    location: "Kashmir, India",
    price: "₹24,999",
    image: "/Images/Family/Kashmir Family.jpg",
  },
  {
    name: "Dubai Family Vacation",
    duration: "5 Days / 4 Nights",
    location: "Dubai, UAE",
    price: "₹49,999",
    image: "/Images/Family/Dubai Family.jpg",
  },
];

function Family() {
  return (
    <div className="family-page">
      {/* HERO SECTION */}
      <section className="family-hero">
        <div className="family-hero-overlay">
          <div className="family-hero-content">
            <span className="family-tag">
              TRAVEL TOGETHER, CREATE MEMORIES FOREVER
            </span>

            <h1>
              Family Holidays <br />
              <span>Made for Beautiful Memories</span>
            </h1>

            <p>
              Discover exciting destinations, enjoy wonderful experiences and
              make every family vacation special with Travel99.
            </p>

            <div className="family-hero-buttons">
              <a href="#family-packages" className="family-btn">
                Explore Packages <i className="fa fa-arrow-right"></i>
              </a>

              <a href="#family-contact" className="family-btn-outline">
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="family-intro section-padding">
        <div className="family-intro-image">
          <img src="/Images/Family/Family.jpg" alt="Family enjoying holiday" />

          <div className="family-image-badge">
            <strong>Travel99</strong>
            <span>Travel Together, Smile Together</span>
          </div>
        </div>

        <div className="family-intro-content">
          <span className="family-subtitle">WELCOME TO TRAVEL99</span>

          <h2 className="family-heading">
            Make Every Family Trip
            <span> Truly Special</span>
          </h2>

          <p>
            Family holidays are all about spending quality time together,
            exploring new places and creating memories that last a lifetime. At
            Travel99, we help you plan comfortable, enjoyable and memorable
            family vacations.
          </p>

          <p>
            Whether you want a relaxing beach holiday, a mountain adventure or
            an international vacation, we offer travel experiences suitable for
            every family.
          </p>

          <div className="family-intro-points">
            <div>
              <i className="fa fa-check-circle"></i>
              Comfortable Family Stays
            </div>

            <div>
              <i className="fa fa-check-circle"></i>
              Exciting Family Activities
            </div>

            <div>
              <i className="fa fa-check-circle"></i>
              Customized Holiday Packages
            </div>

            <div>
              <i className="fa fa-check-circle"></i>
              Dedicated Travel Assistance
            </div>
          </div>

          <a href="#family-contact" className="family-btn">
            Discover More <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="family-destinations section-padding">
        <div className="family-section-title">
          <span className="family-subtitle">EXPLORE THE WORLD</span>
          <h2 className="family-heading">
            Popular Family <span>Destinations</span>
          </h2>
          <p>
            Explore beautiful destinations perfect for your next family
            vacation.
          </p>
        </div>

        <div className="family-destination-grid">
          {familyDestinations.map((place, index) => (
            <div className="family-destination-card" key={index}>
              <div className="family-destination-image">
                <img src={place.image} alt={place.name} />

                <span className="family-location-label">{place.country}</span>
              </div>

              <div className="family-destination-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>

                <a href="#family-contact">
                  Explore Destination <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAMILY EXPERIENCES */}
      <section className="family-experiences section-padding">
        <div className="family-section-title">
          <span className="family-subtitle">ENJOY EVERY MOMENT</span>
          <h2 className="family-heading">
            Wonderful Experiences <span>For Everyone</span>
          </h2>
          <p>
            From relaxing holidays to exciting adventures, there is something
            for every member of your family.
          </p>
        </div>

        <div className="family-experience-grid">
          <div className="family-experience-card">
            <div className="family-experience-icon">
              <i className="fa fa-umbrella-beach"></i>
            </div>
            <h3>Beach Holidays</h3>
            <p>
              Relax on beautiful beaches and enjoy fun water activities with
              your family.
            </p>
          </div>

          <div className="family-experience-card">
            <div className="family-experience-icon">
              <i className="fa fa-mountain"></i>
            </div>
            <h3>Mountain Adventures</h3>
            <p>
              Explore scenic mountains, beautiful valleys and peaceful natural
              surroundings.
            </p>
          </div>

          <div className="family-experience-card">
            <div className="family-experience-icon">
              <i className="fa fa-landmark"></i>
            </div>
            <h3>Cultural Experiences</h3>
            <p>
              Discover local traditions, historical places and different
              cultures together.
            </p>
          </div>

          <div className="family-experience-card">
            <div className="family-experience-icon">
              <i className="fa fa-child"></i>
            </div>
            <h3>Kids Activities</h3>
            <p>
              Make holidays more exciting with enjoyable activities for children
              and families.
            </p>
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="family-banner">
        <div className="family-banner-overlay">
          <div className="family-banner-content">
            <span>YOUR FAMILY, YOUR ADVENTURE</span>

            <h2>
              The Best Memories Are Made
              <br />
              When We Travel Together
            </h2>

            <p>
              Let Travel99 make your next family vacation comfortable, exciting
              and unforgettable.
            </p>

            <a href="#family-contact" className="family-btn">
              Start Planning <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="family-packages section-padding" id="family-packages">
        <div className="family-section-title">
          <span className="family-subtitle">SPECIAL HOLIDAY DEALS</span>
          <h2 className="family-heading">
            Best Family <span>Holiday Packages</span>
          </h2>
          <p>
            Choose your favourite destination and enjoy a wonderful family
            vacation.
          </p>
        </div>

        <div className="family-package-grid">
          {familyPackages.map((pkg, index) => (
            <div className="family-package-card" key={index}>
              <div className="family-package-image">
                <img src={pkg.image} alt={pkg.name} />
                <span>Family Special</span>
              </div>

              <div className="family-package-info">
                <div className="family-package-location">
                  <i className="fa fa-map-marker-alt"></i>
                  {pkg.location}
                </div>

                <h3>{pkg.name}</h3>

                <div className="family-package-duration">
                  <i className="fa fa-clock"></i>
                  {pkg.duration}
                </div>

                <div className="family-package-bottom">
                  <div>
                    <small>Starting From</small>
                    <h4>{pkg.price}</h4>
                  </div>

                  <a href="#family-contact">
                    Enquire Now <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="family-why section-padding">
        <div className="family-section-title">
          <span className="family-subtitle">WHY TRAVEL WITH US</span>
          <h2 className="family-heading">
            Why Choose <span>Travel99?</span>
          </h2>
          <p>
            We make family travel planning simple, convenient and enjoyable.
          </p>
        </div>

        <div className="family-why-grid">
          <div className="family-why-card">
            <i className="fa fa-wallet"></i>
            <h3>Affordable Packages</h3>
            <p>Holiday options designed for different family budgets.</p>
          </div>

          <div className="family-why-card">
            <i className="fa fa-hotel"></i>
            <h3>Comfortable Stays</h3>
            <p>Enjoy convenient accommodation during your family trip.</p>
          </div>

          <div className="family-why-card">
            <i className="fa fa-headset"></i>
            <h3>Travel Assistance</h3>
            <p>Get support and assistance throughout your journey.</p>
          </div>

          <div className="family-why-card">
            <i className="fa fa-route"></i>
            <h3>Customised Trips</h3>
            <p>Plan your vacation according to your family's preferences.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="family-contact" id="family-contact">
        <div className="family-contact-overlay">
          <div className="family-contact-content">
            <span>LET'S PLAN YOUR NEXT HOLIDAY</span>

            <h2>
              Ready for Your Next
              <br />
              Family Adventure?
            </h2>

            <p>
              Tell us about your travel plans. Our team will help you create a
              memorable family holiday.
            </p>

            <div className="family-contact-buttons">
              <a href="tel:+919871735122" className="family-btn">
                <i className="fa fa-phone"></i> Call Us
              </a>

              <a
                href="mailto:travelhigh99@gmail.com"
                className="family-contact-outline"
              >
                <i className="fa fa-envelope"></i> Email Us
              </a>
            </div>

            <div className="family-contact-details">
              <span>
                <i className="fa fa-phone"></i> +91 9871735122
              </span>

              <span>
                <i className="fa fa-envelope"></i> travelhigh99@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Family;
