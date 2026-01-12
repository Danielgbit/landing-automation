import EcommerceHero from "@/components/demo/ecommerce/EcommerceHero"
import EcommerceFeatures from "@/components/demo/ecommerce/EcommerceFeatures"
import EcommerceHowItWorks from "@/components/demo/ecommerce/EcommerceHowItWorks"
import EcommerceCTA from "@/components/demo/ecommerce/EcommerceCTA"
import SlideUp from "@/components/ui/motion/SlideUp"
import EcommerceProductGrid from "@/components/demo/ecommerce/EcommerceProductGrid"

export default function EcommerceDemoPage() {
    return (
        <main className="min-h-screen bg-brand-light">
            <SlideUp>
                <EcommerceHero />
            </SlideUp>
            <SlideUp>
                <EcommerceFeatures />
            </SlideUp>

            <SlideUp>
                <EcommerceProductGrid />
            </SlideUp>
            <SlideUp>
                <EcommerceHowItWorks />
            </SlideUp>
            <SlideUp>
                <EcommerceCTA />
            </SlideUp>
        </main>
    )
}
