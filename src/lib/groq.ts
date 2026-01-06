/**
 * Cliente Groq (IA)
 * Centralizado para control de costos
 */

import Groq from 'groq-sdk'

export const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY!
})
