const ITEMS = ['Tunnelling','Hydro Power','Mine Development & Operation','Shaft Sinking','Slope Stabilization','Ground Improvement','Micro-Tunnelling','Dredging','Jet Grouting']

export default function Ticker() {
  const all = [...ITEMS, ...ITEMS] // duplicated for a seamless loop
  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">
        {all.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
