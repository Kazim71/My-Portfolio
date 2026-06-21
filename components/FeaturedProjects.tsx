import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-divider py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          label="Featured Projects"
          title="Three systems, end to end."
          description="Backend-heavy platforms and automation — framed by the problem they solved, how they were built, and the impact they delivered."
        />

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
