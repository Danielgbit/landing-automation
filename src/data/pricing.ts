import { PricingPlanProps } from "@/types/pricing/pricingPlan";

export const pricingPlans: PricingPlanProps[] = [
    {
        id: "landing",
        title: "Landing Profesional",
        price: "$300.000 COP",
        subtitle: "Convierte visitas en mensajes de WhatsApp",
        features: [
            "Landing page profesional",
            "Menú con 3 secciones",
            "Botón flotante de WhatsApp",
            "Formulario conectado a WhatsApp",
            "Diseño optimizado para móviles",
            "Dominio .com incluido",
        ],
    },

    {
        id: "ecommerce",
        title: "Tienda Online (Ecommerce)",
        price: "$890.000 COP",
        subtitle: "Empieza a vender productos por internet",
        features: [
            "Catálogo de hasta 10 productos",
            "Carrito de compras",
            "Pedidos por WhatsApp o pago manual",
            "Página de producto",
            "Diseño mobile + desktop",
            "Dominio .com incluido",
        ],
        highlighted: true,
    },

    {
        id: "automation-basic",
        title: "WhatsApp Automático",
        price: "Desde $120.000 / mes",
        subtitle: "Responde clientes sin estar conectado",
        features: [
            "Respuestas automáticas",
            "Información de servicios",
            "Agendamiento básico",
            "Soporte incluido",
        ],
    },

    {
        id: "automation-pro",
        title: "Sistema Completo",
        price: "Desde $180.000 / mes",
        subtitle: "Ventas y atención totalmente automatizadas",
        features: [
            "WhatsApp con IA",
            "Reservas automáticas",
            "Panel de control",
            "Flujos personalizados",
        ],
    },
];
