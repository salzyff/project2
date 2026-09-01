import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="footer-logo-box">A</div>

              <div>
                <h2>AKAPSYS</h2>
                <span>CONSULTANCY</span>
              </div>
            </a>

            <p>
              Helping businesses navigate product registration,
              documentation, and regulatory requirements in Nigeria.
            </p>

            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              <span className="footer-whatsapp-dot"></span>
              Chat With Us
              <strong>→</strong>
            </a>
          </div>


          {/* NAVIGATION */}
          <div className="footer-column">
            <h3>Navigation</h3>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About Us</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>


          {/* SERVICES */}
          <div className="footer-column">
            <h3>Services</h3>

            <a href="#services">Product Registration</a>
            <a href="#services">Documentation Support</a>
            <a href="#services">Regulatory Guidance</a>
            <a href="#services">Registration Renewal</a>
            <a href="#services">Application Follow-Up</a>
          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <span>EMAIL</span>

              <a href="mailto:akapsy@yahoo.com">
                akapsy@yahoo.com
              </a>
            </div>

            <div className="footer-contact-item">
              <span>PHONE / WHATSAPP</span>

              <a href="tel:+2348023277085">
                +234 802 327 7085
              </a>
            </div>

            <div className="footer-contact-item">
              <span>LOCATION</span>

              <p>Nigeria</p>
            </div>
          </div>

        </div>


        {/* CTA */}
        <div className="footer-cta">

          <div>
            <span>HAVE A PRODUCT TO REGISTER?</span>

            <h2>
              Let's get your registration
              <strong> started.</strong>
            </h2>
          </div>

          <a href="#contact">
            Start Registration
            <span>→</span>
          </a>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {year} Akapsys Consultancy. All rights reserved.
          </p>

          <div>
            <a href="#">Privacy Policy</a>

            <span>•</span>

            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;