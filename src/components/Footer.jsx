import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Call Request</h3>
            {/* <p>
              Content will be updated soon, please keep browsing our website.
            </p> */}
            <div className="footer-phone">
              <Phone size={25} />
              <a href="tel:+917003749373">7003749373</a>
            </div>
            <div className="footer-phone">
              <Phone size={25} />
              <a href="tel:+919830563265">9830563265</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Reach Us</h3>
            <div className="footer-contact-line">
              <Phone size={19} />
              <a href="tel:+917003749373">+91-7003749373</a>
            </div>
            <div className="footer-contact-line">
              <MapPin size={19} />
              <span>
                47, Bansdroni Govt. Colony,
                <br />
                Kolkata 700070, West Bengal,
                <br />
                India.
              </span>
            </div>
            <div className="footer-contact-line">
              <Mail size={19} />
              <a href="mailto:saiinteriors.9999@gmail.com">
                saiinteriors.9999@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Important Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/saiinteriorskol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/saiinteriorkol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@saiinteriorskol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/sai-interiorskol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Sai Interiors | All Rights Reserved | Designed By: Suvankar
            Adhikary
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
