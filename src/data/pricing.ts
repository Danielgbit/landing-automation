/**
 * Información de precios
 * Este archivo contiene SOLO datos (no JSX)
 * Pensado para fácil mantenimiento y escalabilidad
 */

import { PricingPlanProps } from "@/types/pricing/pricingPlan";

export const pricingPlans: PricingPlanProps[] = [
    {
        id: "landing",
        title: "Landing Profesional",
        price: "$300.000 COP",
        subtitle: "Ideal para empezar a recibir clientes",
        features: [
            "Página one-page",
            "Servicios claros",
            "Formulario a WhatsApp",
            "Diseño profesional",
        ],
    },
    {
        id: "automation-basic",
        title: "Automatización Básica",
        price: "Desde $120.000 / mes",
        subtitle: "Para negocios que reciben muchos mensajes",
        features: [
            "WhatsApp automático",
            "Respuestas a preguntas frecuentes",
            "Agendamiento básico",
            "Soporte incluido",
        ],
        highlighted: true,
    },
    {
        id: "automation-pro",
        title: "Sistema Completo",
        price: "Desde $180.000 / mes",
        subtitle: "Todo automatizado y organizado",
        features: [
            "WhatsApp con IA",
            "Reservas automáticas",
            "Panel de control",
            "Ajustes personalizados",
        ],
    },
];
