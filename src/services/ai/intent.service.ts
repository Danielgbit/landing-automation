import { groq } from '@/lib/groq'

export type Intent =
    | 'info_servicios'
    | 'info_precios'
    | 'agendar_cita'
    | 'mixto'

export async function detectIntent(
    message: string
): Promise<{ intent: Intent }> {
    const prompt = `
Eres un asistente para un negocio de estética.

Detecta la intención del cliente.
Opciones:
- info_servicios
- info_precios
- agendar_cita
- mixto

Mensaje:
"${message}"

Responde SOLO en JSON:
{
  "intent": "info_servicios | info_precios | agendar_cita | mixto"
}
`

    const completion = await groq.chat.completions.create({
        model: 'llama3-8b-8192',
        temperature: 0,
        messages: [{ role: 'user', content: prompt }]
    })

    return JSON.parse(
        completion.choices[0].message.content || '{}'
    )
}
