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

  const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (section: number) => {
    setAnchorEl(null);
    if (section < 0) return;

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#section" + section, offsetY: 100 },
    });
  };
  const open = Boolean(anchorEl);

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
      <Toolbar sx={{ display: { xs: "flex", md: "none" } }}>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <img src="./images/drtLogo.png" />
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="warning"
            edge="end"
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "#222", // dark grey
                  color: "white", // ensure text is readable
                  borderRadius: "10px",
                },
              },
            }}
            onClose={() => handleClose(-1)}
          >
            <MenuItem onClick={() => handleClose(1)}>Home</MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(2)}>
              Solutions
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(3)}>
              Portfolio
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(4)}>
              Services
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(5)}>
              FAQ
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(6)}>
              About
            </MenuItem>
            <MenuItem className="sectionMobile" onClick={() => handleClose(7)}>
              Contact
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <img src="./images/drtLogo.png" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            gap: 3,
            justifyContent: "center",
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
        <Box sx={{ flex: 1 }}></Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
