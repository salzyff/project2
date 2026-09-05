import "../styles/howItWorks.css";

const steps = [
  {
    number: "01",
    title: "Intake & Classification",
    text: "You tell us what the product is, where it is made and whether this is a fresh application, renewal, inspection or other regulatory need.",
  },
  {
    number: "02",
    title: "Requirement Map",
    text: "We identify the likely documents, portal steps, inspection, technical review, permit or laboratory stages for the product route.",
  },
  {
    number: "03",
    title: "Document Preparation",
    text: "We help you organize the available supporting documents and flag missing or inconsistent information before the next step.",
  },
  {
    number: "04",
    title: "Submission Support",
    text: "We support the application and help keep records of submissions, receipts, permits, correspondence and other process documents.",
  },
  {
    number: "05",
    title: "Inspection / Review Support",
    text: "Where applicable, we help prepare for facility inspection, laboratory submission, dossier review or compliance-response stages.",
  },
  {
    number: "06",
    title: "Outcome & Next Steps",
    text: "We help you understand the result, any outstanding action, renewal need or post-registration requirement relevant to the case.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <span className="section-eyebrow section-eyebrow-light">HOW IT WORKS</span>
          <h2>
            A structured process from <span>first review to next action.</span>
          </h2>
          <p>
            Not every application has the same stages. Our process is designed to stay useful
            whether your route involves documents only, a facility inspection, laboratory analysis,
            a dossier review or several of them.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <article className="how-step" key={step.number}>
              <div className="how-step-number">{step.number}</div>
              <div className="how-step-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="how-cta">
          <div>
            <span className="how-cta-small">READY TO MAP YOUR ROUTE?</span>
            <h3>Send us the product details you already have.</h3>
          </div>

          <a href="#contact">
            Start Your Inquiry
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
