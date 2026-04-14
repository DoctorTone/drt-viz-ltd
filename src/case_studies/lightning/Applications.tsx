import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Applications = () => {
  return (
    <Container sx={{ mb: 6 }}>
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
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            Climate Research: Track atmospheric electrical activity patterns and
            correlations with climate phenomena.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            Risk Assessment: Model lightning probability for infrastructure
            planning and insurance underwriting.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            Aviation Safety: Seasonal route planning and storm avoidance
            systems.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            Power Grid Management: Predict seasonal outage risk and plan
            protection investments.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Applications;
