import React, { useState } from "react";
import "./Rajasthan.css";

const destinations = [
  {
    name: "Jaipur",
    location: "The Pink City",
    image: "/Images/Rajasthan/Jaipur.jpg",
    //image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900",
    description: "Explore royal palaces, forts and colourful markets.",
  },
  {
    name: "Udaipur",
    location: "The City of Lakes",
    image: "/Images/Rajasthan/Udaipur.jpg",
    //image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=900",
    description: "Enjoy beautiful lakes, romantic views and royal heritage.",
  },
  {
    name: "Jaisalmer",
    location: "The Golden City",
    image: "/Images/Rajasthan/Jaisalmer.jpg",
    //image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900",
    description: "Experience golden sand dunes and desert adventures.",
  },
  {
    name: "Jodhpur",
    location: "The Blue City",
    image: "/Images/Rajasthan/Jodhpur.jpg",
    //image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
    description:
      "Discover magnificent forts and traditional Rajasthani culture.",
  },
];

const packages = [
  {
    name: "Jaipur Heritage Tour",
    duration: "3 Days / 2 Nights",
    price: "₹7,999",
    image: "/Images/Rajasthan/Jaipur.jpg",
    // image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900",
  },
  {
    name: "Udaipur Romantic Escape",
    duration: "4 UdaipurDays / 3 Nights",
    price: "₹11,999",
    image: "/Images/Rajasthan/Udaipur.jpg",
    //image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=900",
  },
  {
    name: "Rajasthan Royal Tour",
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    image: "/Images/Rajasthan/Rajasthan.jpg",
    //image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900",
  },
];

function Rajasthan() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travellers: "2",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Travel High 99,

