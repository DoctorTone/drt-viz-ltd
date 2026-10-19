import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
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
          <Typography
            variant="h3"
            sx={{ mb: 3, textAlign: "center", color: "orange" }}
          >
            Solar Farm Visualisation
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            An interactive 3D model that shows a real solar farm from its
            assessed viewpoints at any point across ten years of screening
            growth, in summer or winter, explorable in any browser.
          </Typography>
          <video
            muted
            loop
            preload="auto"
            autoPlay
            className="borderedLight w-100"
          >
            <source src="/videos/Springwell.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ mt: 3, mb: 3 }}>
          The <span style={{ color: "orange" }}>Project</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
          Springwell is an interactive 3D visualisation of Springwell Solar
          Farm, a real solar development in Lincolnshire (DCO ref EN010149). It
          reconstructs the scheme on accurate terrain from the application’s own
          data, and lets anyone see how the development and its screening
          planting change over the first ten years.
        </Typography>
        <Typography variant="h6">
          <VisibilityIcon
            color="warning"
            sx={{ verticalAlign: "sub", mr: 2 }}
          />
          Reproduces the assessment’s surveyed viewpoints on real LiDAR terrain,
          to scale.
        </Typography>
        <Typography variant="h6">
          <AccessTimeIcon
            color="warning"
            sx={{ verticalAlign: "sub", mr: 2 }}
          />
          A continuous ten-year timeline, from before construction, through
          as-built, to mature screening.
        </Typography>
        <Typography variant="h6">
          <CloudySnowingIcon
            color="warning"
            sx={{ verticalAlign: "sub", mr: 2 }}
          />
          Summer or winter at any point, so the worst case for screening is
          always available.
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          <SpeedIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          Runs in any browser, on desktop, tablet or phone. No install or
          specialist hardware.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="https://www.drt-software.com/SolarViz/"
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
