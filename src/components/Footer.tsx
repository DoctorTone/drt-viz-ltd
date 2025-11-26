import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Box sx={{ mb: 1 }}>
        <img src="./images/drtLogo.png" />
      </Box>
      <Divider sx={{ backgroundColor: "grey", mb: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h6" sx={{ color: "grey", marginRight: "20%" }}>
          Copyright &copy; 2025 DRT Software. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <LinkedInIcon
            sx={{
              border: "1px solid grey",
              borderRadius: "50%",
              padding: "7.5%",
            }}
          />
          <XIcon
            sx={{
              border: "1px solid grey",
              borderRadius: "50%",
              padding: "7.5%",
            }}
          />
          <YouTubeIcon
            sx={{
              border: "1px solid grey",
              borderRadius: "50%",
              padding: "7.5%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
