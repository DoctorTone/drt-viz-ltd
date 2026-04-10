import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Portfolio = () => {
  return (
    <Container id="section3" sx={{ mt: 10, mb: 6 }}>
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
        <Grid size={{ xs: 12, md: 4 }} sx={{ pr: 2 }}>
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
          <Box>
            <Typography variant="h6" sx={{ mt: 1, mb: 1, textAlign: "center" }}>
              Global lightning strikes
            </Typography>
            <Stack direction="row" spacing={1} mt={2} justifyContent="center">
              <Button
                variant="contained"
                color="warning"
                href="https://drt-software.com/LightningViz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View Demo
              </Button>
              <Button
                variant="outlined"
                color="warning"
                href="/case-studies/lightning-strikes"
              >
                Case Study
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ pr: 2 }}>
          <a
            href="https://www.drt-software.com/HeatIsland/"
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
              <source src="./videos/HeatIsland.mp4" type="video/mp4" />
            </video>
          </a>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
              Heat Islands
            </Typography>
            <Stack direction="row" spacing={1} mt={2} justifyContent="center">
              <Button
                variant="contained"
                color="warning"
                href="https://www.drt-software.com/HeatIsland/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View Demo
              </Button>
              <Button
                variant="outlined"
                color="warning"
                href="/case-studies/heat-islands"
              >
                Case Study
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ pr: 2 }}>
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
            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
              City pointcloud
            </Typography>
            <Button
              variant="contained"
              color="warning"
              href="https://drt-software.com/PointCloud/"
              target="_blank"
              rel="noreferrer noopener"
            >
              View Demo
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Button variant="outlined" color="warning" href="/dataviz">
          See further details
        </Button>
      </Box>
    </Container>
  );
};

export default Portfolio;
