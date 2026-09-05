import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RegulatoryPaths from "./components/RegulatoryPaths";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Timelines from "./components/Timelines";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RegulatoryPaths />
        <Services />
        <HowItWorks />
        <Timelines />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
