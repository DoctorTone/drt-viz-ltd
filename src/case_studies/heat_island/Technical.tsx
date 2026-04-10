import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DescriptionIcon from "@mui/icons-material/Description";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { styled } from "@mui/material/styles";

const Technical = () => {
  const DataAccordion = styled(Accordion)({
    background: "#0a0401",
    color: "white",
    marginBottom: "3%",
    "&:first-of-type": { borderRadius: "15px" },
    "&:last-of-type": { borderRadius: "15px" },
  });

  const DataCard = styled(Card)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "10px",
    height: "100%",
  });

  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Technical"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Typography variant="h3" sx={{ mb: 3 }}>
        Technical <span style={{ color: "orange" }}>implementation</span>
      </Typography>
      <DataAccordion
        sx={{ mb: 0 }}
        slotProps={{
          transition: {
            unmountOnExit: true,
            timeout: 500,
            appear: true,
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownwardIcon color="warning" />}>
          <Typography variant="h4">Data Processing</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pb: 0 }}>
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
        </AccordionDetails>
      </DataAccordion>
      <DataAccordion
        sx={{ mb: 0 }}
        slotProps={{
          transition: {
            unmountOnExit: true,
            timeout: 500,
            appear: true,
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownwardIcon color="warning" />}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Visualisation Stack
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="React Three Fiber and Three.js" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Material UI for interface" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Python for data pre-processing" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
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

export default Technical;
