import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
        <CookieBanner />
      </BrowserRouter>
    </>
  );
}

export default App;
