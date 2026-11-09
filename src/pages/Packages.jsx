import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const packageData = [
  {
    id: 1,
    name: "Goa Beach Holiday",
    destination: "Goa, India",
    category: "Beach",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000",
    description:
      "Enjoy beautiful beaches, local food, sunset views and a relaxing holiday in Goa.",
    highlights: [
      "Beach sightseeing",
      "Hotel stay options",
      "Local transfers",
      "Custom itinerary",
    ],
    tag: "Popular",
  },
  {
    id: 2,
    name: "Kashmir Valley Escape",
    destination: "Srinagar, India",
    category: "Mountain",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1000",
    description:
      "Discover scenic valleys, peaceful lakes and the beautiful landscapes of Kashmir.",
    highlights: [
      "Srinagar sightseeing",
      "Dal Lake experience",
      "Mountain views",
      "Hotel options",
    ],
    tag: "Top Destination",
  },
  {
    id: 3,
    name: "Dubai City Experience",
    destination: "Dubai, UAE",
    category: "International",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000",
    description:
      "Explore modern architecture, shopping destinations and exciting city experiences.",
    highlights: [
      "City sightseeing",
      "Desert safari options",
      "Hotel accommodation",
      "Visa assistance",
    ],
    tag: "International",
  },
  {
    id: 4,
    name: "Bali Tropical Escape",
    destination: "Bali, Indonesia",
    category: "International",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000",
    description:
      "Experience tropical beaches, beautiful temples and peaceful island surroundings.",
    highlights: [
      "Island sightseeing",
      "Beach experiences",
      "Hotel options",
      "Custom activities",
    ],
    tag: "Special Escape",
  },
  {
    id: 5,
    name: "Kerala Nature Retreat",
    destination: "Kerala, India",
    category: "Nature",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000",
    description:
      "Enjoy green landscapes, backwaters, hill stations and a refreshing nature holiday.",
    highlights: [
      "Munnar sightseeing",
      "Backwater experience",
      "Nature views",
      "Accommodation options",
    ],
    tag: "Nature",
  },
  {
    id: 6,
    name: "Switzerland Scenic Tour",
    destination: "Switzerland",
    category: "International",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1000",
    description:
      "Discover beautiful alpine scenery, charming towns and unforgettable mountain views.",
    highlights: [
      "Scenic sightseeing",
      "Mountain experiences",
      "Hotel options",
      "Travel planning support",
    ],
    tag: "Premium",
  },
];

const filters = [
  "All Packages",
  "Beach",
  "Mountain",
  "Nature",
  "International",
];

