// import React from "react";
// import "./Adventure.css";

// const destinations = [
//   {
//     name: "Manali",
//     place: "Himachal Pradesh, India",
//     type: "Mountain Adventure",
//     duration: "4 Nights / 5 Days",
//     price: "₹12,999",
//     image:
//       "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",
//     desc: "Explore mountain roads, pine forests, rivers and exciting outdoor activities.",
//   },
//   {
//     name: "Rishikesh",
//     place: "Uttarakhand, India",
//     type: "River Adventure",
//     duration: "2 Nights / 3 Days",
//     price: "₹6,499",
//     image:
//       "https://images.unsplash.com/photo-1590050752117-23a9d7fc6c48?auto=format&fit=crop&w=1000&q=85",
//     desc: "Enjoy river rafting, riverside camping and the beautiful Ganga.",
//   },
//   {
//     name: "Leh Ladakh",
//     place: "Ladakh, India",
//     type: "Road Trip",
//     duration: "6 Nights / 7 Days",
//     price: "₹24,999",
//     image:
//       "https://images.unsplash.com/photo-1566837497312-7be4a6e8f4c8?auto=format&fit=crop&w=1000&q=85",
//     desc: "Ride through dramatic mountain passes, high-altitude lakes and valleys.",
//   },
//   {
//     name: "Dubai",
//     place: "United Arab Emirates",
//     type: "Desert Adventure",
//     duration: "4 Nights / 5 Days",
//     price: "₹39,999",
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
//     desc: "Experience desert safaris, dune bashing and unforgettable city views.",
//   },
//   {
//     name: "Bali",
//     place: "Indonesia",
//     type: "Nature Adventure",
//     duration: "5 Nights / 6 Days",
//     price: "₹42,999",
//     image:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
//     desc: "Discover tropical landscapes, waterfalls, beaches and outdoor experiences.",
//   },
//   {
//     name: "Thailand",
//     place: "Thailand",
//     type: "Island Adventure",
//     duration: "4 Nights / 5 Days",
//     price: "₹34,999",
//     image:
//       "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=85",
//     desc: "Explore beautiful islands, clear waters, boat trips and coastal towns.",
//   },
// ];

// const activities = [
//   {
//     icon: "🏕️",
//     title: "Camping",
//     desc: "Spend a night under the stars at beautiful outdoor campsites.",
//   },
//   {
//     icon: "🚣",
//     title: "River Rafting",
//     desc: "Feel the thrill of river rapids with planned guided experiences.",
//   },
//   {
//     icon: "🥾",
//     title: "Trekking",
//     desc: "Walk through mountain trails, forests and natural landscapes.",
//   },
//   {
//     icon: "🚙",
//     title: "Road Trips",
//     desc: "Discover remote routes and scenic destinations on the road.",
//   },
//   {
//     icon: "🏜️",
//     title: "Desert Safari",
//     desc: "Enjoy golden dunes, desert sunsets and exciting safari rides.",
//   },
//   {
//     icon: "🤿",
//     title: "Water Adventures",
//     desc: "Add excitement with kayaking, snorkelling and water activities.",
//   },
// ];

// function Adventure() {
//   return (
//     <main className="adventure-page">
//       {/* HERO SECTION */}
//       <section className="adv-hero">
//         <div className="adv-hero-shade">
//           <div className="adv-container adv-hero-content">
//             <span className="adv-kicker">TRAVEL99 · EXPLORE BEYOND LIMITS</span>

//             <h1>
//               Adventure Begins
//               <br />
//               <em>Where Comfort Ends.</em>
//             </h1>

//             <p>
//               Discover thrilling destinations, explore the outdoors and create
//               stories that stay with you forever.
//             </p>

//             <div className="adv-buttons">
//               <a className="adv-btn adv-orange" href="#adv-destinations">
//                 Explore Adventures <b>→</b>
//               </a>

//               <a className="adv-btn adv-transparent" href="#adv-activities">
//                 Discover Activities
//               </a>
//             </div>

//             <div className="adv-highlights">
//               <span>✦ Carefully planned trips</span>
//               <span>✦ Memorable experiences</span>
//               <span>✦ Travel support</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="adv-section">
//         <div className="adv-container adv-about-grid">
//           <div className="adv-about-photo">
//             <img
//               src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
//               alt="Mountain adventure landscape"
//             />

//             <div className="adv-photo-label">
//               <strong>Go beyond the ordinary</strong>
//               <small>Make every journey count</small>
//             </div>
//           </div>

//           <div className="adv-about-copy">
//             <span className="adv-kicker">ABOUT ADVENTURE TOURS</span>

//             <h2>
//               For the moments that make you feel <em>alive.</em>
//             </h2>

