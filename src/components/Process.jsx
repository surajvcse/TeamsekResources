const STEPS = [
  { n:'STAGE 01', t:'Tell us your problem', p:'Send drawings, a tender, or just describe the site. We respond within 48 hours with next steps — no obligation.' },
  { n:'STAGE 02', t:'Site investigation', p:'Our engineers survey the ground, run geotechnical investigation and confirm the real conditions before a price is quoted.' },
  { n:'STAGE 03', t:'Design & method', p:'You receive a buildable design, construction methodology, programme and a transparent, fixed-scope proposal.' },
  { n:'STAGE 04', t:'We self-perform', p:'Our own crews and plant execute the work to spec — safety-led, quality-assured, reported to you weekly.' },
  { n:'STAGE 05', t:'Handover & support', p:'Completed works, as-builts and documentation handed over, with operation & maintenance support where required.' },
]

export default function Process() {
  return (
    <section className="process sec-pad light" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow dark">How we work — your roadmap</span>
          <h2>Not sure where to start? Here's exactly what happens.</h2>
          <p>Whether you have a finished design or just a problem on the ground, our process takes the guesswork out. Five clear stages, one accountable team.</p>
        </div>
        <div className="proc-grid">
          {STEPS.map((s, i) => (
            <div className={'step reveal' + (i % 5 ? ' d' + (i % 5) : '')} key={s.n}>
              <div className="bar"><i /></div>
              <div className="n">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
        <div className="proc-foot reveal">
          <p><strong>New to specialised ground works?</strong> Most clients come to us with a landslide, a leaking dam, a stalled tunnel or a mine to develop — and no idea who can fix it. That's exactly our job.</p>
          <a href="#enquiry" className="btn btn-dark">Talk to an engineer →</a>
        </div>
      </div>
    </section>
  )
}
