import { NextResponse } from "next/server"
import { Resend } from "resend"

type EnquiryPayload = {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
}

const recipient = "info@fivematrixshipping.com"

export async function POST(request: Request) {
  let payload: EnquiryPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 })
  }

  const name = payload.name?.trim()
  const company = payload.company?.trim()
  const email = payload.email?.trim()
  const phone = payload.phone?.trim()
  const message = payload.message?.trim()

  if (!name || !company || !email || !phone || !message) {
    return NextResponse.json({ error: "Please fill in all enquiry fields." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL || "Five Matrix Shipping <onboarding@resend.dev>"

  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured yet." }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to: recipient,
    replyTo: email,
    subject: `Five Matrix Shipping Enquiry from ${name}`,
    text:
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `How can we help?: ${message}`,
  })

  if (error) {
    console.error("Resend enquiry failed", error)
    return NextResponse.json(
      { error: error.message || "Unable to send enquiry right now." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
