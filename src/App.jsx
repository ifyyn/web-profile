import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import CertificatSection from "./components/CertificatSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Projects from "./components/ProjectSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <CertificatSection />
      <Projects />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};
export default App;
