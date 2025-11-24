import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <Container sx={{ mt: 10, mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="About"
        variant="outlined"
        color="warning"
      />
      <Grid container>
        <Grid size={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Meet DRT.
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6" color="grey">
            DRT Software was formed in 2015, with the aim of providing bespoke
            3D data visualisations.
          </Typography>
        </Grid>
        <Grid size={3}>
          <img src="./images/tony.jpg" className="w-100 profile" />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Dr Tony Glover
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center", color: "grey" }}>
            Founder
          </Typography>
        </Grid>
        <Grid size={1}></Grid>
        <Grid size={7}>
          <Typography variant="h6">Hi, I'm Tony.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
