import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MouseFlare = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Flare Effect */}
      <motion.div
        className="pointer-events-none absolute z-50"
        animate={{
          x: mousePosition.x - 20, // Center the flare on cursor
          y: mousePosition.y - 20,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="relative">
          {/* Main flare circle */}
          <div className="w-10 h-10 rounded-full bg-gradient-radial from-blue-400/30 via-purple-500/20 to-transparent blur-xl" />

          {/* Inner bright core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/60 blur-sm" />

          {/* Outer glow ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default MouseFlare;
