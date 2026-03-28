import { Zap, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  // EDITE: Suas redes sociais
  const socialLinks = {
    instagram: "https://instagram.com/seu_usuario",
    facebook: "https://facebook.com/sua_pagina",
    whatsapp: "5589981013110",
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 p-1 border border-white/10">
              <img src="/logo.png" alt="Logo Davi" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Davi - Elétrica & Segurança
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
              Portfólio
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end gap-4">
            <a
              href={`https://wa.me/${socialLinks.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,45%)] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Contato via WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Davi - Elétrica & Segurança. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {/* EDITE: Sua cidade */}
            Eletricista Residencial & Segurança • São Raimundo Nonato - PI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
