import { useEffect, useState } from "react";
import "../styles/navbar.css";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Product Paths", href: "#paths", id: "paths" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Process", href: "#how-it-works", id: "how-it-works" },
  { name: "Timelines", href: "#timelines", id: "timelines" },
  { name: "FAQ", href: "#faq", id: "faq" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const marker = window.scrollY + 190;
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && marker >= section.offsetTop) current = item.id;
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.toggle("menu-open", menuOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} aria-label="Primary navigation">
      <a href="#home" className="brand" onClick={closeMenu} aria-label="Akapsys Consultancy home">
        <div className="brand-logo" aria-hidden="true">A</div>
        <div className="brand-text">
          <h2>AKAPSYS</h2>
          <span>CONSULTANCY</span>
        </div>
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={activeSection === item.id ? "nav-active" : ""}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <a
          href="https://wa.me/2348023277085"
          target="_blank"
          rel="noreferrer"
          className="whatsapp"
        >
          <span className="whatsapp-dot" aria-hidden="true"></span>
          WhatsApp
        </a>

        <a href="#contact" className="register">
          Start Registration
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <button
        type="button"
        className={`mobile-toggle ${menuOpen ? "mobile-toggle-open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
      >
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className={activeSection === item.id ? "mobile-active" : ""}
            >
              <span>{item.name}</span>
              <strong aria-hidden="true">→</strong>
            </a>
          ))}
        </div>

        <div className="mobile-nav-bottom">
          <a
            href="https://wa.me/2348023277085"
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp"
          >
            Chat on WhatsApp
          </a>

          <a href="#contact" onClick={closeMenu} className="mobile-register">
            Start Registration
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
