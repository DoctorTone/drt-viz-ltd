import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Portfolio = () => {
  return (
    <Container sx={{ mt: 10, mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="Portfolio"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Typography variant="h2" sx={{ mb: 3 }}>
        Visual <span style={{ color: "orange" }}>Solutions</span>.
      </Typography>
      <Grid container spacing={6}>
        <Grid size={4} className="">
          <a
            href="https://drt-software.com/LightningViz/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video
              muted
              loop
              preload="auto"
              autoPlay
              className="borderedLight w-100"
            >
              <source src="./videos/Lightning.mp4" type="video/mp4" />
            </video>
          </a>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Global lightning strikes
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "grey" }}>
              Geospatial
            </Typography>
            <Button
              variant="contained"
              color="warning"
              href="https://drt-software.com/LightningViz/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See Demo
            </Button>
          </Box>
        </Grid>
        <Grid size={4} className="">
          <a
            href="https://www.drt-software.com/SleepViz/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video
              muted
              loop
              preload="auto"
              autoPlay
              className="borderedLight w-100"
            >
              <source src="./videos/Sleep.mp4" type="video/mp4" />
            </video>
          </a>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Sleep analysis
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "grey" }}>
              Multi-dimensional
            </Typography>
            <Button
              variant="contained"
              color="warning"
              href="https://www.drt-software.com/SleepViz/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See Demo
            </Button>
          </Box>
        </Grid>
        <Grid size={4} className="">
          <a
            href="https://drt-software.com/PointCloud/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <video
              muted
              loop
              preload="auto"
              autoPlay
              className="borderedLight w-100"
            >
              <source src="./videos/PointCloud.mp4" type="video/mp4" />
            </video>
          </a>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              City map
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "grey" }}>
              Pointcloud
            </Typography>
            <Button
              variant="contained"
              color="warning"
              href="https://drt-software.com/PointCloud/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See Demo
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Button variant="outlined" color="warning">
          See Our Range of Demos
        </Button>
      </Box>
    </Container>
  );
};

export default Portfolio;
