import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const FAQ = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="FAQ"
        variant="outlined"
        color="warning"
      />
      <Grid container>
        <Grid size={6}>
          <Typography variant="h2">
            Frequently asked <span style={{ color: "orange" }}>questions</span>.
          </Typography>
          <Typography variant="h6">
            The best way to visualise your data.
          </Typography>
        </Grid>
        <Grid size={6}>
          <Accordion
            sx={{
              background: "#0a0401",
              color: "white",
              border: "1px solid grey",
              borderRadius: "15px",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">What are the benefits?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Due to all the additional space...
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
