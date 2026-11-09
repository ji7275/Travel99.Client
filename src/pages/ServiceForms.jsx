import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ServiceForms.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

const services = [
  {
    id: "flight-booking",
    icon: "✈️",
    title: "Flight Booking",
    subtitle:
      "Book your domestic and international flights with Travel High 99.",
    fields: [
      {
        name: "from",
        label: "From City",
        placeholder: "e.g. Delhi",
        required: true,
      },
      {
        name: "destination",
        label: "To Destination",
        placeholder: "Where do you want to go?",
        required: true,
      },
      {
        name: "departureDate",
        label: "Departure Date",
        type: "date",
        required: true,
      },
      { name: "returnDate", label: "Return Date", type: "date" },
      {
        name: "tripType",
        label: "Trip Type",
        type: "select",
        options: ["One Way", "Round Trip"],
        required: true,
      },
      {
        name: "travellers",
        label: "Travellers",
        type: "select",
        options: ["1", "2", "3", "4", "5+"],
        required: true,
      },
      {
        name: "travelClass",
        label: "Travel Class",
        type: "select",
        options: [
          "Economy",
          "Premium Economy",
          "Business Class",
          "First Class",
        ],
      },
    ],
  },
  {
    id: "hotel-booking",
    icon: "🏨",
    title: "Hotel Booking",
    subtitle: "Find comfortable accommodation for your next trip.",
    fields: [
      {
        name: "destination",
        label: "Hotel Destination",
        placeholder: "Enter city or destination",
        required: true,
      },
      { name: "checkIn", label: "Check-in Date", type: "date", required: true },
      {
        name: "checkOut",
        label: "Check-out Date",
        type: "date",
        required: true,
      },
      {
        name: "rooms",
        label: "Rooms",
        type: "select",
        options: ["1", "2", "3", "4", "5+"],
        required: true,
      },
      {
        name: "guests",
        label: "Guests",
        type: "select",
        options: ["1", "2", "3", "4", "5+"],
        required: true,
      },
      {
        name: "hotelCategory",
        label: "Hotel Category",
        type: "select",
        options: ["Budget", "3 Star", "4 Star", "5 Star", "Luxury"],
      },
    ],
  },
  {
    id: "holiday-packages",
    icon: "🌴",
    title: "Holiday Packages",
    subtitle: "Plan a memorable domestic or international holiday.",
    fields: [
      {
        name: "destination",
        label: "Preferred Destination",
        placeholder: "e.g. Goa, Dubai, Thailand",
        required: true,
      },
      {
        name: "travelDate",
        label: "Travel Date",
        type: "date",
        required: true,
      },
      {
        name: "duration",
        label: "Trip Duration",
        type: "select",
        options: ["2-3 Days", "4-5 Days", "6-7 Days", "8-10 Days", "10+ Days"],
      },
      {
        name: "travellers",
        label: "Total Travellers",
        type: "select",
        options: ["1", "2", "3", "4", "5+"],
        required: true,
      },
      {
        name: "budget",
        label: "Approximate Budget",
        type: "select",
        options: ["Economy", "Standard", "Premium", "Luxury"],
        required: true,
      },
      {
        name: "packageType",
        label: "Package Type",
        type: "select",
        options: ["Family", "Honeymoon", "Adventure", "Friends", "Solo Trip"],
      },
    ],
  },
  {
    id: "visa-assistance",
    icon: "🛂",
    title: "Visa Assistance",
    subtitle: "Get guidance for your visa application and travel documents.",
    fields: [
      {
        name: "destination",
        label: "Country You Want to Visit",
        placeholder: "e.g. USA, Dubai, UK",
        required: true,
      },
      {
        name: "visaType",
        label: "Visa Type",
        type: "select",
        options: [
          "Tourist Visa",
          "Business Visa",
          "Student Visa",
          "Work Visa",
          "Transit Visa",
          "Other",
        ],
        required: true,
      },
      { name: "travelDate", label: "Expected Travel Date", type: "date" },
      {
        name: "applicants",
        label: "Number of Applicants",
        type: "select",
        options: ["1", "2", "3", "4", "5+"],
        required: true,
      },
      {
        name: "passportStatus",
        label: "Passport Availability",
        type: "select",
        options: ["Valid Passport", "Passport Applied", "Need Guidance"],
      },
      {
        name: "visaStatus",
        label: "Previous Visa Status",
        type: "select",
        options: [
          "First Time Applicant",
          "Visa Approved Previously",
          "Visa Rejected Previously",
        ],
      },
    ],
  },
  {
    id: "travel-insurance",
    icon: "🛡️",
    title: "Travel Insurance",
    subtitle: "Enquire about travel insurance options for your journey.",
    fields: [
      {
        name: "destination",
        label: "Travel Destination",
        placeholder: "Enter destination",
        required: true,
      },
      {
        name: "travelDate",
        label: "Travel Start Date",
        type: "date",
        required: true,
      },
      {
        name: "returnDate",
        label: "Travel End Date",
        type: "date",
        required: true,
      },
      {
        name: "travellers",
        label: "Number of Travellers",
        type: "select",
        options: ["1", "2", "3", "4", "5+"],
        required: true,
      },
      {
        name: "insuranceType",
        label: "Insurance Type",
        type: "select",
        options: ["Individual", "Family", "Senior Citizen", "Student", "Group"],
        required: true,
      },
      {
        name: "coverage",
        label: "Coverage Preference",
        type: "select",
        options: ["Basic", "Standard", "Comprehensive", "Need Guidance"],
      },
    ],
  },
  {
    id: "airport-transfers",
    icon: "🚘",
    title: "Airport Transfers",
    subtitle: "Enquire about convenient airport pickup and drop services.",
    fields: [
      {
        name: "airport",
        label: "Airport Name",
        placeholder: "e.g. Delhi Airport",
        required: true,
      },
      {
        name: "pickupLocation",
        label: "Pickup Location",
        placeholder: "Enter pickup address",
        required: true,
      },
      {
        name: "dropLocation",
        label: "Drop Location",
        placeholder: "Enter drop address",
        required: true,
      },
      {
        name: "pickupDate",
        label: "Pickup Date",
        type: "date",
        required: true,
      },
      {
        name: "pickupTime",
        label: "Pickup Time",
        type: "time",
        required: true,
      },
      {
        name: "passengers",
        label: "Number of Passengers",
        type: "select",
        options: ["1", "2", "3", "4", "5", "6+"],
        required: true,
      },
      {
        name: "vehicleType",
        label: "Vehicle Preference",
        type: "select",
        options: ["Sedan", "SUV", "Innova", "Tempo Traveller", "Need Guidance"],
      },
    ],
  },
];

