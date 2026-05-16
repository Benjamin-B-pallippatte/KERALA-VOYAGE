import { Link } from "react-router-dom";

export default function DestinationPage({
  bannerTitle,
  bannerText,
  serviceName,
  aboutTitle,
  aboutText,
  aboutImage,
  tripPlans,
  spots,
  galleryImages,
  budgetPackages,
  foodItems,
}) {
  const contactPath = `/contact?service=${encodeURIComponent(serviceName)}`;

  return (
    <div className="destination-page">
      <div className="banner_section layout_padding">
        <div className="container">
          <h1 className="banner_taital">{bannerTitle}</h1>
          <p className="banner_text">{bannerText}</p>
          <div className="btn_main">
            <Link to={contactPath}>Book Tickets</Link>
          </div>
        </div>
      </div>

      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="about_taital">{aboutTitle}</h1>
                <p className="about_text">{aboutText}</p>
              </div>
            </div>
            <div className="col-md-6 padding_right_0">
              <div>
                <img src={aboutImage} className="about_img" alt={aboutTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services_section layout_padding">
        <div className="container">
          <h1 className="services_taital">Trip Plans</h1>
          <div className="services_section_2">
            <div className="row">
              {tripPlans.map((plan) => (
                <div className="col-md-4" key={plan.title}>
                  <div className="service-card">
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                    <ul>
                      {plan.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gallery_section layout_padding">
        <div className="container">
          <h1 className="gallery_taital">Attractive Spots & Directions</h1>
          <div className="spots-grid">
            {spots.map((spot) => (
              <div className="spot-card" key={spot.title}>
                <h3>{spot.title}</h3>
                <p>{spot.description}</p>
                {spot.direction && <p><strong>Direction:</strong> {spot.direction}</p>}
                {spot.fee && <p><strong>Entry Fee:</strong> {spot.fee}</p>}
                {spot.activity && <p><strong>Activities:</strong> {spot.activity}</p>}
                {spot.bestTime && <p><strong>Best Time:</strong> {spot.bestTime}</p>}
                {spot.message && <p>{spot.message}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gallery_section layout_padding">
        <div className="container">
          <h1 className="gallery_taital">Kerala Images Gallery</h1>
          <p className="services_text">Enjoy the destination gallery and Kerala highlights from our collection.</p>
          <div className="row">
            {galleryImages.map((image) => (
              <div className="col-md-4" key={image.alt}>
                <img src={image.src} className="services_img" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="client_section layout_padding">
        <div className="container">
          <h1 className="client_taital">Budget Breakdown</h1>
          <div className="budget-section">
            {budgetPackages.map((budget) => (
              <div className="budget-card" key={budget.title}>
                <h3>{budget.title}</h3>
                <ul>
                  {budget.items.map((item, index) => (
                    <li key={index}><strong>{item.label}</strong> {item.value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="food-section">
            <h3>Local Cuisine & Food Recommendations</h3>
            <div className="food-items">
              {foodItems.map((food) => (
                <div className="food-item" key={food.title}>
                  <h4>{food.title}</h4>
                  <p>{food.description}</p>
                  <p><strong>Price:</strong> {food.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="read_bt">
        <Link to={contactPath}>Book Your {serviceName} Trip</Link>
      </div>
    </div>
  );
}
