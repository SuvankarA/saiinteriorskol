
import LightGallery from "lightgallery/react";

// LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-video.css"; // For video

// LightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import lgVideo from "lightgallery/plugins/video";

// Import images from your assets (update paths as needed)
import img1 from "/1.png";
import img3 from "/3.png";
import img4 from "/4.png";
import img5 from "/5.png";
import img6 from "/6.png";
import img7 from "/7.png";
import img8 from "/8.png";
import img9 from "/9.png";
import img10 from "/10.png";
import img11 from "/11.png";
import img12 from "/12.png";
import img13 from "/13.png";
import img14 from "/14.png";
import img15 from "/15.png";
import img16 from "/16.png";
import img17 from "/17.png";
import img18 from "/18.png";
import img19 from "/19.png";
import img20 from "/20.png";
import img21 from "/21.png";
import img22 from "/22.png";
// import img23 from "/23.png";
import img24 from "/24.png";
import img25 from "/25.png";
import img26 from "/26.png";
import img27 from "/27.png";
import img28 from "/28.png";
import img29 from "/29.png";

// Videos
import video1 from "/soumendaVideo2.mp4";
import video2 from "/soumendaVideo3.mp4";

// Posters
import poster1 from "/poster1.png";
import poster2 from "/poster2.png";


const images = [
  
  { src: img1, alt: "Gallery image 1" },
  { src: img3, alt: "Gallery image 3" },
  { src: img4, alt: "Gallery image 4" },
  { src: img5, alt: "Gallery image 5" },
  { src: img6, alt: "Gallery image 6" },
  { src: img7, alt: "Gallery image 7" },
  { src: img27, alt: "Gallery image 27" },
  { src: img8, alt: "Gallery image 8" },
  { src: img9, alt: "Gallery image 9" },
  { src: img10, alt: "Gallery image 10" },
  { src: img11, alt: "Gallery image 11" },
  { src: img12, alt: "Gallery image 12" },
  { src: img13, alt: "Gallery image 13" },
  { src: img14, alt: "Gallery image 14" },
  { src: img15, alt: "Gallery image 15" },
  { src: img16, alt: "Gallery image 16" },
  { src: img17, alt: "Gallery image 17" },
  { src: img18, alt: "Gallery image 18" },
  { src: img19, alt: "Gallery image 19" },
  { src: img20, alt: "Gallery image 20" },
  { src: img21, alt: "Gallery image 21" },
  { src: img22, alt: "Gallery image 22" },
  // { src: img23, alt: "Gallery image 23" },
  { src: img24, alt: "Gallery image 24" },
  { src: img25, alt: "Gallery image 25" },
  { src: img26, alt: "Gallery image 26" },
  { src: img28, alt: "Gallery image 28" },
  { src: img29, alt: "Gallery image 29" }
  

];

const videoItems = [
  {
    src: video1,
    poster: poster1,
    alt: "Local Video 1",
    mimeType: "video/mp4",
  },
  {
    src: video2,
    poster: poster2,
    alt: "Local Video 2",
    mimeType: "video/mp4",
  },
];

export default function PhotoGallery() {
  return (
    <section className="bg-[#F5F5DC] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="flex items-center shadow-lg">
            <div className="w-4 md:h-12 bg-black h-11 "></div>
            <div className="bg-[#E04C4C] text-white font-bold text-lg sm:text-xl md:text-2xl px-6 py-2 ">
              Photo Gallery
            </div>
          </div>
        </div>
        <LightGallery
          speed={500}
          plugins={[
            lgThumbnail,
            lgZoom,
            lgAutoplay,
            lgFullscreen,
            lgRotate,
            lgShare,
          ]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {images.map((image, index) => (
            <a
              href={image.src}
              key={index}
              className="group perspective-[1000px] block"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded-2xl transform-gpu transition-transform duration-500 ease-in-out group-hover:rotate-x-2 group-hover:rotate-y-3 group-hover:scale-105 shadow-xl ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[450px] h-[350px] object-cover"
                />
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}
