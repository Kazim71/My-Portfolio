import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { expertise } from "@/lib/content";
import { Server, Database, Cloud, Wrench } from "lucide-react";

const icons = [Server, Database, Cloud, Wrench];

export default function EngineeringExpertise() {
  return (
    <section id="engineering" className="scroll-mt-24 border-t border-divider py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          label="Engineering Expertise"
          title="Depth across the backend lifecycle."
          description="From API design and data modeling to deployment and production troubleshooting — the work that keeps systems correct and reliable."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2">
          {expertise.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="h-full bg-bg-soft p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent-line bg-accent-tint text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-text">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span
                          className="h-1 w-1 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
