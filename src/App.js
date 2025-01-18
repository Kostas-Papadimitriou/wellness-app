import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const wellnessTheme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Calming green for primary buttons and highlights
      contrastText: "#FFFFFF", // White text on primary buttons
    },
    secondary: {
      main: "#2196F3", // Refreshing blue for secondary elements
      contrastText: "#FFFFFF", // White text on secondary buttons
    },
    background: {
      default: "#E3F2FD", // Light blue background for the app
      paper: "#FFFFFF", // White background for cards and sections
    },
    text: {
      primary: "#212121", // Dark gray for primary text
      secondary: "#757575", // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#212121", // Dark gray for headings
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#4CAF50", // Calming green for subheadings
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#212121", // Dark gray for general text
    },
    button: {
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for a friendly look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
          borderRadius: "8px", // Rounded buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "12px", // Rounded corners for cards and sections
        },
      },
    },
  },
});

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ThemeProvider theme={wellnessTheme}>
      <CssBaseline />
      <div style={{ minHeight: "100vh" }}>
        {user ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <Login onLogin={(userData) => setUser(userData)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
