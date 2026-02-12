import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer className="relative w-full py-6 text-center flex flex-col md:flex-row justify-between items-center px-4 md:px-8 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(270deg, #7C3AED, #F472B6, #A78BFA, #F9A8D4)",
        backgroundSize: "800% 800%",
        opacity: 0.2,
        zIndex: -1,
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    >
      <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-10 left-10 opacity-70 animate-pulse"></div>
      <div className="absolute w-3 h-3 bg-pink-400 rounded-full top-32 left-60 opacity-60 animate-pulse"></div>
      <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-48 left-20 opacity-80 animate-pulse"></div>
    </motion.div>

    <p
      className="relative z-10 font-bold text-white drop-shadow-lg text-lg md:text-xl tracking-wide mb-2 md:mb-0"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Made with ❤️ by Zainab | 2026 Ramadan Special
    </p>

    <p
      className="relative z-10 font-bold text-yellow-300 drop-shadow-md text-lg md:text-xl tracking-wide"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      🌙 Blessed Ramadan
    </p>
  </motion.footer>
);

export default Footer;
