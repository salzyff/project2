import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/mppzdzyo",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to send your inquiry right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-info">
          <span className="contact-label">
            START YOUR REGISTRATION
          </span>

          <h2>
            Ready To Register
            <span> Your Product?</span>
          </h2>

          <p className="contact-description">
            Tell us a little about your business and product.
            Our team can review your inquiry and help you understand
            the next steps.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-detail-icon">01</div>

              <div>
                <span>STEP ONE</span>
                <h3>Submit your inquiry</h3>
                <p>
                  Complete the form with your business
                  and product information.
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">02</div>

              <div>
                <span>STEP TWO</span>
                <h3>We review your request</h3>
                <p>
                  We review the information you provide and
                  determine the next steps.
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">03</div>

              <div>
                <span>STEP THREE</span>
                <h3>Speak with our team</h3>
                <p>
                  We contact you to discuss your registration needs.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="contact-form-wrapper">

          <div className="form-heading">
            <span>REGISTRATION INQUIRY</span>

            <h3>Tell us about your product.</h3>

            <p>
              Fill in the information below and we'll get back to you.
            </p>
          </div>

          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>

              <h3>Inquiry sent.</h3>

              <p>
                Your registration inquiry has been submitted successfully.
              </p>

              <button onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>Full Name *</label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Company / Business</label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Business name"
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Email Address *</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp *</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234..."
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Product Name *</label>

                  <input
                    type="text"
                    name="productName"
                    placeholder="Name of your product"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Product Category *</label>

                  <select
                    name="productCategory"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select category
                    </option>

                    <option value="Food & Beverages">
                      Food & Beverages
                    </option>

                    <option value="Cosmetics">
                      Cosmetics
                    </option>

                    <option value="Medical / Health">
                      Medical / Health
                    </option>

                    <option value="Household">
                      Household
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>Country of Manufacture</label>

                <input
                  type="text"
                  name="country"
                  placeholder="e.g. Nigeria"
                />
              </div>

              <div className="form-group">
                <label>How Can We Help? *</label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your product..."
                  required
                ></textarea>
              </div>

              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Submit Registration Inquiry"}

                {!loading && <span>→</span>}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

export default Contact;