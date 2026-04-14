import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HikingIcon from "@mui/icons-material/Hiking";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const Challenge = () => {
  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Challenge"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            The <span style={{ color: "orange" }}>Challenge</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Two-dimensional <span style={{ color: "orange" }}>maps</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Urban heat islands raise city temperatures by 5-10°C, increasing
            energy costs and heat-related health risks.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Traditional 2D maps show hotspots but can't reveal why certain areas
            are hotter.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Is it building density? Height? Materials used? Or could it be a
            lack of green space?
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Urban planners and climate researchers need to understand
            spatial-thermal relationships to target interventions effectively.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img
            src="/images/thermal_preview.jpg"
            className="borderedLight w-100"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/solution.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            3D <span style={{ color: "orange" }}>Visualisation</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            I built an interactive 3D visualisation combining Landsat 9 thermal
            satellite data with OpenStreetMap building footprints.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Users can explore 27,723 buildings across central London,
            color-coded by surface temperature, and fly between preset
            viewpoints that highlight key areas.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            <span style={{ color: "orange" }}>Features:</span> Users can explore
            more than 27,000 buildings across central London, colour-coded by
            surface temperature, with smooth camera transitions between preset
            viewpoints, highlighting key insights.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Challenge;
