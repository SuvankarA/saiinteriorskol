import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

import award1 from "../assets/soumenAward1.png";
import award2 from "../assets/soumenAward2.png";
import award3 from "../assets/soumenAward3.jpg";
import award4 from "../assets/soumenAward4.jpg";
import award5 from "../assets/soumenAward5.jpg";

const awards = [
  {
    title: "Recognition for Excellence",
    description:
      "Our work stands out for originality, functionality, and detail, earning us honors that celebrate thoughtful, purpose-driven, and innovative design.",
    image: award1,
  },
  {
    title: "Timeless Achievements",
    description:
      "Over the years, industry accolades affirm our dedication to crafting enduring, meaningful work with lasting impact across various creative and functional domains.",
    image: award2,
  },
  {
    title: "Elevated by Excellence",
    description:
      "Each recognition we earn is a reflection of our pursuit of precision, originality, and design that transcends fleeting trends.",
    image: award3,
  },
  {
    title: "Crafted for Legacy",
    description:
      "Our accolades mirror a deeper philosophy — to build with intention, inspire through form, and leave a lasting creative footprint.",
    image: award4,
  },
  {
    title: "Honors that Inspire",
    description:
      "Every award fuels our passion to reimagine the ordinary, delivering work that is as impactful in function as it is in form.",
    image: award5,
  },
];

const Awards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      {/* Title */}
      <div
        className="inline-flex items-center mb-10"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <span className="w-[10px] h-[36px] bg-black"></span>
        <span className="bg-[#e64a39] text-white font-bold text-lg px-4 py-1 shadow-sm ">
          Awards
        </span>
      </div>

      {/* Swiper Section */}
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Pagination, Keyboard, Autoplay]}
        loop
        grabCursor
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full shadow-xl/30"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg  px-4 py-8 sm:p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left transition-opacity duration-700 ease-in-out">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {award.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-6 sm:leading-7">
                  {award.description}
                </p>
              </div>

              {/* Image */}
              <div
                className="w-full sm:w-[500px] h-[420px] flex-shrink-0 rounded-lg  relative"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img
                  src={award.image}
                  alt="Award"
                  className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        {/* <div className="swiper-button-prev !text-[#e64a39] !text-3xl md:hidden !left-[-30px]"></div>
        <div className="swiper-button-next !text-[#e64a39] !text-3xl md:hidden !right-[-30px]"></div> */}
      </Swiper>
    </div>
  );
};

export default Awards;
