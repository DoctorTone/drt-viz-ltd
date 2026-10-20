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
import SunnyIcon from "@mui/icons-material/Sunny";
import { styled } from "@mui/material/styles";

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

const Technical = () => {
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
                  <Typography variant="h5">The Terrain</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Environment Agency LIDAR Composite DTM at 2m resolution, from 2022." />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Converted to a compact heightfield, a binary grid sampled at runtime, at 10m resolution across the full 10km site." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Georeferenced to the British National Grid, so ground height is correct at every point." />
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
                  <Typography variant="h5">The Scheme</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Viewpoints placed at their surveyed coordinates; panel specifications taken from the application documents." />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Panels filled to the consented parcel envelopes, exact positions not fixed at application stage." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Existing vegetation and proposed planting captured separately, each with its own growth curve." />
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
                  <Typography variant="h5">The Imagery</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Licensed MapTiler satellite imagery, a full-site base with a high-resolution inset over the viewpoints." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Reprojected from Web Mercator to the National Grid and clipped to the exact terrain extent, with no drift over 10km." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Draped onto the terrain as a texture that registers precisely with the LiDAR." />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
          </Grid>
        </AccordionDetails>
      </DataAccordion>
      <DataAccordion
        sx={{ mb: 3 }}
        slotProps={{
          transition: {
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
                  <Typography variant="h5">Engine</Typography>
                  <List sx={{ color: "grey" }}>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Built in React Three Fiber and Three.js, in TypeScript." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="A single shared state drives year, season, viewpoint and what's visible." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Runs entirely in the browser, no plugins, no installs and no specialist hardware." />
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
                      <ListItemText primary="Instanced rendering: hedgerows, trees and panels share geometry, so a full terrain is a handful of draw calls rather than thousands." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Renders at 60fps on desktop, tablet and mobile." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48, mb: 1 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Device-aware fallbacks and WebGL context-loss handling for lower-end hardware." />
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
                      <ListItemText primary="A continuous ten-year timeline and a summer/winter toggle, both driven live from the shared state." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Existing and proposed planting established on separate curves across the decade." />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: 48 }}>
                        <CheckCircleIcon color="warning" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary="Custom shader work blends the high-resolution aerial inset onto the terrain and keeps lighting consistent across the scene." />
                    </ListItem>
                  </List>
                </CardContent>
              </DataCard>
            </Grid>
          </Grid>
        </AccordionDetails>
      </DataAccordion>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 0, sm: 2 }}></Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <SunnyIcon color="warning" sx={{ verticalAlign: "sub", mr: 1 }} />
            <span style={{ color: "orange" }}>Outcome:</span> The result is a
            single interactive model that does what a folder of static
            photomontages can't; showing Springwell from its assessed viewpoints
            at any point across ten years, in either season, on any device. The
            assessment itself, made explorable: honest about the worst case,
            clear about the screened outcome, and open to anyone who needs to
            understand it.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Technical;
