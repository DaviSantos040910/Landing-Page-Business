import { Award, Clock, Shield, ThumbsUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certificado",
      description: "Profissional certificado e atualizado com as normas técnicas.",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Compromisso com prazos e horários acordados.",
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "Todos os serviços com garantia de qualidade.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfação",
      description: "Clientes satisfeitos é nossa maior prioridade.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              {/* EDITE: Substitua pela sua foto */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
                <img
                  src="/me.jpeg"
                  alt="Davi Santos"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl glow-primary">
                <div className="text-3xl font-heading font-bold">10+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-10 -left-10 w-full h-full rounded-2xl border-2 border-primary/20" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sobre Mim
            </span>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {/* EDITE: Seu nome */}
              Davi Santos
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              {/* EDITE: Sua história e experiência */}
              <p>
                Sou eletricista residencial e predial com experiência no mercado. 
                Especializado em instalações elétricas e sistemas de segurança residencial e predial, 
                sempre trabalhando com qualidade e dentro das normas técnicas.
              </p>
              <p>
                Minha missão é proporcionar soluções seguras e eficientes para sua casa, 
                garantindo a proteção da sua família e o bom funcionamento de todos os 
                equipamentos elétricos.
              </p>
              <p>
                Atendo em São Raimundo Nonato-PI e região, sempre com pontualidade e preços justos. 
                Faço orçamentos sem compromisso e ofereço garantia em todos os serviços.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
