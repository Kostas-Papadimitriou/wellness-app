import React, { useEffect, useState } from "react";
import apis from "./apis/apis";
import { Container, Grid, Button } from "@mui/material";
import UserProfile from "./elements/UserProfile ";
import WellnessTip from "./elements/WellnessTip";
import MetricsSelector from "./elements/MetricsSelector ";
import MetricsVisualization from "./elements/MetricsVisualization ";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale, // Register the category scale
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [userImageBlobUrl, setUserImageBlobUrl] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [tip, setTip] = useState("");
  const [type, setType] = useState("none");
  const [duration, setDuration] = useState("none");
  const [loadingMetrics, setLoadingMetrics] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await apis.fetchUser();

        // Transform the profile_picture URL to a Blob URL
        const imageBlobUrl = URL.createObjectURL(
          new Blob([userData.profile_picture])
        );
        setUser(userData);
        setUserImageBlobUrl(imageBlobUrl); // Save Blob URL for rendering
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    const fetchTipData = async () => {
      try {
        const tipData = await apis.fetchTip();
        setTip(tipData.tip);
      } catch (error) {
        console.error("Error fetching wellness tip:", error.message);
      }
    };

    fetchUserData();
    fetchTipData();
  }, []);

  useEffect(() => {
    const fetchMetricsData = async () => {
      if (type === "none" || duration === "none") return;

      setLoadingMetrics(true);
      try {
        const metricsData = await apis.fetchMetrics(type, duration);
        const chartData = {
          labels: metricsData.map((item) => item.date),
          values: metricsData.map((item) => item.value),
        };
        setMetrics(chartData);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      } finally {
        setLoadingMetrics(false);
      }
    };

    fetchMetricsData();
  }, [type, duration]);

  const chartData =
    metrics && duration !== "daily"
      ? {
          labels: metrics.labels,
          datasets: [
            {
              label: `${type.replace("_", " ")} (${duration})`,
              data: metrics.values,
              borderColor: "rgba(193, 25, 25, 0.87)",
              fill: false,
            },
          ],
        }
      : null;

  const latestValue =
    duration === "daily" && metrics && metrics.values.length > 0
      ? metrics.values[metrics.values.length - 1]
      : null;

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="error"
            onClick={onLogout}
            sx={{ mb: 2 }}
          >
            Logout
          </Button>
        </Grid>

        <Grid item xs={12} sm={8}>
          <UserProfile user={user} userImageBlob={userImageBlobUrl} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <WellnessTip tip={tip} />
        </Grid>

        <Grid item xs={12}>
          <MetricsSelector
            type={type}
            setType={setType}
            duration={duration}
            setDuration={setDuration}
          />
        </Grid>

        <Grid item xs={12}>
          <MetricsVisualization
            duration={duration}
            latestValue={latestValue}
            chartData={chartData}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
