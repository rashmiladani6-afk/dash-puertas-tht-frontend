import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

export default function Settings() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Settings
      </Typography>
      <Paper sx={{ p: 3, background: "#1e293b", color: "#fff", maxWidth: 500 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Update Preferences
        </Typography>
        <TextField
          label="Username"
          fullWidth
          sx={{
            mb: 2,
            "& .MuiInputBase-root": { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#94a3b8" },
          }}
        />
        <Button variant="contained" sx={{ background: "#2563eb" }}>
          Save
        </Button>
      </Paper>
    </Box>
  );
}
