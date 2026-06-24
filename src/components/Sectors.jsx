import GridCanvas from '../canvas/GridCanvas.jsx'

const ICONS = {
  metro: <><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/><path d="M12 8v8"/><path d="M7 17l-2 3"/><path d="M17 17l2 3"/></>,
  hydro: <><path d="M3 17l5-9 4 6 3-4 6 11H3Z"/><circle cx="7" cy="5" r="2"/></>,
  mining: <path d="M4 20l4-12 4 4 4-7 4 15H4Z"/>,
  roads: <><path d="M2 12h20"/><path d="M5 12l-2 4"/><path d="M19 12l2 4"/></>,
  water: <><path d="M12 2v6"/><path d="M8 8l4-3 4 3"/><path d="M3 22h18"/><path d="M6 22v-4a6 6 0 0 1 12 0v4"/></>,
  disaster: <><path d="M12 2v4"/><path d="m4 8 3 3"/><path d="m20 8-3 3"/><path d="M3 16h18"/><path d="M6 16v-3a6 6 0 0 1 12 0v3"/></>,
}

const CARDS = [
  { tag:'/ 01', t:'Metro & Transport', p:'Tunnels, cross-passages and trenchless utility works for urban rail and road corridors.', icon: ICONS.metro },
  { tag:'/ 02', t:'Hydro Power', p:'Headrace tunnels, shafts, powerhouses, spillways and plunge-pool strengthening for state & private utilities.', icon: ICONS.hydro },
  { tag:'/ 03', t:'Mining', p:'Mine development & operation and turnkey shaft sinking for metal, salt and strategic-mineral mines.', icon: ICONS.mining },
  { tag:'/ 04', t:'Roads & Highways', p:'Slope stabilization, rockfall protection and road realignment along hill and landslide-prone sections.', icon: ICONS.roads },
  { tag:'/ 05', t:'Dams & Water', p:'Cofferdam cut-off walls, consolidation & jet grouting, leakage arresting and reservoir dredging.', icon: ICONS.water },
  { tag:'/ 06', t:'Disaster Mitigation', p:'Hill-slope stabilization and natural-hazard works under national and internationally-funded programmes.', icon: ICONS.disaster },
]

export default function Sectors() {
  return (
    <section className="sectors sec-pad" id="sectors">
      <GridCanvas />
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Sectors we serve</span>
          <h2>Working with government &amp; private clients.</h2>
          <p>We deliver specialised packages across infrastructure, energy, mining and water — in India and overseas.</p>
        </div>
        <div className="sec-cards">
          {CARDS.map((c, i) => (
            <div className={'sector reveal' + (i % 3 ? ' d' + (i % 3) : '')} key={c.t}>
              <div className="glow" />
              <div className="sector-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg></div>
              <div className="tag">{c.tag}</div>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
