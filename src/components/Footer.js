import React from "react";
import "./css/main.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (<>
    
  
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRAVELGRAM
            </Link>
          </div>

          <div className="social-icons">
          <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/in/mallikarjunople/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link github"
              href="https://www.github.com/MallikarjunOple/"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/the_mallikarjun_/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link> */}
            <a
              className="social-icon-link twitter"
              href="https://www.twitter.com/mallikarjunople/"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
           
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Footer;
