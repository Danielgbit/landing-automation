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
        <div className="min-h-screen bg-brand-light">
            <div className='mt-32 bg-white w-full h-full'></div>
            <SlideUp>
                <LandingNavbar />
            </SlideUp>
            <main>
                <Hero />
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
