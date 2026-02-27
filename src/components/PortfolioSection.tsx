import { Camera, Zap, Shield, ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  // EDITE: Substitua os placeholders pelas suas próprias fotos
  const projects = [
    {
      id: 1,
      title: "Instalação de Quadro Elétrico",
      category: "Elétrica",
      icon: Zap,
      // EDITE: Coloque a URL da sua foto aqui
      image: "/projeto-eletrico.jpg",
      description: "Quadro de distribuição completo instalado conforme normas ABNT.",
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
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
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
    </section>
  );
};

export default PortfolioSection;
