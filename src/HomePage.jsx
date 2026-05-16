import { useEffect, useState } from "react";
import SearchDestination from "./SearchDestination";

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);
  const [services, setServices] = useState([]);
  const [testimonials] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingTestimonials] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDestination, setBookingDestination] = useState(null);
  const [bookingDays, setBookingDays] = useState(3);
  const [bookingMembers, setBookingMembers] = useState(2);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");

  const openBookingModal = (destination) => {
    setBookingDestination(destination);
    setBookingDays(3);
    setBookingMembers(2);
    setBookingDate("");
    setBookingEmail("");
    setBookingNotes("");
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
    setBookingDestination(null);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    const bookingDetails = {
      destination: bookingDestination?.title,
      days: bookingDays,
      members: bookingMembers,
      date: bookingDate,
      email: bookingEmail,
      notes: bookingNotes,
    };

    const subject = `Kerala Voyage booking request for ${bookingDetails.destination}`;
    const body = `Hi there,%0D%0A%0D%0A` +
      `I would like to request a booking for *${bookingDetails.destination}* with the following details:%0D%0A` +
      `- Days: ${bookingDetails.days}%0D%0A` +
      `- Members: ${bookingDetails.members}%0D%0A` +
      `- Start date: ${bookingDetails.date || "Not specified"}%0D%0A` +
      `- Special requests: ${bookingDetails.notes || "None"}%0D%0A%0D%0A` +
      `Please contact me at ${bookingDetails.email}.%0D%0A%0D%0AThanks,%0D%0A${bookingDetails.email}`;

    if (bookingDetails.email) {
      const mailtoLink = `mailto:${encodeURIComponent(bookingDetails.email)}?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailtoLink;
    }

    alert(`Thanks! A booking email draft has been prepared for ${bookingDetails.email}. Please check your email client to send it.`);
    closeBookingModal();
  };

  const destinations = [
    {
      title: "Alleppey Backwaters",
      description: "Cruise the tranquil backwaters on a traditional houseboat and enjoy Kerala cuisine.",
      image: "/images/house boat.jpg",
      path: "/destinations/alleppey",
      service: "Alleppey Backwaters",
    },
    {
      title: "Munnar Hills",
      description: "Explore lush tea gardens, misty landscapes, and hill station adventures.",
      image: "/images/munnar.jpg",
      path: "/destinations/munnar",
      service: "Munnar Hills",
    },
    {
      title: "Thekkady Wildlife",
      description: "See wildlife safaris, bamboo rafting, and spice plantation tours in Periyar.",
      image: "/images/peppara_wildlife_sanctuary_1_4681.jpg",
      path: "/destinations/thekkady",
      service: "Thekkady Wildlife",
    },
    {
      title: "Kerala Waterfalls",
      description: "Discover scenic waterfalls, nature trails, and refreshing adventure stops.",
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
        console.error("Failed to load services:", error);
      } finally {
        setLoadingServices(false);
      }
    }

 

    loadServices();
  
  }, []);

  return (
    <>
      <div className="banner_section layout_padding">
        <video
          className="hero_video"
          src="C:\Users\dbijk\OneDrive\public\images\WhatsApp Video 2026-05-15 at 11.03.08 AM.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="banner_overlay" aria-hidden="true" />
        <div className="container">
          <h1 className="banner_taital"></h1>
          <p className="banner_text" color="white">
            Discover the magic of Kerala through our signature houseboat video experience.
            This is your first glimpse into the lush backwaters, hill stations, and vibrant culture.
          </p>
          <SearchDestination />
        </div>
      </div>

      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="about_taital">About Us</h1>
                <p className="about_text">
                  We are a Kerala travel specialist bringing the best of God's Own Country to life.
                  From houseboats to hill stations, our expert planning ensures a memorable voyage.
                </p>
                {showMore && (
                  <div className="about_details">
                    <p>
                      <strong>Our Story:</strong> Founded by passionate Kerala enthusiasts, Kerala Voyage has been
                      creating unforgettable travel experiences for over a decade. We specialize in authentic,
                      sustainable tourism that showcases the true essence of Kerala.
                    </p>
                    <p>
                      <strong>Our Expertise:</strong> Our team of local guides and travel consultants have deep
                      knowledge of Kerala's hidden gems, cultural traditions, and best-kept secrets. We offer
                      personalized itineraries for families, couples, and adventure seekers.
                    </p>
                    <p>
                      <strong>Our Commitment:</strong> We believe in responsible tourism that benefits local
                      communities and preserves Kerala's natural beauty. All our packages include eco-friendly
                      accommodations and support local artisans and farmers.
                    </p>
                    <p>
                      <strong>Why Choose Us:</strong> Direct partnerships with local operators, 24/7 support,
                      flexible itineraries, and a passion for creating magical memories that last a lifetime.
                    </p>
                  </div>
                )}
                <div className="readmore_bt">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowMore(!showMore); }}>
                    {showMore ? "Read Less" : "Read More"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_right_0">
              <div>
                <img src="/images/house%20boat.jpg" className="about_img" alt="About Kerala Voyage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services_section layout_padding">
        <div className="container">
          <h1 className="services_taital" color="white">Services</h1>
          <p className="services_text">
            Our tours combine adventure, culture, and authentic Kerala experiences in one package.
          </p>
          {loadingServices ? (
            <p className="services_text">Loading services...</p>
          ) : (
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
                        <div className="btn_main">
                          <a
                            href={service.link?.startsWith("/contact") ? `/contact?service=${encodeURIComponent(service.title)}` : service.link}
                          >
                            {service.link === "/contact" ? "Book Now" : "Explore"}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Unlock seamless travel experiences with our curated services, designed to take you from daydreaming to exploring the world’s most breathtaking destinations. Whether you seek thrilling adventures or tranquil escapes, we provide expert guidance, secure booking, and tailored itineraries to ensure your journey is as smooth as it is memorable</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="destinations_section layout_padding">
        <div className="container">
          <div className="section_header">
            <h1 className="services_taital">Popular Destinations</h1>
            <p className="services_text">
              Choose from our curated Kerala destinations and book tickets for your preferred journey.
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
                        onClick={() => openBookingModal(destination)}
                      >
                        Book Tickets
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="blog_section layout_padding">
        <div className="container">
          <h6 className="blog_taital" color="#352261">See Our Video</h6>
          <p className="blog_text">
            Watch a glimpse of Kerala's serene backwaters, spice gardens, and scenic mountain retreats.
          </p>
          <div className="video_container_wrapper">
            <div className="video_container">
              <video
                controls
                preload="metadata"
                src="/images/WhatsApp Video 2026-05-15 at 11.03.08 AM.mp4"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="client_section layout_padding">
        <div className="container">
          <h1 className="client_taital"></h1>
          <p className="client_subtitle"></p>
          {loadingTestimonials ? (
            <p className="services_text"></p>
          ) : (
            <div className="client_section_2">
              <div className="row">
                {testimonials.length ? testimonials.map((testimonial, index) => (
                  <div className="col-md-4" key={`${testimonial.name}-${index}`}>
                    <div className="testimonial_card">
                      <div className="testimonial_content">
                        <div className="rating">
                          {Array.from({ length: testimonial.rating || 5 }).map((_, starIndex) => (
                            <i className="fa fa-star" key={starIndex}></i>
                          ))}
                        </div>
                        <p className="testimonial_text">{testimonial.message}</p>
                        <div className="client_info">
                          <div className="client_img">
                            <img src={testimonial.image} alt={testimonial.name} />
                          </div>
                          <div className="client_details">
                            <h4 className="client_name">{testimonial.name}</h4>
                            <p className="customer_text">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : (
                  <p className="services_text"></p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="choose_section layout_padding">
        <div className="container">
          <h1 className="choose_taital">Why Choose Us</h1>
          <p className="choose_text">
            Kerala Voyage delivers exceptional travel experiences through local expertise, thoughtful planning,
            and sincere hospitality. Every journey is crafted to be authentic, effortless, and memorable.
          </p>
          <div className="choose_highlights">
            <div className="highlight_item">
              <h4>Local Expertise</h4>
              <p>Our team is rooted in Kerala and knows the best routes, seasonal experiences, and hidden gems.</p>
            </div>
            <div className="highlight_item">
              <h4>Bespoke Itineraries</h4>
              <p>We tailor every package to match your interests, pace, budget, and travel style.</p>
            </div>
            <div className="highlight_item">
              <h4>Trusted Partners</h4>
              <p>We work with vetted hotels, guides, and transport providers for quality and reliability.</p>
            </div>
            <div className="highlight_item">
              <h4>Seamless Support</h4>
              <p>Enjoy 24/7 assistance, clear communication, and proactive support before, during, and after your trip.</p>
            </div>
          </div>
          <div className="row choose_cards_row">
            <div className="col-md-6 col-lg-4">
              <div className="choose_box">
                <div className="choose_icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="choose_image">
                  <img src="/images/house boat.jpg" alt="Curated Kerala Journeys" />
                </div>
                <h4>Curated Kerala Journeys</h4>
                <p>Authentic routes combining backwaters, hills, wildlife, and culture for the perfect Kerala introduction.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="choose_box">
                <div className="choose_icon">
                  <i className="fa fa-user-friends"></i>
                </div>
                <div className="choose_image">
                  <img src="/images/munnar.jpg" alt="Personalized Travel Service" />
                </div>
                <h4>Personalized Travel Service</h4>
                <p>Dedicated planning, flexible travel dates, and tailor-made packages for families, couples, and groups.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="choose_box">
                <div className="choose_icon">
                  <i className="fa fa-clock"></i>
                </div>
                <div className="choose_image">
                  <img src="/images/peppara_wildlife_sanctuary_1_4681.jpg" alt="24-7 Travel Assistance" />
                </div>
                <h4>24/7 Travel Assistance</h4>
                <p>Our support team is available around the clock so your journey is smooth and worry-free.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="choose_box">
                <div className="choose_icon">
                  <i className="fa fa-leaf"></i>
                </div>
                <div className="choose_image">
                  <img src="/images/kerala.jpg" alt="Responsible Tourism" />
                </div>
                <h4>Responsible Tourism</h4>
                <p>We promote eco-friendly stays, community engagement, and travel choices that preserve Kerala’s beauty.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="choose_box">
                <div className="choose_icon">
                  <i className="fa fa-wallet"></i>
                </div>
                <div className="choose_image">
                  <img src="/images/logo.png" alt="Transparent Pricing" />
                </div>
                <h4>Transparent Pricing</h4>
                <p>No hidden fees, clear package details, and value-driven offers for a premium Kerala escape.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="choose_box">
                <div className="choose_icon">
                  <i className="fa fa-star"></i>
                </div>
                <div className="choose_image">
                  <img src="/images/client-img.png" alt="Exceptional Quality" />
                </div>
                <h4>Exceptional Quality</h4>
                <p>Premium stays, authentic experiences, and carefully chosen activities that exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery_section layout_padding">
        <div className="container">
          <h1 className="services_taital">Kerala Gallery</h1>
          <p className="services_text">Explore the Kerala pictures from our tours and journeys.</p>
          <div className="row">
            <div className="col-md-4">
              <img src="/images/kerala.jpg" alt="Kerala" className="services_img" />
            </div>
            <div className="col-md-4">
              <img src="/images/house%20boat.jpg" alt="House Boat" className="services_img" />
            </div>
            <div className="col-md-4">
              <img src="/images/munnar.jpg" alt="Munnar" className="services_img" />
            </div>
            <div className="col-md-4">
              <img src="/images/water%20fall%20kerala.jpg" alt="Waterfall" className="services_img" />
            </div>
            <div className="col-md-4">
              <img src="/images/alapuzha.webp" alt="Alapuzha" className="services_img" />
            </div>
            <div className="col-md-4">
              <img src="/images/peppara_wildlife_sanctuary_1_4681.jpg" alt="Wildlife Sanctuary" className="services_img" />
            </div>
          </div>
        </div>
      </div>
      {bookingModalOpen && bookingDestination && (
        <div className="booking_modal_overlay" onClick={closeBookingModal}>
          <div className="booking_modal" onClick={(event) => event.stopPropagation()}>
            <button className="booking_modal_close" onClick={closeBookingModal} aria-label="Close booking form">
              ×
            </button>
            <div className="booking_modal_header">
              <h2>Book {bookingDestination.title}</h2>
              <p>{bookingDestination.description}</p>
            </div>
            <div className="booking_modal_body">
              <div className="booking_preview">
                <img src={bookingDestination.image} alt={bookingDestination.title} />
                <div className="booking_preview_badge">Book now — enter your travel details</div>
              </div>
              <form className="booking_form" onSubmit={handleBookingSubmit}>
                <div className="booking_field_group">
                  <label htmlFor="booking-days">How many days?</label>
                  <input
                    id="booking-days"
                    type="number"
                    min="1"
                    value={bookingDays}
                    onChange={(event) => setBookingDays(Number(event.target.value))}
                    required
                  />
                </div>
                <div className="booking_field_group">
                  <label htmlFor="booking-members">How many members?</label>
                  <input
                    id="booking-members"
                    type="number"
                    min="1"
                    value={bookingMembers}
                    onChange={(event) => setBookingMembers(Number(event.target.value))}
                    required
                  />
                </div>
                <div className="booking_field_group">
                  <label htmlFor="booking-date">Planned start date</label>
                  <input
                    id="booking-date"
                    type="date"
                    value={bookingDate}
                    onChange={(event) => setBookingDate(event.target.value)}
                  />
                </div>
                <div className="booking_field_group">
                  <label htmlFor="booking-email">Email address</label>
                  <input
                    id="booking-email"
                    type="email"
                    value={bookingEmail}
                    onChange={(event) => setBookingEmail(event.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="booking_field_group">
                  <label htmlFor="booking-notes">Special requests</label>
                  <textarea
                    id="booking-notes"
                    rows="3"
                    value={bookingNotes}
                    onChange={(event) => setBookingNotes(event.target.value)}
                    placeholder="Tell us what makes this trip special"
                  />
                </div>
                <button type="submit" className="booking_submit_btn">
                  Confirm booking request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
