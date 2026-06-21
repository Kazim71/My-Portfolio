import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/content";

export default function SkillsGrid() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-divider py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          label="Skills"
          title="The toolkit."
          description="Languages and tools I reach for day to day, grouped by where they live in the stack."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="h-full rounded-card border border-border bg-bg-soft p-6">
                <h3 className="font-mono text-xs uppercase tracking-label text-text-soft">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-pill border border-border bg-bg-elevated px-3 py-1.5 text-sm text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
