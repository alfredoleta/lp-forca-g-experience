"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle = ({ children, subtitle }: SectionTitleProps) => (
  <div className="mb-12">
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display uppercase leading-none"
    >
      {children}
    </motion.h2>
  </div>
);

export { SectionTitle };
