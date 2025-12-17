import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  // EDITE: Suas informações de contato
  const contactInfo = {
    phone: "(XX) XXXXX-XXXX",
    whatsapp: "5511999999999", // Número completo com código do país
    email: "seu@email.com",
    address: "Sua Cidade - Estado",
    hours: "Segunda a Sábado: 8h às 18h",
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Vi seu portfólio e gostaria de solicitar um orçamento."
  );

  return (
    <section id="contato" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para solicitar um orçamento sem compromisso. 
            Respondo rapidamente pelo WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="p-8 rounded-2xl gradient-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[hsl(142,70%,45%)]/20">
                  <MessageCircle className="w-8 h-8 text-[hsl(142,70%,45%)]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground">Resposta rápida!</p>
                </div>
              </div>
              <Button
                variant="whatsapp"
                size="xl"
                className="w-full"
                asChild
              >
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Other Contact Methods */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário de Atendimento</p>
                  <p className="font-medium text-foreground">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl gradient-card border border-border">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Serviço
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="instalacao">Instalação Elétrica</option>
                  <option value="manutencao">Manutenção Elétrica</option>
                  <option value="cameras">Câmeras de Segurança</option>
                  <option value="alarme">Sistema de Alarme</option>
                  <option value="cerca">Cerca Elétrica</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Descreva o serviço que você precisa..."
                />
              </div>

              <Button variant="default" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ou entre em contato diretamente pelo WhatsApp para resposta mais rápida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
