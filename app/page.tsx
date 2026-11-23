import Link from "next/link";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";
import { services } from "@/data/services";
import { plans } from "@/data/pricing";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Jasa Pembuatan Website Profesional | NusaWeb Studio",
  description:
    "Jasa pembuatan website profesional untuk bisnis, UMKM, perusahaan, restoran, toko online, dan landing page. Desain premium, cepat, dan SEO-friendly."
});

const advantages = [
  "Desain modern & premium",
  "Responsif di semua perangkat",
  "SEO-friendly & cepat",
  "Free domain tahun pertama",
  "Support & maintenance",
  "Konsultasi gratis"
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-accent/30 opacity-90" />
        <div className="container-max relative grid gap-10 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
              Agensi Digital Profesional
            </p>
            <h1 className="heading-xl mt-3">
              Website Profesional untuk <span className="text-accent-light">Bisnis Anda</span>
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 leading-relaxed">
              Kami membangun website premium, cepat, dan SEO-friendly untuk bisnis,
              UMKM, perusahaan, restoran, toko online, dan kebutuhan lainnya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Konsultasi Gratis
              </a>
              <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Lihat Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-3">
              {advantages.slice(0, 4).map((a) => (
                <div key={a} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-light" />
                  <span className="text-sm text-slate-200">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Layanan unggulan */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            eyebrow="Layanan"
            title="Layanan Unggulan Kami"
            description="Berbagai jenis website yang dapat disesuaikan dengan kebutuhan bisnis Anda."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/layanan" className="btn-secondary">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading
            eyebrow="Mengapa Kami"
            title="Keunggulan Layanan Kami"
            description="Kami berkomitmen memberikan hasil terbaik untuk setiap proyek."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <p className="font-medium text-navy-900">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket harga */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            eyebrow="Paket Harga"
            title="Pilih Paket Sesuai Kebutuhan"
            description="Harga transparan. Semua paket dapat dikustomisasi."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.slice(0, 3).map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
          <div className="mt-8 text-center">
            <Link href="/harga" className="btn-secondary">Lihat Semua Paket</Link>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading
            eyebrow="Testimoni"
            title="Kata Mereka"
            description="Ulasan pelanggan kami (placeholder — akan diperbarui dengan ulasan asli)."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
          <div className="mt-8 text-center">
            <Link href="/testimoni" className="btn-secondary">Lihat Semua Testimoni</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Pertanyaan Umum" />
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
