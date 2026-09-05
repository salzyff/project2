import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Akapsys Consultancy home">
              <div className="footer-logo-box" aria-hidden="true">A</div>
              <div>
                <h2>AKAPSYS</h2>
                <span>CONSULTANCY</span>
              </div>
            </a>

            <p>
              Product-registration and regulatory-process support for manufacturers,
              importers and brand owners doing business in Nigeria.
            </p>

            <a
              href="https://wa.me/2348023277085"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              <span className="footer-whatsapp-dot" aria-hidden="true"></span>
              Chat With Us
              <strong aria-hidden="true">→</strong>
            </a>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#paths">Product Paths</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">Process</a>
            <a href="#timelines">Timelines</a>
            <a href="#about">About Us</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-column">
            <h3>Support Areas</h3>
            <a href="#paths">Food &amp; Cosmetics</a>
            <a href="#paths">Drugs &amp; Herbal</a>
            <a href="#paths">Medical Devices &amp; IVDs</a>
            <a href="#paths">Biologicals &amp; Vaccines</a>
            <a href="#paths">Facility Inspection Readiness</a>
            <a href="#services">Renewal &amp; Compliance Support</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <span>EMAIL</span>
              <a href="mailto:akapsy@yahoo.com">akapsy@yahoo.com</a>
            </div>

            <div className="footer-contact-item">
              <span>PHONE / WHATSAPP</span>
              <a href="tel:+2348023277085">+234 802 327 7085</a>
            </div>

            <div className="footer-contact-item">
              <span>OFFICIAL NAFDAC PORTAL</span>
              <a href="https://registration.nafdac.gov.ng" target="_blank" rel="noreferrer">
                registration.nafdac.gov.ng
              </a>
            </div>
          </div>
        </div>

        <div className="footer-cta">
          <div>
            <span>HAVE A PRODUCT TO REGISTER?</span>
            <h2>
              Start with the product details. <strong>We&apos;ll map the route.</strong>
            </h2>
          </div>

          <a href="#contact">
            Start Your Inquiry
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="footer-disclaimer">
          <strong>Regulatory notice:</strong> Akapsys Consultancy is an independent consultancy and is not NAFDAC.
          Requirements may change and are assessed case by case. Regulatory approvals, permits, certificates and
          final decisions are issued by NAFDAC or the relevant authority.
        </div>

        <div className="footer-bottom">
          <p>© {year} Akapsys Consultancy. All rights reserved.</p>
          <p>Product registration support in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
