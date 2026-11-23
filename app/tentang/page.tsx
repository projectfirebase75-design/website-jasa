import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Tentang Kami | Rohman X Web",
  description: "Tim profesional di balik pembuatan website berkualitas."
});

const values = [
  "Fokus pada hasil berkualitas",
  "Komunikasi transparan",
  "Tepat waktu",
  "Dukungan pasca-launch"
];

export default function TentangPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Tentang Kami</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <SectionHeading
            title="Tim Profesional di Balik Setiap Proyek"
            description="Kami adalah tim profesional yang berfokus pada pembuatan website berkualitas tinggi."
            align="left"
          />
          <p className="mt-6 text-slate-600 leading-relaxed">
            Konten profil perusahaan dapat Anda sesuaikan di file ini. Tidak ada klaim
            pengalaman atau sertifikasi palsu di sini — silakan isi dengan data nyata
            organisasi Anda.
          </p>
          <ul className="mt-8 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-navy-900">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
