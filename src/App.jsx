import { useEffect } from "react";
import i18n from "./i18n";
import NavBar from "./component/NavBar";
import About from "./sections/About";
import Footer from "./component/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import bgVideo from "./assets/bg.mp4";
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      {/* Overlay for better content visibility */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10" />

      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