function ServiceEnquiryForm({ service }) {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const details = Object.fromEntries(formData.entries());

    const payload = {
      name: details.name,
      email: details.email,
      phone: details.phone,
      destination: details.destination || "",
      travelDate:
        details.travelDate || details.departureDate || details.checkIn || "",
      travellers:
        details.travellers || details.guests || details.passengers || "1",
      service: service.title,
      message: Object.entries(details)
        .filter(([key]) => !["name", "email", "phone"].includes(key))
        .map(([key, value]) => `${key}: ${value}`)
        .join(", "),
    };

    try {
      const response = await fetch(`${API_BASE}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Enquiry could not be submitted.");
      }

      setMessage("Thank you! Your enquiry has been submitted successfully.");
      event.currentTarget.reset();
    } catch (error) {
      console.error("Enquiry submission error:", error);
      setMessage(
        "Enquiry submit nahi ho payi. Please call +91 9871735122 or email travelhigh99@gmail.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="service-form-section" id={service.id}>
      <div className="service-form-container">
        <div className="service-form-info">
          <span className="service-form-eyebrow">
            TRAVEL HIGH 99 · OUR SERVICES
          </span>
          <div className="service-form-icon">{service.icon}</div>
          <h2>{service.title}</h2>
          <p>{service.subtitle}</p>

          <div className="service-form-points">
            <div>
              <span>✓</span> Personalized assistance
            </div>
            <div>
              <span>✓</span> Domestic & international support
            </div>
            <div>
              <span>✓</span> Easy enquiry process
            </div>
          </div>

          <div className="service-contact-box">
            <small>NEED HELP? CONTACT OUR TEAM</small>
            <a href="tel:+919871735122">☎ +91 9871735122</a>
            <a href="mailto:travelhigh99@gmail.com">✉ travelhigh99@gmail.com</a>
          </div>
        </div>

        <form className="service-enquiry-form" onSubmit={handleSubmit}>
          <div className="service-form-heading">
            <span>START PLANNING</span>
            <h3>Send Your {service.title} Enquiry</h3>
            <p>Fill in your details and our team will contact you.</p>
          </div>

          <div className="service-fields-grid">
            <label>
              Full Name *
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </label>

            <label>
              Email Address *
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              Mobile Number *
              <input
                name="phone"
                type="tel"
                placeholder="Enter mobile number"
                pattern="[0-9+() -]{8,18}"
                required
              />
            </label>

            {service.fields.map((field) => (
              <label key={field.name}>
                {field.label}
                {field.required ? " *" : ""}
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required || false}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select {field.label}
                    </option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field.name}
                    type={field.type || "text"}
                    placeholder={field.placeholder || ""}
                    required={field.required || false}
                  />
                )}
              </label>
            ))}

            <label className="service-field-full">
              Additional Requirements
              <textarea
                name="additionalRequirements"
                rows="4"
                placeholder="Tell us more about your requirements..."
              />
            </label>
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Enquiry  →"}
          </button>

          {message && (
            <p className="service-form-message" role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default function ServiceForms() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.substring(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="all-service-forms">
      {services.map((service) => (
        <ServiceEnquiryForm key={service.id} service={service} />
      ))}
    </div>
  );
}
