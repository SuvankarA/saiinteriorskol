import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import AwardSlider from "../components/Awards";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import aboutImage from "../assets/aboutImage.jpg";
import WavyText from "../components/WavyText.jsx";
import VideoGallery from "../components/VideoGallery.jsx";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us | Sai Interiors</title>
      </Helmet>
      <Navbar
        backgroundImage="https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_50/aboutImage_ep28ti.jpg"
        heroText={
          <div className="absolute top-1/2 left-6 xl:left-35 transform -translate-y-1/2 z-10">
            <span className="inline-block bg-white text-black text-xl md:text-xl font-bold px-3 py-1 shadow mb-4">
              WE DELIVER
            </span>
            <WavyText
              text={`Stunning\ninterior design\nideas!`}
              className="text-white/60 font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-lg whitespace-pre-line"
            />
          </div>
        }
      />
      <Aboutus />
      <AwardSlider />
      <ReviewSection />
      <VideoGallery />
      <Footer />
    </>
  );
};

export default About;
