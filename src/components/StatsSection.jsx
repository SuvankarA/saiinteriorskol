
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import growthIcon from "../assets/growth.png";
import workerIcon from "../assets/worker.png";
import coffeeIcon from "../assets/coffee.png";
import checklistIcon from "../assets/checklist.png";

const StatsSection = () => {
  const stats = [
    {
      icon: growthIcon,
      number: 10,
      label: "Years of Service",
    },
    {
      icon: workerIcon,
      number: 20,
      label: "Team Members",
    },
    {
      icon: coffeeIcon,
      number: 801,
      label: "Cups of Coffee",
    },
    {
      icon: checklistIcon,
      number: 56,
      label: "Projects Completed",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-[#f9f9f9] py-10 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 relative px-6"
            
            
          >
            {/* Icon Image */}
            <img src={stat.icon} alt="icon" className="w-[50px] h-[50px]" />

            {/* Animated Count */}
            <div>
              <div className="text-3xl font-bold text-[#e64a39]">
                {inView ? <CountUp end={stat.number} duration={5} /> : "0"}
              </div>
              <div className="text-lg font-medium text-black">{stat.label}</div>
            </div>

            {/* Divider */}
            {index < stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-dashed border-blue-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
