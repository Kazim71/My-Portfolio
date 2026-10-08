import Header from "@/components/header"
import Hero from "@/components/hero"
import StatsBar from "@/components/stats-bar"
import Marquee from "@/components/marquee"
import About from "@/components/about"
import MotionStory from "@/components/motion-story"
import LiveSystem from "@/components/live-system"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Resume from "@/components/resume"
import FAQ from "@/components/faq"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PageLoader from "@/components/page-loader"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <MotionStory />
        <LiveSystem />
        <Marquee />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}
