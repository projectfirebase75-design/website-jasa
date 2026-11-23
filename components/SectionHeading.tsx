type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="heading-lg mt-2 text-navy-900">{title}</h2>
      {description && (
        <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
