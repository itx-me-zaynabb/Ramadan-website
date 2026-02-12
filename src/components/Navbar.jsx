import React from "react";
import { motion } from "framer-motion";

// Make sure to import a suitable font in index.html or via @import in CSS
// Example: <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">

const Navbar = () => {
  const navItems = ["Prayer Times", "Ramadan Quotes", "Daily Duas"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 py-4 flex items-center justify-between px-8 shadow-lg">
      {/* Left Logo with Moon Emoji */}
      <motion.div
        className="text-3xl cursor-pointer"
        whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        🌙
      </motion.div>

      {/* Center Bismillah - light golden, neon only on click */}
      <motion.div
        className="text-3xl md:text-4xl font-bold text-yellow-200 cursor-pointer text-center"
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

      {/* Right Navigation */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item.replace(" ", ""))}
            whileHover={{
              scale: 1.1,
              color: "#facc15",
              rotate: 2,
            }}
            className="px-4 py-2 rounded-md text-white font-semibold text-lg transition-colors duration-300"
          >
            {item}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
