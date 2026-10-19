import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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
            Landscape and visual assessment depends on static photomontages,
            single images, from fixed viewpoints.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <PhotoCameraIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            One image shows one viewpoint, at one moment. A fundamental limit.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <PhotoCameraIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Reviewers need to see the site across the whole development, not
            frozen at a single point.
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
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="caption" sx={{ color: "grey" }}>
              Photo from assessed viewpoint
            </Typography>
          </Box>
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
            An interactive 3D model of the same viewpoint, built on real LiDAR
            terrain from the application data.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Move through any year, from before construction to year ten, and
            watch the screening establish.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Toggle summer and winter to show the worst case, when the panels are
            most exposed.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <TipsAndUpdatesIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Navigate and explore freely beyond the fixed viewpoints.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}>
          <img src="/images/VP7NW_Built.jpg" className="borderedLight w-100" />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="caption" sx={{ color: "grey" }}>
              3D visualisation
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Challenge;
