import "../styles/howItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Product",
      text: "Share your product details, business information, and what you need help registering.",
    },
    {
      number: "02",
      title: "Requirements Review",
      text: "We review your information and explain the documents, requirements, and next steps for your case.",
    },
    {
      number: "03",
      title: "Registration Support",
      text: "We guide you through the registration process and help you prepare what is needed.",
    },
    {
      number: "04",
      title: "Progress & Completion",
      text: "We keep you informed as the process moves forward and support you through the remaining steps.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        <div className="how-header">
          <span className="how-label">HOW IT WORKS</span>

          <h2>
            A Clear Process From
            <span> Start To Finish.</span>
          </h2>

          <p>
            We make the registration journey easier to understand by
            breaking it into clear, manageable steps.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step, index) => (
            <div className="how-step" key={step.number}>

              <div className="how-step-top">
                <span className="how-number">{step.number}</span>

                {index !== steps.length - 1 && (
                  <span className="how-line"></span>
                )}
              </div>

              <div className="how-icon">
                {index === 0 && "✦"}
                {index === 1 && "✓"}
                {index === 2 && "↗"}
                {index === 3 && "★"}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>
          ))}
        </div>

        <div className="how-cta">
          <div>
            <span className="how-cta-small">
              READY TO GET STARTED?
            </span>

            <h3>
              Tell us about your product today.
            </h3>
          </div>

          <a href="#contact">
            Start Your Registration
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;