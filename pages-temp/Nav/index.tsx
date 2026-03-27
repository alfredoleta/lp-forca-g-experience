"use client";
import { WHATSAPP_LINK } from "@/constants/constants";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/assets/images/logo.png" // ou .png, .jpg
              alt="Força G Logo"
              width={50} // Equivalente ao size={32} do Lucide
              height={50}
              className="object-contain" // Garante que a logo não distorça
            />
            {/* <Plane className="text-brand-accent" size={32} /> */}
            <span className="font-display text-2xl tracking-tighter uppercase">
              Força G <span className="text-brand-accent">Experience</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a
              href="#experiencia"
              className="hover:text-brand-accent transition-colors"
            >
              A Experiência
            </a>
            <a
              href="#piloto"
              className="hover:text-brand-accent transition-colors"
            >
              O Piloto
            </a>
            <a
              href="#manobras"
              className="hover:text-brand-accent transition-colors"
            >
              Manobras
            </a>
            <a
              href="#faq"
              className="hover:text-brand-accent transition-colors"
            >
              Dúvidas
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-black px-6 py-3 rounded-full font-sans font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              Agendar Agora <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="cursor-pointer" />
            ) : (
              <Menu className="cursor-pointer" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-40 bg-brand-navy flex flex-col items-center justify-center gap-8 glass text-white "
          >
            <a
              href="#experiencia"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display uppercase"
            >
              A Experiência
            </a>
            <a
              href="#piloto"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display uppercase"
            >
              O Piloto
            </a>
            <a
              href="#manobras"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display uppercase"
            >
              Manobras
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display uppercase"
            >
              Dúvidas
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white px-8 py-4 rounded-full font-sans font-bold text-xl"
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Nav };
