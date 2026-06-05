import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <a href="#top" className="brand">
              <Logo />
              <span className="name">TEAMSEK<small>Resources Pvt Ltd</small></span>
            </a>
            <p>Your specialised partner for design &amp; build ground engineering — one-stop solutions for tunnels, hydro, mining, slopes and water.</p>
          </div>
          <div className="foot-col">
            <h5>Capabilities</h5>
            <a href="#services">Tunnelling</a><a href="#services">Hydro Power</a><a href="#services">Mining &amp; Shafts</a><a href="#services">Slope Stabilization</a><a href="#services">Ground Improvement</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#process">How we work</a><a href="#sectors">Sectors</a><a href="#projects">Projects</a><a href="#why">Why Teamsek</a><a href="#enquiry">Contact</a>
          </div>
          <div className="foot-col">
            <h5>Offices</h5>
            <span className="li">New Delhi NCR — Gurugram, Haryana</span>
            <span className="li">Chennai — Tamil Nadu</span>
            <span className="li">enquiries@teamsekresources.com</span>
            <span className="li">+91 74282 94523</span>
          </div>
        </div>
        <div className="foot-bot">
          <p>© {new Date().getFullYear()} Teamsek Resources Pvt Ltd. All rights reserved.</p>
          <p>Specialized Geotechnical &amp; Infrastructure Construction</p>
        </div>
      </div>
    </footer>
  )
}
