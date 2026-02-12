import React, { useState } from "react";
import { motion } from "framer-motion";
import { cityTimes } from "../data/duas";

const PrayerTimes = ({ city }) => {
  const [selectedCity, setSelectedCity] = useState(city);
  const times = cityTimes[selectedCity];

  const cardVariants = {
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0px 15px 25px rgba(250,150,200,0.4)",
    },
    initial: { scale: 1, y: 0, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {Object.keys(cityTimes).map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300 ${
              selectedCity === city
                ? "bg-yellow-400 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-200"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Prayer & Sehri/Iftar Times - {selectedCity}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {Object.keys(times).map((key) => (
          <motion.div
            key={key}
            className="p-4 sm:p-6 bg-pink-50 rounded-2xl shadow-lg cursor-pointer text-center hover:bg-pink-100 transition-colors duration-300"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <p className="font-semibold text-pink-500 text-lg sm:text-xl">
              {key}
            </p>
            <p className="text-gray-700 text-lg sm:text-xl mt-2">
              {times[key]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTimes;
