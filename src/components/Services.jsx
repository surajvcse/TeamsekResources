const SVC = [
  { n:'01', t:'Tunnelling', p:'NATM, cut & cover, cross-passages, pipe roofing, forepoling and TBM works for metro, hydro and sewer tunnels.',
    ic:<><path d="M3 12a9 9 0 0 1 18 0v9H3v-9Z"/><path d="M8 21v-6a4 4 0 0 1 8 0v6"/></> },
  { n:'02', t:'Hydro Power', p:'Civil & hydro-mechanical works — headrace tunnels, surge shafts, pressure shafts, powerhouses, spillways and plunge pools.',
    ic:<><path d="M3 17l5-9 4 6 3-4 6 11H3Z"/><circle cx="7" cy="5" r="2"/></> },
  { n:'03', t:'Mine Development & Operation', p:'End-to-end MDO for metal, salt and uranium mines, plus simultaneous underground development and production.',
    ic:<path d="M4 20l4-12 4 4 4-7 4 15H4Z"/> },
  { n:'04', t:'Shaft Sinking', p:'Turnkey design, construction, furnishing & equipping of production and vertical shafts to significant depth.',
    ic:<><path d="M12 2v20"/><path d="M7 7h10M6 12h12M7 17h10"/></> },
  { n:'05', t:'Slope Stabilization', p:'Ground & cable anchors, rock bolts, shotcrete, crib work, rockfall barriers, wicker fencing and natural-hazard solutions.',
    ic:<path d="M3 18 21 6M3 14l10-7M9 18l8-5"/> },
  { n:'06', t:'Ground Improvement', p:'Jet / TAM / chemical / cavity grouting, leakage arresting, secant & contiguous piling, micro-piling and diaphragm walls.',
    ic:<><path d="M12 3v8m0 0c-3 0-5 2-5 5h10c0-3-2-5-5-5Z"/><path d="M5 21h14"/></> },
  { n:'07', t:'Micro-Tunnelling', p:'Pipe jacking and trenchless sewerage by HDD, manual jack pushing, open cut and manhole works in dense urban ground.',
    ic:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></> },
  { n:'08', t:'Dredging', p:'Reservoir, dam and channel dredging with pontoon-mounted plant to restore storage and protect intakes.',
    ic:<><path d="M3 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M3 11c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M14 7l4-4 3 3-4 4"/></> },
]

export default function Services() {
  return (
    <section className="services sec-pad" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>One team for every ground engineering challenge.</h2>
          <p>From rock to water table, we self-perform the specialised work that most contractors sub-let. Here is the core of what we deliver.</p>
        </div>
        <div className="svc-grid">
          {SVC.map((s, i) => (
            <div className={'svc reveal' + (i % 4 ? ' d' + (i % 4) : '')} key={s.n}>
              <div className="num">{s.n}</div>
              <div className="ic">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{s.ic}</svg>
              </div>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
