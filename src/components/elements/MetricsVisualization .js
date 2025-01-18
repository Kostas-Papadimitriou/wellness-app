import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { Line } from "react-chartjs-2";

const MetricsVisualization = ({ duration, latestValue, chartData }) => {
  if (duration === "daily" && latestValue !== null) {
    return (
      <Card
        sx={{
          p: 2,
          backgroundColor: "#e8f5e9",
          mb: 2,
          border: "1px solid #4caf50",
        }}
      >
        <Typography variant="h6" textAlign="center">
          Latest value:{" "}
          <span style={{ fontWeight: "bold", color: "#4caf50" }}>
            {latestValue}
          </span>
        </Typography>
      </Card>
    );
  }

  if (chartData) {
    return (
      <Box>
        <Typography variant="h5">Wellness Metrics</Typography>
        <Line data={chartData} />
      </Box>
    );
  }

  return <Typography>No metrics data available.</Typography>;
};

export default MetricsVisualization;
