import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import InsightsIcon from "@mui/icons-material/Insights";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ScaleIcon from "@mui/icons-material/Scale";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { styled } from "@mui/material/styles";

const Solutions = () => {
  const DataCard = styled(Card)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "10px",
    height: "100%",
  });

  return (
    <Container id="section2" sx={{ mt: 10, mb: 10 }}>
      <Chip
        icon={<BoltIcon />}
        label="Solutions"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Typography variant="h2">
        Transform your <span style={{ color: "orange" }}>data</span>.
      </Typography>
      <Typography variant="h6" sx={{ color: "grey", mb: 4 }}>
        See the advantages of visualising in three dimensions.
      </Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          <DataCard variant="outlined">
            <CardContent>
              <InsightsIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Deeper Insights</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                The additional space allows patterns, trends and relationships
                to be identified with greater clarity and ease.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={4}>
          <DataCard variant="outlined">
            <CardContent>
              <BarChartIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Data Complexity</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Complex, real-world, multi-dimensional data may be displayed and
                analysed. Identify how the data changes across space and time.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={4}>
          <DataCard variant="outlined">
            <CardContent>
              <PsychologyIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Engagement</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Interactive 3D content makes data easier to understand and
                remember. For both a technical and non-technical audience.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={4}>
          <DataCard variant="outlined">
            <CardContent>
              <ScaleIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Decision Making</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Insights that are clear and easy to interpret lead to quicker
                decision making. Ultimately saving time and money.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={4}>
          <DataCard variant="outlined">
            <CardContent>
              <LightbulbIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Innovation</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                3D environments can reveal information that traditional 2D
                dashboards overlook. Early adoption will be a key to growth.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={4}>
          <DataCard variant="outlined">
            <CardContent>
              <AnnouncementIcon
                color="warning"
                sx={{ mb: 5 }}
                fontSize="large"
              />
              <Typography variant="h5">Communications</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Engaging visualisations present data in a way that drives
                conversation and elevates reports, pitches and presentations.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Solutions;
