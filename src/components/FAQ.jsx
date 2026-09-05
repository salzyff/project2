import { useState } from "react";
import "../styles/faq.css";

const faqs = [
  {
    question: "What product categories can Akapsys support?",
    answer:
      "We can discuss routes for food and beverages, cosmetics, human and veterinary drugs, herbal remedies and dietary supplements, medical devices and IVDs, biological products and vaccines, as well as selected local food-production facility inspections such as packaged water and bread / baked products.",
  },
  {
    question: "Do all products follow the same NAFDAC registration process?",
    answer:
      "No. Requirements vary by product category, whether the product is imported or locally manufactured, risk class, manufacturer status and the type of application. Some routes involve facility inspection, import permits, laboratory analysis, dossier screening or technical review while others follow a different sequence.",
  },
  {
    question: "What documents do I need before I contact you?",
    answer:
      "You do not need a complete file to start a conversation. Send the product name, category, country of manufacture, manufacturer or brand-owner details and any documents you already have. We can then identify the likely gaps for your route.",
  },
  {
    question: "How long can product registration take?",
    answer:
      "Applicable NAFDAC guidelines state maximum windows of 120 working days for several categories and 240 workdays for others, depending on the product. Timelines can pause when compliance directives, queries or other outstanding actions are issued, so they should not be treated as guaranteed completion dates.",
  },
  {
    question: "Does paying an application fee mean the product is registered?",
    answer:
      "No. The guidelines make clear that filing an application or paying the relevant fee does not itself confer registration status. Approval remains a regulatory decision.",
  },
  {
    question: "Can Akapsys guarantee NAFDAC approval?",
    answer:
      "No. Akapsys provides consultancy, documentation and process support. Registration, permits, certificates and approval decisions are made by NAFDAC or the relevant regulatory authority.",
  },
  {
    question: "Does product registration automatically allow me to advertise the product?",
    answer:
      "Not necessarily. NAFDAC guidelines for several regulated product categories state that product registration does not automatically confer an advertising permit. A separate advertising application and approval may be required.",
  },
  {
    question: "Can you help with renewals, compliance queries or vaccine lot release?",
    answer:
      "Yes, depending on the product and the stage of the matter. We can review renewal requirements, help organize responses to regulatory queries and discuss lot-release documentation support for applicable vaccines and biological products.",
  },
];

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setActiveQuestion((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-left">
          <span className="section-eyebrow">FAQ</span>

          <h2>
            Common questions. <span>Clear answers.</span>
          </h2>

          <p>
            Product registration is easier to plan when you know which assumptions are unsafe.
            Here are some of the questions clients should ask early.
          </p>

          <div className="faq-help">
            <span>STILL HAVE A QUESTION?</span>
            <h3>Send us your product details.</h3>
            <a href="#contact">
              Contact Akapsys
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="faq-right">
          {faqs.map((faq, index) => {
            const open = activeQuestion === index;
            return (
              <div className={`faq-item ${open ? "active" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={open}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon" aria-hidden="true">{open ? "−" : "+"}</div>
                </button>

                <div className="faq-answer" aria-hidden={!open}>
                  <div><p>{faq.answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
