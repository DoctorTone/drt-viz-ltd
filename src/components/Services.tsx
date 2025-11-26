import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Box from "@mui/material/Box";

const Services = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Services"
        variant="outlined"
        color="warning"
      />
      <Grid container spacing={0} sx={{ mt: 3 }}>
        <Grid size={6}>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Our <span style={{ color: "orange" }}>expertise</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            3D Data Visualisation
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <LeaderboardIcon color="warning" /> We help organisations turn
            complex, multi-dimensional data into interactive 3D experiences
            people can explore and understand.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <LeaderboardIcon color="warning" /> Whether it's live real-world
            data, scientific results, geospatial models, or historical trends,
            we build visualisations that reveal patterns, support decisions, and
            elevate communication.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 1 }}>
            <LeaderboardIcon color="warning" /> Data does not have to be flat
            anymore.
          </Typography>
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={4}>
          <img src="./images/3dData.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
