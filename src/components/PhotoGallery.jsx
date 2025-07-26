
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



const images = [
  
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/1_gcofp7.png", alt: "Gallery image 1" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/3_q2uuch.png", alt: "Gallery image 3" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/4_gq4wry.png", alt: "Gallery image 4" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/5_bxmdji.png", alt: "Gallery image 5" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/6_akazhu.png", alt: "Gallery image 6" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/7_llr4b4.png", alt: "Gallery image 7" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/27_ejueft.png", alt: "Gallery image 27" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/8_vjoabn.png", alt: "Gallery image 8" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/9_w1dynm.png", alt: "Gallery image 9" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/10_se6ee3.png", alt: "Gallery image 10" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/11_xpiurd.png", alt: "Gallery image 11" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/12_vrhreh.png", alt: "Gallery image 12" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/13_dsjbsa.png", alt: "Gallery image 13" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/14_ivf2sj.png", alt: "Gallery image 14" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/15_jfvkn6.png", alt: "Gallery image 15" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/16_msvnen.png", alt: "Gallery image 16" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/17_uj9tw5.png", alt: "Gallery image 17" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/18_gtbc8d.png", alt: "Gallery image 18" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/19_zoxjni.png", alt: "Gallery image 19" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/20_tb4v6h.png", alt: "Gallery image 20" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/21_hxspib.png", alt: "Gallery image 21" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/22_ljsqy1.png", alt: "Gallery image 22" },
  // { src: img23, alt: "Gallery image 23" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/24_c62vzk.png", alt: "Gallery image 24" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/25_rsq6db.png", alt: "Gallery image 25" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/26_yb3qxd.png", alt: "Gallery image 26" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/28_oeo91c.png", alt: "Gallery image 28" },
  { src: "https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_30/29_w8a1zx.png", alt: "Gallery image 29" }
  

];


export default function PhotoGallery() {
  return (
    <section className="bg-[#F5F5DC] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex justify-center mb-12" >
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
              // data-aos="zoom-in-up"
              // data-aos-delay={index * 100}
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
