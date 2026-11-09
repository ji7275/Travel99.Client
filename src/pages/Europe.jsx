import React from "react";
import "./Europe.css";

const destinations = [
  {
    name: "Paris",
    country: "France",
    image: "/Images/Europe/Paris.jpg",
    description:
      "Discover the Eiffel Tower, romantic streets, art and beautiful French cafes.",
  },
  {
    name: "London",
    country: "United Kingdom",
    image: "/Images/Europe/London.jpg",
    description:
      "Explore Big Ben, London Bridge, royal landmarks and exciting city life.",
  },
  {
    name: "Rome",
    country: "Italy",
    image: "/Images/Europe/Rome.jpg",
    description:
      "Experience ancient history, beautiful architecture and authentic Italian food.",
  },
  {
    name: "Switzerland",
    country: "Swiss Alps",
    image: "/Images/Europe/Switzerland.jpg",
    description:
      "Enjoy snow-covered mountains, crystal-clear lakes and scenic train journeys.",
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    image: "/Images/Europe/Amsterdam.jpg",
    description:
      "Explore beautiful canals, colorful streets and charming European culture.",
  },
  {
    name: "Barcelona",
    country: "Spain",
    image: "/Images/Europe/Barcelona.jpg",
    description:
      "Discover stunning architecture, Mediterranean beaches and vibrant city life.",
  },
];

const packages = [
  {
    name: "European Highlights",
    duration: "7 Days / 6 Nights",
    price: "₹1,49,999",
    image: "/Images/Europe/European Highlights.jpg",
    places: "Paris • Amsterdam • Brussels",
  },
  {
    name: "Europe Grand Tour",
    duration: "10 Days / 9 Nights",
    price: "₹1,99,999",
    image: "/Images/Europe/Europe Grand Tour.jpg",
    places: "France • Switzerland • Italy",
  },
  {
    name: "Luxury Europe Escape",
    duration: "12 Days / 11 Nights",
    price: "₹2,69,999",
    image: "/Images/Europe/Luxury Europe Escape.jpg",
    places: "London • Paris • Rome • Switzerland",
  },
];

