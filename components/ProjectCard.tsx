import { ArrowUpRight, Lock } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ProjectCardProps {
  index: number;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  live?: string;
  liveLabel?: string;
  internal?: boolean;
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-label text-text-soft">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{text}</p>
    </div>
  );
}

export default function ProjectCard({
  index,
  title,
  summary,
  problem,
  solution,
  impact,
  stack,
  live,
  liveLabel,
  internal,
}: ProjectCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group grid grid-cols-1 gap-6 rounded-card border border-border bg-bg-soft p-6 transition-colors hover:border-accent-line md:grid-cols-[1fr_1.4fr] md:gap-10 md:p-8">
        {/* Left: identity */}
        <div className="flex flex-col">
          <span className="font-mono text-xs text-accent">
            P{String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-text md:text-2xl text-balance">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-pill bg-chip-bg px-2.5 py-1 font-mono text-[11px] text-chip-text"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
              >
                {liveLabel ?? "Live site"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-soft">
                <Lock className="h-3.5 w-3.5" />
                Internal production system
              </span>
            )}
          </div>
        </div>

        {/* Right: case study */}
        <div className="grid grid-cols-1 gap-5 border-t border-divider pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <Detail label="Problem" text={problem} />
          <Detail label="Solution" text={solution} />
          <Detail label="Impact" text={impact} />
        </div>
      </article>
    </Reveal>
  );
}
