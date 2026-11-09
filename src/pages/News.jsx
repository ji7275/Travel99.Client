import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";

const newsData = [
  {
    id: 1,
    category: "Visa Updates",
    date: "November 06, 2026",
    title: "Important Visa Application Updates for International Travellers",
    desc: "Stay informed about visa application procedures, documentation requirements and travel preparation before planning your international journey.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900",
    icon: "🛂",
    readTime: "4 min read",
    content:
      "International travellers should review the latest visa requirements before confirming their travel plans. Requirements may differ according to nationality, destination and purpose of travel. Keep your passport, photographs, application forms and supporting documents ready. Always verify current instructions with the relevant embassy or official visa application centre before applying.",
  },
  {
    id: 2,
    category: "Travel News",
    date: "November 04, 2026",
    title: "Planning an International Holiday? Here Is Your Travel Checklist",
    desc: "A little preparation can make your international holiday smoother. Check these important travel essentials before departure.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900",
    icon: "🌍",
    readTime: "5 min read",
    content:
      "Before travelling internationally, check your passport validity, visa requirements, flight tickets, hotel reservations and travel insurance. Keep digital and printed copies of important documents. Also review baggage allowances and local rules at your destination. Plan ahead to enjoy a more comfortable holiday.",
  },
  {
    id: 3,
    category: "Destination Guides",
    date: "October 30, 2026",
    title: "Explore Dubai: A Destination Full of Unforgettable Experiences",
    desc: "From impressive architecture to desert adventures, discover experiences that can make your Dubai holiday memorable.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
    icon: "🏙️",
    readTime: "6 min read",
    content:
      "Dubai offers a mix of modern attractions, shopping experiences, cultural locations and desert activities. Travellers can explore its famous skyline, traditional markets, beaches and family attractions. Choose activities according to your interests, travel dates and budget. Check entry and booking requirements before departure.",
  },
  {
    id: 4,
    category: "Holiday Packages",
    date: "October 25, 2026",
    title: "Goa Holiday Planning: Beaches, Relaxation and Adventure",
    desc: "Thinking about a Goa holiday? Explore ideas for beaches, sightseeing, local food and a relaxing trip.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
    icon: "🏖️",
    readTime: "4 min read",
    content:
      "Goa is a popular holiday destination for its beaches, local culture, food and sightseeing. Travellers can plan a relaxing family holiday, a friends' trip or an adventure-focused getaway. Compare accommodation, transportation and activities before choosing a package.",
  },
  {
    id: 5,
    category: "Travel Tips",
    date: "October 20, 2026",
    title: "Simple Travel Tips for a Comfortable and Stress-Free Journey",
    desc: "Smart packing, advance bookings and proper planning can help you enjoy a better travel experience.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900",
    icon: "🧳",
    readTime: "3 min read",
    content:
      "Prepare a travel checklist, pack according to the weather and keep essential medicines and documents accessible. Confirm your reservations before leaving and arrive at the airport with sufficient time. Keep emergency contacts available and follow local travel guidelines.",
  },
  {
    id: 6,
    category: "Visa Updates",
    date: "October 15, 2026",
    title: "Documents to Keep Ready Before Applying for a Tourist Visa",
    desc: "Understand the common documents travellers may need when preparing a tourist visa application.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900",
    icon: "📄",
    readTime: "5 min read",
    content:
      "Common tourist visa documents may include a valid passport, application form, photographs, travel itinerary, accommodation details and financial documents. Requirements vary by country and applicant circumstances. Check the official embassy or visa centre checklist for the destination before submitting an application.",
  },
];

const categories = [
  "All News",
  "Visa Updates",
  "Travel News",
  "Destination Guides",
  "Holiday Packages",
  "Travel Tips",
];

