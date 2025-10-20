import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TrendingUp, Eye } from 'lucide-react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ordersData = [
  {
    id: 'ORD-2024-001',
    cliente: { nombre: 'Sarah Johnson', email: 'sarahj@example.com' },
    detalles: 'Premium subscription plan - Annual billing wi...',
    monto: 1299.99,
    puntuacion: 95,
    estado: 'Aprobado',
    creado: 'Oct 17, 08:16'
  },
  {
    id: 'ORD-2024-002',
    cliente: { nombre: 'Michael Chen', email: 'm.chen@company.com' },
    detalles: 'Enterprise package for team of 50 users with ...',
    monto: 4500.00,
    puntuacion: 72,
    estado: 'Aprobado',
    creado: 'Oct 17, 08:16'
  },
  {
    id: 'ORD-2024-003',
    cliente: { nombre: 'Emma Williams', email: 'emma.w@startup.io' },
    detalles: 'Basic plan upgrade to Professional tier with a...',
    monto: 299.00,
    puntuacion: 88,
    estado: 'Aprobado',
    creado: 'Oct 17, 08:16'
  },
  {
    id: 'ORD-2024-004',
    cliente: { nombre: 'David Martinez', email: 'david.m@email.com' },
    detalles: 'Bulk purchase of 100 API credits',
    monto: 89.99,
    puntuacion: 65,
    estado: 'Rechazado',
    creado: 'Oct 17, 08:16'
  },
  {
    id: 'ORD-2024-005',
    cliente: { nombre: 'Lisa Anderson', email: 'l.anderson@corp.com' },
    detalles: 'Monthly subscription renewal with auto-billin...',
    monto: 149.00,
    puntuacion: 98,
    estado: 'Pendiente',
    creado: 'Oct 17, 08:16'
  },
];

