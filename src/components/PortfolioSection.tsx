import { useState, useEffect } from "react";
import { Zap, Camera, Shield, Lightbulb, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const PortfolioSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const works = [
    {
      id: 1,
      tag: "Elétrica",
      title: "Quadro Elétrico Residencial",
      description: "Instalação profissional de quadro de distribuição, organizando circuitos de forma eficiente e segura, seguindo todas as normas técnicas vigentes.",
      image: "/quadro-eletrico-1.jpeg",
      icon: Zap,
    },
    {
      id: 2,
      tag: "Elétrica",
      title: "Painel de Energia Geral",
      description: "Modernização completa de painéis elétricos antigos, eliminando problemas de sobrecarga e garantindo estabilidade energética para o imóvel.",
      image: "/quadro-eletrico-2.jpeg",
      icon: Zap,
    },
    {
      id: 3,
      tag: "Segurança",
      title: "Central de Alarme Monitorada",
      description: "Configuração de central de alarme de última geração, integrando proteção perimetral e sistemas de alerta remoto via aplicativo.",
      image: "/quadro-alarme-1.jpeg",
      icon: Shield,
    },
    {
      id: 4,
      tag: "Segurança",
      title: "Sistema de Alarme Integrado",
      description: "Montagem de quadros de segurança com backup de energia (UPS/No-break), garantindo funcionamento contínuo mesmo durante quedas de luz.",
      image: "/quadro-alarme-2.jpeg",
      icon: Shield,
    },
    {
      id: 5,
      tag: "Iluminação",
      title: "Instalação de Luminárias LED",
      description: "Projeto luminotécnico com instalação precisa de luminárias embutidas, criando ambientes modernos e termicamente eficientes.",
      image: "/luminaria.jpeg",
      icon: Lightbulb,
    },
    {
      id: 6,
      tag: "Segurança",
      title: "Sensores de Presença IVP",
      description: "Instalação estratégica de sensores de movimento (I-V-P) com tecnologia anti-disparo acidental, ideal para residências com pets.",
      image: "/sensor.jpeg",
      icon: Shield,
    },
    {
      id: 7,
      tag: "Monitoramento",
      title: "Câmeras CFTV em HD",
      description: "Implantação de sistema de monitoramento profissional por câmeras, com acesso em tempo real e gravação contínua para monitorar seu patrimônio de onde estiver.",
      image: "/camera.jpeg",
      icon: Camera,
    },
  ];

  return (
    <section id="trabalhos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Confira Nossos Últimos Trabalhos
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções executadas com perfeição. Clique nas imagens para ver detalhes de como transformamos e protegemos cada moradia.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative group max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {works.map((work) => (
                <CarouselItem key={work.id} className="pl-4 basis-full lg:basis-1/2 xl:basis-[48%]">
                  <div className="group/item relative rounded-3xl overflow-hidden border border-border shadow-xl h-[450px] md:h-[550px]">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover/item:opacity-100" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-md">
                          <work.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {work.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                        {work.title}
                      </h3>
                      <p className="text-white/80 line-clamp-2 md:line-clamp-none text-sm md:text-base mb-6 max-w-lg">
                        {work.description}
                      </p>
                      
                      <a 
                        href="#contato" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 group/btn"
                      >
                        Solicitar Serviço Similar
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2">
              <button
                onClick={() => api?.scrollPrev()}
                className="w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2">
              <button
                onClick={() => api?.scrollNext()}
                className="w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Carousel>

          {/* Indicators / Progress */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {works.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    current === i + 1 ? "w-10 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-balance-muted-foreground font-medium">
              <span className="text-foreground">{current.toString().padStart(2, '0')}</span> / {count.toString().padStart(2, '0')}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/20 text-center max-w-4xl mx-auto shadow-sm">
          <h4 className="text-2xl font-bold mb-4">Gostou do que viu?</h4>
          <p className="text-muted-foreground mb-8">
            Estes são apenas alguns exemplos de trabalhos realizados. Cada projeto é tratado com atenção total aos detalhes e foco na sua tranquilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:glow-primary transition-all">
              Pedir um Orçamento
            </a>
            <a 
              href="https://wa.me/5589981013110" 
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold hover:glow-secondary transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
