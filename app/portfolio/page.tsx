import { buildMetadata } from "@/lib/seo";
import { portfolio } from "@/data/portfolio";
import PortfolioCard from "@/components/PortfolioCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Portfolio Proyek | NusaWeb Studio",
  description: "Portfolio website yang telah kami kerjakan."
});

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Portfolio</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Beberapa proyek yang telah kami selesaikan.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            eyebrow="Karya Kami"
            title="Website yang Telah Kami Kerjakan"
            description="Klik tombol untuk mengunjungi website secara langsung."
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
