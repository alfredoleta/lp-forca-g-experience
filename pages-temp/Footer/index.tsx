import { INSTAGRAM_LINK, WHATSAPP_LINK } from "@/constants/constants";
import { Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
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
            </div>
            <p className="text-white/50 max-w-sm mb-8">
              A experiência definitiva de voo acrobático no Rio de Janeiro. Sob
              o comando da elite da aviação.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brand-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brand-accent transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6">
              Navegação
            </h5>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a
                  href="#experiencia"
                  className="hover:text-white transition-colors"
                >
                  A Experiência
                </a>
              </li>
              <li>
                <a
                  href="#piloto"
                  className="hover:text-white transition-colors"
                >
                  O Piloto
                </a>
              </li>
              <li>
                <a
                  href="#manobras"
                  className="hover:text-white transition-colors"
                >
                  Manobras
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6">
              Localização
            </h5>
            <Link
              href="https://maps.app.goo.gl/px5hHG963kXC8qKLA?g_st=iw"
              target="_blank"
              className="hover:underline"
            >
              <p className="text-sm text-white/70 leading-relaxed">
                Clube da Aeronáutica
                <br />
                Barra da Tijuca / Recreio
                <br />
                Rio de Janeiro - RJ
              </p>
            </Link>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white/30">
          <div>{`© ${new Date().getFullYear()} Força G Experience. Todos os direitos reservados.`}</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
