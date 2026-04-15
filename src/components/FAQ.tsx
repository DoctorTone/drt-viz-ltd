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

const DataAccordian = styled(Accordion)({
  background: "black",
  color: "white",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "15px",
  marginBottom: "3%",
  "&:first-of-type": { borderRadius: "15px" },
  "&:last-of-type": { borderRadius: "15px" },
});

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

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
            Please contact us with any additional queries.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <DataAccordian
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                What types of geospatial data can you visualise?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                We work with all sorts of data - satellite imagery, point
                clouds, elevations, vector data, climate data. If it has spatial
                coordinates and some data values we can visualise it!
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Do I need to provide the data in a specific format?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                No. We work with formats such as GeoTIFF, GeoJSON, shapefiles,
                etc. and handle all the preprocessing. Regardless of your data
                format we can convert it to something we can use.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                How long does a typical project take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                A proof-of-concept may take as little as 2 weeks. Depending on
                the complexity of the project and the required featureset, a
                prodcution-ready project may 6-12 weeks. We can discuss this on
                our initial meeting.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                What platforms do you develop for? Will it work on mobile?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                The majority of our work is web-based, so it will work on
                devices such as mobiles, tablets and PC's. We also build desktop
                applications (on platforms such as Unreal), but we will aim to
                accomodate your desired platform.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Will I need special software to view the application?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Not at all. The majority of our software runs in a web browser.
                VR or desktop applications may differ but we will provide full
                deployment support.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                Can you integrate with our existing GIS systems?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Yes. We've integrated with ArcGIS, QGIS, PostGIS databases, and
                custom geospatial APIs. We'll design the data pipeline to fit
                your existing workflow.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
          <DataAccordian
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            slotProps={{
              transition: {
                timeout: TIMEOUT,
                appear: true,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
              <Typography variant="h6">
                What if we want to update the data later?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" sx={{ color: "grey" }}>
                The application can be built to accept data uploads or connect
                to a live API or database. We'll design the workflow based on
                your needs.
              </Typography>
            </AccordionDetails>
          </DataAccordian>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
