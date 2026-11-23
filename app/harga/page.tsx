import { buildMetadata } from "@/lib/seo";
import { plans } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Harga Paket Pembuatan Website | NusaWeb Studio",
  description: "Paket harga pembuatan website dari Rp299.000 hingga custom. Transparan dan dapat disesuaikan."
});

export default function HargaPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Harga Paket</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Harga transparan. Semua paket dapat dikustomisasi sesuai kebutuhan.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Paket" title="Daftar Paket Harga" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
