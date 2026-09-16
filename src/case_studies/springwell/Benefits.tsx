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
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">Applicants and consultants</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                A 3D visualisation is a way to demonstrate that mitigation
                works. It not only shows the finished scheme, but gives an
                honest account of how it becomes established.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">
                Local authorities and inspectors
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                All parties gain a neutral reference they can trust. The tool
                shows every state faithfully, including the worst-case scenarios
                of early screening and winter conditions.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DataCard variant="outlined">
            <CardContent>
              <NoteAltIcon color="warning" sx={{ mb: 5 }} fontSize="large" />
              <Typography variant="h5">The Public</Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                The wider public can gain access to the assessment from
                viewpoints they already know. They can see what the scheme will
                look like now and in ten years. It helps turn an impenetrable
                technical process into something that they can explore.
              </Typography>
            </CardContent>
          </DataCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
