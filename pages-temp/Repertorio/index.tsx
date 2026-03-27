"use client";
import { SectionTitle } from "@/components/SectionTitle";
import { BUSINESS_INFO } from "@/constants/constants";
import { motion } from "motion/react";

const Repertorio = () => {
  return (
    <section id="manobras" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="O Repertório">Manobras de Elite</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {BUSINESS_INFO.maneuvers.map((manobra, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl group cursor-default"
            >
              <div className="text-brand-accent font-mono text-sm mb-4">
                0{i + 1}
              </div>
              <h4 className="text-3xl font-display uppercase mb-4 group-hover:text-brand-accent transition-colors">
                {manobra.nomeManobra}
              </h4>
              <div className="w-full h-px bg-white/10 mb-4" />
              <p className="text-white/40 text-sm">
                {manobra.descricaoManobra}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Repertorio };
