import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Prayer Times", "Ramadan Quotes", "Daily Duas"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 py-4 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 shadow-lg">
      <motion.div
        className="text-3xl md:text-4xl cursor-pointer mb-2 md:mb-0"
        whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        🌙
      </motion.div>

      <motion.div
        className="text-2xl md:text-3xl font-bold text-yellow-200 cursor-pointer mb-2 md:mb-0 text-center"
        style={{ fontFamily: "'Amiri', serif" }}
        whileTap={{
          scale: 1.1,
          textShadow:
            "0 0 10px #FFF9C4, 0 0 20px #FFF9C4, 0 0 30px #FFF9C4, 0 0 40px #FFF9C4",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ
      </motion.div>

      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        {navItems.map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item.replace(" ", ""))}
            whileHover={{ scale: 1.1, color: "#facc15", rotate: 2 }}
            className="px-3 md:px-4 py-2 rounded-md text-white font-semibold text-base md:text-lg transition-colors duration-300"
          >
            {item}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
