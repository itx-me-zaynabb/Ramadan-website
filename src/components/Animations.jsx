import React from "react";
import { motion } from "framer-motion";

const Animations = () => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-400 text-3xl"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: i,
        }}
      >
        🌙
      </motion.div>
    ))}
  </div>
);

export default Animations;
