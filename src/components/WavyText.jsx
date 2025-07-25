import { motion } from "framer-motion";

const WavyText = ({ text, className = "" }) => {
  const lines = text.split("\n");

  return (
    <div className={`flex flex-col ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex">
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: (lineIndex * 0.2) + charIndex * 0.08,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WavyText;
