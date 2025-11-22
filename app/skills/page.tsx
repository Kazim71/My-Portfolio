import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import { Metadata } from "next";
import {
  Code,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Settings,
  GitBranch,
  Github,
  Git,
  Box,
  Layers,
  FileCode,
  Palette,
  Server,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills - Mohammad Kazim",
  description: "Technical skills and expertise of Mohammad Kazim",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Box },
      { name: "JavaScript", icon: FileCode },
      { name: "TypeScript", icon: FileCode },
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "REST APIs", icon: Code },
      { name: "GraphQL", icon: Terminal },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Database Design", icon: Database },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Box },
      { name: "CI/CD", icon: Settings },
      { name: "Cloud Deployment", icon: Cloud },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "JavaScript", icon: FileCode },
      { name: "TypeScript", icon: FileCode },
      { name: "System Design", icon: Cpu },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Code },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-8 gradient-text">{category.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

