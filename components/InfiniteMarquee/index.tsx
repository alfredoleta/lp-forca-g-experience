"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
}

const InfiniteMarquee = ({ children }: InfiniteMarqueeProps) => {
  const baseX = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const directionFactor = useRef<number>(-1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!measureRef.current) return;

    const updateWidth = () => {
      if (measureRef.current) {
        // Divide por 2 assumindo que o conteúdo será duplicado para o loop
        setContentWidth(measureRef.current.scrollWidth / 2);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(measureRef.current);

    return () => observer.disconnect();
  }, [children]);

  useAnimationFrame((t, delta) => {
    if (contentWidth === 0) return;

    let moveBy = 0;
    if (!isHovered && !isDragging) {
      // Velocidade base (50px por segundo) ajustada pelo delta do frame
      moveBy = directionFactor.current * 50 * (delta / 1000);
    }

    let currentX = baseX.get() + moveBy;

    // Lógica de reset para o loop infinito
    if (currentX <= -contentWidth) {
      currentX += contentWidth;
    } else if (currentX > 0) {
      currentX -= contentWidth;
    }

    baseX.set(currentX);
  });

  return (
    <motion.div
      ref={measureRef}
      className="flex gap-6 w-max px-6 cursor-grab active:cursor-grabbing touch-pan-y select-none"
      style={{ x: baseX }}
      drag="x"
      dragConstraints={{ left: -contentWidth * 2, right: contentWidth }}
      dragElastic={0}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        if (info.velocity.x > 0) directionFactor.current = 1;
        if (info.velocity.x < 0) directionFactor.current = -1;
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Renderiza o conteúdo duas vezes para criar o efeito visual de continuidade */}
      {children}
      {children}
    </motion.div>
  );
};

export { InfiniteMarquee };
