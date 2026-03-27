// import { SectionTitle } from "@/components/SectionTitle";
import { SectionTitle } from "@/components/SectionTitle";
import { BUSINESS_INFO } from "@/constants/constants";
import { ShieldCheck, UserCheck } from "lucide-react";
import Image from "next/image";

const ThePilot = () => {
  return (
    <>
      {/* The Pilot */}
      <section id="piloto" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-brand-sky/20 p-4 relative">
                <Image
                  src="/assets/images/salvatore_empe_the_pilot.png"
                  alt="Tenente-Coronel Salvatore"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                ></Image>
                <div className="absolute inset-0 bg-brand-sky/10 mix-blend-overlay" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle subtitle="O Comandante">
                Liderança e Precisão
              </SectionTitle>
              <h3 className="text-3xl font-bold mb-6">
                {BUSINESS_INFO.pilotTitle}
              </h3>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
                O Tenente-Coronel Salvatore (Alfredo Leta) traz a expertise da
                elite da aviação brasileira para o seu voo. Com mais de 3.000
                horas de voo em aeronaves de caça, ele garante uma experiência
                que une adrenalina extrema e segurança absoluta.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl">
                  <UserCheck className="text-brand-sky mb-2" size={24} />
                  <div className="text-2xl font-display uppercase">Elite</div>
                  <div className="text-xs text-white/50 font-mono uppercase">
                    Padrão Militar
                  </div>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <ShieldCheck className="text-brand-sky mb-2" size={24} />
                  <div className="text-2xl font-display uppercase">3.000h</div>
                  <div className="text-xs text-white/50 font-mono uppercase">
                    Aeronave de Caça
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ThePilot };
