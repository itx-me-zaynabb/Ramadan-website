import React from "react";
import { motion } from "framer-motion";

const particles = [
  { emoji: "🌙", colors: ["#FACC15", "#FCD34D"] },
  { emoji: "✨", colors: ["#F472B6", "#A78BFA"] },
  { emoji: "⭐", colors: ["#FBBF24", "#F472B6"] },
];

const Animations = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {[...Array(25)].map((_, i) => {
        const particle =
          particles[Math.floor(Math.random() * particles.length)];
        const size = Math.random() * 24 + 12; // 12px to 36px
        const delay = Math.random() * 5;
        const duration = 4 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: size,
              color:
                particle.colors[
                  Math.floor(Math.random() * particle.colors.length)
                ],
              textShadow: `0 0 ${size / 2}px ${particle.colors[0]}, 0 0 ${size}px ${particle.colors[1]}`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -20, 0],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          >
            {particle.emoji}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Animations;