function Europe() {
  return (
    <div className="europe-page">
      {/* HERO SECTION */}
      <section className="europe-hero">
        <div className="europe-hero-overlay">
          <div className="europe-hero-content">
            <span className="europe-tag">DISCOVER THE BEAUTY OF EUROPE</span>
            <h1>Explore Europe, Experience A World Of Wonders</h1>
            <p>
              From romantic Paris to the beautiful Swiss Alps, discover iconic
              cities, historic landmarks and unforgettable European experiences
              with Travel99.
            </p>

            <div className="europe-hero-buttons">
              <a href="#europe-packages" className="europe-btn">
                Explore Packages
              </a>
              <a href="#europe-destinations" className="europe-outline-btn">
                Discover Europe
              </a>
            </div>

            <div className="europe-hero-stats">
              <div>
                <strong>6+</strong>
                <span>Popular Destinations</span>
              </div>
              <div>
                <strong>7–12</strong>
                <span>Days Packages</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Unforgettable Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT EUROPE */}
      <section className="europe-about europe-padding">
        <div className="europe-about-image">
          <img src="/Images/Europe/Explore Europe.jpg" alt="Beautiful Europe" />
          <div className="europe-about-label">
            <strong>Explore Europe</strong>
            <span>One Continent, Endless Memories</span>
          </div>
        </div>

        <div className="europe-about-content">
          <span className="europe-subtitle">WELCOME TO EUROPE</span>
          <h2>Discover The Charm Of European Holidays</h2>

          <p>
            Europe is one of the world's most fascinating travel destinations,
            offering beautiful cities, historic castles, breathtaking landscapes
            and unforgettable cultural experiences.
          </p>

          <p>
            Walk through the romantic streets of Paris, experience the history
            of Rome, enjoy the beauty of Switzerland and explore the canals of
            Amsterdam. Travel99 helps you plan your perfect European holiday.
          </p>

          <div className="europe-features">
            <div>✓ Iconic European Cities</div>
            <div>✓ Historic Attractions</div>
            <div>✓ Luxury Holiday Packages</div>
            <div>✓ Scenic Travel Experiences</div>
          </div>

          <a href="#europe-destinations" className="europe-read-more">
            Explore Destinations →
          </a>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        className="europe-destinations europe-padding"
        id="europe-destinations"
      >
        <div className="europe-section-heading">
          <span className="europe-subtitle">EXPLORE EUROPE</span>
          <h2>Popular Destinations In Europe</h2>
          <p>
            Explore some of Europe's most beautiful cities and create memories
            that last forever.
          </p>
        </div>

        <div className="europe-destination-grid">
          {destinations.map((place, index) => (
            <div className="europe-destination-card" key={place.name}>
              <div className="europe-destination-image">
                <img src={place.image} alt={place.name} />
                <span className="europe-number">0{index + 1}</span>
              </div>

              <div className="europe-destination-content">
                <span>{place.country}</span>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <a href="#europe-packages">Explore Destination →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE BANNER */}
      <section className="europe-experience">
        <div className="europe-experience-overlay">
          <span className="europe-subtitle">TRAVEL • EXPLORE • EXPERIENCE</span>
          <h2>Your European Dream Begins Here</h2>
          <p>
            Experience beautiful architecture, scenic landscapes, unforgettable
            journeys and the magic of Europe.
          </p>
          <a href="#europe-packages" className="europe-btn">
            Plan Your Europe Trip
          </a>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="europe-attractions europe-padding">
        <div className="europe-section-heading">
          <span className="europe-subtitle">MUST VISIT PLACES</span>
          <h2>Famous Attractions Of Europe</h2>
          <p>
            Discover famous landmarks and beautiful attractions across European
            countries.
          </p>
        </div>

        <div className="europe-attraction-grid">
          <div className="europe-attraction-card">
            <img src="/Images/Europe/Eiffel Tower.jpg" alt="Eiffel Tower" />
            <div>
              <span>Paris, France</span>
              <h3>Eiffel Tower</h3>
              <p>Experience one of the most iconic landmarks in the world.</p>
            </div>
          </div>

          <div className="europe-attraction-card">
            <img src="/Images/Europe/Colosseum.jpg" alt="Colosseum" />
            <div>
              <span>Rome, Italy</span>
              <h3>Colosseum</h3>
              <p>Discover the fascinating history of ancient Rome.</p>
            </div>
          </div>

          <div className="europe-attraction-card">
            <img src="/Images/Europe/Big Ben.jpg" alt="Big Ben" />
            <div>
              <span>London, UK</span>
              <h3>Big Ben</h3>
              <p>Explore one of London's most recognizable attractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="europe-packages europe-padding" id="europe-packages">
        <div className="europe-section-heading">
          <span className="europe-subtitle">TRAVEL99 HOLIDAY PACKAGES</span>
          <h2>Choose Your Perfect Europe Package</h2>
          <p>
            Find a holiday package that matches your travel dreams and discover
            Europe with comfort.
          </p>
        </div>

        <div className="europe-package-grid">
          {packages.map((item) => (
            <div className="europe-package-card" key={item.name}>
              <div className="europe-package-image">
                <img src={item.image} alt={item.name} />
                <span>{item.duration}</span>
              </div>

              <div className="europe-package-content">
                <h3>{item.name}</h3>
                <p>{item.places}</p>

                <div className="europe-package-bottom">
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

      {/* TRAVEL EXPERIENCE */}
      <section className="europe-highlights europe-padding">
        <div className="europe-highlights-heading">
          <span className="europe-subtitle">WHY VISIT EUROPE</span>
          <h2>Experiences You Will Never Forget</h2>
        </div>

        <div className="europe-highlights-grid">
          <div>
            <span>🏰</span>
            <h3>Historic Places</h3>
            <p>Explore castles, museums and historical landmarks.</p>
          </div>
          <div>
            <span>🏔️</span>
            <h3>Natural Beauty</h3>
            <p>Enjoy mountains, lakes, beaches and scenic landscapes.</p>
          </div>
          <div>
            <span>🚆</span>
            <h3>Scenic Journeys</h3>
            <p>Discover beautiful European cities through scenic travel.</p>
          </div>
          <div>
            <span>🍽️</span>
            <h3>Local Cuisine</h3>
            <p>Experience delicious food and different cultures.</p>
          </div>
        </div>
      </section>

      {/* BEST TIME */}
      <section className="europe-season europe-padding">
        <div className="europe-season-content">
          <span className="europe-subtitle">PLAN YOUR JOURNEY</span>
          <h2>Best Time To Visit Europe</h2>
          <p>
            Europe offers beautiful experiences throughout the year. Spring and
            summer are popular for sightseeing, while autumn and winter offer
            beautiful seasonal scenery and festive events.
          </p>
        </div>

        <div className="europe-season-grid">
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
      <section className="europe-cta">
        <div className="europe-cta-content">
          <span>YOUR DREAM EUROPEAN HOLIDAY STARTS HERE</span>
          <h2>Ready To Explore Europe?</h2>
          <p>
            Let Travel99 create a memorable European travel experience for you.
          </p>
          <a href="/contact">Send Your Enquiry →</a>
        </div>
      </section>
    </div>
  );
}

export default Europe;
