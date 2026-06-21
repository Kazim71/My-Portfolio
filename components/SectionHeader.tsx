import Reveal from "@/components/Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-xs text-accent tracking-label">{index}</span>
        <span className="h-px w-8 bg-accent-line" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-label text-text-soft">
          {label}
        </span>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-text text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-text-muted text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
}
