import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const NavBar = () => {
  return (
    <Container>
      <Box component="div">
        <AppBar
          className="sticky"
          elevation={0}
          sx={{
            padding: "5px",
            backgroundColor: "#2b2b2b",
            borderRadius: "10px",
            color: "#fff",
            width: { xs: "90%", sm: "70%", md: "90%", lg: "75%" },
            left: { xs: "5%", sm: "17.5%", md: "5%", lg: "12.5%" },
          }}
        >
          <Toolbar>
            <Box component="div" sx={{ display: "flex" }}>
              <img src="./images/drtLogo.png" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default NavBar;
