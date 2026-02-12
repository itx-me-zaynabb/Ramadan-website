import React from "react";
import { motion } from "framer-motion";
import Background from "../assets/Background.jpeg"; // import the image

const Header = () => {
  return (
    <div className="relative text-center py-32 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-pink-900 to-pink-500 opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-300 neon-text">
          Ramadan Kareem 2026 🌙
        </h2>
        <motion.div
          className="max-w-3xl text-white text-xl md:text-2xl font-medium px-6 py-8 rounded-xl bg-black/40 shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          “When Ramadan enters, the gates of Paradise are opened, the gates of
          Hellfire are closed and the devils are chained.”
          <p className="mt-4 italic text-yellow-400">— Al-Bukhari & Muslim</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
