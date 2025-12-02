import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const FullPortfolio = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Portfolio"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container>
        <Grid size={6}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Making complex data <span style={{ color: "orange" }}>simple</span>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FullPortfolio;
