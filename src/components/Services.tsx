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
import gsap from "gsap";

const Services = () => {
  const animate = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#section7", offsetY: 100 },
    });
  };

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
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Our <span style={{ color: "orange" }}>expertise</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            3D Data Visualisation
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <LeaderboardIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            We help organisations turn complex geospatial and environmental data
            into interactive 3D experiences people can explore and understand.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <LeaderboardIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Whether it's live real-world data, environmental sensors, climate
            models, or infrastructure knowledge, we build visualisations that
            reveal patterns, support decisions, and elevate communication.
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", mb: { xs: 4, md: 0 } }}
          >
            <EmailIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <Button variant="contained" color="warning" onClick={animate}>
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="./images/globe.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="./images/VRDev.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
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
            Broader experiences include immersive walkthroughs providing
            improved realism and situational awareness.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <Button variant="contained" color="warning" onClick={animate}>
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Consultancy
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <GroupsIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Not sure which approach will work best for your spatial data? Need
            help on choosing the right visualisation framework?
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <GroupsIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            We can help you choose the correct technology platform, budget
            feasibility, optimisation and integration strategy.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <GroupsIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Whether you're a research team prototyping a visualisation,
            evaluating vendors or scoping a client project, we'll help you make
            informed technical decisions.
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", mb: { xs: 4, md: 0 } }}
          >
            <EmailIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            <Button variant="contained" color="warning" onClick={animate}>
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="./images/3D.png" className="borderedLight w-100" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
