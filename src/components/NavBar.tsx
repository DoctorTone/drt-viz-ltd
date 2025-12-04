import { useState, type MouseEvent } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (section: number) => {
    setAnchorEl(null);
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#section" + section, offsetY: 100 },
    });
  };
  const open = Boolean(anchorEl);

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
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            alignItems: "center",
            gap: "50px",
          }}
        >
          <img src="./images/drtLogo.png" />
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="warning"
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose(1)}>Visualisations</MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(2)}>
              Services
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(3)}>
              Testimonials
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(4)}>
              FAQ
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(5)}>
              About
            </MenuItem>
          </Menu>
        </Box>
        <Box
          component="div"
          sx={{
            display: { xs: "none", md: "flex" },
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
              Solutions
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
              Portfolio
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
              Services
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
              FAQ
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
              About
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

export default NavBar;
