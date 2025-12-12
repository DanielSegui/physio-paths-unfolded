import { Activity, Bone, Brain, Heart, Baby, Dumbbell, Users } from "lucide-react";

const specialties = [
  {
    icon: Activity,
    title: "Fisioterapia General",
    description: "Tratamiento de lesiones musculoesqueléticas, rehabilitación post-operatoria y recuperación funcional mediante técnicas manuales y ejercicio terapéutico.",
    treatments: ["Masoterapia", "Electroterapia", "Ejercicio terapéutico", "Vendaje funcional"],
  },
  {
    icon: Bone,
    title: "Osteopatía",
    description: "Enfoque integral del cuerpo para restaurar el equilibrio estructural. Tratamos disfunciones del sistema musculoesquelético, visceral y craneal.",
    treatments: ["Técnicas estructurales", "Osteopatía visceral", "Osteopatía craneal", "Liberación miofascial"],
  },
  {
    icon: Users,
    title: "Suelo Pélvico",
    description: "Tratamiento especializado de disfunciones del suelo pélvico en mujeres y hombres. Incontinencia, prolapsos, dolor pélvico y rehabilitación pre/postparto.",
    treatments: ["Incontinencia urinaria", "Rehabilitación postparto", "Dolor pélvico", "Preparación al parto"],
  },
  {
    icon: Brain,
    title: "Fisioterapia Neurológica",
    description: "Rehabilitación especializada para pacientes con patologías del sistema nervioso central o periférico, mejorando la movilidad y autonomía.",
    treatments: ["Bobath", "Facilitación neuromuscular", "Reeducación postural", "Estimulación sensorial"],
  },
  {
    icon: Heart,
    title: "Fisioterapia Respiratoria",
    description: "Técnicas para mejorar la función pulmonar, eliminar secreciones y optimizar la capacidad respiratoria en patologías agudas y crónicas.",
    treatments: ["Drenaje bronquial", "Reeducación respiratoria", "Ejercicios diafragmáticos", "Ventilación dirigida"],
  },
  {
    icon: Baby,
    title: "Fisioterapia Pediátrica",
    description: "Atención especializada para bebés y niños, tratando alteraciones del desarrollo motor, cólicos del lactante y patologías infantiles.",
    treatments: ["Estimulación temprana", "Cólico del lactante", "Tortícolis congénita", "Desarrollo psicomotor"],
  },
  {
    icon: Dumbbell,
    title: "Fisioterapia Deportiva",
    description: "Prevención y tratamiento de lesiones deportivas, readaptación al esfuerzo y mejora del rendimiento para deportistas de todos los niveles.",
    treatments: ["Recuperación de lesiones", "Readaptación deportiva", "Prevención", "Vendaje neuromuscular"],
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestras <span className="text-gradient">Especialidades</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ofrecemos una amplia gama de servicios especializados para cuidar de tu salud y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <article
              key={specialty.title}
              className="specialty-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <specialty.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {specialty.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {specialty.treatments.map((treatment) => (
                  <span
                    key={treatment}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {treatment}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
