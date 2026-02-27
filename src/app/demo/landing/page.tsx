import Hero from '@/components/demo/landing/Hero'
import SocialProof from '@/components/demo/landing/SocialProof'
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
        <div className="min-h-screen bg-brand-dark overflow-hidden relative selection:bg-accent/30 font-sans">
            {/* Ambient Noise & Glow */}
            <div className="bg-noise absolute inset-0 -z-10 opacity-20 pointer-events-none" />
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[140px] -z-10 opacity-60 pointer-events-none" />
            <div className="absolute top-[60%] -left-64 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none" />
            <div className="absolute top-[80%] -right-64 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none" />


            <main className="relative z-10 flex flex-col gap-24 sm:gap-32 pb-32">
                <div className="mt-12 sm:mt-20">
                    <Hero />
                </div>
                <SocialProof />
                <WhatYouGet />
                <HowItWorks />
                <Benefits />
                <Services />
                <FAQ />
                <FinalCTA />
            </main>

            <FloatingWhatsApp />
        </div>
    )
}
