import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'
import { NextResponse, NextRequest } from 'next/server'

const resend = new Resend('re_QuKVzsgv_Eh97RcuAJgATe9GbbzJX5WPk')

export async function POST(request) {
  try {
    const info = await request.json()

    const data = await resend.emails.send({
      from: info.from,
      to: info.to,
      subject: info.subject,
      react: EmailTemplate({
        name: info.emailProps.name,
        email: info.emailProps.email,
        phone: info.emailProps.phone,
        asunto: info.emailProps.asunto,
        message: info.emailProps.message,
      }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}