//             <p>
//               At Travel99, we believe the best journeys take you beyond your
//               everyday routine. From mountain trails and river adventures to
//               desert safaris and island escapes, find an experience that matches
//               your spirit.
//             </p>

//             <p>
//               Whether you travel with friends, family or on your own, we help
//               you plan a memorable trip with thoughtful itineraries, comfortable
//               arrangements and travel assistance.
//             </p>

//             <a className="adv-text-link" href="#adv-contact">
//               Plan your adventure <b>→</b>
//             </a>

//             <div className="adv-points">
//               <div>
//                 <b>01</b>
//                 <span>Exciting destinations</span>
//               </div>

//               <div>
//                 <b>02</b>
//                 <span>Planned experiences</span>
//               </div>

//               <div>
//                 <b>03</b>
//                 <span>Travel support</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ACTIVITIES SECTION */}
//       <section className="adv-section adv-soft" id="adv-activities">
//         <div className="adv-container">
//           <div className="adv-heading adv-center">
//             <span className="adv-kicker">FIND YOUR NEXT THRILL</span>

//             <h2>
//               Adventure <em>Activities</em>
//             </h2>

//             <p>
//               Choose the experience that gets your heart racing and your bags
//               packed.
//             </p>
//           </div>

//           <div className="adv-activity-grid">
//             {activities.map((activity) => (
//               <article className="adv-activity" key={activity.title}>
//                 <div>{activity.icon}</div>

//                 <h3>{activity.title}</h3>

//                 <p>{activity.desc}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* DESTINATIONS SECTION */}
//       <section className="adv-section" id="adv-destinations">
//         <div className="adv-container">
//           <div className="adv-heading adv-heading-row">
//             <div>
//               <span className="adv-kicker">EXPLORE THE UNEXPECTED</span>

//               <h2>
//                 Popular Adventure <em>Destinations</em>
//               </h2>

//               <p>Handpicked places for your next unforgettable escape.</p>
//             </div>

//             <a className="adv-outline" href="#adv-contact">
//               Enquire Now →
//             </a>
//           </div>

//           <div className="adv-destination-grid">
//             {destinations.map((item) => (
//               <article className="adv-card" key={item.name}>
//                 <div className="adv-card-image">
//                   <img
//                     src={item.image}
//                     alt={`${item.name} adventure`}
//                     loading="lazy"
//                   />

//                   <span>{item.type}</span>
//                 </div>

//                 <div className="adv-card-body">
//                   <small className="adv-location">⌖ {item.place}</small>

//                   <h3>{item.name}</h3>

//                   <p>{item.desc}</p>

//                   <div className="adv-meta">
//                     <span>◷ {item.duration}</span>
//                     <strong>From {item.price}</strong>
//                   </div>

//                   <a href="#adv-contact">
//                     Enquire about this trip <b>→</b>
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ADVENTURE BANNER */}
//       <section className="adv-banner">
//         <div className="adv-banner-shade">
//           <div className="adv-container">
//             <span className="adv-kicker">YOUR NEXT STORY IS WAITING</span>

//             <h2>Take the road less travelled.</h2>

//             <p>
//               New places. New challenges. New memories. Let’s make your next
//               trip extraordinary.
//             </p>

//             <a className="adv-btn adv-orange" href="#adv-contact">
//               Start Planning <b>→</b>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE TRAVEL99 */}
//       <section className="adv-section adv-soft">
//         <div className="adv-container">
//           <div className="adv-heading adv-center">
//             <span className="adv-kicker">THE TRAVEL99 DIFFERENCE</span>

//             <h2>
//               Adventure made <em>easier</em>
//             </h2>

//             <p>
//               We take care of the planning details, so you can focus on the
//               experience.
//             </p>
//           </div>

//           <div className="adv-why-grid">
//             <article>
//               <span>✦</span>
//               <h3>Personalised Planning</h3>
//               <p>
//                 Trips shaped around your interests, travel dates and budget.
//               </p>
//             </article>

//             <article>
//               <span>◎</span>
//               <h3>Thoughtful Itineraries</h3>
//               <p>Well-organised travel plans with time to explore and enjoy.</p>
//             </article>

//             <article>
//               <span>♧</span>
//               <h3>Travel Assistance</h3>
//               <p>
//                 Guidance before your trip and support for your travel queries.
//               </p>
//             </article>

//             <article>
//               <span>♡</span>
//               <h3>Memorable Experiences</h3>
//               <p>
//                 Discover places and activities that make every trip special.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="adv-contact" id="adv-contact">
//         <div className="adv-contact-shade">
//           <div className="adv-container adv-contact-inner">
//             <div>
//               <span className="adv-kicker">LET'S PLAN YOUR NEXT JOURNEY</span>

//               <h2>Ready for an adventure?</h2>