I want to enquire about Rajasthan Tour.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Travel Date: ${form.travelDate}
Travellers: ${form.travellers}
Package: ${form.package}
Message: ${form.message}
`;

    window.open(
      `https://wa.me/919871735122?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main className="rajasthan-page">
      {/* HERO SECTION */}
      <section className="raj-hero">
        <div className="raj-hero-overlay"></div>

        <div className="raj-hero-content">
          <span className="raj-small-title">
            EXPLORE INDIA WITH TRAVEL HIGH 99
          </span>

          <h1>
            Discover The Royal
            <span> Beauty Of Rajasthan</span>
          </h1>

          <p>
            Explore magnificent forts, royal palaces, golden deserts and
            unforgettable cultural experiences.
          </p>

          <a href="#raj-packages" className="raj-primary-btn">
            Explore Tour Packages →
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="raj-section raj-intro">
        <div className="raj-intro-image">
          <img
            src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1000"
            alt="Rajasthan royal palace"
          />
        </div>

        <div className="raj-intro-content">
          <span className="raj-label">WELCOME TO RAJASTHAN</span>
          <h2>
            Experience The
            <span> Land Of Kings</span>
          </h2>

          <p>
            Rajasthan is a beautiful destination known for its royal heritage,
            magnificent forts, colourful culture and desert landscapes. Every
            city has its own charm and unforgettable stories.
          </p>

          <p>
            From the beautiful lakes of Udaipur to the golden dunes of
            Jaisalmer, discover Rajasthan with comfortable travel arrangements
            from Travel High 99.
          </p>

          <a href="#raj-enquiry" className="raj-outline-btn">
            Plan Your Rajasthan Trip →
          </a>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="raj-section raj-destinations">
        <div className="raj-heading">
          <span className="raj-label">EXPLORE RAJASTHAN</span>
          <h2>Popular Destinations</h2>
          <p>
            Discover the most beautiful cities and attractions of Rajasthan.
          </p>
        </div>

        <div className="raj-destination-grid">
          {destinations.map((item, index) => (
            <article className="raj-destination-card" key={index}>
              <div className="raj-card-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="raj-card-content">
                <span>{item.location}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href="#raj-enquiry">Explore Destination →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="raj-experiences">
        <div className="raj-section">
          <div className="raj-heading">
            <span className="raj-label">MAKE YOUR TRIP SPECIAL</span>
            <h2>Unforgettable Rajasthan Experiences</h2>
            <p>Enjoy the culture, traditions and beauty of royal Rajasthan.</p>
          </div>

          <div className="raj-experience-grid">
            <div className="raj-experience-card">
              <div className="raj-experience-icon">🏰</div>
              <h3>Royal Forts & Palaces</h3>
              <p>Explore the magnificent architecture and royal history.</p>
            </div>

            <div className="raj-experience-card">
              <div className="raj-experience-icon">🐪</div>
              <h3>Desert Safari</h3>
              <p>Enjoy camel rides and beautiful sunset views in the desert.</p>
            </div>

            <div className="raj-experience-card">
              <div className="raj-experience-icon">🚤</div>
              <h3>Lake Experiences</h3>
              <p>Enjoy peaceful boat rides and beautiful lake views.</p>
            </div>

            <div className="raj-experience-card">
              <div className="raj-experience-icon">🎭</div>
              <h3>Culture & Traditions</h3>
              <p>Discover traditional music, dance, food and local markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="raj-section raj-packages" id="raj-packages">
        <div className="raj-heading">
          <span className="raj-label">TRAVEL WITH COMFORT</span>
          <h2>Popular Rajasthan Tour Packages</h2>
          <p>Choose your favourite holiday package and start exploring.</p>
        </div>

        <div className="raj-package-grid">
          {packages.map((item, index) => (
            <article className="raj-package-card" key={index}>
              <div className="raj-package-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="raj-package-content">
                <span className="raj-duration">✈ {item.duration}</span>
                <h3>{item.name}</h3>

                <div className="raj-package-bottom">
                  <div>
                    <small>Starting from</small>
                    <strong>{item.price}</strong>
                  </div>

                  <a
                    href="#raj-enquiry"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        package: item.name,
                      }))
                    }
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="raj-why">
        <div className="raj-section">
          <div className="raj-heading">
            <span className="raj-label">YOUR TRAVEL PARTNER</span>
            <h2>Why Choose Travel High 99?</h2>
            <p>
              We help make your Rajasthan holiday comfortable and memorable.
            </p>
          </div>

          <div className="raj-why-grid">
            <div>
              <span>✈️</span>
              <h3>Easy Travel Planning</h3>
              <p>Simple and convenient trip planning.</p>
            </div>

            <div>
              <span>🏨</span>
              <h3>Hotel Assistance</h3>
              <p>Hotel options according to your travel needs.</p>
            </div>

            <div>
              <span>💰</span>
              <h3>Budget Friendly</h3>
              <p>Travel options for different budgets.</p>
            </div>

            <div>
              <span>☎️</span>
              <h3>Travel Support</h3>
              <p>Assistance for your travel enquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="raj-section raj-enquiry" id="raj-enquiry">
        <div className="raj-enquiry-info">
          <span className="raj-label">LET'S PLAN YOUR HOLIDAY</span>
          <h2>Plan Your Rajasthan Trip With Us</h2>

          <p>
            Tell us about your travel plans. Our team will help you explore
            suitable Rajasthan tour options.
          </p>

          <div className="raj-contact-detail">
            <span>📞</span>
            <div>
              <strong>Call Us</strong>
              <p>+91 9871735122</p>
            </div>
          </div>

          <div className="raj-contact-detail">
            <span>✉️</span>
            <div>
              <strong>Email Us</strong>
              <p>travelhigh99@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="raj-form" onSubmit={handleSubmit}>
          <h3>Send Your Enquiry</h3>

          <div className="raj-form-grid">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              required
            />

            <select
              name="travellers"
              value={form.travellers}
              onChange={handleChange}
            >
              <option value="1">1 Traveller</option>
              <option value="2">2 Travellers</option>
              <option value="3">3 Travellers</option>
              <option value="4">4 Travellers</option>
              <option value="5">5 Travellers</option>
              <option value="6+">6+ Travellers</option>
            </select>

            <select
              name="package"
              value={form.package}
              onChange={handleChange}
              required
            >
              <option value="">Select Package</option>
              {packages.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
              <option value="Customized Rajasthan Tour">
                Customized Rajasthan Tour
              </option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your travel requirements..."
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="raj-submit-btn">
            Submit Enquiry on WhatsApp →
          </button>
        </form>
      </section>

      {/* BOTTOM CTA */}
      <section className="raj-bottom-cta">
        <h2>Ready To Explore Royal Rajasthan?</h2>
        <p>Let Travel High 99 help you plan your next memorable holiday.</p>
        <a href="#raj-enquiry">Plan Your Trip Now →</a>
      </section>
    </main>
  );
}

export default Rajasthan;

// import React, { useState } from "react";
// import "./Rajasthan.css";

// const destinations = [
//   {
//     name: "Jaipur",
//     subtitle: "The Pink City",
//     image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900",
//     description:
//       "Explore royal palaces, colourful bazaars, historic forts and the beautiful heritage of Rajasthan.",
//   },
//   {
//     name: "Udaipur",
//     subtitle: "The City of Lakes",
//     image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=900",
//     description:
//       "Enjoy beautiful lakes, romantic palaces, boat rides and peaceful views of the Aravalli hills.",
//   },
//   {
//     name: "Jaisalmer",
//     subtitle: "The Golden City",
//     image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=900",
//     description:
//       "Discover golden sand dunes, desert camps, camel safaris and the magnificent Jaisalmer Fort.",
//   },
//   {
//     name: "Jodhpur",
//     subtitle: "The Blue City",
//     image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
//     description:
//       "Experience majestic forts, blue-painted streets, traditional markets and royal architecture.",
//   },
// ];

// const experiences = [
//   {
//     icon: "🏰",
//     title: "Royal Forts & Palaces",
//     text: "Explore magnificent forts, royal residences and historic architecture.",
//   },
//   {
//     icon: "🐪",
//     title: "Desert Safari",
//     text: "Enjoy camel rides and exciting desert adventures in Jaisalmer.",
//   },
//   {
//     icon: "🚤",
//     title: "Lake Boat Ride",
//     text: "Experience beautiful boat rides and sunset views in Udaipur.",
//   },
//   {
//     icon: "🎭",
//     title: "Culture & Traditions",
//     text: "Discover folk music, traditional dance, local crafts and Rajasthani food.",
//   },
// ];

// const packages = [
//   {
//     name: "Rajasthan Heritage Escape",
//     duration: "3 Nights / 4 Days",
//     image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=900",
//     features: [
//       "Jaipur Sightseeing",
//       "Hotel Accommodation",
//       "Breakfast",
//       "Local Transfers",
//     ],
//   },
//   {
//     name: "Royal Rajasthan Holiday",
//     duration: "5 Nights / 6 Days",
//     image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=900",
//     features: [
//       "Jaipur & Udaipur",
//       "Comfortable Hotel Stay",
//       "Sightseeing Tours",
//       "Private Transfers",
//     ],
//   },
//   {
//     name: "Rajasthan Desert Adventure",
//     duration: "6 Nights / 7 Days",
//     image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=900",
//     features: [
//       "Jaisalmer Desert Safari",
//       "Desert Camp Experience",
//       "City Sightseeing",
//       "Travel Assistance",
//     ],
//   },
// ];

// function Rajasthan() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     travelDate: "",
//     travellers: "2",
//     package: "Rajasthan Heritage Escape",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const message = `
// Hello Travel High 99,

// I want to enquire about a Rajasthan trip.

// Name: ${formData.name}
// Phone: ${formData.phone}
// Email: ${formData.email || "Not provided"}
// Travel Date: ${formData.travelDate || "Not decided"}
// Travellers: ${formData.travellers}
// Package: ${formData.package}
// Message: ${formData.message || "No additional message"}

// Please contact me with the details.
//     `;

//     const whatsappURL = `https://wa.me/919871735122?text=${encodeURIComponent(message)}`;

//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <main className="rajasthan-page">
//       {/* HERO SECTION */}
//       <section className="rajasthan-hero">
//         <div className="rajasthan-hero-overlay"></div>

//         <div className="rajasthan-container rajasthan-hero-content">
//           <span className="rajasthan-hero-tag">TRAVEL HIGH 99 PRESENTS</span>

//           <h1>
//             Experience The Royal
//             <span> Rajasthan</span>
//           </h1>

//           <p>
//             Discover royal palaces, magnificent forts, golden deserts and
//             colourful traditions. Experience the royal charm of Rajasthan with
//             Travel High 99.
//           </p>

//           <div className="rajasthan-hero-buttons">
//             <a
//               href="#rajasthan-packages"
//               className="rajasthan-btn rajasthan-btn-orange"
//             >
//               Explore Packages →
//             </a>

//             <a
//               href="#rajasthan-enquiry"
//               className="rajasthan-btn rajasthan-btn-outline"
//             >
//               Plan Your Trip
//             </a>
//           </div>

//           <div className="rajasthan-hero-bottom">
//             <span>✦ Royal Heritage</span>
//             <span>✦ Desert Adventures</span>
//             <span>✦ Cultural Experiences</span>
//           </div>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <section className="rajasthan-intro rajasthan-section">
//         <div className="rajasthan-container rajasthan-intro-grid">
//           <div className="rajasthan-intro-image">
//             <img
//               src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=1000"
//               alt="Rajasthan royal palace architecture"
//             />

//             <div className="rajasthan-image-caption">
//               <strong>Rajasthan</strong>
//               <span>The Land of Kings</span>
//             </div>
//           </div>

//           <div className="rajasthan-intro-content">
//             <span className="rajasthan-section-tag">WELCOME TO RAJASTHAN</span>

//             <h2>
//               Discover The Land Of
//               <span> Kings & Royalty</span>
//             </h2>

//             <p>
//               Rajasthan is a land of magnificent forts, grand palaces, colourful
//               markets and unforgettable cultural experiences. Every city has its
//               own charm, history and royal story.
//             </p>

//             <p>
//               From the beautiful lakes of Udaipur to the golden sand dunes of
//               Jaisalmer, explore the incredible beauty of Rajasthan with Travel
//               High 99.
//             </p>

//             <div className="rajasthan-intro-points">
//               <div>✓ Royal Palace Experiences</div>
//               <div>✓ Historic Fort Sightseeing</div>
//               <div>✓ Desert Safari Adventures</div>
//               <div>✓ Family & Couple Holidays</div>
//             </div>

//             <a href="#rajasthan-enquiry" className="rajasthan-text-link">
//               Plan Your Rajasthan Holiday →
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* DESTINATIONS */}
//       <section className="rajasthan-destinations rajasthan-section">
//         <div className="rajasthan-container">
//           <div className="rajasthan-section-heading">
//             <span className="rajasthan-section-tag">EXPLORE RAJASTHAN</span>

