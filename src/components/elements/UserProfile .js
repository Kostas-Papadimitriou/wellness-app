import React from "react";
import { Card, Avatar, Typography, Box } from "@mui/material";

const UserProfile = ({ user, userImageBlob }) => {
  if (!user) return null;

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "rgba(207, 111, 38, 0.76)",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Avatar src={userImageBlob} sx={{ width: 64, height: 64, m: 2 }} />
      <Box>
        <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
        <Typography>Role: {user.role}</Typography>
        <Typography>Team: {user.team_name}</Typography>
        <Typography>Department: {user.department_name}</Typography>
        <Typography>Wellness Score: {user.wellness_score}</Typography>
      </Box>
    </Card>
  );
};

export default UserProfile;
