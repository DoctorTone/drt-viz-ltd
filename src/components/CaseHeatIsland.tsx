import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SunnyIcon from "@mui/icons-material/Sunny";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RoofingIcon from "@mui/icons-material/Roofing";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import SpeedIcon from "@mui/icons-material/Speed";
import HikingIcon from "@mui/icons-material/Hiking";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import PermMediaIcon from "@mui/icons-material/PermMedia";

const CaseHeatIsland = () => {
  const DataCard = styled(Card)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "10px",
    height: "100%",
  });

  const DataAccordion = styled(Accordion)({
    background: "#0a0401",
    color: "white",
    marginBottom: "3%",
    "&:first-of-type": { borderRadius: "15px" },
    "&:last-of-type": { borderRadius: "15px" },
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
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Urban heat islands raise city temperatures by 5-10°C, increasing
            energy costs and heat-related health risks.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Traditional 2D maps show hotspots but can't reveal why certain areas
            are hotter?
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HikingIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Is it building density, height or the type of materials used? Or
            could it be a lack of green space?
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
            The Solution
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            We built an interactive 3D visualisation combining Landsat 9 thermal
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
            App is available on desktop, tablet and mobile.
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
            meters, creating measurable cooler areas.
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
            : Building design should incentivise or promote reflective roofing
            materials in industrial zones.
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
      <Chip
        icon={<BoltIcon />}
        label="Benefits"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Typography variant="h2" sx={{ mb: 3 }}>
        Who <span style={{ color: "orange" }}>benefits?</span>
      </Typography>
      <Typography variant="h6" sx={{ color: "grey", mb: 4 }}>
        See how 3D data visualisation can benefit the wider community.
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Urban Planning</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                3D visualisations can identify areas or neighborhoods that
                require cooling interventions. This can inform priorisation of
                infrastructure investments based on heat vulnerability.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Building Development</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Policy makers can gain valuable insights from the data to inform
                site selection for new projects. This can then inform material
                and design choices to minimise heat island contribution.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Climate/Health Research</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Wider health concerns due to heat issues can be communicated to
                policymakers. The impact of any proposed interventions can be
                visualised before implementation.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
      </Grid>
      <Chip
        icon={<BoltIcon />}
        label="Technical"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <DataAccordion
        slotProps={{
          transition: {
            unmountOnExit: true,
            timeout: 500,
            appear: true,
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownwardIcon color="warning" />}>
          <Typography variant="h3">Technical Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Data Processing
          </Typography>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DataCard variant="outlined">
                <CardContent>
                  <DescriptionIcon
                    color="warning"
                    sx={{ mb: 5 }}
                    fontSize="large"
                  />
                  <Typography variant="h5">Satellite Imagery</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Landsat 9 thermal infrared band at 100m resolution" />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Capture date: 30th July 2024" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Source: USGS EarthExplorer" />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DataCard variant="outlined">
                <CardContent>
                  <DescriptionIcon
                    color="warning"
                    sx={{ mb: 5 }}
                    fontSize="large"
                  />
                  <Typography variant="h5">Building Data</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="OpenStreetMap footprints generating 27,723 buildings" />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Height attribute and building types" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Source: Overpass Turbo API" />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DataCard variant="outlined">
                <CardContent>
                  <DescriptionIcon
                    color="warning"
                    sx={{ mb: 5 }}
                    fontSize="large"
                  />
                  <Typography variant="h5">Pipeline</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Python pre-procesing using rasterio, geopandas, pyproj" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Coordinate transformation from WGS84 -> UTM 30N" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Temperature sampling within building footprints" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Generates optimised JSON output" />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
          </Grid>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Visualisation Stack
          </Typography>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DataCard variant="outlined">
                <CardContent>
                  <PermMediaIcon
                    color="warning"
                    sx={{ mb: 5 }}
                    fontSize="large"
                  />
                  <Typography variant="h5">Framework</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="React Three Fiber and Three.js" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Material UI for interface" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Python for data pre-processing" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="GSAP library for camera animations" />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DataCard variant="outlined">
                <CardContent>
                  <PermMediaIcon
                    color="warning"
                    sx={{ mb: 5 }}
                    fontSize="large"
                  />
                  <Typography variant="h5">Rendering</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Instanced geometry rendering 27K buildings with single draw call" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Four zone temperature <-> colour mapping - blue/green/yellow/red" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Orbit controls with smooth damping" />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DataCard variant="outlined">
                <CardContent>
                  <PermMediaIcon
                    color="warning"
                    sx={{ mb: 5 }}
                    fontSize="large"
                  />
                  <Typography variant="h5">Performance</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="60 frames per second on desktop/tablet/mobile" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Asynchronous data loading with progress indicator" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Responsive layouts for mobile" />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
          </Grid>
        </AccordionDetails>
      </DataAccordion>
    </Container>
  );
};

export default CaseHeatIsland;
