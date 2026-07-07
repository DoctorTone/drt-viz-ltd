import MainPage from "../pages/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import DataViz from "../pages/DataViz";
import CaseStudyHeatIsland from "../pages/CaseStudyHeatIsland";
import CaseStudyLightning from "../pages/CaseStudyLightning";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/datavizgeneral" element={<DataViz />} />
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
