import { Zap, Shield, Camera, Lightbulb, Cable, AlertTriangle, Lock, Wifi } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServicesSection = () => {
  const electricalServices = [
    {
      icon: Lightbulb,
      title: "Instalações Elétricas",
      description: "Instalação completa de sistemas elétricos residenciais, incluindo tomadas, interruptores e iluminação.",
    },
    {
      icon: Cable,
      title: "Manutenção Preventiva",
      description: "Revisão e manutenção do sistema elétrico para evitar problemas e garantir segurança.",
    },
    {
      icon: Zap,
      title: "Quadro de Distribuição",
      description: "Instalação e adequação de quadros elétricos conforme normas da ABNT.",
    },
    {
      icon: AlertTriangle,
      title: "Reparos Emergenciais",
      description: "Atendimento rápido para curtos-circuitos, quedas de energia e problemas urgentes.",
    },
  ];

  const securityServices = [
    {
      icon: Camera,
      title: "Câmeras de Segurança",
      description: "Instalação de sistemas de CFTV com monitoramento remoto pelo celular.",
    },
    {
      icon: Lock,
      title: "Alarmes Residenciais",
      description: "Sistemas de alarme com sensores de presença e monitoramento 24h.",
    },
    {
      icon: Shield,
      title: "Cercas Elétricas",
      description: "Instalação de cercas elétricas com central de choque e alarme integrado.",
    },
    {
      icon: Wifi,
      title: "Automação Residencial",
      description: "Controle de iluminação, portões e câmeras pelo smartphone.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-card relative">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            O que Posso Fazer por Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {/* EDITE: Sua descrição de serviços */}
            Soluções completas em eletricidade e segurança residencial, sempre com qualidade e garantia.
          </p>
        </div>

        {/* Electrical Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Serviços Elétricos
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {electricalServices.map((service, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border hover:border-primary/50 transition-all duration-300 group hover:glow-primary"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Sistemas de Segurança
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityServices.map((service, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border hover:border-secondary/50 transition-all duration-300 group hover:glow-secondary"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-foreground font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