//             <h2>Popular Places To Visit</h2>

//             <p>
//               Discover the most beautiful cities of Rajasthan and experience
//               their unique royal charm.
//             </p>
//           </div>

//           <div className="rajasthan-destination-grid">
//             {destinations.map((place, index) => (
//               <article className="rajasthan-destination-card" key={place.name}>
//                 <div className="rajasthan-destination-image">
//                   <img src={place.image} alt={place.name} />

//                   <span className="rajasthan-destination-number">
//                     0{index + 1}
//                   </span>
//                 </div>

//                 <div className="rajasthan-destination-info">
//                   <span>{place.subtitle}</span>
//                   <h3>{place.name}</h3>
//                   <p>{place.description}</p>

//                   <a href="#rajasthan-enquiry">Explore Destination →</a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCES */}
//       <section className="rajasthan-experiences rajasthan-section">
//         <div className="rajasthan-container">
//           <div className="rajasthan-section-heading">
//             <span className="rajasthan-section-tag">
//               EXPERIENCE SOMETHING SPECIAL
//             </span>

//             <h2>Unforgettable Rajasthan Experiences</h2>

//             <p>
//               Make your holiday special with royal attractions, exciting
//               activities and local experiences.
//             </p>
//           </div>

//           <div className="rajasthan-experience-grid">
//             {experiences.map((item) => (
//               <div className="rajasthan-experience-card" key={item.title}>
//                 <div className="rajasthan-experience-icon">{item.icon}</div>

