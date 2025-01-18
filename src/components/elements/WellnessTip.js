import React from "react";
import { Paper, Typography } from "@mui/material";

const WellnessTip = ({ tip }) => (
  <Paper
    elevation={4}
    sx={{
      p: 4,
      backgroundColor: "rgba(236, 202, 92, 0.76)", // Vibrant yellow for emphasis
      textAlign: "center",
      borderRadius: "30px", // Rounded edges for a smoother "cloud" shape
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)", // More prominent shadow
      maxWidth: 350, // Slightly larger width for better readability
      margin: "0 auto", // Center the cloud
      color: "#212121", // Dark color for good contrast
    }}
  >
    <Typography
      variant="h6"
      gutterBottom
      sx={{ fontWeight: "bold", color: "#5d4037" }} // Brown text for contrast
    >
      Wellness Tip
    </Typography>
    <Typography sx={{ fontSize: "1rem" }}>{tip || "Loading tip..."}</Typography>
  </Paper>
);

export default WellnessTip;
