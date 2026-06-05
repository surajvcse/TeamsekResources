import GridCanvas from '../canvas/GridCanvas.jsx'

const CARDS = [
  { tag:'/ 01', t:'Metro & Transport', p:'Tunnels, cross-passages and trenchless utility works for urban rail and road corridors.' },
  { tag:'/ 02', t:'Hydro Power', p:'Headrace tunnels, shafts, powerhouses, spillways and plunge-pool strengthening for state & private utilities.' },
  { tag:'/ 03', t:'Mining', p:'Mine development & operation and turnkey shaft sinking for metal, salt and strategic-mineral mines.' },
  { tag:'/ 04', t:'Roads & Highways', p:'Slope stabilization, rockfall protection and road realignment along hill and landslide-prone sections.' },
  { tag:'/ 05', t:'Dams & Water', p:'Cofferdam cut-off walls, consolidation & jet grouting, leakage arresting and reservoir dredging.' },
  { tag:'/ 06', t:'Disaster Mitigation', p:'Hill-slope stabilization and natural-hazard works under national and internationally-funded programmes.' },
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
