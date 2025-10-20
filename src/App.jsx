import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import SubirPedidos from "./pages/subirPedidos";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#f8f9fa'
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/subir-pedidos" element={<SubirPedidos />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;