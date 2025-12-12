import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "C/ Ejemplo, 123\n08001 Barcelona",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 123 456 789",
    link: "tel:+34123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@fisioterapiajordisegui.com",
    link: "mailto:info@fisioterapiajordisegui.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Viernes: 9:00 - 20:00\nSábados: 9:00 - 14:00",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Contacta</span> con Nosotros
          </h2>
          <p className="section-subtitle mx-auto">
            Estamos aquí para ayudarte. Solicita tu cita o contacta con nosotros para cualquier consulta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
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

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Solicita tu Cita
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Servicio
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="fisioterapia">Fisioterapia General</option>
                  <option value="osteopatia">Osteopatía</option>
                  <option value="neurologica">Fisioterapia Neurológica</option>
                  <option value="respiratoria">Fisioterapia Respiratoria</option>
                  <option value="pediatrica">Fisioterapia Pediátrica</option>
                  <option value="deportiva">Fisioterapia Deportiva</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntanos tu caso..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
