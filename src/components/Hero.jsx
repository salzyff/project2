import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          Product Registration Consultancy
        </div>

        <h1>
          Register Your Products
          <span> In Nigeria With Confidence.</span>
        </h1>

        <p className="hero-description">
          Akapsys Consultancy helps businesses navigate product
          registration, documentation, and regulatory requirements
          in Nigeria.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="hero-primary-btn">
            Start Registration
            <span>→</span>
          </a>

          <a href="#services" className="hero-secondary-btn">
            Explore Services
          </a>

        </div>

        <div className="hero-benefits">

          <div>
            <span className="hero-check">✓</span>
            Regulatory Guidance
          </div>

          <div>
            <span className="hero-check">✓</span>
            Documentation Support
          </div>

          <div>
            <span className="hero-check">✓</span>
            Personalized Assistance
          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="hero-right">

        <div className="hero-circle"></div>

        <div className="hero-card">

          <span className="hero-card-tag">
            Registration Support
          </span>

          <h2>
            Need help registering a product?
          </h2>

          <p>
            Tell us about your product and we'll guide you
            through the next steps.
          </p>

          <div className="hero-steps">

            <div className="hero-step">
              <span>01</span>
              <p>Submit your product details</p>
            </div>

            <div className="hero-step">
              <span>02</span>
              <p>Get your requirements reviewed</p>
            </div>

            <div className="hero-step">
              <span>03</span>
              <p>Begin your registration process</p>
            </div>

          </div>

          <a href="#contact" className="hero-card-button">
            Start Your Inquiry
            <span>→</span>
          </a>

        </div>




      </div>

    </section>
  );
}

export default Hero;