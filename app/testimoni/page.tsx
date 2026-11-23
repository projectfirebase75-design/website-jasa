import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolio } from "@/data/portfolio";

export const metadata = buildMetadata({
  title: "Testimoni & Hasil Proyek | NusaWeb Studio",
  description: "Testimoni pelanggan dan hasil proyek website."
});

export default function TestimoniPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Testimoni & Hasil Proyek</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            eyebrow="Testimoni"
            title="Ulasan Pelanggan"
            description="Catatan: kartu bertanda Placeholder akan diganti dengan ulasan asli setelah dikonfirmasi."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading
            eyebrow="Hasil Proyek"
            title="Website yang Telah Kami Kerjakan"
            description="Contoh proyek nyata yang telah selesai dan dapat dikunjungi."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolio.map((p) => <PortfolioCard key={p.id} item={p} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