//               <p>
//                 Tell us what kind of experience you are dreaming about. Our team
//                 will help you take the first step.
//               </p>
//             </div>

//             <div className="adv-contact-buttons">
//               <a className="adv-btn adv-orange" href="tel:+919871735122">
//                 Call +91 9871735122
//               </a>

//               <a
//                 className="adv-btn adv-white"
//                 href="mailto:travelhigh99@gmail.com?subject=Adventure%20Tour%20Enquiry"
//               >
//                 Email Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Adventure;

import React from "react";
import "./Adventure.css";

const destinations = [
  {
    name: "Manali",
    place: "Himachal Pradesh, India",
    type: "Mountain Adventure",
    duration: "4 Nights / 5 Days",
    price: "₹12,999",
    image: "/Images/Adventure/Manali.jpg",
    desc: "Explore mountain roads, pine forests, rivers and exciting outdoor activities.",
  },
  {
    name: "Rishikesh",
    place: "Uttarakhand, India",
    type: "River Adventure",
    duration: "2 Nights / 3 Days",
    price: "₹6,499",
    image: "/Images/Adventure/Rishikesh.jpg",
    desc: "Enjoy river rafting, riverside camping and the beautiful Ganga.",
  },
  {
    name: "Leh Ladakh",
    place: "Ladakh, India",
    type: "Road Trip",
    duration: "6 Nights / 7 Days",
    price: "₹24,999",
    image: "/Images/Adventure/Leh Ladakh.jpg",
    desc: "Ride through dramatic mountain passes, high-altitude lakes and valleys.",
  },
  {
    name: "Dubai",
    place: "United Arab Emirates",
    type: "Desert Adventure",
    duration: "4 Nights / 5 Days",
    price: "₹39,999",
    image: "/Images/Adventure/Dubai.jpg",
    desc: "Experience desert safaris, dune bashing and unforgettable city views.",
  },
  {
    name: "Bali",
    place: "Indonesia",
    type: "Nature Adventure",
    duration: "5 Nights / 6 Days",
    price: "₹42,999",
    image: "/Images/Adventure/Bali.jpg",
    desc: "Discover tropical landscapes, waterfalls, beaches and outdoor experiences.",
  },
  {
    name: "Thailand",
    place: "Thailand",
    type: "Island Adventure",
    duration: "4 Nights / 5 Days",
    price: "₹34,999",
    image: "/Images/Adventure/Thailand.jpg",
    desc: "Explore beautiful islands, clear waters, boat trips and coastal towns.",
  },
];

const activities = [
  {
    icon: "🏕️",
    title: "Camping",
    desc: "Spend a night under the stars at beautiful outdoor campsites.",
  },
  {
    icon: "🚣",
    title: "River Rafting",
    desc: "Feel the thrill of river rapids with planned guided experiences.",
  },
  {
    icon: "🥾",
    title: "Trekking",
    desc: "Walk through mountain trails, forests and natural landscapes.",
  },
  {
    icon: "🚙",
    title: "Road Trips",
    desc: "Discover remote routes and scenic destinations on the road.",
  },
  {
    icon: "🏜️",
    title: "Desert Safari",
    desc: "Enjoy golden dunes, desert sunsets and exciting safari rides.",
  },
  {
    icon: "🤿",
    title: "Water Adventures",
    desc: "Add excitement with kayaking, snorkelling and water activities.",
  },
];

