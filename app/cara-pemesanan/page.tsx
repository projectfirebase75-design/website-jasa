import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Cara Pemesanan | Rohman X Web",
  description: "Langkah-langkah memesan jasa pembuatan website."
});

const steps = [
  { title: "Konsultasi", desc: "Hubungi kami via WhatsApp untuk membahas kebutuhan." },
  { title: "Penawaran & Kesepakatan", desc: "Kami mengirim penawaran dan Anda menyetujui detail proyek." },
  { title: "Pembayaran DP", desc: "Pembayaran 50% untuk memulai pengerjaan." },
  { title: "Desain & Pengembangan", desc: "Kami mengerjakan desain dan pengembangan sesuai kesepakatan." },
  { title: "Review & Revisi", desc: "Anda meninjau hasil dan mengajukan revisi." },
  { title: "Peluncuran", desc: "Website diluncurkan setelah pelunasan." }
];

export default function CaraPemesananPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Cara Pemesanan</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading title="Alur Kerja Sederhana" />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-bold text-accent">Langkah {i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection />
    </>
  );
}
