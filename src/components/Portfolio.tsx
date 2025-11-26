import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Portfolio = () => {
  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <Chip
        icon={<BoltIcon />}
        label="Portfolio"
        variant="outlined"
        color="warning"
      />
      <Typography variant="h2" sx={{ mb: 3 }}>
        Visual <span style={{ color: "orange" }}>Solutions</span>.
      </Typography>
      <Grid container spacing={6}>
        <Grid size={4} className="borderedLight">
          <video muted loop preload="auto" autoPlay className="w-100">
            <source src="./videos/PointCloud.mp4" type="video/mp4" />
          </video>
        </Grid>
        <Grid size={4} className="borderedLight">
          <video muted loop preload="auto" autoPlay className="w-100">
            <source src="./videos/PointCloud.mp4" type="video/mp4" />
          </video>
        </Grid>
        <Grid size={4} className="borderedLight">
          <video muted loop preload="auto" autoPlay className="w-100">
            <source src="./videos/PointCloud.mp4" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
