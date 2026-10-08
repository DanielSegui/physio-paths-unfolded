import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "C/ Ejemplo, 123\n08001 Barcelona",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Jueves: 8:30 - 13:30 y 15:30 - 20:00\nViernes: 8:00 - 14:00\nFines de semana: Cerrado",
  },
];

const Contact = () => {
  const phoneNumber = "+34123456789";
  const whatsappNumber = "34123456789";

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Contacta</span> con Nosotros
          </h2>
          <p className="section-subtitle mx-auto">
            Llámanos o envíanos un WhatsApp para solicitar tu cita
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CTA Buttons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-4 bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/80 text-sm mb-1">Llámanos</p>
                <p className="text-2xl font-bold font-heading">+34 123 456 789</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground/80 text-sm mb-1">WhatsApp</p>
                <p className="text-2xl font-bold font-heading">Escríbenos</p>
              </div>
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
