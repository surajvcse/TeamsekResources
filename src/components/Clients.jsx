const CLIENTS = ['NTPC','MOIL','JSW Energy','Hindustan Zinc','UCIL','Hindustan Salt','HPPCL','KSEB','NHAI','NF Railway','JICA','L&T']

export default function Clients() {
  return (
    <section className="clients">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Selected clients</span>
        <div className="cl-row reveal">
          {CLIENTS.map((c) => <span className="cl" key={c}>{c}</span>)}
        </div>
      </div>
    </section>
  )
}
