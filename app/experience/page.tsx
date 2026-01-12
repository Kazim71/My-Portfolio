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
  company: "AplyEase",
  role: "Associate Software Engineer",
  duration: "March 2025 - Present",
  location: "Remote",
  points: [
    "Developed and owned internal SaaS modules using React.js that support daily HR and operations workflows across teams.",
    "Designed reusable UI components and form-heavy dashboards with a focus on maintainable state management.",
    "Implemented core HRMS features including attendance tracking, shift scheduling, approval flows, and automated notifications used in production.",
    "Integrated frontend applications with REST APIs, handling validation errors, API failures, and edge cases in real usage.",
    "Managed production deployments on Vercel and resolved build, configuration, and release issues during active development cycles.",
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

