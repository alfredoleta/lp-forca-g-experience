"use client";
import { WHATSAPP_LINK } from "@/constants/constants";
import { MessageCircle, Plane, Play } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative h-170 flex items-center justify-center overflow-hidden pt-20 md:h-screen">
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block absolute inset-0 bg-linear-to-b from-brand-sky/30 via-brand-navy/80 to-brand-navy z-10 " />
        <video
          src="/assets/videos/hero_video_desktop_2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          //   className={`${width} ${height} ${padding}`}
        />

        <video
          src="/assets/videos/hero_video_mobile_2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
          //   className={`${width} ${height} ${padding}`}
        />

        {/* <Image
          src="/public/assets/images/hero_bg.jpg"
          alt="Aviation Background"
          fill
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        ></Image> */}

        {/* <img
          src="https://picsum.photos/seed/aviation/1920/1080?blur=2"
          alt="Aviation Background"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        /> */}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-brand-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4 block">
            Sinta a Adrenalina no Céu do Rio
          </span>
          <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] mb-8 tracking-tighter">
            DOMINE <br /> A<span className="text-brand-accent">GRAVIDADE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light mb-10">
            Voo acrobático real com o líder da Esquadrilha CEU. Loopings, tunôs
            e a chance de assumir o manche sobre o litoral carioca.
          </p>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            {/* Airplane Animation pointing to the button */}
            <div
              className="absolute -top-24 md:-top-32 -left-4 md:-left-16 pointer-events-none z-30"
              style={{ transform: "rotate(40deg)" }}
            >
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: [0, 1, 0], x: 60 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-20 md:w-32 h-0.5 bg-linear-to-r from-transparent via-white/50 to-white rounded-full" />
                <Plane
                  size={28}
                  className="text-white -ml-3 rotate-45 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-brand-accent text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-black" /> Reservar
              Experiência
            </a>
            <button className="w-full md:w-auto glass px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <Play size={20} fill="white" /> Ver Vídeo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};

export { Hero };
