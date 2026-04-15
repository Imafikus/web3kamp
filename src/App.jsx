import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Curriculum from './components/Curriculum'
import Hakatoni from './components/Hakatoni'
import Sponsors from './components/Sponsors'
import Speakers from './components/Speakers'
import Mentors from './components/Mentors'
import SamostalniRad from './components/SamostalniRad'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Curriculum />
        <Hakatoni />
        <Sponsors />
        <Speakers />
        <Mentors />
        <SamostalniRad />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
