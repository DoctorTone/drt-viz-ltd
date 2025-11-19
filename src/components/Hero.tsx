import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <Container sx={{ mt: 20 }} maxWidth="xl">
      <Grid
        container
        spacing={6}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid size={6}>
          <Typography variant="h3">
            Complex data made <span style={{ color: "orange" }}>simple</span>.
          </Typography>
        </Grid>
        <Grid size={6}>
          <video muted loop preload="auto" autoPlay className="w-100">
            <source src="./videos/PointCloud.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
