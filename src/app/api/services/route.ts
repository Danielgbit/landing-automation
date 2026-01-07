// src/app/api/services/route.ts

import { NextResponse } from 'next/server'
import { getActiveServices } from '@/services/services.service'

export async function GET() {
    const services = await getActiveServices()
    return NextResponse.json(services)
}
