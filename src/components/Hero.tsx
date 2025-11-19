import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <>
      <Container sx={{ mt: 15 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="h2">Complex data made simple.</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero;
