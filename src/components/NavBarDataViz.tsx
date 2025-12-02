import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const NavBarDataViz = () => {
  gsap.registerPlugin(ScrollToPlugin);

  useGSAP(() => {
    document.querySelectorAll(".section").forEach((link, index) => {
      link.addEventListener("click", () => {
        gsap.to(window, {
          duration: 2,
          scrollTo: { y: "#section" + (index + 1), offsetY: 100 },
        });
      });
    });
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        mt: 3,
        padding: "5px",
        backgroundColor: "#2b2b2b",
        borderRadius: "10px",
        color: "#fff",
        width: { xs: "90%", sm: "70%", md: "90%", lg: "75%" },
        left: { xs: "5%", sm: "17.5%", md: "5%", lg: "12.5%" },
        border: "1px solid rgba(255, 255, 255, 0.25)",
      }}
    >
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            gap: "50px",
          }}
        >
          <img src="./images/drtLogo.png" />
          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "50px",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              className="section"
              sx={{
                textDecoration: "none",
                color: "#a8a8a8",
                cursor: "pointer",
              }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              className="section"
              sx={{
                textDecoration: "none",
                color: "#a8a8a8",
                cursor: "pointer",
              }}
            >
              Back to Portfolio
            </Typography>
            <Typography
              variant="h6"
              className="section"
              sx={{
                textDecoration: "none",
                color: "orange",
                cursor: "pointer",
              }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarDataViz;
