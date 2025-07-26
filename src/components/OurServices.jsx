import { useEffect, useState } from "react";
// import centerImage from "../assets/middle.png";
// import leftImage from "../assets/image4.jpg";
// import rightImage from "../assets/image5.jpg";
import "../styles/OurServices.css"; // Adjust the path as necessary



const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 0 = left, 1 = center, 2 = right

  useEffect(() => {
    

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); // smoother transition every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  const centerImage ="https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_50/middle_isk3ka.png"
  const leftImage ="https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_10/image4_gchfix.jpg"
  const rightImage="https://res.cloudinary.com/suvankar-adhikary/image/upload/f_auto,q_10/image5_zqf5yu.jpg"

  const images = [leftImage, centerImage, rightImage];

  return (
    <section className="w-full bg-white px-4 sm:px-10 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-10">
        {/* Text Section */}
        <div className="flex-1 relative lg:left-17" data-aos="fade-right">
          <div className="flex items-center mb-4">
            <div className="w-[14px] sm:w-[16px] h-[28px] sm:h-[40px] bg-black" />
            <span className="bg-[#E64A39] text-white font-bold px-3 sm:px-4 py-1 sm:py-2 -ml-1 text-sm sm:text-base">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 leading-snug">
            Visually delightful & <br />
            ergonomic interior <br />
            design solutions.
          </h2>
          <div className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed text-justify max-w-lg mt-4 md:w-100">
            Sai Interiors specializes in providing visually delightful and
            ergonomic interior solutions for both residential and commercial
            spaces.
          </div>
        </div>

        {/* Image Stack */}
        <div
          className="image-stack-container w-[100px] xl:w-[300px] h-[150px] lg:h-[400px] relative md:ml-0 xl:right-32 image-stack-pro"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          {images.map((img, index) => {
            let classes = "image-card";

            if (index === activeIndex) {
              classes += " center-position shadow-xl/30";
            } else if ((index + 1) % 3 === activeIndex) {
              classes += " left-position shadow-xl/20";
            } else {
              classes += " right-position shadow-xl/20";
            }

            return (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={classes}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
