import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  phone: z.string().min(10, "Informe um telefone válido"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // EDITE: Suas informações de contato
  const contactInfo = {
    phone: "(89) 98101-3110",
    whatsapp: "5589981013110",
    email: "davisantossousa2@gmail.com",
    address: "São Raimundo Nonato - PI",
    hours: "Segunda a Sábado: 8h às 18h",
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Chamada para a API (Vercel/Netlify/Backend)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem");

      setIsSuccess(true);
      toast.success("Mensagem enviada com sucesso!");
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar. Tente pelo WhatsApp!");
    } finally {
      setIsSubmitting(false);
    }
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
                  <p className="text-muted-foreground">Resposta imediata!</p>
                </div>
              </div>
              <Button
                variant="whatsapp"
                size="xl"
                className="w-full text-lg h-16"
                asChild
              >
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Other Contact Methods */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Telefone</p>
                  <p className="font-semibold text-lg text-foreground">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">E-mail</p>
                  <p className="font-semibold text-lg text-foreground">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Localização</p>
                  <p className="font-semibold text-lg text-foreground">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border group hover:border-secondary/50 transition-colors">
                <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Horário de Atendimento</p>
                  <p className="font-semibold text-lg text-foreground">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl gradient-card border border-border shadow-2xl relative overflow-hidden">
            {isSuccess && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground mb-8">
                  Obrigado pelo contato. Retornaremos sua mensagem o mais breve possível.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Enviar Outra Mensagem
                </Button>
              </div>
            )}

            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground ml-1">
                  Nome Completo
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-4 rounded-xl bg-muted/50 border ${errors.name ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground`}
                  placeholder="Como podemos te chamar?"
                />
                {errors.name && <p className="text-xs text-destructive mt-1 ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground ml-1">
                  Telefone / WhatsApp
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-4 rounded-xl bg-muted/50 border ${errors.phone ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground`}
                  placeholder="(XX) XXXXX-XXXX"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1 ml-1">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground ml-1">
                  Tipo de Serviço
                </label>
                <select
                  {...register("service")}
                  id="service"
                  className={`w-full px-4 py-4 rounded-xl bg-muted/50 border ${errors.service ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground`}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="instalacao">Instalação Elétrica</option>
                  <option value="manutencao">Manutenção Elétrica</option>
                  <option value="cameras">Câmeras de Segurança</option>
                  <option value="alarme">Sistemas de Alarme</option>
                  <option value="luminarias">Iluminação / Luminárias</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.service && <p className="text-xs text-destructive mt-1 ml-1">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground ml-1">
                  Mensagem
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-4 rounded-xl bg-muted/50 border ${errors.message ? 'border-destructive' : 'border-border'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none`}
                  placeholder="Descreva brevemente o que você precisa..."
                />
                {errors.message && <p className="text-xs text-destructive mt-1 ml-1">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                variant="default" 
                size="xl" 
                className="w-full text-lg font-bold shadow-lg hover:shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Orçamento
                  </>
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Segurança de dados garantida. Respondemos rapidamente.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
