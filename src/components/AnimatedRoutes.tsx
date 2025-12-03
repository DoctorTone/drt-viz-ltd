import MainPage from "../pages/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import DataViz from "../pages/DataViz";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/dataviz" element={<DataViz />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
