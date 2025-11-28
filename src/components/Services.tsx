import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import GroupsIcon from "@mui/icons-material/Groups";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Services = () => {
  return (
    <Container id="section4" sx={{ mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Services"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={6}>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Our <span style={{ color: "orange" }}>expertise</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 8 }}>
        <Grid size={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            3D Data Visualisation
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <LeaderboardIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            We help organisations turn complex, multi-dimensional data into
            interactive 3D experiences people can explore and understand.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <LeaderboardIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Whether it's live real-world data, scientific results, geospatial
            models, or historical trends, we build visualisations that reveal
            patterns, support decisions, and elevate communication.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <Button variant="contained" color="warning">
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={4}>
          <img src="./images/3dData.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 8 }}>
        <Grid size={4}>
          <img src="./images/VRDev.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Virtual Reality Development
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HomeMaxIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            We design and build immersive VR experiences. This can extend data
            visualisations to enhance spatial relationships and hands-on
            interaction. Visualisations aren't confined to the browser, you can
            truly step into your data.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <HomeMaxIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Broader experiences include interactive training, product demos,
            architectural walkthroughs, and interactive educational content.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <Button variant="contained" color="warning">
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 4 }}>
        <Grid size={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Consultancy
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <GroupsIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Stuck on direction, tools, or technical details? I provide
            independent guidance on architecture, tooling, and delivery for
            interactive 3D.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <GroupsIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            We can help you make the right choices across 3D data visualisation
            and general 3D/VR. We'll clarify goals, pick the right tech, and map
            a practical path to a working prototype or production app.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <Button variant="contained" color="warning">
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={4}>
          <img src="./images/3D.png" className="borderedLight w-100" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
