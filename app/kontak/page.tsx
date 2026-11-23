import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Kontak | Rohman X Web",
  description: "Hubungi kami untuk konsultasi pembuatan website."
});

export default function KontakPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-max">
          <h1 className="heading-lg">Kontak</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Isi formulir di bawah atau hubungi kami langsung.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Kirim Permintaan Penawaran"
              description="Formulir akan membuka WhatsApp dengan pesan yang sudah terisi otomatis."
              align="left"
            />
            <p className="mt-6 text-sm text-slate-600">
              Email: {siteConfig.email}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
