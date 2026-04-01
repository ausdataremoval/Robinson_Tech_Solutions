const cards = [
  {
    icon: '◈',
    title: 'PERSONAL ACCOUNTABILITY',
    body: 'Every engagement handled personally. Same person start to finish.',
  },
  {
    icon: '◉',
    title: 'HONEST PRICING',
    body: 'Tell you what things cost before you commit. No surprises.',
  },
  {
    icon: '◇',
    title: 'BUILT TO LAST',
    body: 'Documented, maintained, designed to work without thinking about it.',
  },
]

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy__inner">
        <div className="philosophy__header reveal">
          <p className="section-label">HOW WE WORK</p>
          <h2 className="section-heading">We don't hide behind technology.</h2>
        </div>

        <div className="philosophy__grid">
          {cards.map((card) => (
            <div className="philosophy__card reveal" key={card.title}>
              <div className="philosophy__card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <p className="philosophy__card-title">{card.title}</p>
              <p className="philosophy__card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
