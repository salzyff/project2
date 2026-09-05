import "../styles/regulatoryPaths.css";

const paths = [
  {
    code: "01",
    title: "Food & Beverages",
    summary: "Support for imported food products and locally manufactured food applications.",
    points: [
      "Application and supporting-document review",
      "Label / artwork and Certificate of Analysis readiness",
      "Import permit, laboratory or facility-inspection stages where applicable",
    ],
    tags: ["Imported food", "Local food"],
  },
  {
    code: "02",
    title: "Cosmetics",
    summary: "A structured route for imported cosmetic products and their supporting regulatory documents.",
    points: [
      "Authorization, incorporation and trademark documentation",
      "Certificate of Manufacture / Free Sale and product artwork",
      "Import permit, laboratory analysis and approval-stage support",
    ],
    tags: ["Imported", "Cosmetics"],
  },
  {
    code: "03",
    title: "Drugs, Herbal & Supplements",
    summary: "Product-specific support for human or veterinary drugs, herbal remedies and dietary supplements.",
    points: [
      "Dossier screening support where required",
      "Power of Attorney / contract manufacturing and GMP-related documents",
      "Registration-sample permit, laboratory and query-response support",
    ],
    tags: ["Human / Vet", "Herbal"],
  },
  {
    code: "04",
    title: "Medical Devices & IVDs",
    summary: "Support that starts with device classification and the technical requirements tied to risk level.",
    points: [
      "Class A–D route assessment",
      "Dossier clearance for applicable moderate / high-risk products",
      "QMS, Declaration of Conformity, labels and technical documents",
    ],
    tags: ["Devices", "IVDs"],
  },
  {
    code: "05",
    title: "Biologicals & Vaccines",
    summary: "Technical registration support for biological products, including dossier and cold-chain stages.",
    points: [
      "Dossier submission and screening-clearance preparation",
      "Cold-chain, product-sample and facility requirements",
      "Lot-release documentation support for applicable batches",
    ],
    tags: ["Biologics", "Vaccines"],
  },
  {
    code: "06",
    title: "Local Production Facilities",
    summary: "Inspection-readiness support for regulated food production facilities in Nigeria.",
    points: [
      "Packaged water, bread / baked products and small-scale food enterprises",
      "SOP, personnel, equipment, hygiene and facility-document readiness",
      "Inspection preparation, non-conformance response and next-step support",
    ],
    tags: ["Inspection", "GMP / GHP"],
  },
];

function RegulatoryPaths() {
  return (
    <section className="paths-section" id="paths">
      <div className="paths-container">
        <div className="paths-header">
          <div>
            <span className="section-eyebrow">PRODUCT &amp; REGULATORY PATHS</span>
            <h2>
              One consultancy. <span>Different registration routes.</span>
            </h2>
          </div>

          <div className="paths-intro">
            <p>
              The documents and regulatory stages change depending on what you make,
              import or distribute. We help you identify the right starting point before
              you spend time preparing the wrong application.
            </p>
            <a href="#contact">Tell us what you are registering <span>→</span></a>
          </div>
        </div>

        <div className="paths-grid">
          {paths.map((path) => (
            <article className="path-card" key={path.code}>
              <div className="path-card-top">
                <span className="path-code">{path.code}</span>
                <div className="path-tags">
                  {path.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>

              <h3>{path.title}</h3>
              <p className="path-summary">{path.summary}</p>

              <ul>
                {path.points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="path-link">
                Discuss this route <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="paths-note">
          <div className="paths-note-icon" aria-hidden="true">i</div>
          <p>
            <strong>Important:</strong> product category, origin, risk class, manufacturer status and
            the stage of an existing application can change the exact requirements. We review the
            case before recommending a route.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegulatoryPaths;
