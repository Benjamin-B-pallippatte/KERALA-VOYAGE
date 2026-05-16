import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    people: "2",
    travelDates: "",
    message: "",
  });
  const [bookingStatus, setBookingStatus] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const destinations = [
    {
      title: "Alleppey Backwaters",
      description: "Cruise the serene backwaters and stay aboard a traditional houseboat.",
      image: "/images/house boat.jpg",
      path: "/destinations/alleppey",
      service: "Alleppey Backwaters",
    },
    {
      title: "Munnar Hills",
      description: "Wander through tea plantations, waterfalls, and scenic hill trails.",
      image: "/images/munnar.jpg",
      path: "/destinations/munnar",
      service: "Munnar Hills",
    },
    {
      title: "Thekkady Wildlife",
      description: "Enjoy wildlife safaris, spice tours, and bamboo rafting in Periyar.",
      image: "/images/peppara_wildlife_sanctuary_1_4681.jpg",
      path: "/destinations/thekkady",
      service: "Thekkady Wildlife",
    },
    {
      title: "Kerala Waterfalls",
      description: "Visit stunning waterfalls and breath-taking natural viewpoints.",
      image: "/images/water fall kerala.jpg",
      path: "/destinations/waterfalls",
      service: "Kerala Waterfalls",
    },
  ];

  useEffect(() => {
    async function loadServices() {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        setServices(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Unable to fetch services:", error);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  function handleBookingChange(e) {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  }

  function selectServiceForBooking(serviceTitle) {
    setSelectedService(serviceTitle);
    setBookingData((prev) => ({ ...prev, service: serviceTitle }));
    setBookingStatus(`Selected ${serviceTitle} for booking.`);
  }

  async function handleBookingSubmit(e) {
    e.preventDefault();
    setBookingStatus("");
    setBookingLoading(true);

    try {
      // Prepare email content
      const subject = `Kerala Voyage booking request for ${bookingData.service}`;
      const body = `Hi there,\n\n` +
        `I would like to request a booking with the following details:\n` +
        `- Name: ${bookingData.name}\n` +
        `- Email: ${bookingData.email}\n` +
        `- Phone: ${bookingData.phone}\n` +
        `- Service: ${bookingData.service}\n` +
        `- Number of People: ${bookingData.people}\n` +
        `- Travel Dates: ${bookingData.travelDates}\n` +
        `- Special Requests: ${bookingData.message}\n\n` +
        `Please contact me at ${bookingData.email}.\n\nThanks,\n${bookingData.name}`;

      // Open email client
      if (bookingData.email) {
        const mailtoLink = `mailto:${encodeURIComponent(bookingData.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }

      // Also attempt API submission if available
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });
        const result = await response.json();
        if (!response.ok) {
          console.warn("API submission note:", result.error || "API booking not available");
        }
      } catch (apiError) {
        console.log("API booking skipped - email client used instead");
      }

      setBookingStatus("Your booking request has been prepared in your email client. Please send it to confirm.");
      setBookingData({
        name: "",
        email: "",
        phone: "",
        service: selectedService || "",
        people: "2",
        travelDates: "",
        message: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      setBookingStatus(error.message || "Booking submission failed.");
    } finally {
      setBookingLoading(false);
    }
  }

  return (
    <div className="services_section layout_padding">
      <div className="container">
        <div className="section_header">
          <h1 className="services_taital">Our Services</h1>
          <p className="section_description services_text">
            Discover the best of Kerala with our expertly crafted travel packages. From serene backwater cruises to thrilling wildlife safaris, we offer unforgettable experiences tailored to your preferences.
          </p>
        </div>
        {loading ? (
          <p className="services_text">Loading services...</p>
        ) : (
          <>
            <div className="services_section_2">
              <div className="row">
                {services.length ? (
                  services.map((service, index) => (
                    <div className="col-md-6 col-lg-3" key={`${service.title}-${index}`}>
                      <div className="service_box">
                        <img src={service.image} className="services_img" alt={service.title} />
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                        <div className="service-info">
                          <p><strong>Duration:</strong> {service.duration || "Flexible"}</p>
                          <p><strong>Group Size:</strong> {service.groupSize || "Any"}</p>
                          <p><strong>Budget:</strong> {service.budget || "Contact for details"}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="services_text">No services are available at the moment. Please check back later.</p>
                )}
              </div>
            </div>

            <div className="destinations_section layout_padding">
              <div className="section_header">
                <h1 className="services_taital">Destinations</h1>
                <p className="section_description services_text">
                  Explore Kerala's top destinations and choose the perfect trip for your travel style.
                </p>
              </div>
              <div className="services_section_2">
                <div className="row">
                  {destinations.map((destination) => (
                    <div className="col-md-6 col-lg-3" key={destination.title}>
                      <div className="service_box">
                        <img src={destination.image} className="services_img" alt={destination.title} />
                        <h4>{destination.title}</h4>
                        <p>{destination.description}</p>
                        <div className="btn_main">
                          <a href={destination.path}>Explore</a>
                          <button
                            type="button"
                            className="btn_book"
                            onClick={() => selectServiceForBooking(destination.service)}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="booking_section layout_padding">
              <div className="section_header">
                <h1 className="services_taital">Book Your Tickets</h1>
                <p className="section_description services_text">
                  Send a booking request and our travel team will get in touch to confirm your Kerala trip.
                </p>
              </div>
              <div className="booking_form">
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="email-bt"
                      placeholder="Your Name"
                      value={bookingData.name}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="email-bt"
                      placeholder="Your Email"
                      value={bookingData.email}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      className="email-bt"
                      placeholder="Phone Number"
                      value={bookingData.phone}
                      onChange={handleBookingChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="service"
                      className="email-bt"
                      placeholder="Selected Service"
                      value={bookingData.service}
                      onChange={handleBookingChange}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="people"
                      className="email-bt"
                      placeholder="Number of People"
                      value={bookingData.people}
                      onChange={handleBookingChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="travelDates"
                      className="email-bt"
                      placeholder="Travel Dates"
                      value={bookingData.travelDates}
                      onChange={handleBookingChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="massage-bt"
                      placeholder="Any special requests or details"
                      rows={4}
                      value={bookingData.message}
                      onChange={handleBookingChange}
                    />
                  </div>
                  <div className="send_btn">
                    <button type="submit" disabled={bookingLoading}>
                      {bookingLoading ? "Sending..." : "Submit Booking"}
                    </button>
                  </div>
                </form>
                {bookingStatus && <p className="services_text">{bookingStatus}</p>}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
