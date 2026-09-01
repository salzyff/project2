import "../styles/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-left">
          <span className="about-label">
            ABOUT AKAPSYS
          </span>

          <h2>
            Practical Support For
            <span> Product Registration In Nigeria.</span>
          </h2>

          <p className="about-intro">
            Akapsys Consultancy helps businesses understand and navigate
            product registration requirements with a clear, organized,
            and client-focused approach.
          </p>

          <p className="about-text">
            We work with businesses that need support with documentation,
            regulatory guidance, registration processes, renewals, and
            related product compliance requirements.
          </p>

          <a href="#contact" className="about-button">
            Talk To A Consultant
            <span>→</span>
          </a>
        </div>

        <div className="about-right">

          <div className="about-card about-card-main">
            <span className="about-card-number">01</span>

            <h3>Clear Guidance</h3>

            <p>
              We explain the registration process in a simple,
              understandable way so you know what to expect.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-number">02</span>

            <h3>Client-Focused Support</h3>

            <p>
              Every product and business is different, so we provide
              support based on your specific registration needs.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-number">03</span>

            <h3>Organized Process</h3>

            <p>
              We help you prepare the information and documentation
              required to move your registration process forward.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-number">04</span>

            <h3>Ongoing Assistance</h3>

            <p>
              From your first inquiry through the registration journey,
              we remain available to help with the next steps.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;   