function Packages() {
  const [activeFilter, setActiveFilter] = useState("All Packages");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filteredPackages = useMemo(() => {
    return packageData.filter((item) => {
      const matchesCategory =
        activeFilter === "All Packages" || item.category === activeFilter;

      const searchText = searchTerm.toLowerCase().trim();

      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.destination.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <main className="packages-page">
      {/* PACKAGES HERO SECTION */}
      <section className="packages-hero">
        <img
          src="/Images/Packeges.png"
          alt="Travel High 99 Holiday Packages"
          className="packages-hero-image"
        />

        <div className="packages-hero-overlay"></div>

        <div className="packages-container packages-hero-content">
          <span className="packages-kicker">
            ✈ TRAVEL HIGH 99 | EXPLORE THE WORLD
          </span>

          <h1>
            Discover Your
            <br />
            <strong>Perfect Holiday</strong>
          </h1>

          <p>
            Explore beautiful destinations, unforgettable experiences and
            exciting holiday packages. Your next adventure starts here.
          </p>

          <div className="packages-hero-buttons">
            <a href="#explore-packages" className="packages-hero-btn">
              Explore Packages →
            </a>

            <Link to="/contact" className="packages-hero-outline-btn">
              Plan Your Trip
            </Link>
          </div>

          <div className="packages-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Packages</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="packages-intro packages-container">
        <div className="packages-intro-text">
          <span className="packages-section-label">EXPLORE OUR HOLIDAYS</span>
          <h2>Make Your Next Journey Special</h2>
          <p>
            From relaxing beach holidays to mountain escapes and international
            adventures, explore travel options for every kind of traveller.
          </p>
        </div>

        <div className="packages-intro-badge">
          <span>✈️</span>
          <strong>Travel Your Way</strong>
          <small>Trips planned around you</small>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section
        className="packages-container packages-listing"
        id="explore-packages"
      >
        <div className="packages-search-panel">
          <div className="packages-search-text">
            <span className="packages-section-label">
              CHOOSE YOUR DESTINATION
            </span>
            <h2>Explore Holiday Packages</h2>
            <p>Find a destination for your next memorable holiday.</p>
          </div>

          <div className="packages-search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search destination or package..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="packages-filter-row">
          <div className="packages-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "selected" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <span className="packages-result-count">
            {filteredPackages.length} Packages Found
          </span>
        </div>

        {/* PACKAGE CARDS */}
        {filteredPackages.length > 0 ? (
          <div className="packages-grid">
            {filteredPackages.map((item) => (
              <article className="package-card" key={item.id}>
                <div className="package-image">
                  <img src={item.image} alt={item.name} loading="lazy" />

                  <span className="package-tag">{item.tag}</span>

                  <span className="package-duration">◷ {item.duration}</span>
                </div>

                <div className="package-card-content">
                  <span className="package-destination">
                    📍 {item.destination}
                  </span>

                  <h3>{item.name}</h3>

                  <p className="package-description">{item.description}</p>

                  <div className="package-highlights">
                    {item.highlights.slice(0, 3).map((highlight) => (
                      <span key={highlight}>✓ {highlight}</span>
                    ))}
                  </div>

                  <div className="package-card-footer">
                    <div className="package-price">
                      <small>Package Pricing</small>
                      <strong>Get Best Price</strong>
                    </div>

                    <button
                      className="package-view-button"
                      onClick={() => setSelectedPackage(item)}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="packages-no-result">
            <span>🔎</span>
            <h3>No Packages Found</h3>
            <p>Please try another destination or category.</p>

            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("All Packages");
              }}
            >
              Show All Packages
            </button>
          </div>
        )}
      </section>

      {/* WHY CHOOSE US */}
      <section className="packages-benefits">
        <div className="packages-container">
          <div className="packages-benefits-heading">
            <span className="packages-section-label">
              TRAVEL WITH CONFIDENCE
            </span>
            <h2>Why Plan Your Trip With Us?</h2>
            <p>Helpful travel planning from the first idea to your journey.</p>
          </div>

          <div className="packages-benefits-grid">
            <div className="package-benefit">
              <span>🧭</span>
              <h3>Personalised Planning</h3>
              <p>Travel options designed around your interests and budget.</p>
            </div>

            <div className="package-benefit">
              <span>🏨</span>
              <h3>Stay Options</h3>
              <p>Explore accommodation options for different travel needs.</p>
            </div>

            <div className="package-benefit">
              <span>🌍</span>
              <h3>Multiple Destinations</h3>
              <p>Explore domestic and international holiday destinations.</p>
            </div>

            <div className="package-benefit">
              <span>🎧</span>
              <h3>Travel Assistance</h3>
              <p>Get assistance while planning your travel requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM PACKAGE CTA */}
      <section className="packages-custom packages-container">
        <div>
          <span>YOUR TRIP, YOUR WAY</span>
          <h2>Looking for a Customised Holiday?</h2>
          <p>
            Share your destination, travel dates and budget. Let's plan a
            holiday that suits your requirements.
          </p>
        </div>

        <Link to="/contact" className="packages-custom-button">
          Plan My Trip →
        </Link>
      </section>

      {/* PACKAGE DETAILS MODAL */}
      {selectedPackage && (
        <div
          className="package-modal-overlay"
          onClick={() => setSelectedPackage(null)}
        >
          <div className="package-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="package-modal-close"
              onClick={() => setSelectedPackage(null)}
              aria-label="Close package details"
            >
              ×
            </button>

            <img
              src={selectedPackage.image}
              alt={selectedPackage.name}
              className="package-modal-image"
            />

            <div className="package-modal-body">
              <span className="packages-section-label">
                {selectedPackage.category}
              </span>

              <h2>{selectedPackage.name}</h2>

              <div className="package-modal-meta">
                <span>📍 {selectedPackage.destination}</span>
                <span>◷ {selectedPackage.duration}</span>
              </div>

              <p>{selectedPackage.description}</p>

              <h3>Package Highlights</h3>

              <ul>
                {selectedPackage.highlights.map((highlight) => (
                  <li key={highlight}>✓ {highlight}</li>
                ))}
              </ul>

              <p className="package-price-note">
                Final pricing depends on travel dates, number of travellers and
                selected accommodation.
              </p>

              <Link
                to="/contact"
                className="packages-custom-button"
                onClick={() => setSelectedPackage(null)}
              >
                Enquire About This Package →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Packages;
