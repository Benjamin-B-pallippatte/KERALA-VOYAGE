import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      <footer className="footer_section footer_custom">
        <div className="container">
          <div className="footer_inner">
            <div className="footer_col subscribe_col">
              <h4 className="footer_heading">Subscribe</h4>
              <div className="input_btn_main">
                <input
                  type="email"
                  className="mail_text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="subscribe_bt">
                  <a href="#">Subscribe</a>
                </div>
              </div>
              <p className="footer_note">Get our latest travel packages and offers.</p>
            </div>

            <div className="footer_col contact_col">
              <h4 className="footer_heading">Contact</h4>
              <div className="contact_item">
                <img src="/images/call-icon.png" alt="Call" />
                <a href="tel:+919072251355">+91 9072251355</a>
              </div>
              <div className="contact_item">
                <img src="/images/mail-icon.png" alt="Mail" />
                <a href="mailto:dbijkonline9c06@gmail.com">dbijkonline9c06@gmail.com</a>
              </div>
            </div>

            <div className="footer_col social_col">
              <h4 className="footer_heading">Follow Us</h4>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="/images/fb-icon.png" alt="Facebook" /></a></li>
                  <li><a href="#"><img src="/images/twitter-icon.png" alt="Twitter" /></a></li>
                  <li><a href="#"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a></li>
                  <li><a href="#"><img src="/images/instagram-icon.png" alt="Instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="copyright_text">
            2020 All Rights Reserved. Design by <a href="https://html.design">Benjamin, athul, adhin, flamin</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
      </footer>
    </>
  );
}
