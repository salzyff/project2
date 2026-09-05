import "../styles/services.css";

const services = [
  {
    number: "01",
    title: "Product & Route Assessment",
    text: "Identify the applicable product category, registration type and likely regulatory stages before submission.",
  },
  {
    number: "02",
    title: "Documentation Readiness",
    text: "Organize application letters, business records, authorization documents, certificates, artwork and supporting files.",
  },
  {
    number: "03",
    title: "NAPAMS Application Support",
    text: "Practical support preparing information for the NAFDAC product-registration portal and keeping application records organized.",
  },
  {
    number: "04",
    title: "Label & Artwork Readiness",
    text: "Review the information available on product labels and artwork before regulatory vetting or laboratory stages.",
  },
  {
    number: "05",
    title: "Dossier & Technical Support",
    text: "Help structure dossier and technical-document requirements for products such as drugs, devices, IVDs and biologicals where applicable.",
  },
  {
    number: "06",
    title: "Facility Inspection Readiness",
    text: "Prepare local manufacturing facilities for inspections by reviewing SOPs, personnel, hygiene, equipment and supporting documentation.",
  },
  {
    number: "07",
    title: "Permit & Laboratory Coordination",
    text: "Support the registration-sample, import-permit and laboratory-document stages that apply to many imported regulated products.",
  },
  {
    number: "08",
    title: "Compliance, Renewal & Lot Release",
    text: "Help organize responses to regulatory queries, renewal requirements and lot-release documentation for applicable biological products.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <div>
            <span className="section-eyebrow">WHAT AKAPSYS HELPS WITH</span>
            <h2>
              Practical support across the <span>registration journey.</span>
            </h2>
          </div>

          <p>
            Our job is to make the process more organized: understand the route, prepare
            what is required, coordinate the next stage and keep you clear on what still needs attention.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number">{service.number}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <a href="#contact">
                Ask about this service
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <div>
            <span className="services-bottom-dot" aria-hidden="true"></span>
            Not sure which service applies to your product?
          </div>

          <a href="#contact">
            Send Product Details
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
