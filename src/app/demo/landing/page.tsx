import FakeNavbar from '@/components/demo/FakeNavbar'
import Benefits from '@/components/demo/Benefits'
import SimpleServiceList from '@/components/demo/SimpleServiceList'
import HowItWorks from '@/components/demo/HowItWorks'
import SimpleContactForm from '@/components/demo/SimpleContactForm'
import TrustIndicators from '@/components/demo/TrustIndicators'
import WhatsappPreview from '@/components/demo/WhatsappPreview'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <FakeNavbar />

            <main className="mx-auto max-w-3xl rounded-2xl mb-20 mt-20 px-4 pb-24 pt-20 text-center bg-gray-200">
                {/* Hero */}
                <h1 className="text-3xl font-semibold">
                    Agenda tu servicio fácilmente
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Sin llamadas · Atención rápida por WhatsApp
                </p>

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
