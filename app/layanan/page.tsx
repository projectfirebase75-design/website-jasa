import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Layanan Pembuatan Website | NusaWeb Studio",
  description: "Berbagai layanan pembuatan website: company profile, toko online, restoran, landing page, sekolah, booking, dan custom."
});

export default function LayananPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Layanan Kami</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Pilih jenis website yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Layanan" title="Semua Layanan" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
