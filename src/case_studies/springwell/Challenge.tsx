import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Photomontages - Static{" "}
            <span style={{ color: "orange" }}>images</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <PhotoCameraIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Landscape and visual assessments depend heavily on single images
            taken from fixed viewpoints.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <PhotoCameraIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            A static image can only show one viewpoint at a specific time, which
            is a fundamental limitation.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <PhotoCameraIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Reviewers want to see the site at various times throughout the
            development.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <PhotoCameraIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Screening is also seasonal; there may be marked differences between
            summer foliage and a bare winter hedge.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <img src="/images/VP7_NW.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Interactive 3D{" "}
            <span style={{ color: "orange" }}>Visualisation</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            I built an interactive 3D visualisation that shows the site from the
            same surveyed viewpoints that the assessment uses.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Users can view the site at any time over a ten year period,
            including prior to any development starting, to watch the screening
            establish.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            The current season can be toggled between summer and winter,
            demonstrating the worst-case visual impact where the solar panels
            are most visible.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}>
          <img src="/images/VP7NW_Built.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Challenge;
