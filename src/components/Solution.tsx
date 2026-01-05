/**
 * SOLUCIÓN
 * Objetivo: explicar el sistema de forma simple
 */

export default function Solution() {
    return (
        <section className="bg-white px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                    Un sistema simple que trabaja por ti
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-5 text-gray-700 text-sm">
                    <div>1️⃣ Cliente entra a tu página</div>
                    <div>2️⃣ Escribe por WhatsApp</div>
                    <div>3️⃣ El sistema responde solo</div>
                    <div>4️⃣ Agenda una cita</div>
                    <div>5️⃣ Tú solo atiendes</div>
                </div>

                <p className="mt-10 text-gray-700 max-w-2xl mx-auto">
                    Tú te enfocas en tu negocio.
                    <br />
                    El sistema se encarga de los mensajes.
                </p>
            </div>
        </section>
    );
}
