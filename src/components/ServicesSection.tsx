import { Zap, Shield, Camera, Lightbulb, Cable, AlertTriangle, Lock, Wifi, Droplets, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServicesSection = () => {
  const electricalServices = [
    {
      icon: Lightbulb,
      title: "Instalações Elétricas",
      description: "Instalação completa de sistemas elétricos residenciais e prediais, incluindo automação, força e iluminação.",
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

  const automationServices = [
    {
      icon: Wifi,
      title: "Automação Residencial",
      description: "Controle inteligente de iluminação, portões, cortinas e dispositivos pelo smartphone.",
    },
    {
      icon: Droplets,
      title: "Bombas D'Água Automatizadas",
      description: "Instalação e automação de bombas d'água com sensores de nível e controle automático.",
    },
  ];

  const securityServices = [
    {
      icon: Camera,
      title: "Câmeras de Segurança",
      description: "Monitoramento por CFTV em alta definição com acesso remoto 24h pelo seu smartphone.",
    },
    {
      icon: Shield,
      title: "Alarmes Monitorados",
      description: "Sistemas de alarme inteligentes com sensores inteligentes e notificação imediata.",
    },
    {
      icon: Home,
      title: "Controle de Acesso",
      description: "Tecnologia de ponta com fechaduras digitais e interfonia para sua total segurança.",
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
                Sou eletricista residencial e predial com experiência no mercado. 
                Realizo instalações de sistemas de segurança avançados, 
                sempre trabalhando com qualidade e rigor técnico.
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

        {/* Automation Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/20">
              <Wifi className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Automação & Bombas D'Água
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {automationServices.map((service, index) => (
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
