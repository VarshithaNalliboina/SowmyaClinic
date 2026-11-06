// <div class="topA"> — converted 1:1 from the original index.html
export default function HeaderHero() {
  return (
    <div className="topA">
      <header className="nav">
        <div className="nav-in">
          {" "}
          <a href="#home" className="brand" aria-label={"Dr. Sowmya's Skin, Hair & Laser Clinic"}>
            <img className="brand-mark" src="/img/logo-mark.png" alt="" width="44" height="44" />
            <span className="brand-tx">
              <b>Dr. Sowmya&apos;s</b>
              <small>Skin, Hair &amp; Laser Clinic</small>
            </span>
          </a>
          {" "}
          <nav aria-label="Main">
            <ul className="menu">
              <li><a className="on" href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#clinic">Gallery</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#locations">Contact</a></li>
            </ul>
          </nav>
          {" "}
          <a className="btn btn-rose" href="#contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
            Book Appointment
          </a>
          {" "}
          <button className="burger" aria-label="Open menu" aria-controls="mnav" aria-expanded="false">
            <span />
            <span />
            <span />
          </button>
          {" "}
        </div>
      </header>
      <nav className="mnav glass" id="mnav" aria-label="Mobile">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#treatments">Treatments</a>
        <a href="#clinic">Gallery</a>
        <a href="#why">Why Us</a>
        <a href="#locations">Contact</a>
        <a href="#contact">Book Appointment</a>
      </nav>
      <main>
        <section className="hero" id="home">
          <div className="blob" style={{ width: "520px", height: "520px", background: "var(--blob1)", left: "-180px", top: "80px" }} />
          <div className="blob" style={{ width: "380px", height: "380px", background: "var(--blob2)", left: "28%", bottom: "-160px" }} />
          <div className="hero-frame" />
          <figure className="hero-photo">
            <img src="/img/dsc08982.jpeg" alt="Dr. Sowmya Kothamasu at the clinic reception" fetchPriority="high" />
          </figure>
          <div className="wrap">
            <div className="hero-copy">
              {" "}
              <span className="eyebrow">Skin · Hair · Laser · Anti-ageing</span>
              {" "}
              <h1>
                Healthy, radiant skin,
                {" "}
                <em className="it">thoughtfully</em>
                {" "}
                cared for
              </h1>
              <p className="lead">
                Expert dermatology, hair and laser treatments by
                {" "}
                <b>Dr. Sowmya Kothamasu, M.D. (DVL)</b>
                , in a calm and modern clinic made for you.
              </p>
              <div className="cta">
                <a className="btn btn-rose" href="#contact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  Book Appointment
                </a>
                <a className="btn btn-line" href="#treatments">
                  Our Treatments
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              <div className="hero-points">
                <span>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m2 9 10-5 10 5-10 5z" />
                      <path d="M6 11v5c3 2 9 2 12 0v-5" />
                    </svg>
                  </i>
                  M.D. (DVL)
                </span>
                <span>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
                    </svg>
                  </i>
                  Advanced lasers
                </span>
                <span>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </i>
                  Private rooms
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="ribbon" aria-hidden="true">
          <div className="row mq">
            <div className="mq-in">
              <div className="mq-g">
                <span>Acne care</span>
                <i>✦</i>
                <span>Pigmentation</span>
                <i>✦</i>
                <span>Laser hair reduction</span>
                <i>✦</i>
                <span>Hair restoration</span>
                <i>✦</i>
                <span>Anti-ageing</span>
                <i>✦</i>
                <span>HydraFacial</span>
                <i>✦</i>
                <span>Chemical peels</span>
                <i>✦</i>
                <span>Acne scars</span>
                <i>✦</i>
              </div>
              <div className="mq-g">
                <span>Acne care</span>
                <i>✦</i>
                <span>Pigmentation</span>
                <i>✦</i>
                <span>Laser hair reduction</span>
                <i>✦</i>
                <span>Hair restoration</span>
                <i>✦</i>
                <span>Anti-ageing</span>
                <i>✦</i>
                <span>HydraFacial</span>
                <i>✦</i>
                <span>Chemical peels</span>
                <i>✦</i>
                <span>Acne scars</span>
                <i>✦</i>
              </div>
              <div className="mq-g">
                <span>Acne care</span>
                <i>✦</i>
                <span>Pigmentation</span>
                <i>✦</i>
                <span>Laser hair reduction</span>
                <i>✦</i>
                <span>Hair restoration</span>
                <i>✦</i>
                <span>Anti-ageing</span>
                <i>✦</i>
                <span>HydraFacial</span>
                <i>✦</i>
                <span>Chemical peels</span>
                <i>✦</i>
                <span>Acne scars</span>
                <i>✦</i>
              </div>
              <div className="mq-g">
                <span>Acne care</span>
                <i>✦</i>
                <span>Pigmentation</span>
                <i>✦</i>
                <span>Laser hair reduction</span>
                <i>✦</i>
                <span>Hair restoration</span>
                <i>✦</i>
                <span>Anti-ageing</span>
                <i>✦</i>
                <span>HydraFacial</span>
                <i>✦</i>
                <span>Chemical peels</span>
                <i>✦</i>
                <span>Acne scars</span>
                <i>✦</i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
