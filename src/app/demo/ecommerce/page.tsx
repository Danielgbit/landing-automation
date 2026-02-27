import EcommerceHero from "@/components/demo/ecommerce/EcommerceHero"
import EcommerceFeatures from "@/components/demo/ecommerce/EcommerceFeatures"
import EcommerceHowItWorks from "@/components/demo/ecommerce/EcommerceHowItWorks"
import EcommerceCTA from "@/components/demo/ecommerce/EcommerceCTA"
import SlideUp from "@/components/ui/motion/SlideUp"
import EcommerceProductGrid from "@/components/demo/ecommerce/EcommerceProductGrid"

export default function EcommerceDemoPage() {
    return (
        <div className="min-h-screen bg-brand-dark text-white selection:bg-accent/30 selection:text-white relative overflow-hidden font-sans">
            {/* Background Effects (Consistency with Landing Demo) */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay z-0" />

            {/* Glows radiales ciber-tech */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-32 mt-12 sm:mt-20">
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
        </div>
    )
}
