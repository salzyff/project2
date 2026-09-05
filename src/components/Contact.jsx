import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppzdzyo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send your inquiry right now. Please try again or use WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-eyebrow section-eyebrow-light">START YOUR INQUIRY</span>

          <h2>
            Tell us what you are <span>trying to register.</span>
          </h2>

          <p className="contact-description">
            The more context you give us, the easier it is to identify the likely regulatory route
            before we speak. You do not need to have every document ready.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">01</div>
              <div>
                <span>PRODUCT</span>
                <h3>What is it?</h3>
                <p>Category, product name, brand and whether it is imported or made in Nigeria.</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">02</div>
              <div>
                <span>STAGE</span>
                <h3>Where are you now?</h3>
                <p>Fresh registration, renewal, inspection, compliance query, lot release or not sure.</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">03</div>
              <div>
                <span>NEXT</span>
                <h3>We review the route.</h3>
                <p>Akapsys can then explain the likely requirements and discuss the support you need.</p>
              </div>
            </div>
          </div>

          <a
            className="contact-whatsapp"
            href="https://wa.me/2348023277085"
            target="_blank"
            rel="noreferrer"
          >
            Prefer WhatsApp? Chat with us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="contact-form-wrapper">
          <div className="form-heading">
            <span>REGISTRATION INQUIRY</span>
            <h3>Give us the important details.</h3>
            <p>Fields marked * are required.</p>
          </div>

          {submitted ? (
            <div className="form-success" role="status">
              <div className="success-icon" aria-hidden="true">✓</div>
              <h3>Inquiry sent.</h3>
              <p>We have received your product-registration inquiry.</p>
              <button type="button" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Akapsys Product Registration Inquiry" />
              <input type="hidden" name="source" value="Akapsys Consultancy Website" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input id="fullName" type="text" name="fullName" placeholder="Your full name" autoComplete="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Business</label>
                  <input id="company" type="text" name="company" placeholder="Business name" autoComplete="organization" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp *</label>
                  <input id="phone" type="tel" name="phone" placeholder="+234..." autoComplete="tel" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="registrationType">Registration Type *</label>
                  <select id="registrationType" name="registrationType" defaultValue="" required>
                    <option value="" disabled>Select one</option>
                    <option value="Fresh Registration">Fresh Registration</option>
                    <option value="Renewal">Renewal</option>
                    <option value="Facility Inspection">Facility Inspection</option>
                    <option value="Compliance / Query Response">Compliance / Query Response</option>
                    <option value="Lot Release">Lot Release</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="productOrigin">Product Origin *</label>
                  <select id="productOrigin" name="productOrigin" defaultValue="" required>
                    <option value="" disabled>Select one</option>
                    <option value="Manufactured in Nigeria">Manufactured in Nigeria</option>
                    <option value="Imported">Imported</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="productCategory">Product Category *</label>
                  <select id="productCategory" name="productCategory" defaultValue="" required>
                    <option value="" disabled>Select category</option>
                    <option value="Food / Beverage">Food / Beverage</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Human Drug">Human Drug</option>
                    <option value="Veterinary Drug">Veterinary Drug</option>
                    <option value="Herbal / Dietary Supplement">Herbal / Dietary Supplement</option>
                    <option value="Medical Device">Medical Device</option>
                    <option value="IVD">In Vitro Diagnostic (IVD)</option>
                    <option value="Biological / Vaccine">Biological / Vaccine</option>
                    <option value="Packaged Water">Packaged Water</option>
                    <option value="Bread / Baked Product">Bread / Baked Product</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="productName">Product Name *</label>
                  <input id="productName" type="text" name="productName" placeholder="Name of the product" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="brandName">Brand Name</label>
                  <input id="brandName" type="text" name="brandName" placeholder="Brand / trademark name" />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country of Manufacture</label>
                  <input id="country" type="text" name="country" placeholder="e.g. Nigeria" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="manufacturer">Manufacturer Name</label>
                  <input id="manufacturer" type="text" name="manufacturer" placeholder="Manufacturer / factory name" />
                </div>

                <div className="form-group">
                  <label htmlFor="registrationNumber">Existing NAFDAC No.</label>
                  <input id="registrationNumber" type="text" name="registrationNumber" placeholder="If this is an existing registration" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">What Do You Need Help With? *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you have done already, any issue you are facing, and the documents you currently have."
                  required
                ></textarea>
              </div>

              <label className="form-consent">
                <input type="checkbox" name="acknowledgement" value="Accepted" required />
                <span>
                  I understand Akapsys provides consultancy and process support; regulatory approval is determined by the relevant authority.
                </span>
              </label>

              {error && <p className="form-error" role="alert">{error}</p>}

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Registration Inquiry"}
                {!loading && <span aria-hidden="true">→</span>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
