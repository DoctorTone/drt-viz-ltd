import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// --- analytics: load GoatCounter in production only ---
if (import.meta.env.PROD) {
  const s = document.createElement("script");
  // id is looked up by useGoatCounter; no_onload so only tracked pages count
  s.id = "goatcounter";
  s.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = "https://drtsolar.goatcounter.com/count";
  document.body.appendChild(s);
}
