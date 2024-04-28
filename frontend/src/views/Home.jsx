import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import TeamSection from "../components/TeamSection"

export default function Home() {

  return (
    <>
      <section id="hero" className="h-screen">
        <HeroSection />
      </section>
      <section id="about-project" className="h-screen">
        <AboutSection />
      </section>
      <section id="about-team" className="h-screen">
        <TeamSection />
      </section>
    </>
  )
}