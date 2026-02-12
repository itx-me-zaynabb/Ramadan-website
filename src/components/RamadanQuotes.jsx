import React from "react";
import { motion } from "framer-motion";

const quotes = [
  { title: "Faith", img: "../assets/quote.jpg" },
  { title: "Patience", img: "../assets/Ramadan-Quotes-03.png" },
  { title: "Charity", img: "../assets/Ramadan-Quotes-06-1024x1024.png" },
  { title: "Forgiveness", img: "../assets/Ramadan-Quotes-11-1024x1024.png" },
];

const RamadanQuotes = () => (
  <div
    id="RamadanQuotes"
    className="w-full flex flex-col items-center px-4 py-20"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12 neon-text">
      Ramadan Quotes
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
      {quotes.map((q, idx) => (
        <motion.div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg cursor-pointer relative"
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img src={q.img} alt={q.title} className="w-full h-56 object-cover" />
          <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 font-semibold">
            {q.title}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default RamadanQuotes;
