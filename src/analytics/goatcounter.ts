// GoatCounter is loaded in main.tsx (production only) with no_onload, so
// nothing is counted automatically.
// Pages that should be tracked call useGoatCounter with their path.

import { useEffect } from "react";

declare global {
  interface Window {
    goatcounter?: { count?: (vars: { path: string }) => void };
  }
}

export const useGoatCounter = (path: string) => {
  useEffect(() => {
    const count = () => window.goatcounter?.count?.({ path });
    if (window.goatcounter?.count) {
      count();
      return;
    }

    // Script is async, so on a direct visit it may not have loaded yet
    const script = document.getElementById("goatcounter");
    script?.addEventListener("load", count, { once: true });
    return () => script?.removeEventListener("load", count);
  }, [path]);
};
