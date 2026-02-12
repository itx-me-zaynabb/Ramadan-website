import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: 25,
        height: 25,
        borderRadius: "50%",
        background: "radial-gradient(circle, #facc15, #f472b6)",
        boxShadow: "0 0 20px #facc15, 0 0 40px #f472b6",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "all 0.05s linear",
      }}
    />
  );
};

export default CustomCursor;
