import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CaseHeatIsland = () => {
  return (
    <Container id="section1" sx={{ mt: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Case Study"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container>
        <Grid size={{ md: 2 }}></Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h3" sx={{ mt: 1, mb: 1, textAlign: "center" }}>
            Heat Islands
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
    </Container>
  );
};

export default CaseHeatIsland;
