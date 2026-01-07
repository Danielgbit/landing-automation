export default function HowItWorks() {
    const steps = [
        'El cliente revisa los servicios',
        'Completa un formulario rápido',
        'Llega un mensaje claro por WhatsApp'
    ]

    return (
        <div className="mt-12">
            <h2 className="mb-4 text-center text-lg font-semibold">
                ¿Cómo funciona?
            </h2>

            <div className="space-y-3">
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="flex items-start gap-3 rounded-xl border bg-white p-4 shadow-sm"
                    >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                            {index + 1}
                        </span>
                        <p className="text-sm text-gray-700">
                            {step}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
