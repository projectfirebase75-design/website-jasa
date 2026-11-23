import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-accent/10">
      <div className="container-max rounded-3xl bg-navy-900 px-6 py-12 text-center md:px-12">
        <h2 className="heading-lg text-white">Siap Memulai Proyek Website Anda?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Konsultasikan kebutuhan website Anda sekarang. Gratis, tanpa komitmen.
        </p>
        <a
          href={buildWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          <MessageCircle className="h-5 w-5" />
          Konsultasi Gratis Sekarang
        </a>
      </div>
    </section>
  );
}
