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
        sx={{ mb: 2 }}
      />
      <Grid container sx={{ mb: 4 }}>
        <Grid size={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Meet <span style={{ color: "orange" }}>DRT</span>.
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6" color="grey">
            DRT Software was formed in 2015, with the aim of providing bespoke
            3D data visualisations. Since then we've worked with a host of
            amazing people and companies in creating all sorts of visualisations
            and virtual reality applications.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
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
          <Typography variant="h6" sx={{ mt: 2 }}>
            Hi, I'm Tony.<br></br> I'm a software developer with over 25 years
            of experience building interactive 3D applications, specialising in
            data visualisation and virtual reality. I help teams turn complex
            datasets and ideas into immersive, engaging experiences. I've
            partnered with industry, academia, startups, solopreneurs and
            organisations to create stunning real-world applications.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
