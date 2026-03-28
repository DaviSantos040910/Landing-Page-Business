import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // EDITE: Seu número de WhatsApp
  const whatsappNumber = "5589981013110";
  const message = encodeURIComponent(
    "Olá! Vi seus serviços no site e gostaria de solicitar um orçamento."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[hsl(142,70%,45%)] text-foreground shadow-lg hover:scale-110 transition-transform duration-300"
      style={{
        boxShadow: "0 0 20px hsl(142 70% 45% / 0.5)",
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
