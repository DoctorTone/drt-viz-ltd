import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            What our clients say about us.
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
                Tony was great...
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
                Tony was great...
              </Typography>
              <Typography variant="h6">Eric, ArtXR</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