function Adventure() {
  return (
    <main className="adventure-page">
      {/* HERO SECTION */}
      <section className="adv-hero">
        <div className="adv-hero-shade">
          <div className="adv-container adv-hero-content">
            <span className="adv-kicker">TRAVEL99 · EXPLORE BEYOND LIMITS</span>

            <h1>
              Adventure Begins
              <br />
              <em>Where Comfort Ends.</em>
            </h1>

            <p>
              Discover thrilling destinations, explore the outdoors and create
              stories that stay with you forever.
            </p>

            <div className="adv-buttons">
              <a className="adv-btn adv-orange" href="#adv-destinations">
                Explore Adventures <b>→</b>
              </a>

              <a className="adv-btn adv-transparent" href="#adv-activities">
                Discover Activities
              </a>
            </div>

            <div className="adv-highlights">
              <span>✦ Carefully planned trips</span>
              <span>✦ Memorable experiences</span>
              <span>✦ Travel support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="adv-section">
        <div className="adv-container adv-about-grid">
          <div className="adv-about-photo">
            <img
              src="/Images/Adventure/Adventure1.jpg"
              alt="Mountain adventure landscape"
            />

            <div className="adv-photo-label">
              <strong>Go beyond the ordinary</strong>
              <small>Make every journey count</small>
            </div>
          </div>

          <div className="adv-about-copy">
            <span className="adv-kicker">ABOUT ADVENTURE TOURS</span>

            <h2>
              For the moments that make you feel <em>alive.</em>
            </h2>

            <p>
              At Travel99, we believe the best journeys take you beyond your
              everyday routine. From mountain trails and river adventures to
              desert safaris and island escapes, find an experience that matches
              your spirit.
            </p>

            <p>
              Whether you travel with friends, family or on your own, we help
              you plan a memorable trip with thoughtful itineraries, comfortable
              arrangements and travel assistance.
            </p>

            <a className="adv-text-link" href="#adv-contact">
              Plan your adventure <b>→</b>
            </a>

            <div className="adv-points">
              <div>
                <b>01</b>
                <span>Exciting destinations</span>
              </div>

              <div>
                <b>02</b>
                <span>Planned experiences</span>
              </div>

              <div>
                <b>03</b>
                <span>Travel support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="adv-section adv-soft" id="adv-activities">
        <div className="adv-container">
          <div className="adv-heading adv-center">
            <span className="adv-kicker">FIND YOUR NEXT THRILL</span>

            <h2>
              Adventure <em>Activities</em>
            </h2>

            <p>
              Choose the experience that gets your heart racing and your bags
              packed.
            </p>
          </div>

          <div className="adv-activity-grid">
            {activities.map((activity) => (
              <article className="adv-activity" key={activity.title}>
                <div>{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="adv-section" id="adv-destinations">
        <div className="adv-container">
          <div className="adv-heading adv-heading-row">
            <div>
              <span className="adv-kicker">EXPLORE THE UNEXPECTED</span>

              <h2>
                Popular Adventure <em>Destinations</em>
              </h2>

              <p>Handpicked places for your next unforgettable escape.</p>
            </div>

            <a className="adv-outline" href="#adv-contact">
              Enquire Now →
            </a>
          </div>

          <div className="adv-destination-grid">
            {destinations.map((item) => (
              <article className="adv-card" key={item.name}>
                <div className="adv-card-image">
                  <img
                    src={item.image}
                    alt={`${item.name} adventure`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/Images/Adventure/AdventureAbout.jpg";
                    }}
                  />

                  <span>{item.type}</span>
                </div>

                <div className="adv-card-body">
                  <small className="adv-location">⌖ {item.place}</small>

                  <h3>{item.name}</h3>

                  <p>{item.desc}</p>

                  <div className="adv-meta">
                    <span>◷ {item.duration}</span>
                    <strong>From {item.price}</strong>
                  </div>

                  <a href="#adv-contact">
                    Enquire about this trip <b>→</b>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURE BANNER */}
      <section className="adv-banner">
        <div className="adv-banner-shade">
          <div className="adv-container">
            <span className="adv-kicker">YOUR NEXT STORY IS WAITING</span>

            <h2>Take the road less travelled.</h2>

            <p>
              New places. New challenges. New memories. Let’s make your next
              trip extraordinary.
            </p>

            <a className="adv-btn adv-orange" href="#adv-contact">
              Start Planning <b>→</b>
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TRAVEL99 */}
      <section className="adv-section adv-soft">
        <div className="adv-container">
          <div className="adv-heading adv-center">
            <span className="adv-kicker">THE TRAVEL99 DIFFERENCE</span>

            <h2>
              Adventure made <em>easier</em>
            </h2>

            <p>
              We take care of the planning details, so you can focus on the
              experience.
            </p>
          </div>

          <div className="adv-why-grid">
            <article>
              <span>✦</span>
              <h3>Personalised Planning</h3>
              <p>
                Trips shaped around your interests, travel dates and budget.
              </p>
            </article>

            <article>
              <span>◎</span>
              <h3>Thoughtful Itineraries</h3>
              <p>Well-organised travel plans with time to explore and enjoy.</p>
            </article>

            <article>
              <span>♧</span>
              <h3>Travel Assistance</h3>
              <p>
                Guidance before your trip and support for your travel queries.
              </p>
            </article>

            <article>
              <span>♡</span>
              <h3>Memorable Experiences</h3>
              <p>
                Discover places and activities that make every trip special.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="adv-contact" id="adv-contact">
        <div className="adv-contact-shade">
          <div className="adv-container adv-contact-inner">
            <div>
              <span className="adv-kicker">LET'S PLAN YOUR NEXT JOURNEY</span>

              <h2>Ready for an adventure?</h2>

              <p>
                Tell us what kind of experience you are dreaming about. Our team
                will help you take the first step.
              </p>
            </div>

            <div className="adv-contact-buttons">
              <a className="adv-btn adv-orange" href="tel:+919871735122">
                Call +91 9871735122
              </a>

              <a
                className="adv-btn adv-white"
                href="mailto:travelhigh99@gmail.com?subject=Adventure%20Tour%20Enquiry"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Adventure;
