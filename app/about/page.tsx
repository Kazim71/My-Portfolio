import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Metadata } from "next";
import {
  Code,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Settings,
  Box as ReactIcon,
  Server as Node,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About - Mohammad Kazim",
  description: "Learn more about Mohammad Kazim, a Full Stack Developer specializing in MERN stack and AI",
};

const education = [
  {
    company: "Bharati Vidyapeeth Deemed University Pune",
    role: "B.Tech in Electronics & Communication Engineering",
    duration: "2025",
    location: "Pune",
  },
  {
    company: "Senior Secondary School Sector - X",
    role: "High School",
    duration: "2021",
    location: "Bhilai",
    image: "/education/school.jpg",
  },
];

const stats = [
  { label: "Major Projects", value: "3+" },
  { label: "Tech Stack", value: "MERN + AI" },
  { label: "Deployment", value: "CI/CD + Cloud" },
  { label: "Expertise", value: "System Design" },
];

const techStack = [
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: Node },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Settings },
  { name: "Git", icon: GitBranch },
  { name: "TypeScript", icon: Code },
  { name: "GraphQL", icon: Terminal },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            title="About Me"
            subtitle="Passionate Full Stack Developer building modern web applications and AI-powered solutions"
          />

          {/* Professional Summary */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="glass rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    I&apos;m a Full Stack Developer with expertise in the MERN stack and AI integrations.
                    I specialize in building scalable web systems, AI-driven applications, and modern
                    digital experiences. My passion lies in creating efficient, maintainable code
                    and leveraging cutting-edge technologies to solve complex problems.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    With experience in both frontend and backend development, I bring a holistic
                    approach to software engineering. I&apos;m skilled in system design, cloud deployment,
                    and implementing CI/CD pipelines to ensure robust and reliable applications.
                  </p>
                </div>
              </div>

              {/* Photo */}
              <div className="relative">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 glass rounded-3xl border-2 border-violet-200/50 dark:border-cyan-400/30 shadow-2xl" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-violet-400/20 to-blue-400/20 flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Portrait Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-32">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h3>
            <div className="max-w-4xl mx-auto">
              <ExperienceTimeline experiences={education} />
            </div>
          </section>

          {/* Stats */}
          <section className="mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <SkillCard key={index} name={tech.name} icon={<tech.icon className="w-8 h-8" />} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

