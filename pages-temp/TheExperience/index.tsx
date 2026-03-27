"use client";
import { SectionTitle } from "@/components/SectionTitle";
import { Camera, Plane, Play, ScrollText, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const TheExpirience = () => {
  return (
    <>
      <section id="experiencia" className="py-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTitle subtitle="A Experiência">
                O Voo da Sua Vida
              </SectionTitle>
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
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="h-150 rounded-3xl overflow-hidden glass relative z-10">
                <Image
                  src="/assets/images/salvatore_sentado_the_experience.png"
                  alt="Cockpit View"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                ></Image>
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                        <Play fill="black" size={20} />
                      </div>
                      <div>
                        <div className="font-bold">Assista</div>
                        <div className="text-xs text-white/50 font-mono uppercase">
                          POV: Acrobacias Reais
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-sky/20 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { TheExpirience };
