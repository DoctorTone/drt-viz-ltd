import MainPage from "../pages/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import DataVizGeneral from "../pages/DataVizGeneral";
import CaseStudyHeatIsland from "../pages/CaseStudyHeatIsland";
import CaseStudyLightning from "../pages/CaseStudyLightning";
import { AnimatePresence } from "framer-motion";
import DataVizGeo from "../pages/DataVizGeo";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/datavizgeo" element={<DataVizGeo />} />
        <Route path="/datavizgeneral" element={<DataVizGeneral />} />
        <Route
          path="/case-studies/heat-islands"
          element={<CaseStudyHeatIsland />}
        />
        <Route
          path="/case-studies/lightning-strikes"
          element={<CaseStudyLightning />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
