import "../styles/services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Product Registration",
      text: "Support with the process of registering eligible products with the appropriate Nigerian regulatory authorities.",
    },
    {
      number: "02",
      title: "Documentation Support",
      text: "Guidance on preparing and organizing the documents required for your product registration process.",
    },
    {
      number: "03",
      title: "Regulatory Guidance",
      text: "Clear guidance on regulatory requirements, product categories, and the steps involved in registration.",
    },
    {
      number: "04",
      title: "Registration Renewal",
      text: "Support for businesses that need assistance renewing existing product registrations.",
    },
    {
      number: "05",
      title: "Application Follow-Up",
      text: "Assistance with tracking applications, responding to requests, and keeping the process moving.",
    },
    {
      number: "06",
      title: "Business Consultation",
      text: "One-on-one consultation to understand your product and determine the best registration path.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-header">
          <div>
            <span className="services-label">
              OUR SERVICES
            </span>

            <h2>
              Everything You Need To
              <span> Register With Confidence.</span>
            </h2>
          </div>

          <p>
            We help businesses understand and navigate the
            product registration process in Nigeria with clear,
            practical support from start to finish.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#contact">
                Learn More
                <span>→</span>
              </a>

            </div>
          ))}
        </div>

        <div className="services-bottom">
          <div>
            <span className="services-bottom-dot"></span>

            Not sure which service you need?
          </div>

          <a href="#contact">
            Talk To A Consultant
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;