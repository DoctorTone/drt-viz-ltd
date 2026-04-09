import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import RoofingIcon from "@mui/icons-material/Roofing";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import SpeedIcon from "@mui/icons-material/Speed";
import { styled } from "@mui/material/styles";

const CaseHeatIsland = () => {
  const DataCard = styled(Card)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "10px",
    height: "100%",
  });

  return (
    <Container id="section1" sx={{ mt: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Case Study"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container sx={{ mb: 4 }}>
        <Grid size={{ md: 2 }}></Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
            London Urban Heat Islands
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
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mt: 3, mb: 3 }}>
          The <span style={{ color: "orange" }}>Project</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
          This is an interactive 3D visualisation of London's urban heat
          patterns using satellite thermal imaging data and more than 27,000
          building footprints. It reveals the spatial relationships that inform
          climate adaptation and urban planning strategies.
        </Typography>
        <Typography variant="h6">
          <RoofingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          27,723 buildings visualised.
        </Typography>
        <Typography variant="h6">
          <ThermostatIcon
            color="warning"
            sx={{ verticalAlign: "sub", mr: 2 }}
          />
          Temperatrure range of 27.5°C to 44.6°C.
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          <SpeedIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
          Optimal performance of 60 frames per second on desktop, tablet and
          mobile.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="https://www.drt-software.com/HeatIsland/"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Demo
        </Button>
      </Box>
      <Chip
        icon={<BoltIcon />}
        label="Challenge"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            The Challenge
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            <LeaderboardIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Urban heat islands raise city temperatures by 5-10°C, increasing
            energy costs and heat-related health risks. Traditional 2D maps show
            hotspots but can't reveal WHY certain areas are hotter—is it
            building density? Height? Materials? Lack of green space?
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
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
            The Solution
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Urban heat islands raise city temperatures by 5-10°C, increasing
            energy costs and heat-related health risks. Traditional 2D maps show
            hotspots but can't reveal WHY certain areas are hotter—is it
            building density? Height? Materials? Lack of green space?
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            Urban planners and climate researchers need to understand
            spatial-thermal relationships to target interventions effectively.
          </Typography>
        </Grid>
      </Grid>
      <Chip
        icon={<BoltIcon />}
        label="Insights"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h2" sx={{ mb: 5 }}>
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
            Tightly packed two and three story buildings show temperatures that
            are 4-6°C higher than areas with taller, spaced buildings.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            Narrow streets reduce air circulation and trap heat.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <span style={{ color: "white" }}>
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
        <Grid size={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Parks Create Cooling Zones
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Green spaces reduce surrounding temperatures by up to 3°C within 200
            meters, creating measurable cooling zones.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Note: Dark areas in map denote low-temperature regions of parkland
            or water.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <span style={{ color: "white" }}>
              <strong>Impact</strong>
            </span>{" "}
            : Strategic park placement can create cooling networks across
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
            Warehouses show surface temperatures that are 8°C above residential
            averages due to large flat roofs with dark materials.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <span style={{ color: "white" }}>
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
        <Grid size={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Tall buildings are cooler than expected
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Modern tall buildings with reflective materials appear cooler due to
            less roof area per floor and rooftop cooling systems lowering the
            surface temperature.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <span style={{ color: "white" }}>
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

export default CaseHeatIsland;
