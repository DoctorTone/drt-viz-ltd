import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";

const Hero = () => {
  return (
    <Container id="section1" sx={{ mt: 12 }}>
      <Chip
        icon={<BoltIcon />}
        label="Home"
        color="warning"
        variant="outlined"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={6} sx={{ display: "flex" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" sx={{ mb: 12 }}>
            Complex data made <span style={{ color: "orange" }}>simple</span>.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            See your data in a whole new dimension.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Interactive 3D visualisations that bring your data to life.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <video muted loop preload="auto" autoPlay className="bordered w-90">
            <source src="./videos/Lightning.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
