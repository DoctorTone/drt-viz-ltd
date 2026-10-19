import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import {
  disableAnalytics,
  getStoredConsent,
  loadAnalytics,
  onOpenCookieSettings,
  storeConsent,
  type ConsentChoice,
} from "../analytics/consent";

const CookieBanner = () => {
  const [open, setOpen] = useState(() => getStoredConsent() === null);

  useEffect(() => {
    if (getStoredConsent() === "granted") loadAnalytics();
    return onOpenCookieSettings(() => setOpen(true));
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    storeConsent(choice);
    if (choice === "granted") loadAnalytics();
    else disableAnalytics();
    setOpen(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 16, md: 24 },
        left: 16,
        right: 16,
        zIndex: (theme) => theme.zIndex.snackbar,
        pointerEvents: "none",
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          role="region"
          aria-label="Cookie consent"
          elevation={8}
          sx={{
            maxWidth: 900,
            mx: "auto",
            pointerEvents: "auto",
            p: { xs: 2, md: 2.5 },
            backgroundColor: "#2b2b2b",
            color: "#fff",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ flex: 1, color: "#d0d0d0" }}>
            We'd like to use Google Analytics cookies to understand how visitors
            use this site. They're only set if you accept.{" "}
            <Link
              component={RouterLink}
              to="/cookies"
              color="warning"
              underline="hover"
            >
              Cookie policy
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1.5,
              flexShrink: 0,
            }}
          >
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleChoice("denied")}
              sx={{ minWidth: 110 }}
            >
              Reject
            </Button>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => handleChoice("granted")}
              sx={{ minWidth: 110 }}
            >
              Accept
            </Button>
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
};

export default CookieBanner;
