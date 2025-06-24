import { useRef, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import Profile from "./components/Profile.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Experience from "./components/Experience.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";
import Papers from "./components/Papers.tsx";

function App() {
  const aboutRef = useRef < HTMLDivElement > null;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <Profile onKnowMoreClick={scrollToAbout} />
      <AboutMe ref={aboutRef} />
      <Experience />
      <SkillsSection />
      <Papers />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
