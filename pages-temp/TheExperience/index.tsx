"use client";
import { WHATSAPP_LINK } from "@/constants/constants";
import { Camera, MessageCircle, Plane, ScrollText, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const TheExpirience = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="experiencia" className="py-10 relative pt-40 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <h1 className="text-[12vw] md:text-[4vw] font-display uppercase leading-[0.85] mb-8 tracking-tighter">
                DOMINE A <span className="text-brand-accent">GRAVIDADE</span>
              </h1>

              <div className="space-y-8">
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  Decolando do Clube da Aeronáutica na Barra da Tijuca, você
                  viverá 20 minutos de pura adrenalina sobre o litoral do Rio de
                  Janeiro.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Briefing Técnico",
                      desc: "Instruções de segurança e manobras antes de decolar.",
                      icon: ScrollText,
                    },
                    {
                      title: "Você no Controle",
                      desc: "Assuma o manche por alguns instantes sob supervisão.",
                      icon: User,
                    },
                    {
                      title: "Manobras Radicais",
                      desc: "Sinta a força G em loopings e tunôs emocionantes.",
                      icon: Plane,
                    },
                    {
                      title: "Registro em 4K",
                      desc: "Gravação completa com GoPro Fusion para suas redes.",
                      icon: Camera,
                    },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-brand-accent" size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                  <li className="pt-4">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-105 transition-transform flex items-center justify-center gap-3"
                    >
                      <MessageCircle size={20} className="text-black" />{" "}
                      Reservar Experiência
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="h-150 rounded-3xl overflow-hidden glass relative z-10">
                <video
                  src="/assets/videos/demonstration_1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-sky/20 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>

        {open && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setOpen(false)} // fecha ao clicar fora
          >
            <div
              className="relative w-[90%] max-w-3xl"
              onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
            >
              {/* Botão fechar */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-10 right-0 text-white text-2xl cursor-pointer"
              >
                ✕
              </button>

              {/* Vídeo */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src="/assets/videos/demonstration_1.mp4"
                  controls
                  autoPlay
                  width={464}
                  height={848}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export { TheExpirience };
