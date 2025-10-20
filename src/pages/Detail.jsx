import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    TrendingUp,
    User,
    DollarSign,
    FileText,
    Calendar,
    CheckCircle,
    Home
} from 'lucide-react';

// Order data - same as Dashboard
const ordersData = [
    {
        id: 'ORD-2024-001',
        cliente: { nombre: 'Sarah Johnson', email: 'sarahj@example.com' },
        detalles: 'Premium subscription plan - Annual billing with advanced features including API access and priority support',
        monto: 1299.99,
        puntuacion: 95,
        estado: 'Aprobado',
        creado: 'Oct 17, 08:16',
        revisado: 'jefe.1988@gmail.com',
        fechaRevisado: 'Oct 17, 14:01'
    },
    {
        id: 'ORD-2024-002',
        cliente: { nombre: 'Michael Chen', email: 'm.chen@company.com' },
        detalles: 'Enterprise package for team of 50 users with advanced analytics, custom integrations, and dedicated support manager',
        monto: 4500.00,
        puntuacion: 72,
        estado: 'Aprobado',
        creado: 'Oct 17, 09:30',
        revisado: 'admin@example.com',
        fechaRevisado: 'Oct 17, 15:22'
    },
    {
        id: 'ORD-2024-003',
        cliente: { nombre: 'Emma Williams', email: 'emma.w@startup.io' },
        detalles: 'Basic plan upgrade to Professional tier with additional storage and priority email support',
        monto: 299.00,
        puntuacion: 88,
        estado: 'Aprobado',
        creado: 'Oct 17, 10:45',
        revisado: 'jefe.1988@gmail.com',
        fechaRevisado: 'Oct 17, 16:10'
    },
    {
        id: 'ORD-2024-004',
        cliente: { nombre: 'David Martinez', email: 'david.m@email.com' },
        detalles: 'Bulk purchase of 100 API credits for integration testing and development purposes',
        monto: 89.99,
        puntuacion: 65,
        estado: 'Rechazado',
        creado: 'Oct 17, 11:20',
        revisado: 'admin@example.com',
        fechaRevisado: 'Oct 17, 13:45'
    },
    {
        id: 'ORD-2024-005',
        cliente: { nombre: 'Lisa Anderson', email: 'l.anderson@corp.com' },
        detalles: 'Monthly subscription renewal with auto-billing enabled and additional user seats',
        monto: 149.00,
        puntuacion: 98,
        estado: 'Pendiente',
        creado: 'Oct 17, 12:05',
        revisado: null,
        fechaRevisado: null
    },
];

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the order by ID
    const order = ordersData.find(o => o.id === id);

    // If order not found
    if (!order) {
        return (
            <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
                <h2>Pedido no encontrado</h2>
                <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                    Volver al Dashboard
                </button>
            </div>
        );
    }

    // Get status colors
    const getEstadoColor = (estado) => {
        const colors = {
            Aprobado: { bg: '#d1f2eb', text: '#0f5132' },
            Pendiente: { bg: '#fef3c7', text: '#92400e' },
            Rechazado: { bg: '#fee2e2', text: '#991b1b' }
        };
        return colors[estado] || colors.Pendiente;
    };

    const getPuntuacionColor = (puntuacion) => {
        if (puntuacion >= 80) return '#2dce89';
        if (puntuacion >= 60) return '#f59e0b';
        return '#ef4444';
    };

    const getConfianzaText = (puntuacion) => {
        if (puntuacion >= 80) return 'High confidence order. Customer profile matches target demographic, payment method verified, and order details are consistent with previous successful orders.';
        if (puntuacion >= 60) return 'Medium confidence order. Some verification needed. Customer profile partially matches requirements, payment method pending verification.';
        return 'Low confidence order. Multiple risk factors detected. Customer profile requires additional verification and fraud check recommended.';
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '10px 0', fontSize: '13px' }}>
                <div className="container" style={{ maxWidth: '1140px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Home size={14} style={{ marginRight: '6px' }} />
                        <span>Panel de Control</span>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <FileText size={14} style={{ marginRight: '6px' }} />
                        <span>Detalles del Pedido</span>
                    </div>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '1140px', paddingTop: '24px', paddingBottom: '40px' }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: '#3A4750',
                        color: "#ffffffff",
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        marginBottom: '24px',
                        fontWeight: '400',
                    }}
                >
                    <ArrowLeft size={16} />
                    Volver a Pedidos
                </button>

                {/* Main Card */}
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    padding: '32px'
                }}>
                    {/* Order Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                        <div>
                            <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '4px', color: '#212529' }}>
                                Pedido {order.id}
                            </h2>
                            <p style={{ fontSize: '14px', color: '#6c757d', margin: 0 }}>
                                Revisar y aprobar o rechazar
                            </p>
                        </div>
                        <span style={{
                            backgroundColor: getEstadoColor(order.estado).bg,
                            color: getEstadoColor(order.estado).text,
                            padding: '4px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500'
                        }}>
                            {order.estado}
                        </span>
                    </div>

                    {/* Confidence Score Card */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        padding: '24px',
                        marginBottom: '32px',
                        position: 'relative'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <h6 style={{ fontSize: '15px', fontWeight: '500', margin: 0, color: '#212529' }}>
                                Puntuación de Confianza LLM
                            </h6>
                            <TrendingUp size={18} color="#6c757d" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '16px', gap: '8px' }}>
                            <span style={{
                                fontSize: '56px',
                                fontWeight: '700',
                                color: '#5e72e4',
                                lineHeight: '1',
                                letterSpacing: '-2px'
                            }}>
                                {order.puntuacion}%
                            </span>
                            <span style={{ fontSize: '15px', color: '#6c757d', marginBottom: '8px' }}>
                                confianza
                            </span>
                        </div>
                        <div style={{
                            width: '100%',
                            height: '8px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '10px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${order.puntuacion}%`,
                                height: '100%',
                                backgroundColor: getPuntuacionColor(order.puntuacion),
                                borderRadius: '10px'
                            }}></div>
                        </div>
                    </div>

                    {/* Client Info and Total */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '6px' }}>
                                <User size={16} color="#6c757d" />
                                <span style={{ fontSize: '13px', color: '#6c757d', fontWeight: '400' }}>
                                    Información del Cliente
                                </span>
                            </div>
                            <h5 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#212529' }}>
                                {order.cliente.nombre}
                            </h5>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontSize: '14px', color: '#6c757d' }}>✉️</span>
                                <span style={{ fontSize: '14px', color: '#6c757d' }}>{order.cliente.email}</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '6px' }}>
                                <DollarSign size={16} color="#6c757d" />
                                <span style={{ fontSize: '13px', color: '#6c757d', fontWeight: '400' }}>
                                    Monto Total
                                </span>
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '700', margin: 0, color: '#212529' }}>
                                ${order.monto.toFixed(2)}
                            </h3>
                        </div>
                    </div>

                    <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #e9ecef' }} />

                    {/* Order Details */}
                    <div style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '6px' }}>
                            <FileText size={16} color="#6c757d" />
                            <h6 style={{ fontSize: '15px', fontWeight: '600', margin: 0, color: '#212529' }}>
                                Detalles del Pedido
                            </h6>
                        </div>
                        <p style={{ fontSize: '14px', color: '#495057', margin: 0, lineHeight: '1.6' }}>
                            {order.detalles}
                        </p>
                    </div>

                    {/* LLM Analysis */}
                    <div style={{ marginBottom: '32px' }}>
                        <h6 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#212529' }}>
                            Análisis LLM
                        </h6>
                        <div style={{
                            backgroundColor: order.puntuacion >= 80 ? '#d1ecf1' : order.puntuacion >= 60 ? '#fff3cd' : '#f8d7da',
                            border: `1px solid ${order.puntuacion >= 80 ? '#bee5eb' : order.puntuacion >= 60 ? '#ffeaa7' : '#f5c6cb'}`,
                            borderRadius: '6px',
                            padding: '16px'
                        }}>
                            <p style={{
                                fontSize: '14px',
                                color: order.puntuacion >= 80 ? '#0c5460' : order.puntuacion >= 60 ? '#856404' : '#721c24',
                                margin: 0,
                                lineHeight: '1.6'
                            }}>
                                {getConfianzaText(order.puntuacion)}
                            </p>
                        </div>
                    </div>

                    <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #e9ecef' }} />

                    {/* Timestamps */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                            <Calendar size={14} color="#6c757d" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span style={{ fontSize: '13px', color: '#6c757d', lineHeight: '1.5' }}>
                                Creado el 17 de October de 2025 a las {order.creado}
                            </span>
                        </div>
                        {order.revisado && (
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <CheckCircle size={14} color="#6c757d" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span style={{ fontSize: '13px', color: '#6c757d', lineHeight: '1.5' }}>
                                    Revisado por {order.revisado} el 17 de October de 2025 a las {order.fechaRevisado}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail