import React, { useState } from "react";
import { Upload, FileText, X } from 'lucide-react';
import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const SubirPedidos = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files).filter(
        file => file.type === "application/pdf"
      );
      setSelectedFiles(prev => [...prev, ...files]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files).filter(
        file => file.type === "application/pdf"
      );
      setSelectedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ bgcolor: "white", width: 1271 }}>
      <Box sx={{ minHeight: "100vh", bgcolor: "", marginLeft: 25, p: 5 }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b", mb: 1 }}>
            Subir Pedidos
          </Typography>
          <Typography sx={{ color: "#3E3636", fontSize: 14 }}>
            Sube archivos PDF con información de pedidos
          </Typography>
        </Box>

        {/* Upload Card */}
        <Card sx={{ maxWidth: 800, mx: 'auto', p: 4, borderRadius: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginRight: 30, bgcolor: "#F5F5F5" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <CloudUploadIcon sx={{ fontSize: 28, color: "#000000" }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b" }}>
              Subir Pedidos en PDF
            </Typography>
          </Box>

          {/* Drop Zone */}
          <Paper
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            elevation={0}
            sx={{
              border: dragActive ? '2px dashed #000000' : '2px dashed #cbd5e1',
              borderRadius: 3,
              p: 6,
              textAlign: 'center',
              bgcolor: dragActive ? '#eef2ff' : '#f8fafc',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#000000',
                bgcolor: '#f8fafc',
              }
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: '#ecececff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <FileText size={40} color="#303841" />
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", mb: 1 }}>
              Arrastra archivos PDF aquí
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: 14, mb: 3 }}>
              o haz clic para buscar en tu computadora
            </Typography>

            <input
              type="file"
              id="file-upload"
              accept=".pdf"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-upload">
              <Button
                component="span"
                variant="outlined"
                startIcon={<Upload size={18} />}
                sx={{
                  textTransform: 'none',
                  borderColor: '#cbd5e1',
                  color: '#475569',
                  fontWeight: 500,
                  px: 3,
                  py: 1,
                  '&:hover': {
                    borderColor: '#303841',
                    color: '#000000ff',
                    bgcolor: '#cfcfcfff',
                  }
                }}
              >
                Buscar Archivos
              </Button>
            </label>

            <Typography sx={{ color: "#94a3b8", fontSize: 12, mt: 3 }}>
              Solo archivos PDF • Se admiten múltiples archivos
            </Typography>
          </Paper>

          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography sx={{ fontWeight: 600, color: "#1e293b", mb: 2, fontSize: 14 }}>
                Archivos seleccionados ({selectedFiles.length})
              </Typography>
              <List sx={{ bgcolor: 'transparent' }}>
                {selectedFiles.map((file, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      bgcolor: '#f8fafc',
                      borderRadius: 2,
                      mb: 1,
                      border: '1px solid #e2e8f0',
                    }}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        onClick={() => removeFile(index)}
                        sx={{
                          color: '#ef4444',
                          '&:hover': {
                            bgcolor: '#fee2e2',
                          }
                        }}
                      >
                        <X size={18} />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <FileText size={20} color="#466588ff" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: 500, color: "#1e293b", fontSize: 14 }}>
                          {file.name}
                        </Typography>
                      }
                      secondary={
                        <Typography sx={{ color: "#64748b", fontSize: 12 }}>
                          {(file.size / 1024).toFixed(2)} KB
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: '#222831',
                  color: 'white',
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: 15,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: '#56585aff',
                  }
                }}
              >
                Procesar {selectedFiles.length} archivo(s)
              </Button>
            </Box>
          )}

          {/* Info Section */}
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: 3,
              bgcolor: '#ffffffff',
              borderRadius: 2,
              borderLeft: '4px solid #222831',
            }}
          >
            <Typography sx={{ fontWeight: 600, color: "#222831", mb: 2, fontSize: 14 }}>
              Cómo funciona
            </Typography>
            <List dense>
              {[
                'Sube archivos PDF con información de pedidos',
                'Nuestra IA extraerá automáticamente los detalles del pedido',
                'Los pedidos se agregarán a la cola de revisión pendiente',
                'Revisa y aprueba/rechaza pedidos desde el panel'
              ].map((text, index) => (
                <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: '#222831',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ color: "#222831", fontSize: 13 }}>
                        {text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Card>
      </Box>
    </Box>
  );
};

export default SubirPedidos;