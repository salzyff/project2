import "../styles/about.css";

const principles = [
  {
    number: "01",
    title: "Product-Specific",
    text: "We start with your product category and route instead of giving every client the same checklist.",
  },
  {
    number: "02",
    title: "Documentation-First",
    text: "We help organize the supporting documents early so gaps are easier to identify before critical stages.",
  },
  {
    number: "03",
    title: "Stage-Aware Support",
    text: "Fresh registration, inspection, laboratory review, renewal and lot release can require different kinds of support.",
  },
  {
    number: "04",
    title: "Clear Communication",
    text: "We explain what has been done, what is outstanding and what the next regulatory step is expected to be.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <span className="section-eyebrow">ABOUT AKAPSYS</span>

          <h2>
            Regulatory support built around <span>clarity and preparation.</span>
          </h2>

          <p className="about-intro">
            Akapsys Consultancy supports businesses preparing to register regulated products
            in Nigeria. We help clients understand the route, organize requirements and move
            through the process with a clearer view of what comes next.
          </p>

          <p className="about-text">
            Our role is consultancy and process support. Regulatory approvals, certificates,
            permits and final decisions are issued by NAFDAC or the relevant authority.
          </p>

          <a href="#contact" className="about-button">
            Talk To A Consultant
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about-right">
          {principles.map((item, index) => (
            <article className={`about-card ${index === 0 ? "about-card-main" : ""}`} key={item.number}>
              <span className="about-card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
