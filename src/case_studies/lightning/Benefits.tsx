import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { styled } from "@mui/material/styles";

const Benefits = () => {
  const DataCard = styled(Card)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "10px",
    height: "100%",
  });

  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Benefits"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Typography variant="h3" sx={{ mb: 3 }}>
        Who <span style={{ color: "orange" }}>benefits?</span>
      </Typography>
      <Typography variant="h6" sx={{ color: "grey", mb: 4 }}>
        What benefits does a 3D globe visualisation offer?
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">
                Infrastructure Planning & Risk Management
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Many industries may utilise lightning pattern data to design
                appropriate protection systems based on strike density.
                Geographic and seasonal risks can be estimated to minimise
                infrastructure exposure and costs.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">
                Aviation, Maritime & Emergency Safety
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Seasonal schedules can be planned for both the air and sea
                industries avoiding high-activity zones. The public can be
                educated about seasonal risk, and service managers can optimize
                outdoor event scheduling and coordinate response resources.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">
                Climate Research & Science Communication
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Atmospheric scientists can use such applications to study
                correlations between lightning activity and climate phenomena.
                Global visualisations can make atmospheric science engaging and
                build better public understanding of weather patterns and
                climate science.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
