import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  const location = useLocation();
  const defaultService = new URLSearchParams(location.search).get("service") || "";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message. Please try again.");
      }

      setStatus("Thanks! Your message has been received.");
      setStatusType("success");
      setFormData({ name: "", phone: "", email: "", service: defaultService, message: "" });
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <h1 className="contact_taital">Contact Us</h1>
        <p className="contact_subtitle">
          Send us your inquiry and we’ll get back to you shortly with the best plan for your Kerala trip.
        </p>

        <form className="email_text" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="email-bt"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Full name"
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              className="email-bt"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="email-bt"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="email-bt"
              placeholder="Service Inquiry (optional)"
              name="service"
              value={formData.service}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              className="massage-bt"
              placeholder="Message"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="send_btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status && <p className={`form-status ${statusType}`}>{status}</p>}
        </form>
      </div>
    </div>
  );
}
