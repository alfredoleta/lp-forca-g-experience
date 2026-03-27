import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { SectionTitle } from "@/components/SectionTitle";
import { TESTIMONIALS } from "@/constants/constants";
import { Star } from "lucide-react";
import Image from "next/image";

const Depoimentos = () => {
  return (
    <section className="py-10 md:py-20 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionTitle subtitle="Depoimentos">Quem Já Voou</SectionTitle>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <InfiniteMarquee>
          {/* Double the array for infinite scroll effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden flex flex-col justify-end w-[320px] h-[450px] md:w-[380px] md:h-[530px] shrink-0 group"
            >
              {/* Background Image */}
              <Image
                src={testimonial.image}
                alt={`Foto de ${testimonial.name}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-brand-accent fill-brand-accent drop-shadow-md"
                    />
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-6 text-sm md:text-base drop-shadow-md">
                  {`"${testimonial.text}"`}
                </p>
                <div>
                  <div className="font-bold text-lg drop-shadow-md">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-brand-sky font-mono uppercase drop-shadow-md">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
};

export { Depoimentos };
