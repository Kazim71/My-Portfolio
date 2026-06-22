import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import EngineeringExpertise from "@/components/engineering-expertise"
import Skills from "@/components/skills"
import WorkProcess from "@/components/work-process"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <EngineeringExpertise />
        <Skills />
        <WorkProcess />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
