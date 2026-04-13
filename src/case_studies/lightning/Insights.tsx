import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Insights = () => {
  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Insights"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Key <span style={{ color: "orange" }}>insights</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Equatorial Regions Show Highest Activity
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Tropical zones show dramatically higher strike concentrations than
            temperate or polar regions.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Central Africa, northern South America, and Southeast Asia display
            the most intense activity patterns throughout the year.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Climate models must account for higher atmospheric electrical
            activity near the equator.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <span style={{ color: "orange" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Infrastructure in tropical regions requires enhanced lightning
            protection.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/equator.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/seasons.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Seasonal Patterns Follow Hemisperic Heating
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AcUnitIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Strike patterns shift noticeably between months as solar heating
            moves between hemispheres.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AcUnitIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Activity concentrations move with the summer months in each
            hemisphere - north in the northern summer and south in the southern
            summer.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <span style={{ color: "orange" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Seasonal lightning risk assessment is crucial for industries such
            as aviation, construction scheduling, and outdoor activities.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Land Masses Show Far Greater Activity Than Oceans
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <SunnyIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Warehouses show surface temperatures that are 8°C above residential
            averages due to large flat roofs with dark materials.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <SunnyIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <span style={{ color: "orange" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Building design should incentivise or promote reflective roofing
            materials in industrial zones.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/oceans.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/tropical.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Activity Patterns Remain Consistent Within Tropical Zones
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AcUnitIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Modern tall buildings with reflective materials appear cooler due to
            less roof area per floor and rooftop cooling systems lowering the
            surface temperature.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <AcUnitIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <span style={{ color: "orange" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Building materials are just as significant as building height.
            Retrofitting older buildings with reflective coatings where possible
            could reduce temperatures significantly.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Insights;
