import { useEffect } from "react";
import i18n from "./i18n";
import NavBar from "./component/NavBar";
import About from "./sections/About";
import Footer from "./component/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
function App() {
  useEffect(() => {
    const applyDir = () => {
      document.documentElement.setAttribute("dir", i18n.dir());
      document.documentElement.setAttribute("lang", i18n.language);
    };
    applyDir();
    i18n.on("languageChanged", applyDir);
    return () => {
      i18n.off("languageChanged", applyDir);
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
