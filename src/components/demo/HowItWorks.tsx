export default function HowItWorks() {
    const steps = [
        'Revisa los servicios disponibles',
        'Completa un formulario simple',
        'Llega un mensaje claro por WhatsApp',
    ]

    return (
        <section className="mt-16">
            <h2 className="mb-6 text-center text-base font-semibold text-brand-primary">
                ¿Cómo funciona?
            </h2>

            <div className="space-y-3">
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="flex items-start gap-3 rounded-xl border border-gray-200 bg-brand-white p-4 shadow-soft"
                    >
                        <span className="
              flex h-6 w-6 items-center justify-center
              rounded-full
              bg-brand-dark
              text-xs text-white
            ">
                            {index + 1}
                        </span>
                        <p className="text-sm text-brand-muted">
                            {step}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
