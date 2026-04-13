import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const Challenge = () => {
  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Challenge"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            The <span style={{ color: "orange" }}>Challenge</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Global Scale Temporal and Spacial{" "}
            <span style={{ color: "orange" }}>Distribution</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            There are thousands of lighning strikes daily across the globe, but
            their spatial/temporal patterns are difficult to visualise.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Traditional static maps cannot reveal the dynamic nature of seasonal
            or regional variations in lightning data.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />A
            3D visualiation enables teams to understand where lightning
            concentrates, how the seasonal patterns emerge and why certain
            regions experience higher strike density.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <BoltIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            This can then inform climate researchers, meteorologists and risk
            assessment teams to model climate patterns and assess infrastructure
            risk.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/lightning.jpg" className="borderedLight w-100" />
          <Typography
            variant="body2"
            className="links"
            sx={{ color: "grey", textAlign: "center", mt: 1 }}
          >
            Photo by{" "}
            <a href="https://unsplash.com/@smcauliffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Sean McAuliffe
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/lightning-struck-on-city-at-night-time-vmvlzJz1lHg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/globe.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            3D Globe <span style={{ color: "orange" }}>Visualisation</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            We built an interactive 3D globe visualisation combining NASA Blue
            Marble imagery with NASA Earth Observatory lightning strike data.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            The visualisation renders monthly lightning density over a full
            year, animating the strikes as flashing points that fade away over
            time.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            App is available on desktop, tablet and mobile.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Challenge;
