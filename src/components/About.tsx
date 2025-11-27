import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
      <Grid container sx={{ mb: 6 }}>
        <Grid size={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Meet <span style={{ color: "orange" }}>DRT</span>.
          </Typography>
          <Typography variant="h6" sx={{ color: "orange" }}>
            2015
          </Typography>
          <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
            Created to visualise.
          </Typography>
          <Typography variant="h6" color="grey">
            DRT Software was formed in 2015 with the aim of creating bespoke 3D
            data visualisations. Since then, we've collaborated with a wide
            range of clients across sectors including geospatial, climate,
            sports, medical, music, art and research. We've helped turn their
            complex data into clear and meaningful visuals.
          </Typography>
        </Grid>
        <Grid size={2.5}></Grid>
        <Grid size={3.5}>
          <img src="./images/3DBarChart.png" className="borderedLight w-100" />
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
        <Grid size={2}></Grid>
        <Grid
          size={7}
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "20px",
            backgroundColor: "black",
            padding: "25px",
          }}
        >
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
            Hi, I'm Tony.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            I'm a software developer with over 25 years of experience building
            interactive 3D applications, specialising in data visualisation and
            virtual reality. I help teams turn complex datasets and ideas into
            immersive, engaging experiences. I've partnered with industry,
            academia, startups, solopreneurs and organisations to create
            stunning real-world applications.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
