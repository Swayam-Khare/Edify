import AboutSection from "../components/AboutSection"
import Fab from "../components/Fab"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import TeamSection from "../components/TeamSection"
import { useEffect, useState } from "react"

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <section id="hero" className="h-screen">
        <Navbar />
        <HeroSection />
      </section>
      <section id="about-project" className="h-screen">
        <AboutSection />
      </section>
      <section id="about-team" className="h-screen">
        <TeamSection />
      </section>
      <section>
        <Footer />
      </section>

      // fab button to take user to top of the page
      {!isTop && (<Fab id="hero" />)}
    </>
  )
}