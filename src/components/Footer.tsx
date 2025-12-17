import { Zap, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  // EDITE: Suas redes sociais
  const socialLinks = {
    instagram: "https://instagram.com/seu_usuario",
    facebook: "https://facebook.com/sua_pagina",
    whatsapp: "5511999999999",
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              {/* EDITE: Seu nome ou empresa */}
              Seu Nome
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
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${socialLinks.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-[hsl(142,70%,45%)]/20 text-muted-foreground hover:text-[hsl(142,70%,45%)] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {/* EDITE: Sua cidade */}
            Eletricista Residencial e Segurança • Sua Cidade - Estado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
