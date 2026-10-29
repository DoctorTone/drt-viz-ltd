// GoatCounter is loaded in main.tsx (production only) with no_onload, so
// nothing is counted automatically.
// Pages that should be tracked call useGoatCounter with their path.

import { useEffect } from "react";

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars: { path: string; referrer?: string }) => void;
    };
  }
}

export const useGoatCounter = (path: string) => {
  useEffect(() => {
    // A ?ref= on the link (e.g. ?ref=client) is recorded as the referrer so
    // links shared with specific people can be told apart
    const ref = new URLSearchParams(window.location.search).get("ref");
    const count = () =>
      window.goatcounter?.count?.({ path, ...(ref && { referrer: ref }) });
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
