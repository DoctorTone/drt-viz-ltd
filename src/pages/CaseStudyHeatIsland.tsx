import NavBarCaseStudy from "../components/NavBarCaseStudy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CaseHeatIsland from "../components/CaseHeatIsland";
import { PageTransition } from "../components/PageTransition";

const CaseStudyHeatIsland = () => {
  return (
    <PageTransition>
      <NavBarCaseStudy />
      <CaseHeatIsland />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default CaseStudyHeatIsland;
