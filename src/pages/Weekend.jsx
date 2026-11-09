import React from "react";
import "./Weekend.css";

const destinations = [
  {
    name: "Manali",
    place: "Himachal Pradesh, India",
    duration: "2 Nights / 3 Days",
    price: "₹6,999",
    type: "Mountain Escape",
    image: "/Images/Weekend/Manali.jpg",
    desc: "Enjoy beautiful mountains, snow-covered valleys, cafes and peaceful nature.",
  },
  {
    name: "Jaipur",
    place: "Rajasthan, India",
    duration: "1 Night / 2 Days",
    price: "₹4,499",
    type: "Heritage Tour",
    image: "/Images/Weekend/Jaipur.jpg",
    desc: "Explore royal palaces, colourful markets, forts and traditional Rajasthani culture.",
  },
  {
    name: "Agra",
    place: "Uttar Pradesh, India",
    duration: "1 Night / 2 Days",
    price: "₹3,999",
    type: "Historical Trip",
    image: "/Images/Weekend/Agra.jpg",
    desc: "Visit the beautiful Taj Mahal, Agra Fort and famous historical attractions.",
  },
  {
    name: "Rishikesh",
    place: "Uttarakhand, India",
    duration: "2 Nights / 3 Days",
    price: "₹5,499",
    type: "Adventure Escape",
    image: "/Images/Weekend/Rishikesh.jpg",
    desc: "Experience river rafting, riverside camping, yoga and beautiful Ganga views.",
  },
  {
    name: "Mussoorie",
    place: "Uttarakhand, India",
    duration: "2 Nights / 3 Days",
    price: "₹6,499",
    type: "Hill Station",
    image: "/Images/Weekend/Mussoorie.jpg",
    desc: "Discover scenic viewpoints, waterfalls, mountain roads and beautiful landscapes.",
  },
  {
    name: "Nainital",
    place: "Uttarakhand, India",
    duration: "2 Nights / 3 Days",
    price: "₹5,999",
    type: "Lake Destination",
    image: "/Images/Weekend/Nainital.jpg",
    desc: "Enjoy peaceful lakes, boating, mountain views and relaxing nature experiences.",
  },
];

const experiences = [
  {
    icon: "🏔️",
    title: "Hill Station Trips",
    desc: "Escape city life and enjoy fresh mountain air and beautiful views.",
  },
  {
    icon: "🏰",
    title: "Heritage Tours",
    desc: "Explore historical forts, royal palaces and cultural destinations.",
  },
  {
    icon: "🚣",
    title: "Adventure Trips",
    desc: "Enjoy rafting, trekking, camping and exciting outdoor activities.",
  },
  {
    icon: "🌿",
    title: "Nature Getaways",
    desc: "Relax in peaceful surroundings surrounded by greenery and nature.",
  },
];

