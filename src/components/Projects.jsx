import { PROJECTS } from '../projects.js'

export default function Projects() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <section className="projects sec-pad light" id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow dark">Track record</span>
          <h2>Projects we've worked on.</h2>
          <p>A selection of completed and ongoing works across hydro power, mining, slopes and water — in India and overseas.</p>
        </div>
        <div className="gal">
          {PROJECTS.map((p, i) => (
            <figure className={'card reveal' + (i % 4 ? ' d' + (i % 4) : '')} key={p.title}>
              <img loading="lazy" src={base + p.img} alt={p.title} />
              <figcaption className="ov">
                <div className="t">{p.tag}</div>
                <h4>{p.title}</h4>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
