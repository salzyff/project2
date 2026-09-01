import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      {/* BRAND */}

      <a
        href="#home"
        className="brand"
        onClick={closeMenu}
      >
        <div className="brand-logo">
          A
        </div>

        <div className="brand-text">
          <h2>AKAPSYS</h2>
          <span>CONSULTANCY</span>
        </div>
      </a>


      {/* DESKTOP LINKS */}

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={
              activeSection === item.id
                ? "nav-active"
                : ""
            }
          >
            {item.name}
          </a>
        ))}
      </div>


      {/* RIGHT SIDE */}

      <div className="nav-actions">

        <a
          href="https://wa.me/2347042785091"
          target="_blank"
          rel="noreferrer"
          className="whatsapp"
        >
          WhatsApp
        </a>

        <a
          href="#contact"
          className="register"
        >
          Start Registration
          <span>→</span>
        </a>

      </div>


      {/* MOBILE BUTTON */}

      <button
        className={`mobile-toggle ${
          menuOpen ? "mobile-toggle-open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* MOBILE MENU */}

      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className={
                activeSection === item.id
                  ? "mobile-active"
                  : ""
              }
            >
              <span>{item.name}</span>

              <strong>→</strong>
            </a>
          ))}
        </div>


        <div className="mobile-nav-bottom">

          <a
            href="https://wa.me/2347042785091"
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp"
          >
            Chat on WhatsApp
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-register"
          >
            Start Registration
            <span>→</span>
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
