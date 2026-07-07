import NavBarDataViz from "../components/NavBarDataViz";
import GeoPortfolio from "../components/GeoPortfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PageTransition } from "../components/PageTransition";

const DataVizGeo = () => {
  return (
    <PageTransition>
      <NavBarDataViz />
      <GeoPortfolio />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default DataVizGeo;
