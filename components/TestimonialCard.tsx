import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-slate-700 leading-relaxed">&ldquo;{t.message}&rdquo;</p>
      <div className="mt-4">
        <p className="font-semibold text-navy-900">{t.name}</p>
        <p className="text-sm text-slate-500">{t.role}</p>
        {t.isPlaceholder && (
          <p className="mt-2 inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
            Placeholder
          </p>
        )}
      </div>
    </article>
  );
}
