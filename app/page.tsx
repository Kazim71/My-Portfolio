
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Mohammad Kazim",
  description: "Full Stack Developer specializing in MERN stack and AI integrations",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/sections/Contact";
import {
  Code,
  Database,
  Cloud,
  Terminal,
  Settings,
  Box as ReactIcon,
  Server as Node,
  GitBranch,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

const education = [
  {
    company: "Bharati Vidyapeeth Deemed University Pune",
    role: "B.Tech in Electronics & Communication Engineering",
    duration: "2025",
    location: "Pune",
    image: "/education/college.jpg",
  },
  {
    company: "Senior Secondary School Sector - X",
    role: "High School",
    duration: "2021",
    location: "Bhilai",
    image: "/education/school.jpg",
  },
];

const experiences = [
  {
    company: "AplyEase",
    role: "Web Developer",
    duration: "October 2025 - Present",
    location: "Hybrid",
    points: [
      "Developing full-stack client platforms using React.js, Next.js, Tailwind CSS, and Shadcn UI for high-traffic HRMS workflows",
      "Building secure backend services using Node.js, Express.js, MongoDB, JWT authentication, and role-based access control",
      "Implemented HRMS modules including shift scheduling, attendance tracking, approval pipelines, and automated notifications",
      "Designed automation dashboards and analytics systems that improved operational efficiency by 40%",
      "Managing CI/CD pipelines and deployments on AWS and Vercel ensuring 99% uptime",
    ],
  },
  {
    company: "Quore B2B",
    role: "Full Stack Developer Intern",
    duration: "March 2025 - October 2025",
    location: "Hybrid",
    points: [
      "Built two B2B SaaS platforms (MartechBiz & Compare Bazaar) using Next.js, Tailwind CSS, and Shadcn UI",
      "Developed scalable backend APIs with Node.js, Express.js, MongoDB, Redis caching, and JWT authentication",
      "Integrated AI-powered content automation using Gemini AI for blogs, insights, and comparison summaries",
      "Integrated third-party services including Mailchimp, EmailJS, Web3 APIs, and SEO analytics with GTAG and Search Console",
      "Worked on system design, vendor quote aggregation pipelines, and performance optimization",
    ],
  },
  {
    company: "SAIL",
    role: "Frontend Intern",
    duration: "June 2024 - August 2024",
    location: "Onsite",
    points: [
      "Built responsive and interactive user interfaces using React.js and Tailwind CSS",
      "Integrated REST APIs to fetch and display operational metrics across dashboards",
      "Improved application responsiveness, accessibility, and UI performance",
      "Collaborated with designers and backend engineers in agile sprint cycles",
      "Used Git and GitHub for version control, reviews, and team collaboration",
    ],
  },
];

const projects = [
  {
    title: "FluxHire – Hiring Platform SaaS",
    description:
      "Built a production-grade hiring platform using the MERN stack with separate portals for Admins, Employers, and Job Seekers. Developed a GraphQL API with Node.js and Express enabling secure role-based authentication, employer job posting, and candidate applications. Designed MongoDB schemas for users, jobs, employers, and applications with optimized aggregations for dashboard insights. Implemented an admin panel in React with Tailwind CSS featuring user management, job analytics, and protected routes via JWT. Integrated Cloudinary for resume/PDF uploads, Google APIs for calendar scheduling, and WhatsApp messaging for automated notifications.",
    techStack: ["MERN", "GraphQL", "Tailwind", "Cloudinary", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Kazim71/FluxHire.git",
    liveUrl: "https://example.com",
  },
  {
    title: "AI Product Recommender",
    description:
      "Developed a full-stack AI-driven recommendation platform combining database queries and Perplexity AI for personalized product suggestions. Implemented JWT-based authentication, caching system, and RESTful APIs improving recommendation response time by 40%. Built responsive UI using React 18, Vite, and Tailwind CSS with dynamic product insights in markdown format. Deployed on Vercel achieving 99% uptime and multi-user scalability.",
    techStack: ["MERN", "Tailwind CSS", "REST API", "Perplexity AI", "React 18", "Vite"],
    githubUrl: "https://github.com/Kazim71/AI-Recommendation-App",
    liveUrl: "https://example.com",
  },
  {
    title: "Data Query Co-Pilot",
    description:
      "Engineered a data query platform enabling 10K+ record uploads and interactive CSV/XLSX previews using React and Tailwind CSS. Developed REST APIs in Node.js with JWT authentication, reducing query latency by 35%. Integrated Perplexity AI for real-time natural language data querying and automated insights. Deployed on Vercel with MongoDB Atlas achieving 99.9% uptime and seamless scalability.",
    techStack: ["React", "Tailwind CSS", "Node.js", "REST API", "MongoDB", "Perplexity AI"],
    githubUrl: "https://github.com/Kazim71/Data-Query-Co-Pilot",
    liveUrl: "https://example.com",
  },
  {
    title: "AI-Powered Job Portal",
    description:
      "Developed a scalable AI-powered job portal handling 1K+ user sessions with Perplexity AI–driven job matching and description generation. Integrated Clerk authentication enabling secure Google, GitHub, and LinkedIn logins with 90% success rate. Implemented modular React and Tailwind UI components for optimized, cross-device user experience. Deployed Express.js and MongoDB backend APIs ensuring seamless data flow and low-latency performance.",
    techStack: ["MERN", "Tailwind CSS", "Perplexity AI", "Clerk"],
    githubUrl: "https://github.com/Kazim71/ai-job-portal",
    liveUrl: "https://example.com",
  },
  {
    title: "JSON Tree Visualizer",
    description:
      "Developed an advanced JSON visualizer rendering complex data 40% faster with React Flow. Implemented search, highlighting, and PNG export improving usability by 60%. Designed modern UI using glassmorphism and Framer Motion for smooth, animated interactions. Deployed globally on Vercel with CI/CD pipelines for high-performance access.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "React Flow"],
    githubUrl: "https://github.com/Kazim71/json-tree-visualizer",
    liveUrl: "https://example.com",
  },
  {
    title: "E-commerce Platform Development",
    description:
      "Developed a full-stack e-commerce system with JWT authentication and Razorpay integration for secure payments. Optimized product filtering, cart, and order modules increasing response speed by 30%. Implemented modular UI components using React ensuring cross-device responsiveness. Integrated backend APIs and MongoDB for real-time inventory and transaction tracking.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const stats = [
  { label: "Major Projects", value: "3+" },
  { label: "Tech Stack", value: "MERN + AI" },
  { label: "Deployment", value: "CI/CD + Cloud" },
  { label: "Expertise", value: "System Design" },
];

const techStack = [
  { name: "React", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="w-8 h-8 text-black dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" /> },
  { name: "Redis", icon: <SiRedis className="w-8 h-8 text-[#DC382D]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-8 h-8 text-[#E10098]" /> },
  { name: "AWS", icon: <FaAws className="w-8 h-8 text-[#FF9900]" /> },
  { name: "Docker", icon: <FaDocker className="w-8 h-8 text-[#2496ED]" /> },
  { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" /> },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Me"
            subtitle="Passionate Full Stack Developer building modern web applications and AI-powered solutions"
          />

          {/* Professional Summary */}
          <div className="mb-20">
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
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

          {/* Education */}
          <div id="education" className="mb-20 scroll-mt-24">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h3>
            <div className="max-w-4xl mx-auto">
              <ExperienceTimeline experiences={education} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tech Stack"
            subtitle="Technologies and tools I work with"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <SkillCard key={index} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Experience"
            subtitle="My professional journey and key contributions"
          />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Projects"
            subtitle="Showcasing my recent work and technical achievements"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
