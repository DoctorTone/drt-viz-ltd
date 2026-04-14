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
            Dense low-rise areas trap more heat
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <SunnyIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Tightly packed two and three story buildings show temperatures that
            are 4-6°C higher than areas with taller, spaced buildings.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <SunnyIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Narrow streets reduce air circulation and trap heat.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <SunnyIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <span style={{ color: "orange" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Urban densification needs to balance height and spacing to
            maintain airflow.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/trap.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/cooling.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Parks Create Cooling Zones
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AcUnitIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Green spaces reduce surrounding temperatures by up to 3°C within 200
            meters, creating measurably cooler areas.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AcUnitIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <i>
              Note: Parks, green spaces and water areas appear as gaps in the
              data, but the cooling effect is still in surrounding buildings.
            </i>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <span style={{ color: "orange" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Strategic park/water placement can create cooling networks across
            vulnerable neighborhoods.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Industrial zones are hottest
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
            : Building design should incentivise reflective roofing materials in
            industrial zones.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/hottest.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/coolest.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Tall buildings are cooler than expected
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
