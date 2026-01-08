export default function WhatsappPreview() {
    return (
        <section className="mt-16 rounded-2xl border border-gray-200 bg-brand-white p-6 shadow-soft">
            <h3 className="mb-4 text-center text-sm font-semibold text-brand-primary">
                Así te escribirán tus clientes
            </h3>

            <div className="mx-auto max-w-xs rounded-xl bg-brand-light p-3">
                <div className="rounded-lg bg-brand-white p-3 text-sm text-brand-muted shadow-soft">
                    Hola, mi nombre es <strong>Laura</strong> y estoy interesada
                    en el servicio de <strong>Limpieza facial</strong>.
                </div>

                <p className="mt-2 text-right text-xs text-brand-subtle">
                    WhatsApp · mensaje automático
                </p>
            </div>
        </section>
    )
}
