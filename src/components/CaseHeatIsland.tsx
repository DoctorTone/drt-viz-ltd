import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CaseHeatIsland = () => {
  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Case Study"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Making complex data <span style={{ color: "orange" }}>simple</span>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CaseHeatIsland;
