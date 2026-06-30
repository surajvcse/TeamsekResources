import ShaftCanvas from '../canvas/ShaftCanvas.jsx'

const ITEMS = [
  { k:'01', t:'Exclusive specialisation', p:"We focus only on hard ground engineering — the niche most EPC firms can't self-perform." },
  { k:'02', t:'Design & build under one roof', p:'In-house design, execution crews and owned plant remove the gaps between consultant and contractor.' },
  { k:'03', t:'Contractor-grade delivery', p:'Set up to deliver directly for government and private owners on complex packages.' },
  { k:'04', t:'Safety & quality led', p:'Underground, on slopes and over water — we work where conditions are unforgiving, with the systems to match.' },
]

export default function Why() {
  return (
    <section className="why sec-pad" id="why">
      <div className="wrap why-grid">
        <div>
          <div className="sec-head reveal" style={{ marginBottom: 30 }}>
            <span className="eyebrow">Why Temasek</span>
            <h2>Specialists, not generalists.</h2>
          </div>
          <div className="why-list">
            {ITEMS.map((it, i) => (
              <div className={'why-item reveal' + (i % 4 ? ' d' + (i % 4) : '')} key={it.k}>
                <div className="k">{it.k}</div>
                <div>
                  <h4>{it.t}</h4>
                  <p>{it.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-visual reveal d1">
          <ShaftCanvas />
          <div className="badge">Specialist<b>Underground works</b></div>
        </div>
      </div>
    </section>
  )
}
