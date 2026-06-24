import TopoCanvas from '../canvas/TopoCanvas.jsx'

export default function Hero() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <section className="hero" id="top">
      <div className="hero-video-wrap">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={`${base}Hero/hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>
      <TopoCanvas />
      <div className="hero-veil" />
      <div className="wrap">
        <span className="eyebrow">Design • Build • Deliver — Ground Engineering</span>
        <h1>We engineer the ground beneath <em>India's</em> hardest projects.</h1>
        <p className="lead">
          Teamsek Resources is a specialized design-and-build contractor for tunnels, hydro power,
          mining, slope stabilization and ground improvement — one partner, from survey to handover.
        </p>
        <div className="hero-cta">
          <a href="#enquiry" className="btn btn-primary">Start your enquiry →</a>
          <a href="#services" className="btn btn-ghost">Explore capabilities</a>
        </div>
        <div className="hero-stats">
          <div className="s reveal"><b style={{ fontSize: '1.5rem' }}>Design + Build</b><span>One accountable team</span></div>
          <div className="s reveal d1"><b style={{ fontSize: '1.5rem' }}>Self-performed</b><span>Own crews &amp; plant</span></div>
          <div className="s reveal d2"><b style={{ fontSize: '1.5rem' }}>Govt &amp; Private</b><span>Public &amp; private owners</span></div>
          <div className="s reveal d3"><b style={{ fontSize: '1.5rem' }}>India + Overseas</b><span>Where ground is hard</span></div>
        </div>
      </div>
      <div className="scroll-hint"><span>Scroll</span><span className="line" /></div>
    </section>
  )
}
