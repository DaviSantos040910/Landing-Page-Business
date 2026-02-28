import { useState, useCallback, useEffect } from "react";
import { Camera, Zap, Shield, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  category: string;
  icon: typeof Zap;
  image: string;
  description: string;
  // Array de imagens para o carrossel (inclui a capa como primeira)
  gallery?: string[];
}

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  // EDITE: Substitua os placeholders pelas suas próprias fotos
  const projects: Project[] = [
    {
      id: 1,
      title: "Instalação de Quadro Elétrico",
      category: "Elétrica",
      icon: Zap,
      image: "/projeto1-capa.jpg",
      description: "Quadro de distribuição completo instalado conforme normas ABNT.",
      gallery: [
        "/projeto1-capa.jpg",
        "/projeto1-1.jpg",
        "/projeto1-2.jpg",
        "/projeto1-3.jpg",
        "/projeto1-4.jpg",
      ],
    },
    {
      id: 2,
      title: "Sistema de CFTV",
      category: "Segurança",
      icon: Camera,
      // EDITE: Coloque a URL da sua foto aqui
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
      description: "Câmeras HD com monitoramento remoto pelo celular.",
    },
    {
      id: 3,
      title: "Iluminação Residencial",
      category: "Elétrica",
      icon: Zap,
      // EDITE: Coloque a URL da sua foto aqui
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
      description: "Projeto de iluminação LED para sala de estar moderna.",
    },
    {
      id: 4,
      title: "Cerca Elétrica",
      category: "Segurança",
      icon: Shield,
      // EDITE: Coloque a URL da sua foto aqui
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Instalação completa de cerca elétrica perimetral.",
    },
    {
      id: 5,
      title: "Manutenção Elétrica",
      category: "Elétrica",
      icon: Zap,
      // EDITE: Coloque a URL da sua foto aqui
      image: "https://images.unsplash.com/photo-1558618047-f4b511161e49?w=600&h=400&fit=crop",
      description: "Revisão e adequação de instalação elétrica antiga.",
    },
    {
      id: 6,
      title: "Alarme com Sensores",
      category: "Segurança",
      icon: Shield,
      // EDITE: Coloque a URL da sua foto aqui
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
      description: "Sistema de alarme com sensores de presença e app.",
    },
  ];

  const handleProjectClick = useCallback((project: Project) => {
    if (project.gallery && project.gallery.length > 0) {
      setSelectedProject(project);
      setCurrentSlide(0);
    }
  }, []);

  const handleCloseDialog = useCallback(() => {
    setSelectedProject(null);
    setCarouselApi(undefined);
    setCurrentSlide(0);
  }, []);

  // Atualizar slide atual quando o carrossel muda
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
      setTotalSlides(carouselApi.scrollSnapList().length);
    };

    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Trabalhos Realizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {/* EDITE: Sua descrição */}
            Confira alguns dos nossos projetos mais recentes. Qualidade e profissionalismo em cada serviço.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 ${project.gallery ? "cursor-pointer" : ""
                }`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${project.category === "Elétrica"
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary/20 text-secondary"
                    }`}>
                    <project.icon className="w-3 h-3" />
                    {project.category}
                  </div>
                </div>

                {/* Gallery indicator */}
                {project.gallery && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                    <Camera className="w-3 h-3" />
                    {project.gallery.length}
                  </div>
                )}

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Info (always visible) */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ver mais trabalhos ou discutir seu projeto?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Entre em contato
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Carousel Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) handleCloseDialog();
        }}
      >
        <DialogContent className="max-w-4xl w-[95vw] p-0 gap-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden">
          {selectedProject && (
            <>
              {/* Header com título e descrição */}
              <DialogHeader className="px-6 pt-6 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${selectedProject.category === "Elétrica"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                    }`}>
                    <selectedProject.icon className="w-3 h-3" />
                    {selectedProject.category}
                  </div>
                </div>
                <DialogTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm md:text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Carousel */}
              <div className="relative px-2 pb-2">
                <Carousel
                  opts={{
                    loop: true,
                    align: "center",
                  }}
                  setApi={setCarouselApi}
                  className="w-full"
                >
                  <CarouselContent>
                    {selectedProject.gallery?.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg mx-2">
                          <img
                            src={img}
                            alt={`${selectedProject.title} - Foto ${index === 0 ? "Capa" : index}`}
                            className="w-full h-full object-contain bg-black/20 rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Botões de navegação customizados */}
                  <button
                    onClick={() => carouselApi?.scrollPrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm hover:scale-110"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button
                    onClick={() => carouselApi?.scrollNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm hover:scale-110"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </Carousel>

                {/* Indicadores de slide (dots) */}
                <div className="flex items-center justify-center gap-2 py-4">
                  {selectedProject.gallery?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={`transition-all duration-300 rounded-full ${currentSlide === index
                          ? "w-8 h-2.5 bg-primary"
                          : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      aria-label={`Ir para foto ${index === 0 ? "capa" : index}`}
                    />
                  ))}
                  <span className="ml-3 text-xs text-muted-foreground">
                    {currentSlide + 1} / {totalSlides}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
