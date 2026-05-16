import { useState } from "react";

export default function AIRecommendationsPage() {
  const [formData, setFormData] = useState({
    preferences: "",
    budget: "",
    duration: "",
    groupSize: "",
    interests: "",
  });
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRecommendations(null);

    try {
      const response = await fetch("/api/ai-recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to get recommendations");
      }

      setRecommendations(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ai-recommendations_section layout_padding">
      <div className="container">
        <h1 className="services_taital">AI Travel Recommendations</h1>
        <p className="services_text">
          Get personalized Kerala travel recommendations powered by AI. Tell us about your preferences and get a custom itinerary!
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="recommendation_form">
              <h3>Tell us about your trip</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="preferences">Travel Style *</label>
                  <select
                    id="preferences"
                    name="preferences"
                    value={formData.preferences}
                    onChange={handleChange}
                    required
                    className="email-bt"
                  >
                    <option value="">Select your travel style</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Relaxation">Relaxation</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Nature">Nature</option>
                    <option value="Family">Family</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Budget">Budget</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="email-bt"
                  >
                    <option value="">Any budget</option>
                    <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
                    <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                    <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Trip Duration</label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="email-bt"
                  >
                    <option value="">Any duration</option>
                    <option value="2-3 days">2-3 days</option>
                    <option value="4-5 days">4-5 days</option>
                    <option value="6-7 days">6-7 days</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="groupSize">Group Size</label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="email-bt"
                  >
                    <option value="">Any size</option>
                    <option value="Solo">Solo traveler</option>
                    <option value="2 people">2 people</option>
                    <option value="3-4 people">3-4 people</option>
                    <option value="5-8 people">5-8 people</option>
                    <option value="Large group">Large group</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="interests">Specific Interests</label>
                  <input
                    type="text"
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="e.g., wildlife, beaches, temples, food"
                    className="email-bt"
                  />
                </div>

                <div className="send_btn">
                  <button type="submit" disabled={loading}>
                    {loading ? "Getting Recommendations..." : "Get AI Recommendations"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            {error && <p className="form-status error">{error}</p>}

            {recommendations && (
              <div className="recommendations_result">
                <h3>Your Personalized Kerala Itinerary</h3>

                {recommendations.itinerary && (
                  <div className="recommendation_section">
                    <h4>📅 Itinerary</h4>
                    <div className="itinerary_content">
                      {typeof recommendations.itinerary === 'string' ? (
                        <pre>{recommendations.itinerary}</pre>
                      ) : (
                        <div>
                          {recommendations.itinerary.map((day, index) => (
                            <div key={index} className="day-plan">
                              <h5>Day {index + 1}: {day.title}</h5>
                              <p>{day.description}</p>
                              {day.activities && (
                                <ul>
                                  {day.activities.map((activity, actIndex) => (
                                    <li key={actIndex}>{activity}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {recommendations.destinations && (
                  <div className="recommendation_section">
                    <h4>🏞️ Recommended Destinations</h4>
                    <p>{recommendations.destinations}</p>
                  </div>
                )}

                {recommendations.accommodations && (
                  <div className="recommendation_section">
                    <h4>🏨 Accommodation Suggestions</h4>
                    <p>{recommendations.accommodations}</p>
                  </div>
                )}

                {recommendations.transportation && (
                  <div className="recommendation_section">
                    <h4>🚗 Transportation Tips</h4>
                    <p>{recommendations.transportation}</p>
                  </div>
                )}

                {recommendations.food && (
                  <div className="recommendation_section">
                    <h4>🍛 Local Food Recommendations</h4>
                    <p>{recommendations.food}</p>
                  </div>
                )}

                {recommendations.culture && (
                  <div className="recommendation_section">
                    <h4>🎭 Cultural Experiences</h4>
                    <p>{recommendations.culture}</p>
                  </div>
                )}

                {recommendations.bestTime && (
                  <div className="recommendation_section">
                    <h4>📅 Best Time to Visit</h4>
                    <p>{recommendations.bestTime}</p>
                  </div>
                )}

                {recommendations.safetyTips && (
                  <div className="recommendation_section">
                    <h4>🛡️ Safety Tips</h4>
                    <p>{recommendations.safetyTips}</p>
                  </div>
                )}

                <div className="contact_cta">
                  <p>Ready to book this itinerary?</p>
                  <a href="/contact" className="btn_main">Contact Us</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .recommendation_form {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }

        .recommendations_result {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
        }

        .recommendation_section {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #dee2e6;
        }

        .recommendation_section:last-child {
          border-bottom: none;
        }

        .recommendation_section h4 {
          color: #2c3e50;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .itinerary_content pre {
          white-space: pre-wrap;
          font-family: inherit;
          line-height: 1.6;
        }

        .day-plan {
          margin-bottom: 20px;
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .day-plan h5 {
          color: #27ae60;
          margin-bottom: 10px;
        }

        .contact_cta {
          text-align: center;
          margin-top: 30px;
          padding: 20px;
          background: #27ae60;
          border-radius: 8px;
          color: white;
        }

        .contact_cta p {
          margin-bottom: 15px;
          font-size: 18px;
        }

        .error {
          color: #e74c3c;
          background: #fdf2f2;
          padding: 15px;
          border-radius: 5px;
          border: 1px solid #f5c6cb;
        }

        @media (max-width: 768px) {
          .recommendation_form,
          .recommendations_result {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}