import NavBarCaseStudy from "../components/NavBarCaseStudy";
import FullPortfolio from "../components/FullPortfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PageTransition } from "../components/PageTransition";

const CaseStudy = () => {
  return (
    <PageTransition>
      <NavBarCaseStudy />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default CaseStudy;
