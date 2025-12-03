import MainPage from "../src/pages/MainPage";
import { Routes, Route } from "react-router-dom";
import DataViz from "../src/pages/DataViz";
import { ScrollToHash } from "./components/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/dataviz" element={<DataViz />} />
      </Routes>
    </>
  );
}

export default App;
