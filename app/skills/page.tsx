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
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: FileCode },
      { name: "JavaScript", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "PHP", icon: FileCode },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "FastAPI", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "REST APIs", icon: Code },
      { name: "API Integration", icon: Network },
      { name: "Authentication", icon: Settings },
      { name: "Authorization", icon: Settings },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Database Design", icon: Database },
      { name: "Query Optimization", icon: Database },
      { name: "Data Modeling", icon: Layers },
      { name: "Indexing", icon: Database },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Box },
      { name: "Next.js", icon: Box },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Palette },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS EC2", icon: Cloud },
      { name: "Docker", icon: Box },
      { name: "Linux", icon: Terminal },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "DNS Management", icon: Network },
      { name: "SSL", icon: Settings },
      { name: "Cloud Deployments", icon: Cloud },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "Object-Oriented Programming", icon: Cpu },
      { name: "Data Structures", icon: Layers },
      { name: "Algorithms", icon: Cpu },
      { name: "Unit Testing", icon: Settings },
      { name: "Debugging", icon: Terminal },
      { name: "Code Reviews", icon: GitBranch },
      { name: "Agile Development", icon: Settings },
    ],
  },
  {
    title: "Systems & Networking",
    skills: [
      { name: "Operating Systems", icon: Cpu },
      { name: "TCP/IP", icon: Network },
      { name: "HTTP", icon: Network },
      { name: "System Design Fundamentals", icon: Layers },
      { name: "Performance Optimization", icon: Settings },
      { name: "Production Troubleshooting", icon: Terminal },
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
                      icon={<skill.icon className="w-8 h-8" />}
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
