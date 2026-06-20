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
    company: "EZ Rankings",
    role: "Backend Developer",
    duration: "March 2026 - Present",
    location: "Noida, India",
    points: [
      "Developed and maintained backend workflows, REST APIs, and database-driven applications across 15+ production systems.",
      "Built Python automation utilities for CSV ingestion, data validation, reporting, and workflow automation.",
      "Designed and integrated REST APIs, business validation layers, and data-processing workflows to support operational requirements.",
      "Investigated and resolved production incidents involving API failures, deployment regressions, and database inconsistencies.",
      "Collaborated with cross-functional teams to enhance system reliability, performance, and maintainability.",
    ],
  },
  {
    company: "Clay Brains",
    role: "Junior Web Developer",
    duration: "February 2025 - February 2026",
    location: "Delhi, India",
    points: [
      "Developed backend modules, reusable services, and data-driven features for production web applications.",
      "Improved database performance through SQL query optimization, indexing strategies, and execution plan analysis.",
      "Managed Linux-based cloud infrastructure including AWS EC2, SSL configuration, DNS management, and deployment workflows.",
      "Participated in debugging, testing, code maintenance, and release activities across multiple client projects.",
      "Worked with APIs, databases, and deployment environments to deliver scalable and reliable solutions.",
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

