import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";

const Hero = () => {
  return (
    <Container sx={{ mt: 12 }}>
      <Chip
        icon={<BoltIcon />}
        label="Home"
        variant="outlined"
        color="warning"
      />
      <Grid container spacing={6} sx={{ display: "flex" }}>
        <Grid size={6}>
          <Typography variant="h2">
            Complex data made <span style={{ color: "orange" }}>simple</span>.
          </Typography>
          <Typography variant="h6">
            We can show your data in a whole new dimension.
          </Typography>
        </Grid>
        <Grid size={6} className="bordered">
          <video muted loop preload="auto" autoPlay className="w-100">
            <source src="./videos/PointCloud.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
