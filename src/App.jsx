import useReveal from './useReveal.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Sectors from './components/Sectors.jsx'
import Band from './components/Band.jsx'
import Projects from './components/Projects.jsx'
import Why from './components/Why.jsx'
import Clients from './components/Clients.jsx'
import Enquiry from './components/Enquiry.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()
  return (
    <>
      <div className="grain" />
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <Sectors />
      <Band />
      <Projects />
      <Why />
      <Clients />
      <Enquiry />
      <Footer />
    </>
  )
}
