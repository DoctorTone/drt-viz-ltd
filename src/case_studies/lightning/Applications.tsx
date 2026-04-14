import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Applications = () => {
  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Applications"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Application <span style={{ color: "orange" }}>Areas</span>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Applications;
