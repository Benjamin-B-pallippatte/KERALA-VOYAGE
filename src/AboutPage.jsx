import { useState } from "react";

export default function AboutPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="about_section layout_padding margin_top_90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="about_taital_main">
              <h1 className="about_taital">About Us</h1>
              <p className="about_text">
                We are Kerala experts, designing travel itineraries that celebrate the state's lush backwaters,
                scenic mountains, and cultural richness.
              </p>
              {showMore && (
                <div className="about_details">
                  <p>
                    <strong>Our Mission:</strong> To showcase the authentic beauty of Kerala while promoting
                    sustainable tourism that respects local communities and preserves the environment.
                  </p>
                  <p>
                    <strong>Our Services:</strong> We offer comprehensive travel packages including houseboat
                    cruises, hill station explorations, wildlife safaris, cultural experiences, and adventure
                    activities. Each itinerary is carefully crafted to provide genuine Kerala experiences.
                  </p>
                  <p>
                    <strong>Local Expertise:</strong> Our team consists of experienced travel consultants who
                    are native to Kerala and understand the region's nuances, seasons, and hidden treasures.
                    We work directly with local operators to ensure authentic experiences.
                  </p>
                  <p>
                    <strong>Sustainability Focus:</strong> We are committed to eco-friendly tourism practices,
                    supporting local businesses, and minimizing our environmental impact. Choose us for
                    responsible travel that makes a positive difference.
                  </p>
                </div>
              )}
              <div className="readmore_bt">
                <a href="#" onClick={(e) => { e.preventDefault(); setShowMore(!showMore); }}>
                  {showMore ? 'Read Less' : 'Read More'}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 padding_right_0">
            <div>
              <img src="public\images\logo.png" className="about_img" alt="About Kerala Voyage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
