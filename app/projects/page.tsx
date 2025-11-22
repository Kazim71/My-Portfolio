import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Mohammad Kazim",
  description: "Portfolio of projects built by Mohammad Kazim",
};

const projects = [
  {
    title: "Data Query Co-Pilot",
    description:
      "Engineered a data query platform enabling 10K+ record uploads and interactive CSV/XLSX previews using React and Tailwind CSS. Developed REST APIs in Node.js with JWT authentication, reducing query latency by 35%. Integrated Perplexity AI for real-time natural language data querying and automated insights. Deployed on Vercel with MongoDB Atlas achieving 99.9% uptime and seamless scalability.",
    techStack: ["React", "Tailwind CSS", "Node.js", "REST API", "MongoDB", "Perplexity AI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/project1.jpg",
  },
  {
    title: "AI-Powered Job Portal",
    description:
      "Developed a scalable AI-powered job portal handling 1K+ user sessions with Perplexity AI–driven job matching and description generation. Integrated Clerk authentication enabling secure Google, GitHub, and LinkedIn logins with 90% success rate. Implemented modular React and Tailwind UI components for optimized, cross-device user experience. Deployed Express.js and MongoDB backend APIs ensuring seamless data flow and low-latency performance.",
    techStack: ["MERN", "Tailwind CSS", "Perplexity AI", "Clerk"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/project2.jpg",
  },
  {
    title: "JSON Tree Visualizer",
    description:
      "Developed an advanced JSON visualizer rendering complex data 40% faster with React Flow. Implemented search, highlighting, and PNG export improving usability by 60%. Designed modern UI using glassmorphism and Framer Motion for smooth, animated interactions. Deployed globally on Vercel with CI/CD pipelines for high-performance access.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "React Flow"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/project3.jpg",
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

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
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
      </main>
      <Footer />
    </>
  );
}

