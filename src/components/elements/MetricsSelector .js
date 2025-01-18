import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const MetricsSelector = ({ type, setType, duration, setDuration }) => (
  <>
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Metric Type</InputLabel>
      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        label="Metric Type"
      >
        <MenuItem value="none" disabled>
          None
        </MenuItem>
        <MenuItem value="activity_minutes">Activity Minutes</MenuItem>
        <MenuItem value="sleep_hours">Sleep Hours</MenuItem>
        <MenuItem value="water_intake_liters">Water Intake</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Duration</InputLabel>
      <Select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        label="Duration"
      >
        <MenuItem value="none" disabled>
          None
        </MenuItem>
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
      </Select>
    </FormControl>
  </>
);

export default MetricsSelector;
