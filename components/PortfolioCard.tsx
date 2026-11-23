import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-video bg-slate-100">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={`Preview ${item.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400 text-sm">
            Preview tersedia di website
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {item.category}
        </p>
        <h3 className="mt-1 text-lg font-bold text-navy-900">{item.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          Kunjungi Website <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