//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PACKAGES */}
//       <section
//         className="rajasthan-packages rajasthan-section"
//         id="rajasthan-packages"
//       >
//         <div className="rajasthan-container">
//           <div className="rajasthan-section-heading">
//             <span className="rajasthan-section-tag">CHOOSE YOUR HOLIDAY</span>

//             <h2>Rajasthan Holiday Packages</h2>

//             <p>
//               Choose your preferred Rajasthan holiday and contact our team for a
//               customised travel quotation.
//             </p>
//           </div>

//           <div className="rajasthan-package-grid">
//             {packages.map((item) => (
//               <article className="rajasthan-package-card" key={item.name}>
//                 <div className="rajasthan-package-image">
//                   <img src={item.image} alt={item.name} />
//                   <span>{item.duration}</span>
//                 </div>

//                 <div className="rajasthan-package-content">
//                   <h3>{item.name}</h3>

//                   <strong className="rajasthan-package-price">
//                     Get Best Price
//                   </strong>

//                   <ul>
//                     {item.features.map((feature) => (
//                       <li key={feature}>✓ {feature}</li>
//                     ))}
//                   </ul>

//                   <a
//                     href="#rajasthan-enquiry"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         package: item.name,
//                       }))
//                     }
//                   >
//                     Enquire Now →
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="rajasthan-why">
//         <div className="rajasthan-container rajasthan-why-grid">
//           <div className="rajasthan-why-content">
//             <span className="rajasthan-section-tag">
//               TRAVEL WITH CONFIDENCE
//             </span>

//             <h2>Why Choose Travel High 99?</h2>

//             <p>
//               We help you plan a comfortable and memorable Rajasthan holiday
//               with personalised packages and travel assistance.
//             </p>
//           </div>

//           <div className="rajasthan-why-items">
//             <div>
//               <span>01</span>
//               <section>
//                 <h3>Customised Packages</h3>
//                 <p>Travel plans designed around your preferences.</p>
//               </section>
//             </div>