const Dashboard = () => {
  const [filtro, setFiltro] = useState('Todos');

  const cards = [
    {
      title: "Total de Pedidos",
      desc: "5",
      quote: 'Histórico',
      icon: <ViewInArIcon sx={{ fontSize: 28, color: "#6366f1" }} />
    },
    {
      title: "Pendiente de Revisión",
      desc: "0",
      quote: 'Requiere atención',
      icon: <AccessTimeIcon sx={{ fontSize: 28, color: "#6366f1" }} />
    },
    {
      title: "Aprobados",
      desc: "4",
      quote: 'Procesados exitosamente',
      icon: <TaskAltIcon sx={{ fontSize: 28, color: "#10b981" }} />
    },
    {
      title: "Puntuación Promedio LLM",
      desc: "83.6%",
      quote: 'Nivel de confianza',
      icon: <TrendingUpIcon sx={{ fontSize: 28, color: "#a855f7" }} />
    },
  ];

  const datosFiltrados = filtro === 'Todos'
    ? ordersData
    : ordersData.filter(order => order.estado === filtro);

  const getEstadoColor = (estado) => {
    const colors = {
      Aprobado: { bg: '#d1fae5', text: '#065f46' },
      Pendiente: { bg: '#fef3c7', text: '#92400e' },
      Rechazado: { bg: '#fee2e2', text: '#991b1b' }
    };
    return colors[estado] || colors.Pendiente;
  };

  const getPuntuacionColor = (puntuacion) => {
    if (puntuacion >= 80) return '#10b981';
    if (puntuacion >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getEstadoIcon = (estado) => {
    if (estado === 'Aprobado') return '✓';
    if (estado === 'Rechazado') return '✕';
    return '⚠';
  };

  return (
    <Box sx={{ bgcolor: "#A7AAE1", minHeight: "100vh", px: 5 }}>
      {/* Header Section */}
      <Box sx={{ bgcolor: "white", px: 5, mx: -5, }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#111827", mb: 0.5 }}>
          Panel de Administración
        </Typography>
        <Typography sx={{ color: "#6b7280", fontSize: 14 }}>
          Revisar y gestionar pedidos automatizados
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ px: 4, py: 3 }}>
        <Grid container spacing={5}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: 130,
                  width: 251,
                  border: '1px solid #e5e7eb',
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    boxShadow: 5,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
                    <Typography sx={{ color: "#6b7280", fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>
                      {card.title}
                    </Typography>
                    {/* <Box sx={{
                      backgroundColor: index === 2 ? "#d1fae5" : index === 3 ? "#f3e8ff" : "#ede9fe",
                      borderRadius: "8px",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      
                    </Box> */}
                  </Box>


                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: "#111827", mb: 0.5, fontSize: 32, lineHeight: 1 }}>
                      {card.desc}
                    </Typography>
                    <Box sx={{
                      backgroundColor: index === 2 ? "#d1fae5" : index === 3 ? "#f3e8ff" : "#ede9fe",
                      borderRadius: "8px",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      {card.icon}
                    </Box>
                  </Box>



                  <Typography sx={{ color: "#9ca3af", fontSize: 12 }}>
                    {card.quote}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Orders Section */}
      <Box sx={{ px: 4, pb: 4 }}>
        <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: 2, overflow: 'hidden' }}>
          {/* Header with Tabs */}
          <Box sx={{
            px: 3,
            py: 2.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', fontSize: 20 }}>
              Pedidos
            </Typography>

            <Box sx={{ display: 'flex', gap: 0 }}>
              {['Todos', 'Pendientes', 'Aprobados', 'Rechazados'].map((tab, index) => (
                <Button
                  key={tab}
                  onClick={() => setFiltro(tab === 'Pendientes' ? 'Pendiente' : tab === 'Aprobados' ? 'Aprobado' : tab === 'Rechazados' ? 'Rechazado' : tab)}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: 14,
                    bgcolor: filtro === (tab === 'Pendientes' ? 'Pendiente' : tab === 'Aprobados' ? 'Aprobado' : tab === 'Rechazados' ? 'Rechazado' : tab) ? '#f3f4f6' : 'transparent',
                    color: filtro === (tab === 'Pendientes' ? 'Pendiente' : tab === 'Aprobados' ? 'Aprobado' : tab === 'Rechazados' ? 'Rechazado' : tab) ? '#111827' : '#6b7280',
                    '&:hover': {
                      bgcolor: '#f9fafb',
                    },
                    borderRadius: index === 0 ? '6px 0 0 6px' : index === 3 ? '0 6px 6px 0' : 0,
                    px: 2.5,
                    py: 1,
                    minWidth: 'auto',
                    borderRight: index !== 3 ? '1px solid #e5e7eb' : 'none'
                  }}
                >
                  {tab}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Orders Table */}
          <TableContainer>
            <Table sx={{ minWidth: 1000 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: '#fafafa' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Pedido #</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Cliente</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Detalles</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Monto</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Puntuación LLM</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Estado</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Creado</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#6b7280', fontSize: 13, py: 1.5, borderBottom: '1px solid #e5e7eb' }}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datosFiltrados.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{
                      '&:hover': { bgcolor: '#fafafa' },
                      transition: 'background-color 0.15s'
                    }}
                  >
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Typography sx={{ fontWeight: 600, color: '#111827', fontSize: 14 }}>
                        {order.id}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Typography sx={{ fontWeight: 500, color: '#111827', fontSize: 14 }}>
                        {order.cliente.nombre}
                      </Typography>
                      <Typography sx={{ color: '#6b7280', fontSize: 12, mt: 0.3 }}>
                        {order.cliente.email}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2, maxWidth: 300, borderBottom: '1px solid #f0f0f0' }}>
                      <Typography sx={{ color: '#6b7280', fontSize: 13 }}>
                        {order.detalles}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: 14 }}>
                        ${order.monto.toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUp
                          size={16}
                          color={getPuntuacionColor(order.puntuacion)}
                          style={{ transform: order.puntuacion < 60 ? 'rotate(180deg)' : 'none' }}
                        />
                        <Typography sx={{ fontWeight: 700, fontSize: 14, color: getPuntuacionColor(order.puntuacion) }}>
                          {order.puntuacion}%
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Chip
                        icon={<span style={{ fontSize: 12, marginLeft: 8 }}>{getEstadoIcon(order.estado)}</span>}
                        label={order.estado}
                        sx={{
                          backgroundColor: getEstadoColor(order.estado).bg,
                          color: getEstadoColor(order.estado).text,
                          fontWeight: 600,
                          fontSize: 12,
                          height: 24,
                          borderRadius: 1,
                          '& .MuiChip-icon': {
                            margin: 0
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Typography sx={{ color: '#6b7280', fontSize: 13 }}>
                        {order.creado}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Button
                        component={Link}
                        to={`/detail/${order.id}`}  // Changed from /Detail.jsx
                        size="small"
                        startIcon={<Eye size={14} />}
                        sx={{
                          textTransform: 'none',
                          color: '#6366f1',
                          fontSize: 13,
                          fontWeight: 500,
                          minWidth: 70,
                          textDecoration: 'none',
                          '&:hover': {
                            backgroundColor: '#eef2ff',
                          }
                        }}
                      >
                        Ver
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}

export default Dashboard;