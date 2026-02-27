import SlideUp from "@/components/ui/motion/SlideUp"

export default function HowItWorks() {
    const steps = [
        {
            num: '01',
            title: 'Tráfico Inteligente',
            description: 'Las visitas llegan de tus redes o anuncios a un embudo diseñado específicamente para capturar a los más interesados.',
        },
        {
            num: '02',
            title: 'Filtro y Educación',
            description: 'Nuestra estructura responde las principales objeciones, eleva la percepción de valor y exige una acción clara.',
        },
        {
            num: '03',
            title: 'Conversación de Alto Intento',
            description: 'El cliente hace clic en el formulario y llega a tu WhatsApp con todos los datos necesarios para cerrar la venta.',
        },
    ]

    return (
        <section className="px-4 py-16">
            <SlideUp>
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-3">
                        Cómo la estructura <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">multiplica tus cierres</span>
                    </h2>
                    <p className="text-brand-muted text-sm sm:text-base max-w-lg mx-auto">
                        Es simple: eliminamos la fricción y educamos a tu prospecto antes de que te diga "hola".
                    </p>
                </div>
            </SlideUp>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-6">
                {steps.map((step, index) => (
                    <SlideUp key={step.num} delay={index * 0.1} className="flex-1 relative group">
                        {/* Línea conectora Desktop */}
                        {index !== steps.length - 1 && (
                            <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                        )}

                        <div className="h-full bg-brand-surface/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm group-hover:bg-brand-surface/60 group-hover:border-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                                <span className="font-display font-bold text-accent text-lg">{step.num}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3 leading-tight">{step.title}</h3>
                            <p className="text-sm text-brand-muted leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </SlideUp>
                ))}
            </div>
        </section>
    )
}
