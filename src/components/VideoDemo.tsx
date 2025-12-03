import { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { VideoRecord } from "../state/VideoData";

interface VideoProps {
  vidRecord: VideoRecord;
}

const VideoDemo = forwardRef<HTMLVideoElement, VideoProps>(
  ({ vidRecord }, ref) => {
    return (
      <>
        {vidRecord.left ? (
          <Grid container spacing={6} sx={{ mt: 3, padding: "30px" }}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div className="bordered">
                <a
                  href={vidRecord.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <video
                    ref={ref}
                    key={vidRecord.id}
                    data-id={vidRecord.id}
                    muted
                    loop
                    preload="auto"
                    className="w-100"
                  >
                    <source src={vidRecord.source} type="video/mp4" />
                  </video>
                </a>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
              <Typography variant="h5" color="#386fc7">
                Visualisations
              </Typography>
              <Typography variant="h6" color="orange">
                {vidRecord.category}
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {vidRecord.title}
              </Typography>
              <Typography
                variant="body1"
                className="paddingProjects"
                sx={{ textAlign: "justify" }}
              >
                <p>{vidRecord.text1}</p>
                {vidRecord.text2 && <p>{vidRecord.text2}</p>}
                {vidRecord.text3 && <p>{vidRecord.text3}</p>}
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  href={vidRecord.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="contained"
                >
                  Go to Demo
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={6} sx={{ mt: 3, padding: "30px" }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
              <Typography variant="h5" color="#386fc7">
                Visualisations
              </Typography>
              <Typography variant="h6" color="orange">
                {vidRecord.category}
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {vidRecord.title}
              </Typography>
              <Typography
                className="paddingProjects"
                variant="body1"
                sx={{ textAlign: "justify" }}
              >
                <p>{vidRecord.text1}</p>
                {vidRecord.text2 && <p>{vidRecord.text2}</p>}
                {vidRecord.text3 && <p>{vidRecord.text3}</p>}
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  href={vidRecord.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="contained"
                >
                  Go to Demo
                </Button>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div className="bordered">
                <a
                  href={vidRecord.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <video
                    ref={ref}
                    key={vidRecord.id}
                    data-id={vidRecord.id}
                    muted
                    playsInline
                    loop
                    preload="auto"
                    className="w-100"
                  >
                    <source src={vidRecord.source} type="video/mp4" />
                  </video>
                </a>
              </div>
            </Grid>
          </Grid>
        )}
      </>
    );
  }
);

export default VideoDemo;
