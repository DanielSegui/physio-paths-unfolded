import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Placeholder images - replace with real photos
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    alt: "Sala de fisioterapia",
    category: "Instalaciones",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    alt: "Tratamiento de fisioterapia",
    category: "Tratamientos",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    alt: "Equipamiento moderno",
    category: "Instalaciones",
  },
  {
    src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800",
    alt: "Sesión de rehabilitación",
    category: "Tratamientos",
  },
  {
    src: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=800",
    alt: "Terapia manual",
    category: "Tratamientos",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
    alt: "Recepción del centro",
    category: "Instalaciones",
  },
];

const categories = ["Todas", "Instalaciones", "Tratamientos"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title text-4xl md:text-5xl mb-4">
              Nuestra Galería
            </h1>
            <p className="section-subtitle mx-auto">
              Conoce nuestras instalaciones y descubre cómo trabajamos para tu
              bienestar
            </p>
          </div>
        </section>

        {/* Featured Carousel */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Imágenes Destacadas
            </h2>
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer"
                        onClick={() => setSelectedImage(image.src)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="text-sm bg-primary/80 px-3 py-1 rounded-full">
                            {image.category}
                          </span>
                          <h3 className="text-lg font-medium mt-2">
                            {image.alt}
                          </h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md  transition-all duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg">
                      Ver imagen
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium">{image.alt}</p>
                    <span className="text-white/80 text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Quieres conocer nuestro centro en persona?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ven a visitarnos y descubre un espacio diseñado para tu
              recuperación y bienestar
            </p>
            <a href="/#contacto" className="btn-primary inline-block">
              Pedir Cita
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
