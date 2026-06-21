import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { metrics, experiences } from "@/lib/content";

export default function ExperienceContext() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          label="Experience Context"
          title="Production work, measured in real systems."
          description="A year-plus of shipping and maintaining backend services, automation, and data-driven applications across live environments."
        />

        {/* Metrics strip */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="h-full bg-bg-soft p-6">
                <p className="font-heading text-3xl font-semibold tracking-tight text-text md:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm font-medium text-text">{m.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-text-soft">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Experience cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-card border border-border bg-bg-soft p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-text-muted">{exp.period}</p>
                    <p className="mt-1 font-mono text-xs text-text-soft">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 border-t border-divider pt-5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
