import FadeIn from "@/components/ui/motion/FadeIn"
import SlideUp from "@/components/ui/motion/SlideUp"

export default function FAQ() {
    const faqs = [
        {
            q: '¿Qué me entregan exactamente?',
            a: 'Una página web completa (sin plantillas repetidas), optimizada bajo principios de B2B Lead Gen. Incluye el diseño responsivo, hosting, certificado SSL y botones enlazados a tu WhatsApp.',
        },
        {
            q: '¿Tengo que saber programar?',
            a: 'Cero. Nosotros configuramos absolutamente toda la infraestructura técnica. Solo tienes que darnos el listado de tus servicios, preparamos todo y en 48 horas te entregamos el enlace funcional.',
        },
        {
            q: '¿Cómo llegan los clientes a mi WhatsApp?',
            a: 'Cuando un visitante hace clic en "Comprar" o "Agendar" en tu página, se abre automáticamente su aplicación de WhatsApp con un mensaje pre-escrito (ej: "Hola, me interesa la limpieza facial..."). Directo a tu celular.',
        },
        {
            q: '¿Qué pasa si mi negocio es diferente a este demo?',
            a: 'Nos adaptamos. La estructura subyacente de "captura de intenciones" (el embudo) es la misma porque funciona, pero el copy, las imágenes y tus ofertas serán exclusivos de tu negocio.',
        },
        {
            q: '¿Incluye mantenimiento mensual?',
            a: 'El precio inicial cubre diseño y desarrollo. Ofrecemos paquetes opcionales de soporte para cambios de contenido, pero la página seguirá activa y operativa sin costos ocultos de nuestra parte el primer año.',
        },
    ]

    return (
        <section id="faq" className="px-4 py-16 bg-brand-surface/20 border-y border-white/5">
            <SlideUp>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-3">
                        Respondemos tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-500">dudas técnicas</span>
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto">
                        Transparencia radical. Sabemos cómo estructurar embudos, aquí respondemos las preguntas más comunes antes de iniciar.
                    </p>
                </div>
            </SlideUp>

            <div className="max-w-3xl mx-auto flex flex-col gap-3">
                {faqs.map((item, i) => (
                    <FadeIn key={item.q} delay={i * 0.1}>
                        <details className="group rounded-2xl border border-white/5 bg-brand-surface/30 backdrop-blur-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium hover:text-accent transition-colors">
                                <h3 className="text-base sm:text-lg">{item.q}</h3>

                                <span className="relative shrink-0 w-5 h-5 ml-4">
                                    <svg
                                        className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <svg
                                        className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                    </svg>
                                </span>
                            </summary>

                            <p className="px-6 pb-6 text-brand-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                                {item.a}
                            </p>
                        </details>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
