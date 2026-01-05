export interface PricingPlanProps {
    id: string;
    title: string;
    price: string;
    subtitle: string;
    features: string[];
    highlighted?: boolean;
}