import React, { useEffect, useState } from "react";
import "./Home.css";
//import "./About.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const slides = [
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}Images/travel2.jpg`,
    tag: "YOUR NEXT ADVENTURE AWAITS",
    title: "Explore the World",
    subtitle: "Make Every Journey Special.",
    description:
      "Explore amazing destinations with Travel99 and enjoy a memorable travel experience.",
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}Images/Travel3.jpg`,
    tag: "TRAVEL • VISA • HOLIDAYS",
    title: "Discover the World",
    subtitle: "Your Journey, Our Expertise.",
    description:
      "From visa guidance to memorable holidays, plan your next journey with Travel99.",
  },
  {
    id: 5,
    image: `${import.meta.env.BASE_URL}Images/Packeges.png`,
    tag: "TRAVEL • VISA • HOLIDAYS",
    title: "Discover the World",
    subtitle: "Your Journey, Our Expertise.",
    description:
      "From visa guidance to memorable holidays, plan your next journey with Travel99.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1900",
    tag: "YOUR INTERNATIONAL JOURNEY STARTS HERE",
    title: "Explore Dubai",
    subtitle: "Make Every Moment Count.",
    description:
      "Get travel guidance, visa assistance and personalized international holiday options.",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}Images/Travel1.jpg`,
    tag: "MAKE YOUR TRAVEL DREAMS REAL",
    title: "Experience Europe",
    subtitle: "Travel With Confidence.",
    description:
      "Discover beautiful destinations and let us help you plan a smooth travel experience.",
  },
];
// const slides = [
//   {
//     id: 4,
//     image: "/Images/travel2.jpg",
//     tag: "YOUR NEXT ADVENTURE AWAITS",
//     title: "Explore the World",
//     subtitle: "Make Every Journey Special.",
//     description:
//       "Explore amazing destinations with Travel99 and enjoy a memorable travel experience.",
//   },

//   {
//     id: 2,
//     image: "/Images/Travel3.jpg",
//     tag: "TRAVEL • VISA • HOLIDAYS",
//     title: "Discover the World",
//     subtitle: "Your Journey, Our Expertise.",
//     description:
//       "From visa guidance to memorable holidays, plan your next journey with Travel99.",
//   },
//   {
//     id: 5,
//     image: "/Images/Packeges.png",
//     tag: "TRAVEL • VISA • HOLIDAYS",
//     title: "Discover the World",
//     subtitle: "Your Journey, Our Expertise.",
//     description:
//       "From visa guidance to memorable holidays, plan your next journey with Travel99.",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1900",
//     tag: "YOUR INTERNATIONAL JOURNEY STARTS HERE",
//     title: "Explore Dubai",
//     subtitle: "Make Every Moment Count.",
//     description:
//       "Get travel guidance, visa assistance and personalized international holiday options.",
//   },
//   {
//     id: 3,
//     image: "/Images/Travel1.jpg",
//     tag: "MAKE YOUR TRAVEL DREAMS REAL",
//     title: "Experience Europe",
//     subtitle: "Travel With Confidence.",
//     description:
//       "Discover beautiful destinations and let us help you plan a smooth travel experience.",
//   },
// ];

// const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1900",
//     tag: "TRAVEL • VISA • HOLIDAYS",
//     title: "Discover the World",
//     subtitle: "Your Journey, Our Expertise.",
//     description:
//       "From visa guidance to memorable holidays, plan your next journey with Travel99.",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1900",
//     tag: "YOUR INTERNATIONAL JOURNEY STARTS HERE",
//     title: "Explore Dubai",
//     subtitle: "Make Every Moment Count.",
//     description:
//       "Get travel guidance, visa assistance and personalized international holiday options.",
//   },
//   {
//     id: 3,
//     image: "/Images/Travel1.jpg",
//     tag: "MAKE YOUR TRAVEL DREAMS REAL",
//     title: "Experience Europe",
//     subtitle: "Travel With Confidence.",
//     description:
//       "Discover beautiful destinations and let us help you plan a smooth travel experience.",
//   },
//   {
//     id: 4,
//     image: "/Images/Travel2.jpg",
//     tag: "YOUR NEXT ADVENTURE AWAITS",
//     title: "Explore the World",
//     subtitle: "Make Every Journey Special.",
//     description:
//       "Explore amazing destinations with Travel99 and enjoy a memorable travel experience.",
//   },
// ];

const visaServices = [
  {
    icon: "🧳",
    title: "Tourist Visa",
    text: "Guidance for leisure and family travel visa applications.",
  },
  {
    icon: "💼",
    title: "Business Visa",
    text: "Travel documentation guidance for business visits.",
  },
  {
    icon: "🎓",
    title: "Student Visa",
    text: "Application guidance for students planning to study abroad.",
  },
  {
    icon: "🌐",
    title: "Work Visa",
    text: "Guidance for employment-related travel documentation.",
  },
  {
    icon: "📑",
    title: "Document Attestation",
    text: "Assistance with document verification and attestation.",
  },
  {
    icon: "⚡",
    title: "E-Visa Assistance",
    text: "Support understanding online visa application requirements.",
  },
];

const travelServices = [
  {
    icon: "✈️",
    title: "Flight Booking",
    text: "Explore domestic and international flight options.",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    text: "Find accommodation options for your journey.",
  },
  {
    icon: "🌴",
    title: "Holiday Packages",
    text: "Plan customized domestic and international holidays.",
  },
  {
    icon: "🚗",
    title: "Tour Packages",
    text: "Discover destinations with planned travel experiences.",
  },
];
const defaultDestinations = [
  {
    name: "Goa",
    country: "India",
    image: `${import.meta.env.BASE_URL}Images/Goa.jpg`,
  },
  {
    name: "Dubai",
    country: "UAE",
    image: `${import.meta.env.BASE_URL}Images/Dubai/Dubai.jpg`,
  },
  {
    name: "Switzerland",
    country: "Europe",
    image: `${import.meta.env.BASE_URL}Images/Switzerland/Switzerland.jpg`,
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: `${import.meta.env.BASE_URL}Images/Bali/Bali.jpg`,
  },
];

const defaultPackages = [
  {
    packageId: 1,
    packageName: "Beautiful Goa Escape",
    destination: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: "On Request",
    imageUrl: `${import.meta.env.BASE_URL}Images/Goa.jpg`,
  },
  {
    packageId: 2,
    packageName: "Dubai City Experience",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "On Request",
    imageUrl: `${import.meta.env.BASE_URL}Images/Dubai/DubaiF.jpg`,
  },
  {
    packageId: 3,
    packageName: "Bali Island Holiday",
    destination: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: "On Request",
    imageUrl: `${import.meta.env.BASE_URL}Images/Bali/BaliA.jpg`,
  },
];

// const defaultDestinations = [
//   {
//     name: "Goa",
//     country: "India",
//     image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
//   },
//   {
//     name: "Dubai",
//     country: "UAE",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
//   },
//   {
//     name: "Switzerland",
//     country: "Europe",
//     image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900",
//   },
//   {
//     name: "Bali",
//     country: "Indonesia",
//     image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
//   },
// ];

// const defaultPackages = [
//   {
//     packageId: 1,
//     packageName: "Beautiful Goa Escape",
//     destination: "Goa, India",
//     duration: "4 Days / 3 Nights",
//     price: "On Request",
//     imageUrl:
//       "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
//   },
//   {
//     packageId: 2,
//     packageName: "Dubai City Experience",
//     destination: "Dubai, UAE",
//     duration: "5 Days / 4 Nights",
//     price: "On Request",
//     imageUrl:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
//   },
//   {
//     packageId: 3,
//     packageName: "Bali Island Holiday",
//     destination: "Bali, Indonesia",
//     duration: "6 Days / 5 Nights",
//     price: "On Request",
//     imageUrl:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
//   },
// ];

const benefits = [
  {
    number: "01",
    title: "Personalized Guidance",
    text: "Travel suggestions based on your destination and requirements.",
  },
  {
    number: "02",
    title: "Visa Assistance",
    text: "Guidance to understand visa processes and documentation.",
  },
  {
    number: "03",
    title: "Travel Solutions",
    text: "Visa, flights, hotels and holiday planning in one place.",
  },
  {
    number: "04",
    title: "Customer Support",
    text: "A team ready to assist with your travel enquiries.",
  },
];

const serviceForms = [
  {
    id: "flight-booking",
    icon: "✈️",
    title: "Flight Booking",
    heading: "BOOK YOUR NEXT JOURNEY",
    subtitle: "Delhi to Worldwide",
    description:
      "Book domestic and international flights with convenient travel assistance from Travel High 99.",
    fields: [
      {
        name: "from",
        label: "FROM",
        placeholder: "Delhi (DEL)",
        required: true,
      },
      {
        name: "destination",
        label: "TO",
        placeholder: "Where to?",
        required: true,
      },
      {
        name: "departureDate",
        label: "DEPARTURE DATE",
        type: "date",
        required: true,
      },
      { name: "returnDate", label: "RETURN DATE", type: "date" },
      {
        name: "travellers",
        label: "TRAVELLERS",
        type: "select",
        options: [
          "1 Traveller",
          "2 Travellers",
          "3 Travellers",
          "4 Travellers",
          "5+ Travellers",
        ],
      },
      {
        name: "travelClass",
        label: "CLASS",
        type: "select",
        options: [
          "Economy",
          "Premium Economy",
          "Business Class",
          "First Class",
        ],
      },
      {
        name: "tripType",
        label: "TRIP TYPE",
        type: "select",
        options: ["One Way", "Round Trip"],
      },
    ],
  },
  {
    id: "hotel-booking",
    icon: "🏨",
    title: "Hotel Booking",
    heading: "FIND YOUR PERFECT STAY",
    subtitle: "Comfortable Stays Worldwide",
    description:
      "Find suitable hotels and accommodation for your domestic and international trips.",
    fields: [
      {
        name: "destination",
        label: "CITY / DESTINATION",
        placeholder: "Enter city or destination",
        required: true,
      },
      { name: "checkIn", label: "CHECK-IN DATE", type: "date", required: true },
      {
        name: "checkOut",
        label: "CHECK-OUT DATE",
        type: "date",
        required: true,
      },
      {
        name: "rooms",
        label: "ROOMS",
        type: "select",
        options: ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5+ Rooms"],
      },
      {
        name: "guests",
        label: "GUESTS",
        type: "select",
        options: ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"],
      },
      {
        name: "hotelCategory",
        label: "HOTEL CATEGORY",
        type: "select",
        options: ["Budget", "3 Star", "4 Star", "5 Star", "Luxury"],
      },
    ],
  },
  {
    id: "holiday-packages",
    icon: "🌴",
    title: "Holiday Packages",
    heading: "PLAN YOUR DREAM HOLIDAY",
    subtitle: "Explore Beautiful Destinations",
    description:
      "Choose your destination and plan a memorable family holiday, honeymoon or adventure trip.",
    fields: [
      {
        name: "destination",
        label: "DESTINATION",
        placeholder: "Goa, Dubai, Thailand...",
        required: true,
      },
      {
        name: "travelDate",
        label: "TRAVEL DATE",
        type: "date",
        required: true,
      },
      {
        name: "duration",
        label: "TRIP DURATION",
        type: "select",
        options: ["2-3 Days", "4-5 Days", "6-7 Days", "8-10 Days", "10+ Days"],
      },
      {
        name: "travellers",
        label: "TRAVELLERS",
        type: "select",
        options: [
          "1 Traveller",
          "2 Travellers",
          "3 Travellers",
          "4 Travellers",
          "5+ Travellers",
        ],
      },
      {
        name: "budget",
        label: "BUDGET",
        type: "select",
        options: ["Economy", "Standard", "Premium", "Luxury"],
      },
      {
        name: "packageType",
        label: "PACKAGE TYPE",
        type: "select",
        options: [
          "Family Trip",
          "Honeymoon",
          "Adventure",
          "Friends Trip",
          "Solo Trip",
        ],
      },
    ],
  },
  {
    id: "visa-assistance",
    icon: "🛂",
    title: "Visa Assistance",
    heading: "YOUR VISA JOURNEY STARTS HERE",
    subtitle: "Travel With Confidence",
    description:
      "Get guidance with visa application requirements and travel documentation for your destination.",
    fields: [
      {
        name: "destination",
        label: "COUNTRY",
        placeholder: "USA, UK, Dubai...",
        required: true,
      },
      {
        name: "visaType",
        label: "VISA TYPE",
        type: "select",
        options: [
          "Tourist Visa",
          "Business Visa",
          "Student Visa",
          "Work Visa",
          "Transit Visa",
          "Other",
        ],
      },
      { name: "travelDate", label: "EXPECTED TRAVEL DATE", type: "date" },
      {
        name: "applicants",
        label: "NUMBER OF APPLICANTS",
        type: "select",
        options: [
          "1 Applicant",
          "2 Applicants",
          "3 Applicants",
          "4 Applicants",
          "5+ Applicants",
        ],
      },
      {
        name: "passportStatus",
        label: "PASSPORT STATUS",
        type: "select",
        options: ["Valid Passport", "Passport Applied", "Need Guidance"],
      },
      {
        name: "previousVisa",
        label: "PREVIOUS VISA",
        type: "select",
        options: ["First Time", "Previously Approved", "Previously Rejected"],
      },
    ],
  },
  {
    id: "travel-insurance",
    icon: "🛡️",
    title: "Travel Insurance",
    heading: "TRAVEL WITH PEACE OF MIND",
    subtitle: "Protection For Your Journey",
    description:
      "Share your travel details to enquire about suitable travel insurance options.",
    fields: [
      {
        name: "destination",
        label: "DESTINATION",
        placeholder: "Enter destination",
        required: true,
      },
      { name: "travelDate", label: "START DATE", type: "date", required: true },
      { name: "returnDate", label: "END DATE", type: "date", required: true },
      {
        name: "travellers",
        label: "TRAVELLERS",
        type: "select",
        options: [
          "1 Traveller",
          "2 Travellers",
          "3 Travellers",
          "4 Travellers",
          "5+ Travellers",
        ],
      },
      {
        name: "insuranceType",
        label: "INSURANCE TYPE",
        type: "select",
        options: ["Individual", "Family", "Student", "Senior Citizen", "Group"],
      },
      {
        name: "coverage",
        label: "COVERAGE PREFERENCE",
        type: "select",
        options: ["Basic", "Standard", "Comprehensive", "Need Guidance"],
      },
    ],
  },
  {
    id: "airport-transfers",
    icon: "🚘",
    title: "Airport Transfers",
    heading: "TRAVEL TO YOUR DESTINATION",
    subtitle: "Easy Airport Pickup & Drop",
    description:
      "Enquire about airport pickup and drop services for a convenient journey.",
    fields: [
      {
        name: "airport",
        label: "AIRPORT NAME",
        placeholder: "Delhi Airport",
        required: true,
      },
      {
        name: "pickupLocation",
        label: "PICKUP LOCATION",
        placeholder: "Enter pickup address",
        required: true,
      },
      {
        name: "dropLocation",
        label: "DROP LOCATION",
        placeholder: "Enter drop address",
        required: true,
      },
      {
        name: "pickupDate",
        label: "PICKUP DATE",
        type: "date",
        required: true,
      },
      {
        name: "pickupTime",
        label: "PICKUP TIME",
        type: "time",
        required: true,
      },
      {
        name: "passengers",
        label: "PASSENGERS",
        type: "select",
        options: [
          "1 Passenger",
          "2 Passengers",
          "3 Passengers",
          "4 Passengers",
          "5+ Passengers",
        ],
      },
      {
        name: "vehicleType",
        label: "VEHICLE TYPE",
        type: "select",
        options: ["Sedan", "SUV", "Innova", "Tempo Traveller", "Need Guidance"],
      },
    ],
  },
];

async function getApiData(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`);
  if (!response.ok) throw new Error(`Request failed: ${endpoint}`);
  const result = await response.json();
  return Array.isArray(result)
    ? result
    : result.data || result.packages || result.destinations || [];
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [destinations, setDestinations] = useState(defaultDestinations);
  const [packages, setPackages] = useState(defaultPackages);
  const [loadingPackages, setLoadingPackages] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "2",
    service: "Holiday Package",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadHomeData() {
      try {
        const [packageData, destinationData] = await Promise.allSettled([
          getApiData("/api/packages"),
          getApiData("/api/destinations"),
        ]);

        if (!isMounted) return;

        if (packageData.status === "fulfilled" && packageData.value.length) {
          setPackages(packageData.value);
        }

        if (
          destinationData.status === "fulfilled" &&
          destinationData.value.length
        ) {
          setDestinations(destinationData.value);
        }
      } catch (error) {
        console.error("Home page data error:", error);
      } finally {
        if (isMounted) setLoadingPackages(false);
      }
    }

    loadHomeData();
    return () => {
      isMounted = false;
    };
  }, []);

  const [activeServiceId, setActiveServiceId] = useState("flight-booking");
  //const [submitting, setSubmitting] = useState(false);
  //const [formMessage, setFormMessage] = useState("");

  const activeService =
    serviceForms.find((service) => service.id === activeServiceId) ||
    serviceForms[0];

  // Header ke URL hash se selected service change hogi
  useEffect(() => {
    const selectServiceFromHash = () => {
      const serviceId = window.location.hash.replace("#", "");

      const matchedService = serviceForms.find(
        (service) => service.id === serviceId,
      );

      if (matchedService) {
        setActiveServiceId(matchedService.id);
        setFormMessage("");
      }
    };

    selectServiceFromHash();

    window.addEventListener("hashchange", selectServiceFromHash);

    return () => {
      window.removeEventListener("hashchange", selectServiceFromHash);
    };
  }, []);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  // const submitEnquiry = async (event) => {
  //   event.preventDefault();
  //   setSubmitting(true);
  //   setFormMessage("");

  //   try {
  //     const response = await fetch(`${API_BASE}/api/enquiries`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Enquiry could not be submitted. Please try again.");
  //     }

  //     setFormMessage(
  //       "Thank you! Your enquiry has been submitted successfully.",
  //     );
  //     setForm({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       destination: "",
  //       travelDate: "",
  //       travellers: "2",
  //       service: "Holiday Package",
  //       message: "",
  //     });
  //   } catch (error) {
  //     setFormMessage(
  //       "Enquiry API is not connected yet. Please call +91 9871735122 or email travelhigh99@gmail.com.",
  //     );
  //     console.error(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const submitServiceEnquiry = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const details = Object.fromEntries(formData.entries());

    const travelDate =
      details.travelDate ||
      details.departureDate ||
      details.checkIn ||
      details.pickupDate ||
      "";

    const payload = {
      name: details.name?.trim() || "",
      email: details.email?.trim() || "",
      phone: details.phone?.trim() || "",

      destination:
        details.destination || details.to || details.dropLocation || null,

      travelDate: travelDate ? travelDate : null,

      travellers:
        details.travellers ||
        details.guests ||
        details.passengers ||
        details.applicants ||
        null,

      service: activeService.title,

      message: Object.entries(details)
        .filter(([key]) => !["name", "email", "phone"].includes(key))
        .map(([key, value]) => `${key}: ${value}`)
        .join(" | "),
    };

    try {
      setSubmitting(true);
      setFormMessage("");

      const response = await fetch(
        `${API_BASE.replace(/\/$/, "")}/api/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      console.log("API Response:", result);

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Enquiry submission failed.");
      }

      setFormMessage(
        `Enquiry submitted successfully! Your Enquiry ID is ${result.enquiryId}`,
      );

      formElement.reset();
    } catch (error) {
      console.error("Enquiry Error:", error);

      setFormMessage(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO SLIDER */}
      <section
        className="hero-slider"
        id="home"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5,24,45,.88), rgba(5,24,45,.25)), url("${slides[activeSlide].image}")`,
        }}
      >
        <div className="hero-content">
          <span className="hero-tag">{slides[activeSlide].tag}</span>
          <h1>
            {slides[activeSlide].title}
            <br />
            <span>{slides[activeSlide].subtitle}</span>
          </h1>
          <p>{slides[activeSlide].description}</p>
          <div className="hero-buttons">
            <a href="#packages" className="primary-btn">
              Explore Packages <span>→</span>
            </a>
            <a href="#enquiry" className="outline-btn">
              Get Free Consultation
            </a>
          </div>
        </div>

        <div className="hero-side-label">TRAVEL99 · EXPLORE MORE</div>

        <div className="slider-controls">
          <button
            onClick={() =>
              setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
            }
            aria-label="Previous slide"
          >
            ‹
          </button>
          <div className="slider-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={activeSlide === index ? "dot active" : "dot"}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </section>

      {/* TRUST / QUICK SERVICES */}
      <section className="quick-info-section">
        <div className="quick-info-container">
          <div className="quick-info-item">
            <div className="quick-info-icon">✈</div>
            <div>
              <strong>Travel Planning</strong>
              <small>Domestic & International</small>
            </div>
            <span className="quick-info-arrow">↗</span>
          </div>

          <div className="quick-info-item">
            <div className="quick-info-icon">▣</div>
            <div>
              <strong>Visa Assistance</strong>
              <small>Application Guidance</small>
            </div>
            <span className="quick-info-arrow">↗</span>
          </div>

          <div className="quick-info-item">
            <div className="quick-info-icon">⌖</div>
            <div>
              <strong>Worldwide Holidays</strong>
              <small>Explore New Destinations</small>
            </div>
            <span className="quick-info-arrow">↗</span>
          </div>

          <div className="quick-info-item">
            <div className="quick-info-icon">♧</div>
            <div>
              <strong>Personal Support</strong>
              <small>Travel Enquiry Assistance</small>
            </div>
            <span className="quick-info-arrow">↗</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="home-intro section-space">
        <div className="intro-left">
          <span className="eyebrow">
            <span className="intro-line"></span>
            WELCOME TO TRAVEL HIGH 99
          </span>

          <h2>
            Your Travel & Visa Partner for
            <em> Every Journey.</em>
          </h2>

          <a href="#about" className="text-link">
            Discover Travel99 <span>→</span>
          </a>
        </div>

        <div className="intro-right">
          <div className="intro-highlight">✦</div>

          <p>
            Whether you are planning a relaxing holiday, an international
            business visit or a new adventure, Travel99 brings travel planning
            and visa assistance together to help you prepare with confidence.
          </p>

          <div className="intro-bottom">
            <span>YOUR JOURNEY, OUR PRIORITY</span>
            <span className="intro-bottom-line"></span>
          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS SECTION ================= */}

      <section className="latest-news-section" id="latest-news">
        <div className="latest-news-container">
          {/* HEADING */}
          <div className="latest-news-heading">
            <span className="news-eyebrow">
              <span></span>
              NEWS & UPDATES
              <span></span>
            </span>

            <h2>
              Latest <span>News</span>
            </h2>

            <p>
              Get the latest visa updates, embassy announcements, travel news
              and important international travel information.
            </p>
          </div>

          {/* NEWS DATA */}
          <div className="latest-news-grid">
            {[
              {
                day: "21",
                month: "NOV",
                year: "2026",
                category: "South Africa Visa",
                image: `${import.meta.env.BASE_URL}Images/New1.png`,
                title: "South Africa Visa Updates for Indian Travellers",
                description:
                  "Latest information and important updates about South Africa visa applications.",
              },
              {
                day: "18",
                month: "NOV",
                year: "2026",
                category: "Visa News",
                image: `${import.meta.env.BASE_URL}Images/New2.png`,
                title: "Latest Visa and Immigration News",
                description:
                  "Important visa announcements and immigration updates for international travellers.",
              },
              {
                day: "14",
                month: "NOV",
                year: "2026",
                category: "Bangladesh",
                image: `${import.meta.env.BASE_URL}Images/bangladesh.jpg`,
                title: "Bangladesh Visa and Travel Updates",
                description:
                  "Important travel information and visa-related updates for Bangladesh.",
              },
              {
                day: "10",
                month: "NOV",
                year: "2026",
                category: "China",
                image: `${import.meta.env.BASE_URL}Images/china.jpg`,
                title: "China Visa Guidelines and Travel Information",
                description:
                  "Explore essential visa information and travel guidelines for China.",
              },
              {
                day: "06",
                month: "NOV",
                year: "2026",
                category: "Russia",
                image: `${import.meta.env.BASE_URL}Images/Russia.jpg`,
                title: "Russia Visa Updates and Travel Guidelines",
                description:
                  "Get useful information about Russia visa requirements and international travel.",
              },
              {
                day: "02",
                month: "NOV",
                year: "2026",
                category: "India",
                image: `${import.meta.env.BASE_URL}Images/india1.png`,
                title: "India Visa and Travel Documentation Updates",
                description:
                  "Know about important travel documents and visa application requirements in India.",
              },
            ].map((news, index) => (
              <article className="latest-news-card" key={index}>
                <div className="news-image-wrapper">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="news-image"
                  />

                  <div className="news-image-date">
                    <strong>{news.day}</strong>
                    <span>{news.month}</span>
                    <small>{news.year}</small>
                  </div>

                  <span className="news-category">{news.category}</span>
                </div>

                <div className="news-card-content">
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>

                  <a
                    href={`mailto:travelhigh99@gmail.com?subject=${encodeURIComponent(news.title)}`}
                    className="news-read-more"
                  >
                    Read More <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="latest-news-grid">
            {[
              {
                day: "21",
                month: "NOV",
                year: "2026",
                category: "South Africa Visa",
                image: "/Images/New1.png",
                title: "South Africa Visa Updates for Indian Travellers",
                description:
                  "Latest information and important updates about South Africa visa applications.",
              },
              {
                day: "18",
                month: "NOV",
                year: "2026",
                category: "Visa News",
                image: "/Images/New2.png",
                title: "Latest Visa and Immigration News",
                description:
                  "Important visa announcements and immigration updates for international travellers.",
              },
              {
                day: "14",
                month: "NOV",
                year: "2026",
                category: "Bangladesh",
                image: "/Images/bangladesh.jpg",
                title: "Bangladesh Visa and Travel Updates",
                description:
                  "Important travel information and visa-related updates for Bangladesh.",
              },
              {
                day: "10",
                month: "NOV",
                year: "2026",
                category: "China",
                image: "/Images/china.jpg",
                title: "China Visa Guidelines and Travel Information",
                description:
                  "Explore essential visa information and travel guidelines for China.",
              },
              {
                day: "06",
                month: "NOV",
                year: "2026",
                category: "Russia",
                image: "/Images/Russia.jpg",
                title: "Russia Visa Updates and Travel Guidelines",
                description:
                  "Get useful information about Russia visa requirements and international travel.",
              },
              {
                day: "02",
                month: "NOV",
                year: "2026",
                category: "India",
                image: "/Images/india1.png",
                title: "India Visa and Travel Documentation Updates",
                description:
                  "Know about important travel documents and visa application requirements in India.",
              },
            ].map((news, index) => (
              <article className="latest-news-card" key={index}>
            
                <div className="news-image-wrapper">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="news-image"
                  />

                  <div className="news-image-date">
                    <strong>{news.day}</strong>
                    <span>{news.month}</span>
                    <small>{news.year}</small>
                  </div>

                  <span className="news-category">{news.category}</span>
                </div>

              
                <div className="news-card-content">
                  <h3>{news.title}</h3>

                  <p>{news.description}</p>

                  <a
                    href={`mailto:travelhigh99@gmail.com?subject=${encodeURIComponent(news.title)}`}
                    className="news-read-more"
                  >
                    Read More <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div> */}
        </div>
      </section>

      {/* ================= END LATEST NEWS SECTION ================= */}

      {/* ABOUT TRAVEL99 */}
      <section className="about-section section-space" id="about">
        {/* LEFT IMAGE */}
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1100"
            alt="Travel planning and exploring the world"
            loading="lazy"
          />

          <div className="about-image-overlay"></div>

          <div className="about-stamp">
            <strong>99</strong>
            <span>
              TRAVEL
              <br />
              YOUR WAY
            </span>
          </div>

          <div className="about-caption">
            <span>YOUR JOURNEY PARTNER</span>
            <strong>Explore More. Experience More.</strong>
          </div>

          <div className="about-floating-card">
            <span className="about-floating-icon">✈</span>
            <div>
              <strong>Travel Made Easier</strong>
              <small>Plan your next journey with us</small>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          {/* TOP HEADING */}
          <div className="about-heading-label">
            <span className="about-label-line"></span>
            <span className="about-label-about">ABOUT</span>
            <span className="about-label-brand">TRAVEL HIGH 99</span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="about-main-heading">
            Discover The World
            <br />
            With <em>Travel High 99.</em>
          </h2>

          {/* DESCRIPTION */}
          <p className="about-main-text">
            Travel High 99 is your travel and visa assistance partner, helping
            you plan memorable journeys with convenience, personalized guidance
            and reliable support.
          </p>

          <p className="about-description">
            Whether you are planning a domestic holiday, an international
            vacation, a business trip or need visa application guidance, our
            team is here to make your travel planning easier.
          </p>

          {/* ABOUT POINTS */}
          <div className="about-points">
            <div className="about-point">
              <span className="about-check">✓</span>
              <div>
                <strong>Personalized Travel Assistance</strong>
                <small>Travel guidance based on your requirements.</small>
              </div>
            </div>

            <div className="about-point">
              <span className="about-check">✓</span>
              <div>
                <strong>Domestic & International Travel</strong>
                <small>Explore destinations across the world.</small>
              </div>
            </div>

            <div className="about-point">
              <span className="about-check">✓</span>
              <div>
                <strong>Visa Guidance & Support</strong>
                <small>Assistance with travel documentation.</small>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="about-actions">
            <a href="#enquiry" className="about-primary-btn">
              Talk to Our Team <span>→</span>
            </a>

            <a href="#services" className="about-secondary-link">
              Explore Our Services ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT TRAVEL99 */}
      {/* <section className="about-section section-space" id="about">
       
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1100"
            alt="Travel planning and exploring the world"
            loading="lazy"
          />

          <div className="about-image-overlay"></div>

          <div className="about-stamp">
            <strong>99</strong>
            <span>
              TRAVEL
              <br />
              YOUR WAY
            </span>
          </div>

          <div className="about-caption">
            <span>YOUR JOURNEY PARTNER</span>
            <strong>Explore More. Experience More.</strong>
          </div>

          <div className="about-floating-card">
            <span className="about-floating-icon">✈</span>
            <div>
              <strong>Travel Made Easier</strong>
              <small>Plan your next journey with us</small>
            </div>
          </div>
        </div>

        
        <div className="about-content">
          <span className="about-eyebrow">
            <em color="#031057">ABOUT</em> <em> TRAVEL HIGH 99</em>
          </span>

          <h2>
            Discover The World
            <br />
            With <em>Travel High 99.</em>
          </h2>

          <p className="about-main-text">
            Travel High 99 is your travel and visa assistance partner, helping
            you plan memorable journeys with convenience, personalized guidance
            and reliable support.
          </p>

          <p>
            Whether you are planning a domestic holiday, an international
            vacation, a business trip or need visa application guidance, our
            team is here to make your travel planning easier.
          </p>

         
          <div className="about-points">
            <div className="about-point">
              <span>✓</span>
              <div>
                <strong>Personalized Travel Assistance</strong>
                <small>Travel guidance based on your requirements.</small>
              </div>
            </div>

            <div className="about-point">
              <span>✓</span>
              <div>
                <strong>Domestic & International Travel</strong>
                <small>Explore destinations across the world.</small>
              </div>
            </div>

            <div className="about-point">
              <span>✓</span>
              <div>
                <strong>Visa Guidance & Support</strong>
                <small>Assistance with travel documentation.</small>
              </div>
            </div>
          </div>

         
          <div className="about-actions">
            <a href="#enquiry" className="about-primary-btn">
              Talk to Our Team <span>→</span>
            </a>

            <a href="#services" className="about-secondary-link">
              Explore Our Services ↗
            </a>
          </div>
        </div>
      </section> */}

      {/* VISA SERVICES */}
      <section className="visa-section section-space" id="visa">
        <div className="section-heading">
          <span className="eyebrow">TRAVEL WITH CONFIDENCE</span>
          <h2>Visa Services & Assistance</h2>
          <p>
            Guidance for different travel purposes and documentation
            requirements.
          </p>
        </div>

        <div className="visa-grid">
          {visaServices.map((service) => (
            <article className="visa-card" key={service.title}>
              <div className="visa-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#enquiry">
                Enquire Now <span>↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="visa-disclaimer">
          Visa decisions are made by the respective embassy or immigration
          authority. Travel99 provides application guidance and assistance, not
          a guarantee of visa approval.
        </p>
      </section>

      {/* ABOUT */}
      {/* <section className="about-section section-space" id="about">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1100"
            alt="Travel planning with a world map"
          />
          <div className="about-stamp">
            <strong>99</strong>
            <span>
              TRAVEL
              <br />
              YOUR WAY
            </span>
          </div>
          <div className="about-caption">
            <span>YOUR JOURNEY PARTNER</span>
            <strong>Let's make travel meaningful.</strong>
          </div>
        </div>
        <div className="about-content">
          <span className="eyebrow">ABOUT TRAVEL99</span>
          <h2>
            Thoughtful Planning.
            <br />
            <em>Memorable Journeys.</em>
          </h2>
          <p>
            Travel High 99 is a travel and visa assistance brand focused on
            helping customers plan journeys with clarity and convenience.
          </p>
          <p>
            From holiday ideas and flight enquiries to visa application
            guidance, our aim is to make the planning process easier at every
            step.
          </p>
          <div className="about-points">
            <span>✓ Personalized travel assistance</span>
            <span>✓ Domestic & international options</span>
            <span>✓ Clear enquiry and support process</span>
          </div>
          <a href="#enquiry" className="primary-btn">
            Talk to Our Team <span>→</span>
          </a>
        </div>
      </section> */}

      {/* TRAVEL SERVICES */}
      <section className="travel-services section-space" id="services">
        <div className="section-heading">
          <span className="eyebrow">MORE THAN JUST VISA SUPPORT</span>
          <h2>Complete Travel Solutions</h2>
          <p>Helpful services for planning your next trip.</p>
        </div>
        <div className="travel-service-grid">
          {travelServices.map((service) => (
            <article className="travel-service-card" key={service.title}>
              <span>{service.icon}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <a href="#enquiry" aria-label={`Enquire about ${service.title}`}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* FLIGHT BOOKING SECTION */}

      <section className="all-services-booking" id={activeService.id}>
        <section className="flight-booking-section">
          <div className="flight-booking-overlay"></div>

          <div className="flight-booking-container">
            {/* LEFT CONTENT */}
            <div className="flight-booking-content">
              <span className="flight-top-label">
                {activeService.icon} TRAVEL HIGH 99 · OUR SERVICES
              </span>

              <h2>
                {activeService.heading.split(" ").slice(0, 2).join(" ")}
                <br />
                <span>
                  {activeService.heading.split(" ").slice(2).join(" ")}
                </span>
              </h2>

              <div className="flight-heading-line"></div>

              <h3>{activeService.subtitle}</h3>

              <p>{activeService.description}</p>

              <div className="flight-benefits">
                <div className="flight-benefit">
                  <span>✓</span>
                  <div>
                    <strong>Personalized Assistance</strong>
                    <small>Support based on your requirements</small>
                  </div>
                </div>

                <div className="flight-benefit">
                  <span>✓</span>
                  <div>
                    <strong>Domestic & International</strong>
                    <small>Travel solutions for different destinations</small>
                  </div>
                </div>

                <div className="flight-benefit">
                  <span>✓</span>
                  <div>
                    <strong>Customer Support</strong>
                    <small>Our team is here to assist you</small>
                  </div>
                </div>
              </div>

              <a href="#contact" className="flight-explore-btn">
                Contact Our Team <span>→</span>
              </a>
            </div>

            {/* RIGHT DYNAMIC FORM */}
            <div className="flight-booking-card">
              <div className="flight-card-header">
                <div>
                  <span>{activeService.icon}</span>
                  <h3>{activeService.title}</h3>
                </div>

                <small>PLAN YOUR TRIP</small>
              </div>

              <p className="flight-card-subtitle">
                Fill in your details to send an enquiry.
              </p>

              <form onSubmit={submitServiceEnquiry}>
                <div className="flight-form-grid">
                  {/* COMMON FIELDS */}
                  <div className="flight-input-group">
                    <label>FULL NAME *</label>
                    <div className="flight-input-box">
                      <span>👤</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="flight-input-group">
                    <label>EMAIL ADDRESS *</label>
                    <div className="flight-input-box">
                      <span>✉️</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="flight-input-group">
                    <label>MOBILE NUMBER *</label>
                    <div className="flight-input-box">
                      <span>☎</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter mobile number"
                        pattern="[0-9+() -]{8,18}"
                        required
                      />
                    </div>
                  </div>

                  {/* SERVICE-SPECIFIC FIELDS */}
                  {activeService.fields.map((field) => (
                    <div className="flight-input-group" key={field.name}>
                      <label>
                        {field.label}
                        {field.required ? " *" : ""}
                      </label>

                      <div className="flight-input-box">
                        <span>
                          {field.type === "date"
                            ? "📅"
                            : field.type === "time"
                              ? "🕒"
                              : field.type === "select"
                                ? "▾"
                                : "📍"}
                        </span>

                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            defaultValue=""
                            required={field.required || false}
                          >
                            <option value="" disabled>
                              Select {field.label.toLowerCase()}
                            </option>

                            {field.options.map((option) => (
                              <option value={option} key={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type || "text"}
                            name={field.name}
                            placeholder={field.placeholder || ""}
                            required={field.required || false}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flight-input-group service-message-field">
                  <label>ADDITIONAL REQUIREMENTS</label>
                  <textarea
                    name="additionalRequirements"
                    rows="3"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="flight-search-btn"
                  disabled={submitting}
                >
                  {submitting
                    ? "Submitting..."
                    : `Send ${activeService.title} Enquiry →`}
                </button>

                {formMessage && (
                  <p className="form-message" role="status">
                    {formMessage}
                  </p>
                )}

                <p className="flight-card-note">
                  Our team will contact you regarding your enquiry.
                </p>
              </form>
            </div>
          </div>

          <div className="flight-bottom-strip">
            <span>✈ DELHI</span>
            <span>✦ INDIA</span>
            <span>✦ DUBAI</span>
            <span>✦ EUROPE</span>
            <span>✦ USA</span>
            <span>✦ WORLDWIDE</span>
          </div>
        </section>
      </section>

      {/* <section className="flight-booking-section" id="flight-booking">
        <div className="flight-booking-overlay"></div>

        <div className="flight-booking-container">
         
          <div className="flight-booking-content">
            <span className="flight-top-label">✈ YOUR JOURNEY STARTS HERE</span>

            <h2>
              BOOK YOUR
              <br />
              NEXT <span>JOURNEY</span>
            </h2>

            <div className="flight-heading-line"></div>

            <h3>
              Delhi to <span>Worldwide</span>
            </h3>

            <p>
              Explore the world with Travel High 99. Book your flights with
              convenient travel assistance and make your next journey simple and
              memorable.
            </p>

            <div className="flight-benefits">
              <div className="flight-benefit">
                <span>✓</span>
                <div>
                  <strong>Domestic Flights</strong>
                  <small>Travel across India</small>
                </div>
              </div>

              <div className="flight-benefit">
                <span>✓</span>
                <div>
                  <strong>International Flights</strong>
                  <small>Explore destinations worldwide</small>
                </div>
              </div>

              <div className="flight-benefit">
                <span>✓</span>
                <div>
                  <strong>Travel Assistance</strong>
                  <small>Support for your flight enquiries</small>
                </div>
              </div>
            </div>

            <a href="#enquiry" className="flight-explore-btn">
              Book Your Flight <span>→</span>
            </a>
          </div>

      
          <div className="flight-booking-card">
            <div className="flight-card-header">
              <div>
                <span>✈</span>
                <h3>Flight Booking</h3>
              </div>
              <small>PLAN YOUR TRIP</small>
            </div>

            <p className="flight-card-subtitle">
              Start planning your next adventure.
            </p>

            <div className="flight-trip-types">
              <span className="flight-trip-active">One Way</span>
              <span>Round Trip</span>
            </div>

            <div className="flight-form-grid">
              <div className="flight-input-group">
                <label>FROM</label>
                <div className="flight-input-box">
                  <span>✈</span>
                  <input type="text" placeholder="Delhi (DEL)" />
                </div>
              </div>

              <div className="flight-input-group">
                <label>TO</label>
                <div className="flight-input-box">
                  <span>📍</span>
                  <input type="text" placeholder="Where to?" />
                </div>
              </div>

              <div className="flight-input-group">
                <label>DEPARTURE DATE</label>
                <div className="flight-input-box">
                  <span>📅</span>
                  <input type="date" />
                </div>
              </div>

              <div className="flight-input-group">
                <label>RETURN DATE</label>
                <div className="flight-input-box">
                  <span>📅</span>
                  <input type="date" />
                </div>
              </div>

              <div className="flight-input-group">
                <label>TRAVELLERS</label>
                <div className="flight-input-box">
                  <span>👤</span>
                  <select defaultValue="1 Traveller">
                    <option>1 Traveller</option>
                    <option>2 Travellers</option>
                    <option>3 Travellers</option>
                    <option>4 Travellers</option>
                    <option>5+ Travellers</option>
                  </select>
                </div>
              </div>

              <div className="flight-input-group">
                <label>CLASS</label>
                <div className="flight-input-box">
                  <span>💺</span>
                  <select defaultValue="Economy">
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
            </div>

            <a href="#enquiry" className="flight-search-btn">
              Send Flight Enquiry <span>→</span>
            </a>

            <p className="flight-card-note">
              Our team will assist you with your flight enquiry.
            </p>
          </div>
        </div>

        
        <div className="flight-bottom-strip">
          <span>✈ DELHI</span>
          <span>✦ INDIA</span>
          <span>✦ DUBAI</span>
          <span>✦ EUROPE</span>
          <span>✦ USA</span>
          <span>✦ WORLDWIDE</span>
        </div>
      </section> */}

      {/* DESTINATIONS */}
      <section className="destination-section section-space" id="destinations">
        <div className="section-heading">
          <span className="eyebrow">FIND YOUR NEXT ADVENTURE</span>
          <h2>Explore Popular Destinations</h2>
          <p>From relaxing beaches to exciting international city breaks.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((place, index) => (
            <article
              className="destination-card"
              key={place.destinationId || place.id || place.name || index}
            >
              <img
                src={
                  place.imageUrl ||
                  place.ImageUrl ||
                  place.image ||
                  defaultDestinations[index % defaultDestinations.length].image
                }
                alt={place.name || place.Name || "Travel destination"}
                loading="lazy"
              />
              <div className="destination-overlay">
                <span>{place.country || place.Country || "Explore"}</span>
                <h3>{place.name || place.Name || "Destination"}</h3>
                <a href="#enquiry">
                  Plan This Trip <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages-section section-space" id="packages">
        <div className="section-heading">
          <span className="eyebrow">CURATED TRAVEL IDEAS</span>
          <h2>Featured Holiday Packages</h2>
          <p>
            Explore sample holiday ideas or contact us for a personalized
            quotation.
          </p>
        </div>

        {loadingPackages ? (
          <div className="package-status">Loading holiday packages...</div>
        ) : (
          <div className="package-grid">
            {packages.map((item, index) => (
              <article
                className="package-card"
                key={item.packageId || item.PackageId || item.id || index}
              >
                <div className="package-image">
                  <img
                    src={
                      item.imageUrl ||
                      item.ImageUrl ||
                      item.image ||
                      defaultPackages[index % defaultPackages.length].imageUrl
                    }
                    alt={
                      item.packageName || item.PackageName || "Holiday package"
                    }
                    loading="lazy"
                  />
                  <span className="package-duration">
                    {item.duration || item.Duration || "Holiday Package"}
                  </span>
                </div>
                <div className="package-content">
                  <span className="package-location">
                    ⌖{" "}
                    {item.destination ||
                      item.Destination ||
                      "Explore destination"}
                  </span>
                  <h3>
                    {item.packageName ||
                      item.PackageName ||
                      item.name ||
                      "Holiday Package"}
                  </h3>
                  <div className="package-bottom">
                    <div>
                      <small>PACKAGE PRICE</small>
                      <strong>
                        {item.price || item.Price || "On Request"}
                      </strong>
                    </div>
                    <a href="#enquiry">
                      Enquire <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="center-action">
          <a href="#enquiry" className="primary-btn">
            Request a Custom Package <span>→</span>
          </a>
        </div>
      </section>

      {/* WHY TRAVEL99 */}
      <section className="why-section section-space">
        <div className="why-heading">
          <span className="eyebrow">THE TRAVEL99 DIFFERENCE</span>
          <h2>
            A better way to
            <br />
            <em>plan your journey.</em>
          </h2>
          <p>
            Practical guidance, thoughtful planning and support for your travel
            enquiries.
          </p>
          <a href="#enquiry" className="outline-btn">
            Start Planning
          </a>
        </div>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article className="why-card" key={benefit.number}>
              <strong>{benefit.number}</strong>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ENQUIRY FORM */}
      {/* <section className="enquiry-section section-space" id="enquiry">
        <div className="enquiry-info">
          <span className="eyebrow">LET'S PLAN YOUR JOURNEY</span>
          <h2>
            Where would you like to go <em>next?</em>
          </h2>
          <p>
            Share a few details and our team can get in touch about your travel
            or visa enquiry.
          </p>
          <div className="enquiry-contact">
            <a href="tel:+919871735122">
              <span>☎</span>
              <div>
                <small>CALL OUR TEAM</small>
                <strong>+91 9871735122</strong>
                <strong>+91 9667859420</strong>
              </div>
            </a>
            <a href="mailto:travelhigh99@gmail.com">
              <span>✉</span>
              <div>
                <small>EMAIL US</small>
                <strong>travelhigh99@gmail.com</strong>
              </div>
            </a>
          </div>
        </div>

        <form className="enquiry-form" onSubmit={submitEnquiry}>
          <h3>Send Your Enquiry</h3>
          <p>Fields marked * are required.</p>
          <div className="form-grid">
            <label>
              Full Name *
              <input
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="Enter your name"
                required
              />
            </label>
            <label>
              Email Address *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateForm}
                placeholder="Enter your email"
                required
              />
            </label>
            <label>
              Phone Number *
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateForm}
                placeholder="Enter phone number"
                pattern="[0-9+() -]{8,18}"
                required
              />
            </label>
            <label>
              Destination
              <input
                name="destination"
                value={form.destination}
                onChange={updateForm}
                placeholder="Where do you want to go?"
              />
            </label>
            <label>
              Travel Date
              <input
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={updateForm}
                min={new Date().toISOString().split("T")[0]}
              />
            </label>
            <label>
              Travellers
              <select
                name="travellers"
                value={form.travellers}
                onChange={updateForm}
              >
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5+">5+ Travellers</option>
              </select>
            </label>
            <label className="form-full">
              Service Required
              <select name="service" value={form.service} onChange={updateForm}>
                <option>Holiday Package</option>
                <option>Tourist Visa</option>
                <option>Business Visa</option>
                <option>Student Visa</option>
                <option>Work Visa</option>
                <option>Flight Booking</option>
                <option>Hotel Booking</option>
                <option>Document Attestation</option>
                <option>Other</option>
              </select>
            </label>
            <label className="form-full">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                rows="4"
                placeholder="Tell us about your travel requirements..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="primary-btn form-submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Enquiry →"}
          </button>
          {formMessage && (
            <p className="form-message" role="status">
              {formMessage}
            </p>
          )}
        </form>
      </section> */}

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-title">
            <span>LET'S TALK ABOUT YOUR NEXT TRIP</span>
            <h2>
              Let's Plan Your <strong>Next Journey</strong>
            </h2>
            <p>
              Share your travel plans with us. We would be happy to hear from
              you.
            </p>
          </div>

          <div className="contact-main-layout">
            <div className="contact-info-panel">
              <h3>Contact Information</h3>
              <p>Reach out to our New Delhi office.</p>

              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Our Location</h4>
                  <p>
                    304, 3rd Floor, 5096 Main Bazar, Pahar Ganj, New Delhi -
                    110055
                  </p>
                </div>
              </div>

              {/* EMAIL ADDRESS */}
              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email Address</h4>
                  <a href="mailto:travelhigh99@gmail.com">
                    travelhigh99@gmail.com
                  </a>
                  <br />
                  <a href="mailto:info@travelhigh99.com">
                    info@travelhigh99.com
                  </a>
                </div>
              </div>

              {/* PHONE NUMBER */}
              <div className="contact-info-item">
                <div className="contact-icon">☎️</div>
                <div>
                  <h4>Phone Number</h4>
                  <a href="tel:+919871735122">+91 9871735122</a>
                  <br />
                  <a href="tel:+919667859420">+91 9667859420</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="contact-follow">
                <h4>Follow Us</h4>
                <div className="contact-social">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    f
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ◎
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    in
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-map-panel">
              <div className="contact-map-heading">
                <div>
                  <h3>Find Us Here</h3>
                  <p>Visit our office in New Delhi</p>
                </div>
                <span>📍</span>
              </div>
              <div className="contact-map-box">
                <iframe
                  src="https://www.google.com/maps?q=304%2C+3RD+FLOOR%2C+5096+MAIN+BAZAR%2C+PAHAR+GANJ%2C+NEW+DELHI%2C+Delhi%2C+110055&output=embed"
                  title="Travel99 Office Location"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                className="contact-directions-btn"
                href="https://www.google.com/maps/search/?api=1&query=304%2C+3RD+FLOOR%2C+5096+MAIN+BAZAR%2C+PAHAR+GANJ%2C+NEW+DELHI%2C+110055"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div>
          <span>YOUR NEXT JOURNEY IS WAITING</span>
          <h2>Let's make it happen with Travel High 99.</h2>
        </div>
        <a href="tel:+919871735122" className="cta-call">
          Call Us <span>↗</span>
        </a>
      </section>
    </>
  );
}

export default Home;
