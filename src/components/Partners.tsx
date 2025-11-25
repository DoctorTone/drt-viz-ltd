import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BoltIcon from "@mui/icons-material/Bolt";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const IMG_WIDTH = 1.5;
const Partners = () => {
  const Logo = styled("img")({
    padding: "25%",
  });

  return (
    <Container sx={{ mb: 6 }}>
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
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center", padding: "0%" }}
      >
        <Grid size={IMG_WIDTH}>
          <img src="./images/logo_uon_dark.png" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img src="./images/NHS_Logo_bigger.png" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img src="./images/logo_nihr.png" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img src="./images/logo_imh2.png" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img src="./images/ThrillLab.jpg" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img src="./images/artxr_full.png" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img src="./images/iosh.png" className="w-100" />
        </Grid>
        <Grid size={IMG_WIDTH}>
          <img
            src="./images/loughborough_logo_black_white.png"
            className="w-100"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Partners;
