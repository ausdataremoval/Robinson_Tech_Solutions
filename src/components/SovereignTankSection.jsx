const cards = [
  {
    title: 'BUSINESS AI',
    body: 'Custom AI assistants for enquiries, leads, and customer support. Available 24/7, built to your brand.',
  },
  {
    title: 'EVENT HOSTING',
    body: 'AI hosts for corporate events, private functions, and conferences. Perth-designed, nationally deployed.',
  },
  {
    title: 'PERSONAL ASSISTANT',
    body: 'For individuals who want a patient, always-available AI companion. No judgement. Always there.',
  },
]

export default function SovereignTankSection() {
  return (
    <section className="st" id="sovereign-tank">
      <div className="st__inner">
        <div className="st__header reveal">
          <p className="section-label">DIVISION TWO</p>
          <h2 className="section-heading">Sovereign Tank</h2>
          <p className="section-sub">
            AI assistants and automation for businesses, events, and
            individuals. Built in Perth. Deployed nationally.
          </p>
        </div>

        <div className="st__grid">
          {cards.map((card) => (
            <div className="st__card reveal" key={card.title}>
              <p className="st__card-title">{card.title}</p>
              <p className="st__card-body">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <a
            href="https://sovereigntank.com.au"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Sovereign Tank →
          </a>
        </div>
      </div>
    </section>
  )
}
