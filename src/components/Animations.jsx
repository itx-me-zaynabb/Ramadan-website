import React from "react";
import { motion } from "framer-motion";

const COLORS = ["#FACC15", "#F472B6", "#A78BFA", "#F9A8D4"]; // yellow, pink, purple, soft pink

const Animations = () => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => {
      const size = Math.random() * 6 + 4; // 4px to 10px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 6 + Math.random() * 4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            background: color,
            filter: "blur(2px)", // soft glow
            opacity: 0.6,
          }}
          animate={{
            y: [0, -30, 0], // gentle up-down motion
            x: [0, 10, -10, 0], // subtle horizontal drift
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      );
    })}
  </div>
);

export default Animations;
