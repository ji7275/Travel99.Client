import React from "react";
import "./Switzerland.css";

const destinations = [
  {
    name: "Interlaken",
    place: "Adventure Paradise",
    image: "/Images/Switzerland/Interlaken.jpg",
    description:
      "Enjoy breathtaking mountain views, adventure sports and beautiful lakes.",
  },
  {
    name: "Lucerne",
    place: "City of Lakes",
    image: "/Images/Switzerland/Lucerne.jpg",
    description:
      "Discover beautiful lakes, historic bridges and charming streets.",
  },
  {
    name: "Zermatt",
    place: "Swiss Alps",
    image: "/Images/Switzerland/Zermatt.jpg",
    description:
      "Experience the iconic Matterhorn mountain and snowy landscapes.",
  },
  {
    name: "Zurich",
    place: "Beautiful City",
    image: "/Images/Switzerland/Zurich.jpg",
    description:
      "Explore modern attractions, shopping streets and lakeside views.",
  },
  {
    name: "Geneva",
    place: "Lakeside Beauty",
    image: "/Images/Switzerland/Geneva.jpg",
    description:
      "Enjoy peaceful lake views, beautiful gardens and city attractions.",
  },
  {
    name: "Grindelwald",
    place: "Mountain Village",
    image: "/Images/Switzerland/Grindelwald.jpg",
    description:
      "Explore alpine villages, green valleys and spectacular mountain scenery.",
  },
];

const packages = [
  {
    name: "Swiss Explorer",
    duration: "5 Days / 4 Nights",
    price: "₹89,999",
    image: "/Images/Switzerland/SwissA.jpg",
    details: "Zurich • Lucerne • Interlaken",
  },
  {
    name: "Swiss Romantic Escape",
    duration: "7 Days / 6 Nights",
    price: "₹1,29,999",
    image: "/Images/Switzerland/Interlaken.jpg",
    details: "Interlaken • Zermatt • Lucerne",
  },
  {
    name: "Luxury Switzerland",
    duration: "8 Days / 7 Nights",
    price: "₹1,69,999",
    image: "/Images/Switzerland/Zermatt.jpg",
    details: "Zurich • Geneva • Zermatt",
  },
];

// const destinations = [
//   {
//     name: "Interlaken",
//     place: "Adventure Paradise",
//     image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
//     description:
//       "Enjoy breathtaking mountain views, adventure sports and beautiful lakes.",
//   },
//   {
//     name: "Lucerne",
//     place: "City of Lakes",
//     image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800",
//     description:
//       "Discover beautiful lakes, historic bridges and charming streets.",
//   },
//   {
//     name: "Zermatt",
//     place: "Swiss Alps",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
//     description:
//       "Experience the iconic Matterhorn mountain and snowy landscapes.",
//   },
//   {
//     name: "Zurich",
//     place: "Beautiful City",
//     image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
//     description:
//       "Explore modern attractions, shopping streets and lakeside views.",
//   },
//   {
//     name: "Geneva",
//     place: "Lakeside Beauty",
//     image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
//     description:
//       "Enjoy peaceful lake views, beautiful gardens and city attractions.",
//   },
//   {
//     name: "Grindelwald",
//     place: "Mountain Village",
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
//     description:
//       "Explore alpine villages, green valleys and spectacular mountain scenery.",
//   },
// ];

// const packages = [
//   {
//     name: "Swiss Explorer",
//     duration: "5 Days / 4 Nights",
//     price: "₹89,999",
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
//     details: "Zurich • Lucerne • Interlaken",
//   },
//   {
//     name: "Swiss Romantic Escape",
//     duration: "7 Days / 6 Nights",
//     price: "₹1,29,999",
//     image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
//     details: "Interlaken • Zermatt • Lucerne",
//   },
//   {
//     name: "Luxury Switzerland",
//     duration: "8 Days / 7 Nights",
//     price: "₹1,69,999",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
//     details: "Zurich • Geneva • Zermatt",
//   },
// ];

