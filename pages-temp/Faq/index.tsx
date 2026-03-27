import { SectionTitle } from "@/components/SectionTitle";
import { FAQ } from "@/constants/constants";
import { ChevronRight } from "lucide-react";

const Faq = () => {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle subtitle="Dúvidas Frequentes">
          Tire Suas Dúvidas
        </SectionTitle>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <details key={i} className="glass rounded-2xl group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-bold text-lg">
                {item.question}
                <ChevronRight
                  size={20}
                  className="group-open:rotate-90 transition-transform text-brand-accent"
                />
              </summary>
              <div className="px-6 pb-6 text-white/60 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq };
