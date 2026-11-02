import { useEffect } from "react";
import i18n from "./i18n";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

function App() {
  useEffect(() => {
    const applyLanguage = () => {
      document.documentElement.setAttribute("dir", i18n.dir());
      document.documentElement.setAttribute("lang", i18n.language);
    };

    applyLanguage();
    i18n.on("languageChanged", applyLanguage);
    return () => i18n.off("languageChanged", applyLanguage);
  }, []);

  return (
    <div className="site-shell">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