function Switzerland() {
  return (
    <div className="switzerland-page">
      {/* HERO SECTION */}
      <section className="swiss-hero">
        <div className="swiss-hero-overlay">
          <div className="swiss-hero-content">
            <span className="swiss-tag">WELCOME TO SWITZERLAND</span>
            <h1>Discover The Magic Of Switzerland</h1>
            <p>
              Explore the beautiful Swiss Alps, crystal-clear lakes, charming
              villages and unforgettable landscapes.
            </p>

            <div className="swiss-hero-buttons">
              <a href="#swiss-packages" className="swiss-btn">
                Explore Packages
              </a>
              <a href="#swiss-destinations" className="swiss-outline-btn">
                Discover Places
              </a>
            </div>

            <div className="swiss-hero-info">
              <div>
                <strong>6+</strong>
                <span>Beautiful Places</span>
              </div>
              <div>
                <strong>4–8</strong>
                <span>Days Packages</span>
              </div>
              <div>
                <strong>365</strong>
                <span>Days To Explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="swiss-about section-padding">
        <div className="swiss-about-image">
          <img
            src="/Images/Switzerland/Switzerland.jpg"
            alt="Beautiful Switzerland landscape"
          />
          <div className="swiss-image-label">
            <strong>Switzerland</strong>
            <span>The Heart of Europe</span>
          </div>
        </div>

        <div className="swiss-about-content">
          <span className="swiss-subtitle">EXPLORE SWITZERLAND</span>
          <h2>Experience The Beauty Of Swiss Paradise</h2>
          <p>
            Switzerland is a dream destination known for its snow-covered
            mountains, stunning lakes, scenic train journeys and peaceful alpine
            villages.
          </p>
          <p>
            From the breathtaking Matterhorn to the beautiful streets of
            Lucerne, every corner offers a memorable travel experience. Travel99
            helps you plan a comfortable and unforgettable holiday.
          </p>

          <div className="swiss-features">
            <div>✓ Beautiful Mountain Views</div>
            <div>✓ Scenic Train Journeys</div>
            <div>✓ Luxury Holiday Experiences</div>
            <div>✓ Adventure & Sightseeing</div>
          </div>

          <a href="#swiss-destinations" className="swiss-text-btn">
            Explore More Places →
          </a>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        className="swiss-destinations section-padding"
        id="swiss-destinations"
      >
        <div className="swiss-section-heading">
          <span className="swiss-subtitle">TOP DESTINATIONS</span>
          <h2>Explore Beautiful Places In Switzerland</h2>
          <p>
            Discover the most beautiful destinations of Switzerland with
            Travel99.
          </p>
        </div>

        <div className="swiss-destination-grid">
          {destinations.map((place, index) => (
            <div className="swiss-destination-card" key={index}>
              <div className="swiss-destination-image">
                <img src={place.image} alt={place.name} />
                <span className="swiss-place-number">0{index + 1}</span>
              </div>
              <div className="swiss-destination-content">
                <span>{place.place}</span>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <a href="#swiss-packages">Explore Destination →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="swiss-experience">
        <div className="swiss-experience-overlay">
          <span className="swiss-subtitle">UNFORGETTABLE EXPERIENCES</span>
          <h2>Make Every Moment A Beautiful Memory</h2>
          <p>
            Enjoy mountain adventures, scenic cable cars, beautiful lakes and
            magical Swiss landscapes.
          </p>
          <a href="#swiss-packages" className="swiss-btn">
            Plan Your Switzerland Trip
          </a>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="swiss-attractions section-padding">
        <div className="swiss-section-heading">
          <span className="swiss-subtitle">MUST VISIT ATTRACTIONS</span>
          <h2>Experience The Best Of Switzerland</h2>
        </div>

        <div className="swiss-attraction-grid">
          <div className="swiss-attraction-card">
            {/* <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
              alt="Matterhorn"
                      /> */}

            <img src="/Images/Switzerland/MatterhornM.jpg" alt="Matterhorn" />

            <div>
              <h3>Matterhorn Mountain</h3>
              <p>
                Discover one of the most iconic mountain views in the Swiss
                Alps.
              </p>
            </div>
          </div>

          <div className="swiss-attraction-card">
            {/* <img
              src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800"
              alt="Swiss Lake"
            /> */}

            <img src="/Images/Switzerland/SwissA.jpg" alt="Swiss Lake" />

            <div>
              <h3>Beautiful Swiss Lakes</h3>
              <p>
                Relax beside crystal-clear lakes surrounded by stunning scenery.
              </p>
            </div>
          </div>

          <div className="swiss-attraction-card">
            {/* <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
              alt="Swiss Alps"
            /> */}

            <img src="/Images/Switzerland/Switzerland.jpg" alt="Swiss Alps" />
            <div>
              <h3>Swiss Alpine Villages</h3>
              <p>
                Experience charming villages and traditional Swiss architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="swiss-packages section-padding" id="swiss-packages">
        <div className="swiss-section-heading">
          <span className="swiss-subtitle">TRAVEL99 HOLIDAY PACKAGES</span>
          <h2>Choose Your Switzerland Holiday</h2>
          <p>
            Find the perfect holiday package for your next European adventure.
          </p>
        </div>

        <div className="swiss-package-grid">
          {packages.map((item, index) => (
            <div className="swiss-package-card" key={index}>
              <div className="swiss-package-image">
                <img src={item.image} alt={item.name} />
                <span>{item.duration}</span>
              </div>

              <div className="swiss-package-content">
                <h3>{item.name}</h3>
                <p>{item.details}</p>
                <div className="swiss-package-bottom">
                  <div>
                    <small>Starting From</small>
                    <strong>{item.price}</strong>
                    <small>/ person</small>
                  </div>
                  <a href="/contact">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEST TIME */}
      <section className="swiss-season section-padding">
        <div className="swiss-season-content">
          <span className="swiss-subtitle">PLAN YOUR JOURNEY</span>
          <h2>Best Time To Visit Switzerland</h2>
          <p>
            Switzerland offers different experiences throughout the year. Summer
            is wonderful for sightseeing and outdoor adventures, while winter is
            popular for snow activities and skiing.
          </p>
        </div>

        <div className="swiss-season-grid">
          <div>
            <span>🌸</span>
            <h3>Spring</h3>
            <p>March – May</p>
          </div>
          <div>
            <span>☀️</span>
            <h3>Summer</h3>
            <p>June – August</p>
          </div>
          <div>
            <span>🍂</span>
            <h3>Autumn</h3>
            <p>September – November</p>
          </div>
          <div>
            <span>❄️</span>
            <h3>Winter</h3>
            <p>December – February</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="swiss-cta">
        <div>
          <span>YOUR DREAM HOLIDAY STARTS HERE</span>
          <h2>Ready To Explore Switzerland?</h2>
          <p>Let Travel99 plan your perfect Switzerland holiday.</p>
          <a href="/contact">Enquire Now →</a>
        </div>
      </section>
    </div>
  );
}

export default Switzerland;
