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

const Footer = () => {
  return (
    <footer className="bg-[#E04C4C] text-white font-[Segoe UI] px-4 py-10 md:py-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Grid Section */}
        <div className="flex flex-wrap justify-between gap-8 text-left md:text-left">
          {/* Call Request */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-[1.5rem] font-medium mb-4">Call Request</h3>
            <div className="flex items-center gap-2 mt-4">
              <Phone size={25} />
              <a
                href="tel:+917003749373"
                className="text-[1.8rem] font-bold text-white no-underline"
              >
                7003749373
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Phone size={25} />
              <a
                href="tel:+919830563265"
                className="text-[1.8rem] font-bold text-white no-underline"
              >
                9830563265
              </a>
            </div>
          </div>

          {/* Reach Us */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-[1.5rem] font-medium mb-4">Reach Us</h3>
            <div className="flex items-start gap-2 mb-3">
              <Phone size={19} className="relative top-0.5" />
              <a href="tel:+917003749373" className="text-[17px] leading-snug">
                +91-7003749373
              </a>
            </div>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={19} className="relative top-1" />
              <span className="text-[17px] leading-snug">
                <a
                  href="https://short-link.me/14J-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  47, Bansdroni Govt. Colony,
                  <br />
                  Kolkata 700070, West Bengal,
                  <br />
                  India.
                </a>
              </span>
            </div>
            <div className="flex items-start gap-2 mb-3">
              <Mail size={19} className="relative top-1" />
              <a
                href="mailto:saiinteriors.9999@gmail.com"
                className="text-[17px] leading-snug"
              >
                saiinteriors.9999@gmail.com
              </a>
            </div>
          </div>

          {/* Important Links & Socials */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-[1.5rem] font-medium mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[17px] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[17px] hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[17px] hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.facebook.com/saiinteriorskol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/saiinteriorkol/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@saiinteriorskol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/sai-interiorskol/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm mt-10 pt-6 border-t border-white/25">
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
