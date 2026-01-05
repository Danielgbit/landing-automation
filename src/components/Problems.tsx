/**
 * PROBLEMAS DEL CLIENTE
 * Objetivo: identificación emocional
 */

export default function Problems() {
    return (
        <section className="bg-gray-50 px-6 py-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    ¿Te pasa algo de esto?
                </h2>

                <ul className="mt-10 grid gap-4 md:grid-cols-2 text-gray-700">
                    <li>❌ Te escriben por WhatsApp y respondes tarde</li>
                    <li>❌ Siempre preguntan precios y horarios</li>
                    <li>❌ Pierdes clientes fuera de horario</li>
                    <li>❌ WhatsApp te quita tiempo de trabajo</li>
                    <li>❌ No tienes un sistema para organizar citas</li>
                </ul>

                <p className="mt-8 text-center text-gray-700 max-w-3xl mx-auto">
                    El problema no es que no tengas clientes.
                    <br />
                    <strong>El problema es que no tienes un sistema que los atienda por ti.</strong>
                </p>
            </div>
        </section>
    );
}
