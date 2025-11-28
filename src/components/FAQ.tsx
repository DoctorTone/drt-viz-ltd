import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

const FAQ = () => {
  const DataAccordian = styled(Accordion)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "15px",
    marginBottom: "3%",
  });

  return (
    <Container sx={{ mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="FAQ"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container>
        <Grid size={6}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Frequently asked <span style={{ color: "orange" }}>questions</span>.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            See why 3D is the best way to visualise your data.
          </Typography>
        </Grid>
        <Grid size={6}>
          <DataAccordian>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                What are the benefits of 3D data viz?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Due to all the additional space, you can see the patterns and
                trends in the data more clearly and it's easier to explore and
                interact. For multi-dimensional data, or data with lots of
                attributes, this will be the most efficient way to see it.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                What sort of data can I visualise?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Anything!! We visualise data in many differing formats and many
                different sectors. We have yet to see a dataset that we couldn't
                visualise!
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Does the data have to be 3D or multi-dimensional?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Not at all! The data can be in pretty much any format. We can
                extract the fields that you are interested in and visualise
                those, or make multiple visualisations from different subsets,
                or even visualise everything and filter out just what you want.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Can I still visualise my 2D data?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Absolutely. 3D offers an alternative way to see any type of
                data. Traditional methods, such as bar charts, dashboards, etc.,
                are perfectly acceptable ways to view your data. 3D can display
                it in a different light, making it more appealing for
                presentations or pitches.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
