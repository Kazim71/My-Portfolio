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

