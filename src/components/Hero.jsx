import "../styles/hero.css";

const quickRoutes = [
  {
    label: "Imported products",
    path: "Documents → permit / review → laboratory or technical stage → decision",
  },
  {
    label: "Locally manufactured food",
    path: "Application → facility inspection → samples / laboratory stage → registration",
  },
  {
    label: "Drugs, devices & biologics",
    path: "Product-specific technical review, dossier and regulatory stages may apply",
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-tag">
          <span className="hero-tag-dot" aria-hidden="true"></span>
          NAFDAC Product Registration Support
        </div>

        <h1>
          A Clearer Route Through
          <span> Product Registration In Nigeria.</span>
        </h1>

        <p className="hero-description">
          Akapsys Consultancy helps manufacturers, importers and brand owners
          understand product-specific requirements, organize documentation and
          navigate registration, inspection and regulatory follow-up in Nigeria.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-primary-btn">
            Start Your Inquiry
            <span aria-hidden="true">→</span>
          </a>

          <a href="#paths" className="hero-secondary-btn">
            Find Your Product Path
          </a>
        </div>

        <div className="hero-benefits" aria-label="Key areas of support">
          <div><span className="hero-check">✓</span> Product-specific guidance</div>
          <div><span className="hero-check">✓</span> Documentation &amp; NAPAMS support</div>
          <div><span className="hero-check">✓</span> Inspection / laboratory readiness</div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-glow" aria-hidden="true"></div>

        <div className="hero-route-card">
          <div className="hero-card-kicker">
            <span>REGULATORY ROUTE CHECK</span>
            <strong>01</strong>
          </div>

          <h2>Your registration path depends on the product.</h2>
          <p className="hero-card-copy">
            Food, cosmetics, drugs, medical devices, biologics and local production
            facilities do not all follow the same route. We start by identifying yours.
          </p>

          <div className="hero-route-list">
            {quickRoutes.map((route) => (
              <div className="hero-route-row" key={route.label}>
                <span>{route.label}</span>
                <p>{route.path}</p>
              </div>
            ))}
          </div>

          <div className="hero-card-footer">
            <div>
              <span className="hero-card-dot" aria-hidden="true"></span>
              Requirements are reviewed case by case
            </div>
            <a href="#contact" aria-label="Start a product registration inquiry">→</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
