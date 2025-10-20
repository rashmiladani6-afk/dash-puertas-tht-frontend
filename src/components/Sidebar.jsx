import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 250;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Panel de Control', icon: <DashboardIcon />, path: '/' },
    { text: 'Subir Pedidos', icon: <CloudUploadIcon />, path: '/subir-pedidos' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#222831',
          color: 'white',
          borderRight: 'none',
        },
      }}
    >
      {/* Logo Section */}
      <Box sx={{ p: 3, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              background: '#F7F7F7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
            }}
          >
            ⚡
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>
              Puertas THT
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#a0aec0', lineHeight: 1.3 }}>
              Automatización de Pedidos
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Menu Items */}
      <List sx={{ px: 2, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                color: location.pathname === item.path ? '#363636' : '#a0aec0',
                bgcolor: location.pathname === item.path ? '#889095ff' : 'transparent',
                '&:hover': {
                  bgcolor: '#FDF6FA',
                  color: '#363636',
                },
                transition: 'all 0.2s ease',
                py: 1.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: 'inherit',
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: location.pathname === item.path ? 600 : 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;