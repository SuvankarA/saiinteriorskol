import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/RecentWorks.css"; // Adjust the path as necessary

import img1 from "../assets/sam1.jpg";
// import img2 from "../assets/sam2.jpg";
import img3 from "../assets/sam3.jpg";
import img4 from "../assets/sam4.jpg";
import img5 from "../assets/sam5.jpg";
import img6 from "../assets/sam6.jpg";
import img7 from "../assets/sam7.jpg";
import img8 from "../assets/sam8.jpg";
import img9 from "../assets/sam9.jpg";


const images = [
  { src: img1, caption: "Banquet" },
  // { src: img2, caption: "Commercial Project" },
  { src: img3, caption: "Residential Project" },
  { src: img4, caption: "Residential Project" },
  { src: img5, caption: "Rooftop Lounge" },
  { src: img6, caption: "Rooftop Lounge" },
  { src: img7, caption: "Lounge" },
  { src: img8, caption: "Rooftop Lounge" },
  { src: img9, caption: "Architecture of Jagannath Temple" },
];

const RecentWorks = () => {
  const carouselRef = useRef(null);
  const scrollSpeed = 0.5; // Adjust for smoother/faster scroll

  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      const container = carouselRef.current;
      if (container) {
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // seamless loop
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 250;
    carouselRef.current.scrollLeft +=
      direction === "right" ? scrollAmount : -scrollAmount;
  };

  return (
    <section className="recent-works-section">
      <div className="header" data-aos="fade-up">
        <div className="label">
          <div className="bar" />
          <span className="tag">Explore Recent Works</span>
        </div>
        <h2 className="title">
          Some of our finished projects that <br />
          will amaze you!
        </h2>
      </div>

      <div className="navigation" data-aos="fade-up" data-aos-delay="200">
        <button onClick={() => handleScroll("left")}>
          <ChevronLeft />
        </button>
        <button onClick={() => handleScroll("right")}>
          <ChevronRight />
        </button>
      </div>

      <div
        className="carousel-wrapper"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <div className="carousel animated-scroll" ref={carouselRef}>
          {[...images, ...images].map((item, index) => (
            <div
              className="card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <img src={item.src} alt={`project-${index}`} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
