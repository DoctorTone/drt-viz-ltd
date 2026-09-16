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
          <Typography variant="h6" sx={{ color: "grey" }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>Public Consultation:</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            Help residents to understand a proposal from familiar viewpoints,
            addressing concerns with an honest assessment.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>Examination and Scrutiny:</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            Gives authorities and inspectors an explorable, neutral reference,
            especially where visual impact may be disputed.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>Environmental Design:</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            Testing massing and screening before committing to costly verified
            photomontages.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            <AppsIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>Stakeholder Communication:</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            Create a shared, trusted view that all parties can visualiase and
            interrogate.
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
