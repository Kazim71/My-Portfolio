import Header from "@/components/header"
import Hero from "@/components/hero"
import StatsBar from "@/components/stats-bar"
import Marquee from "@/components/marquee"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import EventsPreview from "@/components/events-preview"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import FAQ from "@/components/faq"
import BlogPreview from "@/components/blog-preview"
import SeoBanner from "@/components/seo-banner"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Marquee />
        <Experience />
        <Projects />
        <EventsPreview />
        <Skills />
        <Certifications />
        <FAQ />
        <BlogPreview />
        <SeoBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
