export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__orb" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow reveal">Perth, Western Australia</p>

        <h1 className="hero__heading reveal">
          TECHNOLOGY WITH A<br />HUMAN BEHIND IT.
        </h1>

        <p className="hero__subtitle reveal">
          Perth-based technology services, AI automation, and data privacy.
          Built carefully. Run personally.
        </p>

        <div className="hero__ctas reveal">
          <a
            href="#adr"
            className="btn btn-primary"
          >
            AUS Data Removal →
          </a>
          <a
            href="#sovereign-tank"
            className="btn btn-outline"
          >
            Sovereign Tank →
          </a>
        </div>

        <p className="hero__address reveal">
          28/140 St Georges Terrace, Perth WA&nbsp;&nbsp;·&nbsp;&nbsp;ABN: [pending]
        </p>
      </div>
    </section>
  )
}
