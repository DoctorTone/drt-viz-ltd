import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";

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
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>
              Urban Planning & Climate Adaptation:
            </span>{" "}
            Identify heat-vulnerable neighborhoods requiring cooling
            interventions. Prioritise green infrastructure investments based on
            temperature impact.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>
              Real Estate & Development:
            </span>{" "}
            Site selection for residential and commercial projects considering
            thermal environment. Material and design choices to minimize heat
            island contribution.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>Climate Research:</span> Research
            findings to policymakers and general public. Visualise projected
            impacts of climate change scenarios on urban temperatures.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>
              Infrastructure Planning:
            </span>{" "}
            Assess heat stress on transportation networks, power grids, and
            water systems during extreme heat events. Plan resilient
            infrastructure that accounts for thermal patterns.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/prisms.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Applications;
