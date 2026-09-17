import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SwipeIcon from "@mui/icons-material/Swipe";

const Insights = () => {
  return (
    <Container>
      <Chip
        icon={<BoltIcon />}
        label="Insights"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Key <span style={{ color: "orange" }}>insights</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Time is the missing dimension
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AccessAlarmIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            The same viewpoint can have a significant impact at year one, but be
            negligible by year ten.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AccessAlarmIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            An interactive model can show how the screening progresses over
            time, and the differences between the seasons.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <AccessAlarmIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            This can directly address how the site may look at year one versus
            year ten, which a single image cannot.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img
            src="/images/time_springwell.jpg"
            className="borderedLight w-100"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img
            src="/images/neutral_springwell.jpg"
            className="borderedLight w-100"
          />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Neutrality is the key value
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <RemoveCircleIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Showing all the honest scenarios, including the worst cases, makes
            the tool creditable to objectors.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <RemoveCircleIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Showing the mature screened outcome makes it useful to applicants.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <RemoveCircleIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            The same truthful model serves consultation, scrutiny and design.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mb: 8, pr: 2 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Fidelity to the source data
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <ThumbUpAltIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            The model reporoduces the assessment's own parameters, not an
            interpretation.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <ThumbUpAltIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Viewpoints, camera positions and soalr panel specifications are
            taken from the application documents.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <ThumbUpAltIcon
              color="warning"
              sx={{ verticalAlign: "sub", mr: 2 }}
            />
            Existing vegetation is distinguished from proposed planting, each
            behaving accordingly over time.
          </Typography>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <img src="/images/fidelity.jpg" className="borderedLight w-100" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", alignItems: "center", mb: 8 }}>
        <Grid
          size={{ xs: 12, sm: 5, md: 5 }}
          sx={{ mb: { xs: 4, md: 0 }, pr: 2 }}
        >
          <img src="/images/engage.jpg" className="borderedLight w-100" />
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Accessibility and engagement
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
            <SwipeIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            All interested parties are able to engage and interact with the
            assessment as it runs in a browser.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <SwipeIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            Residents can explore what the scheme will look like from viewpoints
            that they are familier with.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <SwipeIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            It provides a clearer understanding of all the technical documents
            involved in the scheme.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", mb: 3 }}>
            <SwipeIcon color="warning" sx={{ verticalAlign: "sub", mr: 2 }} />
            No specialist software or hardware is required, it runs on a mobile,
            tablet or desktop machine.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Insights;
