import { Depoimentos } from "@/pages-temp/Depoimentos";
import { Faq } from "@/pages-temp/Faq";
import { Footer } from "@/pages-temp/Footer";
import { Hero } from "@/pages-temp/Hero";
import { Nav } from "@/pages-temp/Nav";
import { Pricing } from "@/pages-temp/Pricing";
import { Repertorio } from "@/pages-temp/Repertorio";
import { Stats } from "@/pages-temp/Stats";
import { TheExpirience } from "@/pages-temp/TheExperience";
import { ThePilot } from "@/pages-temp/ThePilot";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-accent selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <TheExpirience />
      <ThePilot />
      <Repertorio />
      <Pricing />
      <Depoimentos />
      <Faq />
      <Footer />
    </div>
  );
}
