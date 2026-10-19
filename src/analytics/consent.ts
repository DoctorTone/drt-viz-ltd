// Analytics consent handling. Google Analytics is only loaded after the visitor
// accepts, and only in production builds served from a real host, so local
// dev and `vite preview` never send data.

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "cookieConsent";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // ask again after 12 months
const OPEN_SETTINGS_EVENT = "open-cookie-settings";

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

const isLocalHost = () =>
  ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);

const analyticsEnabled = () =>
  import.meta.env.PROD && Boolean(GA_ID) && !isLocalHost();

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export const getStoredConsent = (): ConsentChoice | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { choice, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > MAX_AGE_MS) return null;
    return choice === "granted" || choice === "denied" ? choice : null;
  } catch {
    return null;
  }
};

export const storeConsent = (choice: ConsentChoice) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, timestamp: Date.now() }),
    );
  } catch {
    // Storage unavailable (e.g. private mode) - the banner will just reappear
  }
};

export const loadAnalytics = () => {
  if (!analyticsEnabled() || !GA_ID) return;

  window[`ga-disable-${GA_ID}`] = false;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
};

// Stops any further tracking this session and removes existing GA cookies
export const disableAnalytics = () => {
  if (GA_ID) window[`ga-disable-${GA_ID}`] = true;

  const hostParts = window.location.hostname.split(".");
  const domains = hostParts.map((_, i) => hostParts.slice(i).join("."));

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expired;
    domains.forEach((domain) => {
      document.cookie = `${expired}; domain=.${domain}`;
    });
  });
};

export const openCookieSettings = () => {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
};

export const onOpenCookieSettings = (handler: () => void) => {
  window.addEventListener(OPEN_SETTINGS_EVENT, handler);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler);
};
