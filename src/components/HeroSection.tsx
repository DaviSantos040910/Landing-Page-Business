import { Zap, Shield, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-slide-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Eletricista Residencial & Segurança</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* EDITE: Seu título principal */}
            Soluções Elétricas e de{" "}
            <span className="text-gradient">Segurança</span>{" "}
            para sua Casa
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* EDITE: Sua descrição */}
            Instalações elétricas de qualidade e sistemas de segurança modernos. 
            Proteja sua família com profissionalismo e tecnologia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                <Zap className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#portfolio">
                <Shield className="w-5 h-5" />
                Ver Trabalhos
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {/* EDITE: Seus números */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
