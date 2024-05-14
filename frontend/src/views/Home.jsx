import AboutSection from "../components/AboutSection"
import Fab from "../components/Fab"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import NavbarAlt from "../components/NavbarAlt"
import TeamSection from "../components/TeamSection"
import { useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);

    const checkScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', checkScroll);
    setLoading(false);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div>
      {loading ? (<div className="px-4 py-2">
        <Skeleton height={60} width={1150} className="ml-32" />
        <div className="flex justify-between mt-28 mx-32">
          <div>
            <Skeleton height={30} width={250} />
            <Skeleton height={30} width={200} />
            <Skeleton height={20} width={350} className="mt-8" />
            <Skeleton height={60} width={300} className="mt-4" />
            <Skeleton height={60} width={350} className="mt-2" />
            <Skeleton height={20} width={480} className="mt-8" />
            <Skeleton height={20} width={500}  />
            <Skeleton height={20} width={100}  />
            <Skeleton height={45} width={150} className="mt-4" />
          </div>
          <div>
          <Skeleton height={450} width={450} className="mr-28" />
          </div>
        </div>
      </div>
      ) :
        (<>
          <section id="hero" className="h-screen">
            {user ? <NavbarAlt user={user} /> : <Navbar />}
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

          {!isTop && (<Fab id="hero" />)}
        </>
        )}
    </div>
  )
}