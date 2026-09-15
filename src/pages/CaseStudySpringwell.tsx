import NavBarCaseStudy from "../components/NavBarCaseStudy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CaseSpringwell from "../components/CaseSpringwell";
import { PageTransition } from "../components/PageTransition";

const CaseStudySpringwell = () => {
  return (
    <PageTransition>
      <NavBarCaseStudy />
      <CaseSpringwell />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default CaseStudySpringwell;
