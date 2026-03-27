import { SectionTitle } from "@/components/SectionTitle";
import { WHATSAPP_LINK } from "@/constants/constants";
import { MessageCircle, Video, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-sky/5 -z-10" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle subtitle="Invista na Memória">
          Valores da Experiência
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass p-10 rounded-3xl border-white/5 hover:border-brand-accent/30 transition-colors">
            <div className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">
              Voo Standard
            </div>
            <div className="text-5xl font-display mb-2">R$ 1.350</div>
            {/* <div className="text-white/40 text-sm mb-8">Voo</div> */}
            <ul className="text-left space-y-4 my-16 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Zap size={14} className="text-brand-accent" /> 20 min de voo
                acrobático
              </li>
              <li className="flex items-center gap-2">
                <Zap size={14} className="text-brand-accent" /> Briefing de
                segurança
              </li>
              {/* <li className="flex items-center gap-2">
                <Zap size={14} className="text-brand-accent" /> Vídeo bruto via
                WhatsApp
              </li> */}
            </ul>
          </div>
          <div className="glass p-10 rounded-3xl border-brand-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-accent text-black text-[10px] font-bold px-4 py-1 uppercase tracking-tighter">
              Mais Procurado
            </div>
            <div className="text-sm font-mono uppercase tracking-widest text-brand-accent mb-4">
              Voo Premium
            </div>
            <div className="text-5xl font-display mb-2">R$ 1.490</div>
            <div className="text-white/40 text-sm mb-8">
              Voo + Vídeo Editado
            </div>
            <ul className="text-left space-y-4 mb-8 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Zap size={14} className="text-brand-accent" /> 20 min de voo
                acrobático
              </li>
              <li className="flex items-center gap-2">
                <Zap size={14} className="text-brand-accent" /> Briefing de
                segurança
              </li>
              <li className="flex items-center gap-2">
                <Video size={14} className="text-brand-accent" /> Vídeo editado
                para Reels/Instagram
              </li>
            </ul>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl inline-flex flex-col md:flex-row items-center gap-8">
          <div className="text-left">
            <div className="font-bold text-lg">Pronto para decolar?</div>
            <div className="text-white/50 text-sm">
              Agendamento com 10 dias de antecedência.
            </div>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <MessageCircle size={20} className="text-black" /> Chamar no
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
