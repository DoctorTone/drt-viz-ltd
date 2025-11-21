import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";

const Testimonials = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Testimonial"
        variant="outlined"
        color="warning"
      />
      <Typography variant="h5">What our clients say about us.</Typography>
      <Grid container>
        <Grid size={6}>5 stars</Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
