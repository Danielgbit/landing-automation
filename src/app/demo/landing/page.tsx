import FakeNavbar from '@/components/demo/FakeNavbar'
import Benefits from '@/components/demo/Benefits'
import SimpleServiceList from '@/components/demo/SimpleServiceList'
import HowItWorks from '@/components/demo/HowItWorks'
import SimpleContactForm from '@/components/demo/SimpleContactForm'
import TrustIndicators from '@/components/demo/TrustIndicators'
import WhatsappPreview from '@/components/demo/WhatsappPreview'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-brand-light">
            <main className="
        mx-auto
        max-w-3xl
        rounded-2xl
        bg-brand-white
        px-6
        py-20
        shadow-card
      ">
                {/* HERO */}
                <header className="text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-brand-primary">
                        Agenda tu servicio fácilmente
                    </h1>
                    <p className="mt-3 text-sm text-brand-muted">
                        Sin llamadas · Atención rápida por WhatsApp
                    </p>
                </header>

                <Benefits />
                <SimpleServiceList />
                <HowItWorks />
                <WhatsappPreview />
                <SimpleContactForm />
                <TrustIndicators />
            </main>
        </div>
    )
}
