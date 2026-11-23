import Link from "next/link";
import * as Icons from "lucide-react";
import type { Service } from "@/data/services";
import { buildWhatsAppUrl, serviceMessage } from "@/lib/whatsapp";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as any)[service.icon] ?? Icons.Globe;

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6 flex gap-2">
        <a
          href={buildWhatsAppUrl(serviceMessage(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-sm"
        >
          Konsultasi
        </a>
        <Link
          href={`/kontak?layanan=${encodeURIComponent(service.title)}`}
          className="btn-secondary text-sm"
        >
          Detail
        </Link>
      </div>
    </article>
  );
}
