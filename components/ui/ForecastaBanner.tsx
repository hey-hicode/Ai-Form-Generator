"use client";
import { motion } from "framer-motion";

const ForecastBanner = () => {
  return (
    <div className="flex items-center justify-center h-[400px] bg-blue-500 relative rounded-xl overflow-hidden">
      {/* Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-20 grid grid-cols-6 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, translateY: [0, 10, 0] }} // Adding parallax-style effect
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="bg-blue-300 h-full"></div>
        <div className="bg-blue-300 h-full"></div>
        <div className="bg-blue-300 h-full"></div>
        <div className="bg-blue-300 h-full"></div>
        <div className="bg-blue-300 h-full"></div>
        <div className="bg-blue-300 h-full"></div>
      </motion.div>

      {/* First Curved Line (White) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, rotate: 0 }} // Start with no scale and rotation
        animate={{ scale: 1, rotate: 360 }} // Animate to full scale and rotation
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,150 C50,100 150,200 200,150 C250,100 350,200 400,150"
            stroke="white"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }} // Path starts not drawn
            animate={{ pathLength: 1 }} // Path fully drawn
            transition={{ duration: 3, ease: "easeInOut" }} // Slow, smooth draw
          />
        </svg>
      </motion.div>

      {/* Second Curved Line (Transparent White) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, rotate: 0 }} // Start with no scale and rotation
        animate={{ scale: 1, rotate: -360 }} // Opposite rotation
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,180 C50,130 150,230 200,180 C250,130 350,230 400,180"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* AI-Driven Forecast Button */}
      <motion.div
        className="relative z-10 cursor-pointer bg-white text-blue-500 px-4 py-2 rounded-full shadow-lg flex items-center"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 1, type: "spring", bounce: 0.5 }}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l3 9h-6l3-9zm0 12l-3 9 3-3 3 3-3-9z" />
        </svg>
        AI-Driven Forecasts
      </motion.div>

      {/* Faded Overlay */}
      <motion.div
        className="absolute right-0 w-1/4 h-full bg-white opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};

export default ForecastBanner;