function News() {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredNews = newsData.filter((item) => {
    const matchesCategory =
      activeCategory === "All News" || item.category === activeCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="travel-news">
      {/* NEWS HERO */}
      <section className="news-hero">
        <div className="news-hero-overlay">
          <div className="news-container">
            <div className="news-hero-content">
              <span className="news-kicker">
                TRAVEL HIGH 99 • NEWS & UPDATES
              </span>

              <h1>
                Travel News & <span>Latest Updates</span>
              </h1>

              <p>
                Discover travel updates, visa information, destination guides
                and helpful tips to make your next journey easier.
              </p>

              <div className="news-breadcrumb">
                <Link to="/">Home</Link>
                <span> / </span>
                <span>News & Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS CONTENT */}
      <section className="news-main-section">
        <div className="news-container">
          <div className="news-section-heading">
            <div>
              <span className="news-label">STAY INFORMED</span>
              <h2>Latest News & Articles</h2>
              <p>
                Explore useful information and inspiration for your next trip.
              </p>
            </div>

            <div className="news-heading-icon">📰</div>
          </div>

          <div className="news-layout">
            {/* LEFT CONTENT */}
            <div className="news-left-content">
              {/* SEARCH */}
              <div className="news-search-box">
                <span>🔍</span>
                <input
                  type="text"
                  placeholder="Search travel news, visa updates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* CATEGORY FILTER */}
              <div className="news-category-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? "active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* NEWS GRID */}
              <div className="news-card-grid">
                {filteredNews.length > 0 ? (
                  filteredNews.map((item) => (
                    <article className="news-card" key={item.id}>
                      <div className="news-card-image">
                        <img src={item.image} alt={item.title} />

                        <span className="news-card-category">
                          {item.category}
                        </span>
                      </div>

                      <div className="news-card-body">
                        <div className="news-card-date">
                          <span>📅</span>
                          {item.date}
                          <span className="news-dot">•</span>
                          {item.readTime}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.desc}</p>

                        <button
                          className="news-read-more"
                          onClick={() => setSelectedNews(item)}
                        >
                          Read Full Article
                          <span>→</span>
                        </button>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="news-empty">
                    <span>🔎</span>
                    <h3>No Articles Found</h3>
                    <p>Try another search or select a different category.</p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setActiveCategory("All News");
                      }}
                    >
                      View All News
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="news-sidebar">
              <div className="news-sidebar-card">
                <h3>News Categories</h3>

                <div className="news-sidebar-categories">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                    >
                      <span>›</span>
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="news-sidebar-card">
                <h3>Recent Articles</h3>

                <div className="news-recent-list">
                  {newsData.slice(0, 4).map((item) => (
                    <button
                      className="news-recent-item"
                      key={item.id}
                      onClick={() => setSelectedNews(item)}
                    >
                      <img src={item.image} alt={item.title} />

                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.date}</small>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="news-sidebar-cta">
                <span>✈️</span>
                <h3>Planning Your Next Trip?</h3>
                <p>
                  Let our team help you explore suitable travel options for your
                  next holiday.
                </p>

                <Link to="/contact">
                  Contact Us <span>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="news-bottom-cta">
        <div className="news-container">
          <div className="news-bottom-content">
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Stay Updated. Travel Better.</h2>
            <p>
              Explore new destinations, helpful travel tips and holiday
              inspiration with Travel High 99.
            </p>
            <Link to="/packages" className="news-cta-button">
              Explore Holiday Packages <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLE DETAIL POPUP */}
      {selectedNews && (
        <div
          className="news-modal-overlay"
          onClick={() => setSelectedNews(null)}
        >
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="news-modal-close"
              onClick={() => setSelectedNews(null)}
              aria-label="Close article"
            >
              ×
            </button>

            <img
              className="news-modal-image"
              src={selectedNews.image}
              alt={selectedNews.title}
            />

            <div className="news-modal-content">
              <span className="news-label">{selectedNews.category}</span>

              <div className="news-card-date">
                📅 {selectedNews.date} · {selectedNews.readTime}
              </div>

              <h2>{selectedNews.title}</h2>

              <p>{selectedNews.content}</p>

              <Link to="/contact" className="news-modal-contact">
                Need Travel Assistance? Contact Us →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default News;
