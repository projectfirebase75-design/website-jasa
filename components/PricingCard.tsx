import type { Plan } from "@/data/pricing";
import { buildWhatsAppUrl, planMessage } from "@/lib/whatsapp";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 transition ${
        plan.popular
          ? "border-accent bg-navy-900 text-white shadow-2xl scale-[1.02]"
          : "border-slate-200 bg-white"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
          POPULER
        </span>
      )}
      <h3 className={`text-lg font-bold ${plan.popular ? "text-white" : "text-navy-900"}`}>
        {plan.name}
      </h3>
      <p className={`mt-2 text-3xl font-extrabold ${plan.popular ? "text-white" : "text-navy-900"}`}>
        {plan.price}
      </p>
      {plan.priceNote && (
        <p className={plan.popular ? "text-slate-300 text-sm" : "text-slate-500 text-sm"}>
          {plan.priceNote}
        </p>
      )}
      <ul className={`mt-4 space-y-2 text-sm ${plan.popular ? "text-slate-200" : "text-slate-700"}`}>
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={buildWhatsAppUrl(planMessage(plan.name, plan.price))}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto pt-6 ${plan.popular ? "btn-primary bg-white text-navy-900 hover:bg-slate-200" : "btn-primary"}`}
      >
        {plan.cta}
      </a>
    </article>
  );
        }
