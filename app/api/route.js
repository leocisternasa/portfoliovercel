import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ status: 'Probando ruta con el chinito' })
}
