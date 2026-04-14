import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RoofingIcon from "@mui/icons-material/Roofing";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import SpeedIcon from "@mui/icons-material/Speed";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <Container id="section1" sx={{ mt: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Case Study"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container sx={{ mb: 4 }}>
        <Grid size={{ md: 2 }}></Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
            London Urban Heat Islands
          </Typography>
          <video
            muted
            loop
            preload="auto"
            autoPlay
            className="borderedLight w-100"
          >
            <source src="/videos/HeatIsland.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ mt: 3, mb: 3 }}>
          The <span style={{ color: "orange" }}>Project</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
          This is an interactive 3D visualisation of London's urban heat
          patterns using satellite thermal imaging data and more than 27,000
          building footprints. It reveals the spatial relationships that inform
          climate adaptation and urban planning strategies.
        </Typography>
        <Typography variant="h6">
          <RoofingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          27,723 buildings visualised.
        </Typography>
        <Typography variant="h6">
          <ThermostatIcon
            color="warning"
            sx={{ verticalAlign: "sub", mr: 2 }}
          />
          Temperature range of 27.5°C to 44.6°C.
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          <SpeedIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          Optimal performance of 60 frames per second on desktop, tablet and
          mobile.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="https://www.drt-software.com/HeatIsland/"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Demo
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
