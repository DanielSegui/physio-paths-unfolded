import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Jordi Seguí Mallol",
    role: "Director y Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Osteopatía", "Fisioterapia Deportiva", "Terapia Manual"],
    description:
      "Fundador del centro con más de 15 años de experiencia. Especializado en osteopatía y tratamiento de lesiones deportivas. Apasionado por la formación continua y las técnicas más avanzadas.",
    education: [
      "Grado en Fisioterapia - Universidad de Valencia",
      "Máster en Osteopatía - EOM",
      "Especialización en Fisioterapia Deportiva",
    ],
  },
  {
    name: "María García López",
    role: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    specialties: ["Suelo Pélvico", "Fisioterapia Pediátrica", "Pilates Terapéutico"],
    description:
      "Especialista en salud de la mujer y fisioterapia pediátrica. Combina técnicas manuales con ejercicio terapéutico para una recuperación integral.",
    education: [
      "Grado en Fisioterapia - Universidad de Alicante",
      "Especialización en Suelo Pélvico",
      "Formación en Fisioterapia Pediátrica",
    ],
  },
  {
    name: "Carlos Martínez Ruiz",
    role: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Fisioterapia Neurológica", "Fisioterapia Respiratoria", "Rehabilitación"],
    description:
      "Experto en rehabilitación neurológica y respiratoria. Trabaja con pacientes de todas las edades ayudándoles a recuperar su funcionalidad y calidad de vida.",
    education: [
      "Grado en Fisioterapia - Universidad de Barcelona",
      "Máster en Neurorrehabilitación",
      "Especialización en Fisioterapia Respiratoria",
    ],
  },
  {
    name: "Laura Fernández Vidal",
    role: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    specialties: ["Fisioterapia General", "Terapia Manual", "Punción Seca"],
    description:
      "Fisioterapeuta con enfoque integral en el tratamiento del dolor musculoesquelético. Especializada en técnicas de terapia manual y punción seca.",
    education: [
      "Grado en Fisioterapia - Universidad de Valencia",
      "Curso avanzado de Punción Seca",
      "Formación en Terapia Manual Ortopédica",
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title text-4xl md:text-5xl mb-4">
              Nuestro Equipo
            </h1>
            <p className="section-subtitle mx-auto">
              Profesionales cualificados y apasionados por tu bienestar y
              recuperación
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden card-hover border-border/50"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Photo */}
                      <div className="md:w-1/3 relative">
                        <div className="aspect-square md:aspect-auto md:h-full">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent md:bg-gradient-to-r" />
                      </div>

                      {/* Info */}
                      <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary font-medium mb-3">
                            {member.role}
                          </p>

                          {/* Specialties */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.specialties.map((specialty, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-accent/20 text-accent-foreground hover:bg-accent/30"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>

                          <p className="text-muted-foreground text-sm mb-4">
                            {member.description}
                          </p>

                          {/* Education */}
                          <div className="space-y-1">
                            <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                              Formación
                            </p>
                            <ul className="text-xs text-muted-foreground space-y-0.5">
                              {member.education.map((edu, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {edu}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Contact Icons */}
                        <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                          <a
                            href="tel:+34123456789"
                            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={`Llamar a ${member.name}`}
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                          <a
                            href="mailto:info@fisioterapia.com"
                            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={`Email a ${member.name}`}
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                          <a
                            href="#"
                            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={`LinkedIn de ${member.name}`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Profesionalidad
                </h3>
                <p className="text-sm text-muted-foreground">
                  Formación continua y técnicas basadas en evidencia científica
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cercanía
                </h3>
                <p className="text-sm text-muted-foreground">
                  Trato personalizado y humano con cada paciente
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Excelencia
                </h3>
                <p className="text-sm text-muted-foreground">
                  Compromiso con los mejores resultados para tu salud
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Listo para empezar tu recuperación?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nuestro equipo está preparado para ayudarte. Pide tu cita y
              comienza tu camino hacia el bienestar.
            </p>
            <a href="/#contacto" className="btn-primary inline-block">
              Pedir Cita
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
