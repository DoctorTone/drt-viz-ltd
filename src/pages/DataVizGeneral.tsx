import NavBarDataViz from "../components/NavBarDataViz";
import FullPortfolio from "../components/FullPortfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PageTransition } from "../components/PageTransition";

const DataVizGeneral = () => {
  return (
    <PageTransition>
      <NavBarDataViz />
      <FullPortfolio />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default DataVizGeneral;
