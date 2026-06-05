import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Teamsek Resources home">
          <Logo />
          <span className="name">TEAMSEK<small>Resources Pvt Ltd</small></span>
        </a>
        <nav className={'nav-links' + (open ? ' open' : '')}>
          <a href="#services" onClick={close}>Capabilities</a>
          <a href="#process" onClick={close}>How we work</a>
          <a href="#sectors" onClick={close}>Sectors</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#enquiry" className="btn btn-primary" onClick={close}>Request a quote</a>
        </nav>
        <button className={'hamb' + (open ? ' x' : '')} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
