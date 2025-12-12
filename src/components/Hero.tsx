import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative circles inspired by logo */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/20 animate-float" />
      <div className="absolute top-40 right-32 w-16 h-16 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-10 w-24 h-24 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-accent/25 animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Spine decoration */}
      <div className="absolute left-8 top-1/4 hidden lg:flex flex-col items-center gap-3">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded-full bg-gradient-to-b from-spine-light to-spine-blue animate-pulse-soft"
            style={{
              width: `${20 - i * 1.5}px`,
              height: `${20 - i * 1.5}px`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in font-heading">
            Tu bienestar es nuestra{" "}
            <span className="text-gradient">prioridad</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Centro especializado en fisioterapia y osteopatía. 
            Tratamientos personalizados para recuperar tu calidad de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#especialidades" className="btn-primary">
              Nuestras Especialidades
            </a>
            <a href="#contacto" className="btn-outline">
              Pedir Cita
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#especialidades" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