//             <div>
//               <span>02</span>
//               <section>
//                 <h3>Comfortable Stays</h3>
//                 <p>Hotel options for different budgets and travel styles.</p>
//               </section>
//             </div>

//             <div>
//               <span>03</span>
//               <section>
//                 <h3>Sightseeing Assistance</h3>
//                 <p>Explore popular attractions with planned itineraries.</p>
//               </section>
//             </div>

//             <div>
//               <span>04</span>
//               <section>
//                 <h3>Travel Support</h3>
//                 <p>Our team helps you throughout your trip planning.</p>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ENQUIRY SECTION */}
//       <section
//         className="rajasthan-enquiry rajasthan-section"
//         id="rajasthan-enquiry"
//       >
//         <div className="rajasthan-container rajasthan-enquiry-grid">
//           <div className="rajasthan-enquiry-content">
//             <span className="rajasthan-section-tag">
//               LET'S PLAN YOUR JOURNEY
//             </span>

//             <h2>
//               Your Royal Rajasthan
//               <span> Holiday Starts Here!</span>
//             </h2>

//             <p>
//               Share your travel requirements with us. Our team will help you
//               plan the perfect Rajasthan holiday.
//             </p>

//             <h3>Get In Touch With Us</h3>

//             <p className="rajasthan-contact-label">Call Us / WhatsApp</p>

//             <div className="rajasthan-contact-box">
//               <span>☎</span>
//               <div>
//                 <a href="tel:+919871735122">+91 9871735122</a>
//                 <a href="tel:+919667859420">+91 9667859420</a>
//               </div>
//             </div>

//             <p className="rajasthan-contact-label">Email Us</p>

//             <div className="rajasthan-contact-box">
//               <span>✉</span>
//               <div>
//                 <a href="mailto:travelhigh99@gmail.com">
//                   travelhigh99@gmail.com
//                 </a>
//                 <a href="mailto:info@travelhigh99.com">info@travelhigh99.com</a>
//               </div>
//             </div>
//           </div>

//           {/* FORM */}
//           <form className="rajasthan-enquiry-form" onSubmit={handleSubmit}>
//             <div className="rajasthan-form-heading">
//               <span>TRAVEL ENQUIRY</span>
//               <h3>Plan Your Rajasthan Trip</h3>
//               <p>Fill in your details and our team will contact you.</p>
//             </div>

//             <div className="rajasthan-form-grid">
//               <div className="rajasthan-form-group">
//                 <label>Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="rajasthan-form-group">
//                 <label>Phone Number *</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   pattern="[0-9+\-\s]{10,15}"
//                   required
//                 />
//               </div>

//               <div className="rajasthan-form-group">
//                 <label>Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="rajasthan-form-group">
//                 <label>Travel Date</label>
//                 <input
//                   type="date"
//                   name="travelDate"
//                   min={new Date().toISOString().split("T")[0]}
//                   value={formData.travelDate}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="rajasthan-form-group">
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

//               <div className="rajasthan-form-group">
//                 <label>Select Package</label>
//                 <select
//                   name="package"
//                   value={formData.package}
//                   onChange={handleChange}
//                 >
//                   <option value="Rajasthan Heritage Escape">
//                     Rajasthan Heritage Escape
//                   </option>
//                   <option value="Royal Rajasthan Holiday">
//                     Royal Rajasthan Holiday
//                   </option>
//                   <option value="Rajasthan Desert Adventure">
//                     Rajasthan Desert Adventure
//                   </option>
//                   <option value="Custom Rajasthan Package">
//                     Custom Rajasthan Package
//                   </option>
//                 </select>
//               </div>

//               <div className="rajasthan-form-group rajasthan-form-full">
//                 <label>Your Message</label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Tell us about your travel requirements..."
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//             </div>

//             <button type="submit" className="rajasthan-submit-btn">
//               Send Enquiry on WhatsApp →
//             </button>

//             <small className="rajasthan-form-note">
//               Your enquiry will open in WhatsApp for sending.
//             </small>
//           </form>
//         </div>
//       </section>

//       {/* FINAL CALL TO ACTION */}
//       <section className="rajasthan-final-cta">
//         <div className="rajasthan-container">
//           <span>YOUR ROYAL JOURNEY AWAITS</span>

//           <h2>Explore Rajasthan. Experience Royalty.</h2>

//           <p>Create beautiful travel memories with Travel High 99.</p>

//           <a href="#rajasthan-enquiry">Plan Your Rajasthan Holiday →</a>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Rajasthan;
