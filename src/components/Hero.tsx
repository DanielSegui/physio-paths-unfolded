import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/55 to-primary/20" />

      <div className="relative container mx-auto px-6 pb-20 md:pb-28 pt-32">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-6 animate-fade-in">
            Fisioterapia · Osteopatía · Suelo pélvico
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-primary-foreground mb-6 animate-fade-in">
            Tu bienestar,<br />en buenas manos.
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Tratamientos personalizados para recuperar tu movilidad y tu calidad de vida.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#contacto" className="group inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-full font-medium transition-all hover:gap-3">
              Pedir cita <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#especialidades" className="inline-flex items-center px-7 py-3.5 rounded-full font-medium text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/10 transition-colors">
              Especialidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
