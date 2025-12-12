import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Centre Fisioteràpia Osteopatia" className="h-20 w-auto mx-auto md:mx-0 mb-4 bg-primary-foreground/10 p-2 rounded-lg" />
            <p className="text-primary-foreground/80 text-sm">
              Centro especializado en fisioterapia y osteopatía
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 font-heading">Enlaces Rápidos</h4>
            <nav className="flex flex-wrap justify-center gap-4">
              <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Inicio
              </a>
              <a href="#especialidades" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Especialidades
              </a>
              <a href="#sobre-nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Social links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 font-heading">Síguenos</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Centre Fisioteràpia Osteopatia Jordi Seguí Mallol. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
