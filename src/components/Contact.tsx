import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import BoltIcon from "@mui/icons-material/Bolt";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Contact = () => {
  const ContactTextField = styled(TextField)({
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiInputBase-input": {
      color: "white",
      background: "#0a0401",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey", // border color
      },
      "&:hover fieldset": {
        borderColor: "grey",
      },
      "&.Mui-focused fieldset": {
        borderColor: "grey",
      },
    },
  });

  return (
    <Container id="section7" sx={{ mb: 10 }}>
      <Chip
        icon={<BoltIcon />}
        label="Contact"
        variant="outlined"
        color="warning"
        sx={{ mb: 2, color: "orange", borderColor: "orange" }}
      />
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Let's give your project an extra{" "}
            <span style={{ color: "orange" }}>dimension</span>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ xs: 0, sm: 2, md: 3 }}></Grid>
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Card
            variant="outlined"
            sx={{
              background: "black",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "10px",
              padding: "2.5%",
            }}
          >
            <CardContent>
              <Typography variant="h4">Please enter your details.</Typography>
              <Typography variant="h6" sx={{ color: "grey", mb: 2 }}>
                We aim to respond within one working day.
              </Typography>
              <Box
                component="form"
                action="https://usebasin.com/f/da50ea670849"
                method="POST"
              >
                <FormControl className="w-100">
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Name
                  </Typography>
                  <ContactTextField
                    required
                    id="outlined-required"
                    placeholder="Your name"
                    name="userName"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Email address
                  </Typography>
                  <ContactTextField
                    required
                    id="outlined-required"
                    placeholder="Your email address"
                    fullWidth
                    variant="outlined"
                    type="email"
                    name="userEmail"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Phone
                  </Typography>
                  <ContactTextField
                    required
                    id="outlined-required"
                    color="warning"
                    placeholder="Your phone number"
                    name="userPhone"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Message
                  </Typography>
                  <ContactTextField
                    required
                    id="outlined-required"
                    color="warning"
                    placeholder="Your message"
                    name="userText"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="warning"
                  sx={{ mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
              <Typography variant="h6" sx={{ color: "grey" }}>
                All information is 100% private.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
