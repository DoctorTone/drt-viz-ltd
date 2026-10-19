import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Footer from "../components/Footer";
import { PageTransition } from "../components/PageTransition";
import { openCookieSettings } from "../analytics/consent";

const cellSx = { color: "#d0d0d0", borderColor: "rgba(255, 255, 255, 0.15)" };

const cookies = [
  {
    name: "_ga",
    provider: "Google Analytics",
    purpose: "Distinguishes unique visitors",
    duration: "2 years",
  },
  {
    name: "_ga_<id>",
    provider: "Google Analytics",
    purpose: "Keeps track of the current visit",
    duration: "2 years",
  },
];

const CookiePolicy = () => {
  return (
    <PageTransition>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <img src="/images/drtLogo.png" />
          <Typography variant="h6" className="links back-link">
            <a href="/">
              <ArrowLeftIcon sx={{ verticalAlign: "sub" }} />
              Back
            </a>
          </Typography>
        </Box>

        <Typography variant="h3" sx={{ mb: 3 }}>
          Cookie policy
        </Typography>

        <Typography sx={{ mb: 2, color: "#d0d0d0" }}>
          This site uses Google Analytics to understand how visitors use it -
          for example, which pages are viewed and how people arrive at the site.
          This helps us improve the content. Analytics cookies are only set if
          you choose to accept them, and the site works fully if you reject
          them.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Cookies we use
        </Typography>
        <Box sx={{ overflowX: "auto", mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {["Name", "Provider", "Purpose", "Expires"].map((heading) => (
                  <TableCell key={heading} sx={{ ...cellSx, color: "#fff" }}>
                    {heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cookies.map((cookie) => (
                <TableRow key={cookie.name}>
                  <TableCell sx={cellSx}>{cookie.name}</TableCell>
                  <TableCell sx={cellSx}>{cookie.provider}</TableCell>
                  <TableCell sx={cellSx}>{cookie.purpose}</TableCell>
                  <TableCell sx={cellSx}>{cookie.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Typography sx={{ mb: 2, color: "#d0d0d0" }}>
          Your cookie choice itself is saved in your browser's local storage so
          that we don't ask you on every visit. This is not shared with anyone,
          and we ask again after 12 months.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Google Analytics
        </Typography>
        <Typography sx={{ mb: 2, color: "#d0d0d0" }}>
          Google Analytics is provided by Google. The information it collects is
          processed by Google on our behalf. You can read more in{" "}
          <Link
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noreferrer noopener"
            color="warning"
          >
            how Google uses information from sites that use its services
          </Link>
          .
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Changing your choice
        </Typography>
        <Typography sx={{ mb: 2, color: "#d0d0d0" }}>
          You can change your mind at any time. If you withdraw consent, the
          analytics cookies are removed from your browser.
        </Typography>
        <Button
          variant="outlined"
          color="warning"
          onClick={openCookieSettings}
          sx={{ mb: 4 }}
        >
          Cookie settings
        </Button>

        <Typography sx={{ mb: 6, color: "#d0d0d0" }}>
          If you have any questions, contact us at{" "}
          <Link href="mailto:enquiries@drt-software.com" color="warning">
            enquiries@drt-software.com
          </Link>
          .
        </Typography>
      </Container>
      <Footer />
    </PageTransition>
  );
};

export default CookiePolicy;
