import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MapIcon from "@mui/icons-material/Map";
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
            Gloabal Lightning Strikes
          </Typography>
          <video
            muted
            loop
            preload="auto"
            autoPlay
            className="borderedLight w-100"
          >
            <source src="/videos/Lightning.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ mt: 3, mb: 3 }}>
          The <span style={{ color: "orange" }}>Project</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
          This is a 3D visualisation of the thousands of lightning strikes
          occuring across the planet for a whole year. It uses the NASA Blue
          Marble and Earth Data datasets to show a dynamic representation of the
          Earth's electrical activity.
        </Typography>
        <Typography variant="h6">
          <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          1000's of global strikes visualised.
        </Typography>
        <Typography variant="h6">
          <MapIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          Built as part of the 30 Day Map Challenge within the Energy and Light
          theme.
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          <SpeedIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          Optimal performance of 60 frames per second on desktop, tablet and
          mobile.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="https://drt-software.com/LightningViz/"
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
