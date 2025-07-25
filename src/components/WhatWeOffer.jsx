import React from "react";
import laurel from "../assets/laurel1.png"; // This is your single laurel image

import "../styles/WhatWeOffer.css"; // Adjust the path as necessary

const services = [
  {
    id: "01",
    title: "Architecture",
    desc: "Designing functional, aesthetic, and climate-responsive structures that blend innovation with timeless architectural language and sustainable materials.",
    highlight: true,
  },
  {
    id: "02",
    title: "Interiors",
    desc: "Transforming spaces through smart planning, efficient space management, mood-driven styling, and curated finishes to elevate comfort and functionality.",
    highlight: false,
  },
  {
    id: "03",
    title: "Execution",
    desc: "Delivering seamless project execution from blueprint to reality with skilled craftsmanship, strict timelines, and uncompromising attention to detail.",
    highlight: true,
  },
  {
    id: "04",
    title: "Landscaping",
    desc: "Reviving green spaces with parks, playgrounds, rooftop gardens, and beautification initiatives that balance ecological sensitivity with human well-being.",
    highlight: false,
  },
  {
    id: "05",
    title: "Heritage Renovation",
    desc: "Breathing new life into heritage sites through thoughtful restoration and adaptive reuse, preserving cultural identity while meeting modern needs.",
    highlight: true,
  },
  // {
  //   id: "06",
  //   title: "Architecture",
  //   desc: "We provide residential and commercial architectural design services. Feel free to talk to us!",
  //   highlight: false,
  // },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-10">
      {/* Laurel Header Section */}
      <div className="flex justify-center gap-20 lg:gap-50 flex-wrap mb-12">
        {[
          "Award-winning projects",
          "Stunning interior design ideas",
          "Trending maximalistic Approach",
        ].map((caption, i) => (
          <div
            key={i}
            className="flex flex-col items-center relative w-[240px]"
            // data-aos="fade-in"
          >
            {/* Laurel Pair */}
            <div className="flex items-center justify-center relative w-full">
              <img
                src={laurel}
                alt="Laurel Left"
                className="w-[50px] h-auto transform rotate-[10deg]"
              />
              {/* Caption Text */}
              <p className="laurel-caption text-center mx-1">{caption}</p>
              <img
                src={laurel}
                alt="Laurel Right"
                className="w-[50px] h-auto transform scale-x-[-1] -ml-2 rotate-[-10deg]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <h2
        className="text-center text-[#f25026] text-2xl font-bold mb-12"
        data-aos="fade-up"
      >
        What We Offer
      </h2>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-4 max-w-5xl mx-auto ">
        {services.map((item, index) => (
          <div
            key={item.id}
            className={`p-6 min-h-[250px] shadow-lg  flex flex-col justify-between ${
              item.highlight ? "bg-[#e14d4d] text-white" : "bg-white text-black"
            } hover:shadow-2xl`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3
              className={`text-6xl font-bold mb-4 ${
                item.highlight ? "text-[#f6a8a8]" : "text-gray-400"
              }`}
            >
              {item.id}
            </h3>
            <div>
              <h4 className="font-bold mb-2 text-[30px]">{item.title}</h4>
              <p className="text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
