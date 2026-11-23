import { buildMetadata } from "@/lib/seo";
import { faqItems } from "@/data/faq";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "FAQ | Rohman X Web",
  description: "Pertanyaan yang sering diajukan tentang jasa pembuatan website."
});

export default function FaqPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">FAQ</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Pertanyaan Umum" />
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
