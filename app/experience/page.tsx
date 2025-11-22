import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Mohammad Kazim",
  description: "Professional experience and work history of Mohammad Kazim",
};

const experiences = [
  {
    company: "Qurore B2B",
    role: "Full Stack Developer Intern",
    duration: "August 2025 - November 2025",
    location: "Hybrid",
    points: [
      "Developed and maintained full-stack web applications using MERN stack",
      "Implemented AI integrations for enhanced user experiences",
      "Collaborated with cross-functional teams to deliver scalable solutions",
      "Optimized application performance and implemented best practices",
      "Worked on system design and architecture decisions",
    ],
  },
  {
    company: "SAIL",
    role: "Frontend Intern",
    duration: "June 2024 - August 2024",
    location: "Onsite",
    points: [
      "Built responsive and interactive user interfaces using React",
      "Implemented modern UI/UX designs with Tailwind CSS",
      "Collaborated with designers and backend developers",
      "Participated in code reviews and agile development processes",
      "Contributed to improving application performance and accessibility",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Experience"
            subtitle="My professional journey and key contributions"
          />

          <ExperienceTimeline experiences={experiences} />
        </div>
      </main>
      <Footer />
    </>
  );
}

