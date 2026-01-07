export default function WhatsappPreview() {
    return (
        <div className="mt-12 rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-center text-sm font-semibold text-gray-800">
                Así te escribirán tus clientes
            </h3>

            <div className="mx-auto max-w-xs rounded-xl bg-gray-100 p-3">
                <div className="rounded-lg bg-white p-3 text-sm text-gray-800 shadow">
                    Hola, mi nombre es <strong>Laura</strong> y estoy
                    interesada en el servicio de{' '}
                    <strong>Limpieza facial</strong>.
                </div>

                <p className="mt-2 text-right text-xs text-gray-400">
                    WhatsApp · mensaje automático
                </p>
            </div>
        </div>
    )
}
