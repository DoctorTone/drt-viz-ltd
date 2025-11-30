import MainPage from "../src/pages/MainPage";
import { Routes, Route } from "react-router-dom";
import DataViz from "../src/pages/DataViz";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/dataviz" element={<DataViz />} />
    </Routes>
  );
}

export default App;
