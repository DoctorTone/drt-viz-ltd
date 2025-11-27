import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            What our clients say about{" "}
            <span style={{ color: "orange" }}>us</span>.
          </Typography>
        </Grid>
        <Grid size={6}></Grid>
        <Grid size={6}>
          <Card
            variant="outlined"
            sx={{
              background: "black",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <Typography variant="h6" sx={{ mb: 3 }} color="grey">
                "I have worked with Tony for a number of years developing a VR
                platform. His skill level and expertise is second to none and he
                is the upmost professional with business interactions and the
                process of solving problems. Always a gentleman and a pleasure
                to work with, I genuinely enjoy working with Tony and always
                look forward to our projects together."
              </Typography>
              <Typography variant="h6">Eric, ArtXR</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card
            variant="outlined"
            sx={{
              background: "black",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <Typography variant="h6" sx={{ mb: 3 }} color="grey">
                "I've worked with Tony for many years, but our most recent
                project was a web application that was used to successfully
                deliver three clinical trials. Tony's work was robust enough to
                be accredited by a clinical trials unit, which is a success in
                itself, and he worked flexibly and responsibly with a graphic
                design to produce a web application that was highly usable for
                people with disabilities. Thoroughly recommended."
              </Typography>
              <Typography variant="h6">
                Stefan, Nottingham University
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
