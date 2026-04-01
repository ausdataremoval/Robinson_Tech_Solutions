const features = [
  'Free scan',
  'Pay per removal',
  "If we can't remove it you don't pay",
  '$29/month monitoring',
  '$49 full report',
]

export default function ADRSection() {
  return (
    <section className="adr" id="adr">
      <div className="adr__inner">
        <div className="adr__header reveal">
          <p className="section-label">DIVISION ONE</p>
          <h2 className="section-heading">AUS Data Removal</h2>
          <p className="section-sub">
            Your personal data is already out there. We find it, document it,
            and remove it. Manually. By a real person.
          </p>
        </div>

        <div className="adr__grid">
          {/* Left column — feature list */}
          <ul className="adr__list reveal">
            {features.map((item) => (
              <li className="adr__list-item" key={item}>
                <span className="adr__list-arrow" aria-hidden="true">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Right column — trust panel */}
          <div className="adr__trust reveal">
            <blockquote className="adr__quote">
              "Most people are surprised by what's publicly available about
              them. We've seen it enough times to know it's not your fault —
              and it's fixable."
            </blockquote>
            <p className="adr__trust-footer">
              Perth-based. Manual process. Real accountability.
            </p>
          </div>
        </div>

        <div className="reveal">
          <button
            className="btn btn-primary"
            data-paperform-id="t86h5x0u"
            data-popup-button="1"
          >
            Start with a Free Scan →
          </button>
        </div>
      </div>
    </section>
  )
}
