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
          <Typography variant="h4" sx={{ mb: 3 }}>
            Improved decision making
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "grey" }}>
            Using 3D can reveal hidden insighst into your data.
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              <LeaderboardIcon color="warning" /> Reveal new trends and
              patterns.
            </Typography>
            <Typography variant="h6" color="grey">
              Our advanced viz tools make complex data simple.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              <LeaderboardIcon color="warning" /> Reveal new trends and
              patterns.
            </Typography>
            <Typography variant="h6" color="grey">
              Our advanced viz tools make complex data simple.
            </Typography>
          </Box>
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={4}>
          <img src="./images/3dData.jpg" className="w-100" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
