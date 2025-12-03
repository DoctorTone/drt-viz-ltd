import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToHash /> */}
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