function Weekend() {
  return (
    <main className="weekend-page">
      {/* HERO SECTION */}
      <section className="wk-hero">
        <div className="wk-hero-overlay">
          <div className="wk-container wk-hero-content">
            <span className="wk-kicker">TRAVEL99 · YOUR WEEKEND ESCAPE</span>

            <h1>
              Make Your Weekend
              <br />
              <em>Worth Remembering.</em>
            </h1>

            <p>
              Take a break from your busy routine and discover beautiful
              destinations, exciting experiences and unforgettable journeys.
            </p>

            <div className="wk-hero-buttons">
              <a href="#wk-destinations" className="wk-btn wk-orange">
                Explore Getaways <b>→</b>
              </a>

              <a href="#wk-contact" className="wk-btn wk-outline">
                Plan Your Weekend
              </a>
            </div>

            <div className="wk-hero-features">
              <span>✦ Short Weekend Trips</span>
              <span>✦ Beautiful Destinations</span>
              <span>✦ Budget Friendly Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="wk-section">
        <div className="wk-container wk-about-grid">
          <div className="wk-about-image">
            <img
              src="/Images/Weekend/Weekend.jpg"
              alt="Beautiful weekend holiday destination"
            />

            <div className="wk-image-caption">
              <strong>Escape. Explore. Enjoy.</strong>
              <span>Every weekend has a story.</span>
            </div>
          </div>

          <div className="wk-about-content">
            <span className="wk-kicker">DISCOVER WEEKEND GETAWAYS</span>

            <h2>
              Your perfect escape is just a <em>weekend away.</em>
            </h2>

            <p>
              Sometimes all you need is a short break from your everyday
              routine. Travel99 brings you exciting weekend getaway options
              where you can relax, explore new places and spend quality time
              with your loved ones.
            </p>

            <p>
              From peaceful hill stations and beautiful lakes to historical
              cities and adventure destinations, discover trips that fit your
              schedule and travel budget.
            </p>

            <a href="#wk-destinations" className="wk-read-more">
              Explore destinations <b>→</b>
            </a>

            <div className="wk-about-points">
              <div>
                <strong>01</strong>
                <span>Short & Easy Trips</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Multiple Destinations</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Personalised Plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="wk-section wk-light" id="wk-destinations">
        <div className="wk-container">
          <div className="wk-heading wk-heading-row">
            <div>
              <span className="wk-kicker">EXPLORE NEARBY PARADISE</span>

              <h2>
                Popular Weekend <em>Destinations</em>
              </h2>

              <p>
                Find your favourite destination for a refreshing short break.
              </p>
            </div>

            <a href="#wk-contact" className="wk-small-btn">
              Plan Your Trip →
            </a>
          </div>

          <div className="wk-destination-grid">
            {destinations.map((item) => (
              <article className="wk-card" key={item.name}>
                <div className="wk-card-image">
                  <img
                    src={item.image}
                    alt={`${item.name} weekend getaway`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/Images/Weekend/WeekendAbout.jpg";
                    }}
                  />

                  <span className="wk-card-tag">{item.type}</span>
                </div>

                <div className="wk-card-content">
                  <small className="wk-location">⌖ {item.place}</small>

                  <h3>{item.name}</h3>

                  <p>{item.desc}</p>

                  <div className="wk-card-info">
                    <span>◷ {item.duration}</span>
                    <strong>From {item.price}</strong>
                  </div>

                  <a
                    href={`mailto:travelhigh99@gmail.com?subject=${encodeURIComponent(
                      item.name + " Weekend Getaway Enquiry",
                    )}&body=${encodeURIComponent(
                      "Hello Travel99, I am interested in the " +
                        item.name +
                        " weekend package.",
                    )}`}
                  >
                    Enquire Now <b>→</b>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="wk-section">
        <div className="wk-container">
          <div className="wk-heading wk-center">
            <span className="wk-kicker">MAKE YOUR BREAK SPECIAL</span>

            <h2>
              Choose Your Weekend <em>Experience</em>
            </h2>

            <p>
              Whether you love adventure, history or peaceful surroundings,
              there is a perfect getaway waiting for you.
            </p>
          </div>

          <div className="wk-experience-grid">
            {experiences.map((item) => (
              <article className="wk-experience-card" key={item.title}>
                <div className="wk-experience-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <a href="#wk-destinations">Explore Trips →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKEND BANNER */}
      <section className="wk-banner">
        <div className="wk-banner-overlay">
          <div className="wk-container wk-banner-content">
            <span className="wk-kicker">YOUR WEEKEND, YOUR ADVENTURE</span>

            <h2>
              Don't Wait for a Holiday.
              <br />
              Make This Weekend Special.
            </h2>

            <p>
              Pack your bags, choose your destination and get ready for a
              refreshing escape with Travel99.
            </p>

            <a href="#wk-contact" className="wk-btn wk-orange">
              Book Your Getaway <b>→</b>
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TRAVEL99 */}
      <section className="wk-section wk-light">
        <div className="wk-container">
          <div className="wk-heading wk-center">
            <span className="wk-kicker">WHY TRAVEL WITH US</span>

            <h2>
              Your Journey, <em>Our Priority</em>
            </h2>

            <p>
              Enjoy a smoother and more enjoyable weekend travel experience.
            </p>
          </div>

          <div className="wk-why-grid">
            <article>
              <span>✦</span>
              <h3>Customised Packages</h3>
              <p>
                Choose trips based on your interests, travel dates and budget.
              </p>
            </article>

            <article>
              <span>₹</span>
              <h3>Budget Friendly Trips</h3>
              <p>Explore different travel options to match your budget.</p>
            </article>

            <article>
              <span>◎</span>
              <h3>Easy Trip Planning</h3>
              <p>
                Get help with destination selection and travel arrangements.
              </p>
            </article>

            <article>
              <span>♡</span>
              <h3>Memorable Holidays</h3>
              <p>Make beautiful memories with friends and family.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="wk-contact" id="wk-contact">
        <div className="wk-contact-overlay">
          <div className="wk-container wk-contact-content">
            <div>
              <span className="wk-kicker">LET'S PLAN YOUR NEXT WEEKEND</span>

              <h2>Ready for a quick getaway?</h2>

              <p>
                Tell us where you want to go. Travel99 will help you plan a
                refreshing weekend trip according to your preferences.
              </p>
            </div>

            <div className="wk-contact-buttons">
              <a className="wk-btn wk-orange" href="tel:+919871735122">
                Call +91 9871735122
              </a>

              <a
                className="wk-btn wk-white"
                href="mailto:travelhigh99@gmail.com?subject=Weekend%20Getaway%20Enquiry"
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Weekend;

// import React from "react";
// import "./Weekend.css";

// const images = {
//   hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
//   about:
//     "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
//   banner:
//     "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=85",
//   fallback:
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
// };

// const destinations = [
//   {
//     name: "Manali",
//     place: "Himachal Pradesh, India",
//     duration: "2 Nights / 3 Days",
//     price: "₹6,999",
//     type: "Mountain Escape",
//     image:
//       "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",
//     desc: "Enjoy beautiful mountains, snow-covered valleys, cafes and peaceful nature.",
//   },
//   {
//     name: "Jaipur",
//     place: "Rajasthan, India",
//     duration: "1 Night / 2 Days",
//     price: "₹4,499",
//     type: "Heritage Tour",
//     image:
//       "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85",
//     desc: "Explore royal palaces, colourful markets, forts and traditional Rajasthani culture.",
//   },
//   {
//     name: "Agra",
//     place: "Uttar Pradesh, India",
//     duration: "1 Night / 2 Days",
//     price: "₹3,999",
//     type: "Historical Trip",
//     image:
//       "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=85",
//     desc: "Visit the beautiful Taj Mahal, Agra Fort and famous historical attractions.",
//   },
//   {
//     name: "Rishikesh",
//     place: "Uttarakhand, India",
//     duration: "2 Nights / 3 Days",
//     price: "₹5,499",
//     type: "Adventure Escape",
//     image:
//       "https://images.unsplash.com/photo-1590050752117-23a9d7fc6c48?auto=format&fit=crop&w=1000&q=85",
//     desc: "Experience river rafting, riverside camping, yoga and beautiful Ganga views.",
//   },
//   {
//     name: "Mussoorie",
//     place: "Uttarakhand, India",
//     duration: "2 Nights / 3 Days",
//     price: "₹6,499",
//     type: "Hill Station",
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
//     desc: "Discover scenic viewpoints, waterfalls, mountain roads and beautiful landscapes.",
//   },
//   {
//     name: "Nainital",
//     place: "Uttarakhand, India",
//     duration: "2 Nights / 3 Days",
//     price: "₹5,999",
//     type: "Lake Destination",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
//     desc: "Enjoy peaceful lakes, boating, mountain views and relaxing nature experiences.",
//   },
// ];

// const experiences = [
//   {
//     icon: "🏔️",
//     title: "Hill Station Trips",
//     desc: "Escape city life and enjoy fresh mountain air and beautiful views.",
//   },
//   {
//     icon: "🏰",
//     title: "Heritage Tours",
//     desc: "Explore historical forts, royal palaces and cultural destinations.",
//   },
//   {
//     icon: "🚣",
//     title: "Adventure Trips",
//     desc: "Enjoy rafting, trekking, camping and exciting outdoor activities.",
//   },
//   {
//     icon: "🌿",
//     title: "Nature Getaways",
//     desc: "Relax in peaceful surroundings surrounded by greenery and nature.",
//   },
// ];

// function Weekend() {
//   const handleImageError = (event) => {
//     event.currentTarget.onerror = null;
//     event.currentTarget.src = images.fallback;
//   };

//   return (
//     <main className="weekend-page">
//       {/* HERO SECTION */}
//       <section
//         className="wk-hero"
//         style={{ backgroundImage: `url("${images.hero}")` }}
//       >
//         <div className="wk-hero-overlay">
//           <div className="wk-container wk-hero-content">
//             <span className="wk-kicker">TRAVEL99 · YOUR WEEKEND ESCAPE</span>

//             <h1>
//               Make Your Weekend
//               <br />
//               <em>Worth Remembering.</em>
//             </h1>

//             <p>
//               Take a break from your busy routine and discover beautiful
//               destinations, exciting experiences and unforgettable journeys.
//             </p>

//             <div className="wk-hero-buttons">
//               <a href="#wk-destinations" className="wk-btn wk-orange">
//                 Explore Getaways <b>→</b>
//               </a>

//               <a href="#wk-contact" className="wk-btn wk-outline">
//                 Plan Your Weekend
//               </a>
//             </div>

//             <div className="wk-hero-features">
//               <span>✦ Short Weekend Trips</span>
//               <span>✦ Beautiful Destinations</span>
//               <span>✦ Budget Friendly Options</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="wk-section">
//         <div className="wk-container wk-about-grid">
//           <div className="wk-about-image">
//             <img
//               src={images.about}
//               alt="Beautiful weekend holiday destination"
//               onError={handleImageError}
//             />

//             <div className="wk-image-caption">
//               <strong>Escape. Explore. Enjoy.</strong>
//               <span>Every weekend has a story.</span>
//             </div>
//           </div>

//           <div className="wk-about-content">
//             <span className="wk-kicker">DISCOVER WEEKEND GETAWAYS</span>

//             <h2>
//               Your perfect escape is just a <em>weekend away.</em>
//             </h2>

//             <p>
//               Sometimes all you need is a short break from your everyday
//               routine. Travel99 brings you exciting weekend getaway options
//               where you can relax, explore new places and spend quality time
//               with your loved ones.
//             </p>

//             <p>
//               From peaceful hill stations and beautiful lakes to historical
//               cities and adventure destinations, discover trips that fit your
//               schedule and travel budget.
//             </p>

//             <a href="#wk-destinations" className="wk-read-more">
//               Explore destinations <b>→</b>
//             </a>

//             <div className="wk-about-points">
//               <div>
//                 <strong>01</strong>
//                 <span>Short & Easy Trips</span>
//               </div>

//               <div>
//                 <strong>02</strong>
//                 <span>Multiple Destinations</span>
//               </div>

//               <div>
//                 <strong>03</strong>
//                 <span>Personalised Plans</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* DESTINATIONS SECTION */}
//       <section className="wk-section wk-light" id="wk-destinations">
//         <div className="wk-container">
//           <div className="wk-heading wk-heading-row">
//             <div>
//               <span className="wk-kicker">EXPLORE NEARBY PARADISE</span>

//               <h2>
//                 Popular Weekend <em>Destinations</em>
//               </h2>

//               <p>
//                 Find your favourite destination for a refreshing short break.
//               </p>
//             </div>

//             <a href="#wk-contact" className="wk-small-btn">
//               Plan Your Trip →
//             </a>
//           </div>

//           <div className="wk-destination-grid">
//             {destinations.map((item) => (
//               <article className="wk-card" key={item.name}>
//                 <div className="wk-card-image">
//                   <img
//                     src={item.image}
//                     alt={`${item.name} weekend getaway`}
//                     loading="lazy"
//                     onError={handleImageError}
//                   />

//                   <span className="wk-card-tag">{item.type}</span>
//                 </div>

//                 <div className="wk-card-content">
//                   <small className="wk-location">⌖ {item.place}</small>

//                   <h3>{item.name}</h3>

//                   <p>{item.desc}</p>

//                   <div className="wk-card-info">
//                     <span>◷ {item.duration}</span>
//                     <strong>From {item.price}</strong>
//                   </div>

//                   <a
//                     href={`mailto:travelhigh99@gmail.com?subject=${encodeURIComponent(
//                       item.name + " Weekend Getaway Enquiry",
//                     )}&body=${encodeURIComponent(
//                       "Hello Travel99, I am interested in the " +
//                         item.name +
//                         " weekend package.",
//                     )}`}
//                   >
//                     Enquire Now <b>→</b>
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE SECTION */}
//       <section className="wk-section">
//         <div className="wk-container">
//           <div className="wk-heading wk-center">
//             <span className="wk-kicker">MAKE YOUR BREAK SPECIAL</span>

//             <h2>
//               Choose Your Weekend <em>Experience</em>
//             </h2>

//             <p>
//               Whether you love adventure, history or peaceful surroundings,
//               there is a perfect getaway waiting for you.
//             </p>
//           </div>

//           <div className="wk-experience-grid">
//             {experiences.map((item) => (
//               <article className="wk-experience-card" key={item.title}>
//                 <div className="wk-experience-icon">{item.icon}</div>

//                 <h3>{item.title}</h3>

//                 <p>{item.desc}</p>

//                 <a href="#wk-destinations">Explore Trips →</a>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WEEKEND BANNER */}
//       <section
//         className="wk-banner"
//         style={{ backgroundImage: `url("${images.banner}")` }}
//       >
//         <div className="wk-banner-overlay">
//           <div className="wk-container wk-banner-content">
//             <span className="wk-kicker">YOUR WEEKEND, YOUR ADVENTURE</span>

//             <h2>
//               Don't Wait for a Holiday.
//               <br />
//               Make This Weekend Special.
//             </h2>

//             <p>
//               Pack your bags, choose your destination and get ready for a
//               refreshing escape with Travel99.
//             </p>

//             <a href="#wk-contact" className="wk-btn wk-orange">
//               Book Your Getaway <b>→</b>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE TRAVEL99 */}
//       <section className="wk-section wk-light">
//         <div className="wk-container">
//           <div className="wk-heading wk-center">
//             <span className="wk-kicker">WHY TRAVEL WITH US</span>

//             <h2>
//               Your Journey, <em>Our Priority</em>
//             </h2>

//             <p>
//               Enjoy a smoother and more enjoyable weekend travel experience.
//             </p>
//           </div>

//           <div className="wk-why-grid">
//             <article>
//               <span>✦</span>
//               <h3>Customised Packages</h3>
//               <p>
//                 Choose trips based on your interests, travel dates and budget.
//               </p>
//             </article>

//             <article>
//               <span>₹</span>
//               <h3>Budget Friendly Trips</h3>
//               <p>Explore different travel options to match your budget.</p>
//             </article>

//             <article>
//               <span>◎</span>
//               <h3>Easy Trip Planning</h3>
//               <p>
//                 Get help with destination selection and travel arrangements.
//               </p>
//             </article>

//             <article>
//               <span>♡</span>
//               <h3>Memorable Holidays</h3>
//               <p>Make beautiful memories with friends and family.</p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="wk-contact" id="wk-contact">
//         <div className="wk-contact-overlay">
//           <div className="wk-container wk-contact-content">
//             <div>
//               <span className="wk-kicker">LET'S PLAN YOUR NEXT WEEKEND</span>

//               <h2>Ready for a quick getaway?</h2>

//               <p>
//                 Tell us where you want to go. Travel99 will help you plan a
//                 refreshing weekend trip according to your preferences.
//               </p>
//             </div>

//             <div className="wk-contact-buttons">
//               <a className="wk-btn wk-orange" href="tel:+919871735122">
//                 Call +91 9871735122
//               </a>

//               <a
//                 className="wk-btn wk-white"
//                 href="mailto:travelhigh99@gmail.com?subject=Weekend%20Getaway%20Enquiry"
//               >
//                 Send Enquiry
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Weekend;
