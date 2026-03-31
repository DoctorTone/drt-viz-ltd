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
import BalanceIcon from "@mui/icons-material/Balance";
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
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <PsychologyIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Spatial Understanding</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                3D visualisation is perfectly suited to the real world.
                Geographical relationships are immediately visible, such as
                terrain or elevation. No translation from a flat map is
                required.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <BarChartIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Pattern Recognition</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Interactive visualisations can reveal spatial correlations,
                filter out trends and hotspots that a 2D map may obscure. A
                three-dimensional view can reveal relationships that were
                previously unknown.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <PsychologyIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Communications</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                A wider audience, especially those who are not data experts, can
                understand complex spatial data more easily. This allows the
                technical findings to be more accessible to decision makers.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <BalanceIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Analysis</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Multiple datasets and information can be layered and combined
                into one view. The interaction of all this data can be seen
                without switching between maps.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <LightbulbIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Storytelling</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Data can be animated over time, portraying factors such as urban
                growth or climate patterns. Accurate planning and cost decisions
                can be made when considering multiple scenarios.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <AnnouncementIcon
                color="warning"
                sx={{ mb: 5 }}
                fontSize="large"
              />
              <Typography variant="h5">Integration</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Technology such as virtual reality can be used to immerse users
                in the data, generating further realism. AI may be used for
                predictive modelling and automated feature extraction.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Solutions;
