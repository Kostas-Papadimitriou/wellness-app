import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Alert,
  Paper,
} from "@mui/material";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "testuser" && password === "wellics123") {
      onLogin({ firstName: "Test", lastName: "User" });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "100vh", // Full viewport height
        // backgroundColor: "#f5f5f5", // Light background
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 400,
          background: "rgb(147, 229, 232)",
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "rgb(247, 247, 247)",
              borderRadius: 1,
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            sx={{
              backgroundColor: "rgb(247, 247, 247)",
              borderRadius: 1,
            }}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
