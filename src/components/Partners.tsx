import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BoltIcon from "@mui/icons-material/Bolt";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Marquee from "react-fast-marquee";

const logoList = [
  { src: "./images/logo_uon_dark_grey.jpg", alt: "Nottingham University" },
  { src: "./images/NHS_grey.jpg", alt: "National Health Service" },
  {
    src: "./images/logo_nihr_grey.png",
    alt: "National Institute for Health Research",
  },
  { src: "./images/logo_imh2_grey.png", alt: "Institute for Mental Health" },
  { src: "./images/Digilabs_grey_cropped.png", alt: "Digilabs" },
  { src: "./images/ThrillLab_grey.jpg", alt: "Thrill Laboratory" },
  { src: "./images/artxr_full.png", alt: "Art XR" },
  {
    src: "./images/iosh_grey_cropped.png",
    alt: "Institute of Safety and Health",
  },
  {
    src: "./images/loughborough_logo_black_white.png",
    alt: "Loughborough University",
  },
];

const Partners = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <Chip
        icon={<BoltIcon />}
        label="Partners"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container sx={{ mb: 8 }}>
        <Grid size={7}>
          <Typography variant="h3">
            Some of our <span style={{ color: "orange" }}>collaborations</span>.
          </Typography>
        </Grid>
        <Grid size={5}></Grid>
      </Grid>
      <Box>
        <Marquee speed={50}>
          {logoList.map((logo, idx) => (
            <Box
              key={idx}
              sx={{ mx: 4, display: "flex", alignItems: "center" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: "60px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Container>
  );
};

export default Partners;
