import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BoltIcon from "@mui/icons-material/Bolt";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const Partners = () => {
  const Logo = styled("img")({
    border: "1px solid white",
    borderRadius: "5px",
    padding: "5%",
  });

  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Partners"
        variant="outlined"
        color="warning"
        sx={{ mb: 3 }}
      />
      <Grid container spacing={0} sx={{ mb: 4 }}>
        <Grid size={7}>
          <Typography variant="h3">Some of our collaborations.</Typography>
        </Grid>
        <Grid size={5}></Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={2}></Grid>
        <Grid size={2}>
          <Logo src="./images/logo_uon.png" className="w-100" />
        </Grid>
        <Grid size={2}>
          <Logo src="./images/NHS_Logo.png" className="w-100" />
        </Grid>
        <Grid size={2}>
          <Logo src="./images/logo_nihr.png" className="w-100" />
        </Grid>
        <Grid size={2}>
          <Logo src="./images/logo_imh2.png" className="w-100" />
        </Grid>
        <Grid size={2}></Grid>
      </Grid>
    </Container>
  );
};

export default Partners;
