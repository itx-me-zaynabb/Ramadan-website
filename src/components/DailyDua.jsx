import React from "react";
import { motion } from "framer-motion";
import { duas } from "../data/duas";

const DailyDua = ({ selectedCity }) => {
  const duaOrder = ["sehri", "iftar", "ashra1", "ashra2", "ashra3"];

  const cardVariants = {
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0px 15px 25px rgba(250,150,200,0.4)",
    },
    initial: { scale: 1, y: 0, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-purple-900 via-pink-900 to-pink-700">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-12 text-center neon-text">
        Daily Duas - {selectedCity}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {duaOrder.map((type) => (
          <motion.div
            key={type}
            className="p-4 sm:p-6 bg-purple-700/40 backdrop-blur-sm rounded-2xl shadow-lg cursor-pointer text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <h3 className="font-semibold mb-2 text-yellow-300 text-lg sm:text-xl">
              {type.toUpperCase()}
            </h3>
            <p className="text-white text-base sm:text-lg">{duas[type]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyDua;
