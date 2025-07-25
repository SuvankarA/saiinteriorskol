import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ backgroundImage, heroText, heroCard }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Top orange gradient bar */}
      {/* <div className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-r from-[#f25026] to-orange-400 z-[5]" /> */}

      {/* Hero Background Image */}
      <img
        src={backgroundImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* <div className="absolute top-1/2 left-6 xl:left-35 transform -translate-y-1/2 z-10">
        <span className="inline-block bg-white text-black text-xl md:text-xl font-bold px-3 py-1 shadow mb-4">
          WE ENSURE
        </span>
        <h1 className="text-white/60 font-extrabold text-5xl md:text-6xl leading-tight drop-shadow-lg">
          Trending <br />
          maximalistic <br />
          approach!
        </h1>
      </div> */}

      {/* Fixed Navbar */}
      <div
        className="fixed top-[30px] left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1200px] bg-white rounded-[20px] shadow-lg px-6 py-4 flex justify-between items-center flex-col md:flex-row relative"
        data-aos="fade-down"
      >
        {/* Top Row */}
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logo-dark.png"
              alt="Sai Interiors"
              className="h-[30px] object-contain"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </Link>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex items-center space-x-10 text-[18px] font-medium text-black"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              About us
            </Link>
            <Link to="/gallery" className="hover:text-orange-500">
              Gallery
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919830563265&text=Hi%20I%20contacted%20you%20through%20your%20Website."
              target="_blank"
              className="flex items-center hover:text-orange-500"
            >
              <FaWhatsapp className="text-green-500 text-xl mr-2" />
              Chat with us
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-black" />
              ) : (
                <FaBars className="text-2xl text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`w-full bg-white rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out origin-top md:hidden ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 text-[16px] font-medium space-y-4 text-black">
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              About us
            </Link>
            <Link to="/gallery" className="hover:text-orange-500">
              Gallery
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919830563265&text=Hi%20I%20contacted%20you%20through%20your%20Website."
              target="_blank"
              className="flex items-center hover:text-orange-500"
            >
              <FaWhatsapp className="text-green-500 text-xl mr-2" />
              Chat with us
            </a>
          </div>
        </div>
      </div>

      {/* Text Card */}
      {/* <div
        className="absolute bottom-6 md:bottom-10 right-4 md:right-10 z-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 md:p-6 w-[90%] max-w-[400px] transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <span className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          Crafting <span className="text-[#FF6A01]">Interiors</span> That
          Inspire
        </span>
        <p className="text-sm md:text-base text-gray-700">
          Whether you need a full-scale interior revamp or a tailored fit-out
          solution, we are equipped to take your project from concept to
          completion, delivering spaces that inspire and perform.
        </p>
      </div> */}
      {/* Hero Text (passed via prop) */}
      {heroText && (
        <div
          className="absolute top-1/2  transform -translate-y-1/2 z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {heroText}
        </div>
      )}
      {/* Hero Card (passed as prop) */}
      {heroCard && (
        <div
          className="absolute bottom-6 md:bottom-10 left-2 sm:left-260 right-2 md:right-10 z-10"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {heroCard}
        </div>
      )}
    </div>
  );
};

export default Navbar;
