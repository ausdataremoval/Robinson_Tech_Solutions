export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__header reveal">
          <h2 className="section-heading">COME AND TALK TO US</h2>
          <p className="section-sub">
            We're Perth-based and we prefer real conversations. No forms. No
            automated responses. A real person reads every message.
          </p>
        </div>

        <div className="contact__grid">
          {/* Visit / Call */}
          <div className="reveal">
            <p className="contact__block-label">VISIT / CALL</p>
            <div className="contact__detail">
              <p>28/140 St Georges Terrace</p>
              <p>Perth WA 6000</p>
              <br />
              <p>
                <a href="tel:1300504079">1300 504 079</a>
              </p>
              <p>Monday – Friday, 9am – 5pm AWST</p>
            </div>
          </div>

          {/* Email */}
          <div className="reveal">
            <p className="contact__block-label">EMAIL</p>
            <a
              className="contact__email"
              href="mailto:hello@robinsontechsolutions.com.au"
            >
              hello@robinsontechsolutions.com.au
            </a>
            <a
              href="mailto:hello@robinsontechsolutions.com.au"
              className="btn btn-primary"
            >
              Send us a message →
            </a>
          </div>
        </div>

        <blockquote className="contact__philosophy reveal">
          "We don't do presentations. We don't run demos. We have a
          conversation, understand your situation, and tell you honestly
          whether we can help."
        </blockquote>
      </div>
    </section>
  )
}
