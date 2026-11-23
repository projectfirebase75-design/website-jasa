import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
