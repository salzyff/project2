import "../styles/timelines.css";

const timelines = [
  { title: "Imported Food", duration: "120", unit: "working days", tone: "standard" },
  { title: "Imported Cosmetics", duration: "120", unit: "working days", tone: "standard" },
  { title: "Herbal / Dietary Supplements", duration: "120", unit: "working days", tone: "standard" },
  { title: "Imported Drugs", duration: "240", unit: "working days", tone: "extended" },
  { title: "Biological Products", duration: "240", unit: "workdays", tone: "extended" },
  { title: "Medical Devices", duration: "120–240", unit: "workdays by risk class", tone: "mixed" },
];

function Timelines() {
  return (
    <section className="timelines-section" id="timelines">
      <div className="timelines-container">
        <div className="timelines-header">
          <div>
            <span className="section-eyebrow">GUIDELINE-STATED PROCESSING WINDOWS</span>
            <h2>
              Plan with the <span>right expectations.</span>
            </h2>
          </div>

          <p>
            Applicable NAFDAC guidelines state maximum processing windows for several
            product categories. These are regulatory timelines, not a consultancy guarantee,
            and they can pause when compliance issues or queries are outstanding.
          </p>
        </div>

        <div className="timelines-grid">
          {timelines.map((item) => (
            <article className={`timeline-card timeline-${item.tone}`} key={item.title}>
              <span className="timeline-label">{item.title}</span>
              <div className="timeline-duration">
                <strong>{item.duration}</strong>
                <span>{item.unit}</span>
              </div>
              <p>Maximum window stated in the applicable NAFDAC guideline.</p>
            </article>
          ))}
        </div>

        <div className="regulatory-reality">
          <div className="reality-heading">
            <span>REGULATORY REALITY</span>
            <h3>Three things worth knowing before you begin.</h3>
          </div>

          <div className="reality-list">
            <div>
              <span>01</span>
              <p><strong>Payment is not approval.</strong> Filing an application or paying a fee does not itself confer registration status.</p>
            </div>
            <div>
              <span>02</span>
              <p><strong>Compliance can pause the clock.</strong> Outstanding queries, compliance directives or non-conformances can delay the process.</p>
            </div>
            <div>
              <span>03</span>
              <p><strong>Registration is not an advertising permit.</strong> Separate advertising approval may be required for regulated products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timelines;
