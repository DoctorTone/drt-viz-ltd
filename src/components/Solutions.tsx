import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import SettingsIcon from "@mui/icons-material/Settings";

const Solutions = () => {
  return (
    <Container sx={{ mt: 10, mb: 10 }}>
      <Chip
        icon={<BoltIcon />}
        label="Solutions"
        variant="outlined"
        color="warning"
      />
      <Typography variant="h2" sx={{ mb: 3 }}>
        Transform your <span style={{ color: "orange" }}>data</span>.
      </Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
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
              <SettingsIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Customer Insights</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Analyse customer interactioins
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
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
              <SettingsIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h4">Customer Insights</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Analyse customer interactioins
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
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
              <SettingsIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h4">Customer Insights</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Analyse customer interactioins
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Solutions;
