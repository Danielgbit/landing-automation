import LandingNavbar from '@/components/demo/landing/LandingNavbar'
import Hero from '@/components/demo/landing/Hero'
import Services from '@/components/demo/landing/Services'
import Benefits from '@/components/demo/landing/Benefits'
import HowItWorks from '@/components/demo/landing/HowItWorks'
import FAQ from '@/components/demo/landing/FAQ'
import FinalCTA from '@/components/demo/landing/FinalCTA'
import FloatingWhatsApp from '@/components/demo/landing/FloatingWhatsApp'
import WhatYouGet from '@/components/demo/landing/WhatYouGet'
import SlideUp from '@/components/ui/motion/SlideUp'

export default function DemoLandingPage() {
    return (
        <div className="min-h-screen bg-brand-dark overflow-hidden relative selection:bg-accent/30">
            {/* Ambient Noise */}
            <div className="bg-noise absolute inset-0 -z-10 opacity-20 pointer-events-none" />

            {/* Navbar Floating */}
            <div className="pt-8">
                <SlideUp>
                    <LandingNavbar />
                </SlideUp>
            </div>

            <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-32">
                <div className="mt-16 sm:mt-24">
                    <Hero />
                </div>
                <WhatYouGet />
                <Services />
                <Benefits />
                <HowItWorks />
                <FAQ />
                <FinalCTA />
            </main>

            <FloatingWhatsApp />
        </div>
    )
}
