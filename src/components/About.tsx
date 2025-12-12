import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Award, value: "+15", label: "Años de experiencia" },
  { icon: Users, value: "+5000", label: "Pacientes atendidos" },
  { icon: Clock, value: "100%", label: "Dedicación personalizada" },
];

const values = [
  "Tratamiento personalizado para cada paciente",
  "Profesionales titulados y en formación continua",
  "Tecnología y técnicas de última generación",
  "Ambiente tranquilo y acogedor",
  "Seguimiento continuo de tu evolución",
];

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title">
              Sobre <span className="text-gradient">Nosotros</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              El Centre Fisioteràpia Osteopatia Jordi Seguí Mallol es un centro especializado 
              en el tratamiento integral del paciente. Con más de 15 años de experiencia, 
              nuestro equipo de profesionales se dedica a proporcionar los mejores cuidados 
              para tu recuperación y bienestar.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Combinamos las técnicas más avanzadas de fisioterapia y osteopatía con un 
              trato cercano y personalizado, adaptando cada tratamiento a las necesidades 
              específicas de nuestros pacientes.
            </p>

            <ul className="space-y-3 mb-8">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{value}</span>
                </li>
              ))}
            </ul>

            <a href="#contacto" className="btn-primary inline-block">
              Conócenos
            </a>
          </div>

          {/* Stats and Visual */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl -rotate-3" />
            <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border/50">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-center border-t border-border/50 pt-6">
                <p className="text-foreground/80 italic mb-4">
                  "Nuestro objetivo es ayudarte a recuperar tu calidad de vida 
                  a través de un tratamiento integral y personalizado."
                </p>
                <cite className="text-primary font-semibold not-italic">
                  — Jordi Seguí Mallol
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
