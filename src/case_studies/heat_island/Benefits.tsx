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
      <Typography variant="h2" sx={{ mb: 3 }}>
        Who <span style={{ color: "orange" }}>benefits?</span>
      </Typography>
      <Typography variant="h6" sx={{ color: "grey", mb: 4 }}>
        See how 3D data visualisation can benefit the wider community.
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Urban Planning</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                3D visualisations can identify areas or neighborhoods that
                require cooling interventions. This can inform priorisation of
                infrastructure investments based on heat vulnerability.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Building Development</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Policy makers can gain valuable insights from the data to inform
                site selection for new projects. This can then inform material
                and design choices to minimise heat island contribution.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Climate/Health Research</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Wider health concerns due to heat issues can be communicated to
                policymakers. The impact of any proposed interventions can be
                visualised before implementation.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
