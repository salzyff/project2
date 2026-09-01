import { useState } from "react";
import "../styles/faq.css";

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqs = [
    {
      question: "What types of products can Akapsys help register?",
      answer:
        "Akapsys Consultancy provides support for businesses seeking guidance with product registration in Nigeria. Contact us with your product details so we can determine the appropriate registration requirements.",
    },
    {
      question: "What documents do I need to start?",
      answer:
        "The required documents can vary depending on the product category, manufacturer, and applicable regulatory requirements. We review your product first and guide you on the documents needed for your specific case.",
    },
    {
      question: "How long does product registration take?",
      answer:
        "Registration timelines can vary depending on the product, regulatory requirements, documentation, inspections, reviews, and the relevant authority. We help you understand the process and keep you informed as your application progresses.",
    },
    {
      question: "Can Akapsys Consultancy guarantee that my product will be approved?",
      answer:
        "No consultancy can guarantee regulatory approval. Approval decisions are made by the relevant regulatory authority. Akapsys provides guidance and registration support to help clients navigate the process properly.",
    },
    {
      question: "Can you help with an existing registration?",
      answer:
        "Yes. Depending on your situation, we may be able to assist with registration renewals, documentation, application follow-up, and other related registration matters.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply send us an inquiry with your contact information and basic product details. We can then review your request and explain the next steps.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* LEFT SIDE */}
        <div className="faq-left">
          <span className="faq-label">FAQ</span>

          <h2>
            Questions?
            <span> We've Got Answers.</span>
          </h2>

          <p>
            Find answers to common questions about working with
            Akapsys Consultancy and getting started with your
            product registration.
          </p>

          <div className="faq-help">
            <span>STILL HAVE A QUESTION?</span>

            <h3>Speak directly with our team.</h3>

            <a href="#contact">
              Contact Us
              <span>→</span>
            </a>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="faq-right">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeQuestion === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>

                <div className="faq-icon">
                  {activeQuestion === index ? "−" : "+"}
                </div>
              </button>

              <div className="faq-answer">
                <div>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;