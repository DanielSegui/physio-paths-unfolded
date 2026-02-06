import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#especialidades", label: "Especialidades" },
    { href: "/#sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/galeria", label: "Galería" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Centre Fisioteràpia Osteopatia Jordi Seguí Mallol" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+34123456789"
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Cita Previa
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+34123456789"
                className="btn-primary flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-4 h-4" />
                Cita Previa
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
