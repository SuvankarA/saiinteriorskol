import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import galleryImage from "../assets/galleryImage.jpg";
import WavyText from "../components/WavyText.jsx";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Sai Interiors</title>
      </Helmet>
      <Navbar
        backgroundImage={galleryImage}
        heroText={
          <div className="absolute top-1/2 left-6 xl:left-35 transform -translate-y-1/2 z-10">
            <span className="inline-block bg-white text-black text-xl md:text-xl font-bold px-3 py-1 shadow mb-4">
              RECENT WORKS
            </span>
            <WavyText
              text={`Explore our\nlatest projects\nand inspirations!`}
              className="text-white/60 font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-lg whitespace-pre-line"
            />
          </div>
        }
      />
      <PhotoGallery />
      <Footer />
    </>
  );
};

export default Gallery;
