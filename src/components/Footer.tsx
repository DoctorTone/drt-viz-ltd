import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Box sx={{ mb: 1 }}>
        <img src="./images/drtLogo.png" />
      </Box>
      <Divider sx={{ backgroundColor: "grey", mb: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography variant="h6" sx={{ color: "grey" }} className="links">
          <a href="mailto:enquiries@drt-software.com">
            <EmailIcon sx={{ verticalAlign: "sub" }} /> Enquiries
          </a>
        </Typography>
        <Typography variant="h6" sx={{ color: "grey" }}>
          Copyright &copy; 2025 DRT Software. All rights reserved.
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          className="links"
        >
          <Link
            href="https://www.linkedin.com/in/tonyglover/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon
              sx={{
                border: "1px solid grey",
                borderRadius: "50%",
                padding: "15%",
              }}
              fontSize="medium"
            />
          </Link>
          <Link
            href="https://x.com/DrtSoftware"
            target="_blank"
            rel="noreferrer noopener"
          >
            <XIcon
              sx={{
                border: "1px solid grey",
                borderRadius: "50%",
                padding: "15%",
              }}
              fontSize="medium"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ?"
            target="_blank"
            rel="noreferrer noopener"
          >
            <YouTubeIcon
              sx={{
                border: "1px solid grey",
                borderRadius: "50%",
                padding: "15%",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
