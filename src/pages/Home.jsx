import Navbar from "../components/Navbar";
import WhatWeOffer from "../components/WhatWeOffer";
import OurServices from "../components/OurServices";
import StatsSection from "../components/StatsSection.jsx";
import RecentWorks from "../components/RecentWorks";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import heroImage from "../assets/homeImage2.jpg";
import WavyText from "../components/WavyText.jsx";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Sai Interiors</title>
      </Helmet>
      <Navbar
        backgroundImage="https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_50/homeImage2_n17xj8.jpg"
        heroText={
          <div className="absolute top-1/2 left-6 xl:left-35 transform -translate-y-1/2 z-10">
            <span className="inline-block bg-white text-black text-xl md:text-xl font-bold px-3 py-1 shadow mb-4">
              WE ENSURE
            </span>
            <WavyText
              text={`Trending\nmaximalistic\napproach!`}
              className="text-white/60 font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-lg whitespace-pre-line"
            />
          </div>
        }
        heroCard={
          <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md p-4 md:p-6 w-auto max-w-[400px] transition-all duration-300">
            <span className="text-lg md:text-xl font-bold text-gray-800 mb-2 block">
              Crafting <span className="text-[#FF6A01]">Interiors</span> That
              Inspire
            </span>
            <p className="text-sm md:text-base text-gray-700">
              Whether you need a full-scale interior revamp or a tailored
              fit-out solution, we are equipped to take your project from
              concept to completion, delivering spaces that inspire and perform.
            </p>
          </div>
        }
      />
      <WhatWeOffer />
      <OurServices />
      <StatsSection />
      <RecentWorks />
      <Footer />
    </>
  );
};

export default Home;
