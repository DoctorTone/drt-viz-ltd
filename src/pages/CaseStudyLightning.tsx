import NavBarCaseStudy from "../components/NavBarCaseStudy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CaseLightning from "../components/CaseLightning";
import { PageTransition } from "../components/PageTransition";

const CaseStudyLightning = () => {
  return (
    <PageTransition>
      <NavBarCaseStudy />
      <CaseLightning />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default CaseStudyLightning;
