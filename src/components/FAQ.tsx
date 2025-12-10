import { useState, type SyntheticEvent } from "react";
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

const TIMEOUT = 500;
const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const DataAccordian = styled(Accordion)({
    background: "black",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "15px",
    marginBottom: "3%",
    "&:first-of-type": { borderRadius: "15px" },
    "&:last-of-type": { borderRadius: "15px" },
  });

  return (
    <Container id="section5" sx={{ mb: 6 }}>
      <Chip
        icon={<BoltIcon />}
        label="FAQ"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Frequently asked <span style={{ color: "orange" }}>questions</span>.
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            See why 3D is the best way to visualise your data.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <DataAccordian
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
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
          <DataAccordian
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
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
          <DataAccordian
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
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
          <DataAccordian
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
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
                it in a different light, making it easier to spot trends and
                patterns and can look more visually appealing.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                I always thought the gratuitous use of 3D was discouraged?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                It used to be. It doesn't work for static images as the data
                becomes difficult to see as parts of it are occluded. We build
                fully interactive applications where you can examine the data in
                detail, making the analysis easier.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Isn't 3D just style over substance? Pretty graphics hiding the
                real data?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                NO! The visual detail helps emphasise the data and can showcase
                it in new and innovative ways that a chart could never do! Some
                data is naturally 3D and can be situated in a much better
                context to increase understanding.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            slotProps={{
              transition: {
                unmountOnExit: true,
                timeout: TIMEOUT, // optional
                appear: true, // optional
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Why don't you make an app that I can drop my data into?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Watch this space!!!......
              </Typography>
            </AccordionDetails>
          </DataAccordian>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
