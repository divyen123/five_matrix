import { NextResponse } from "next/server"
import { Resend } from "resend"

type EnquiryPayload = {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
}

const recipient = "info@fivematrixship.com"

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

  const subject = `Five Matrix Shipping Enquiry from ${name}`
  const textContent =
    `Name: ${name}\n` +
    `Company: ${company}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `How can we help?: ${message}`

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #0284c7; padding-bottom: 12px;">New Website Enquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Name:</td>
          <td style="padding: 8px 0; color: #0f172a;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company:</td>
          <td style="padding: 8px 0; color: #0f172a;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0; color: #0284c7;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0; color: #0f172a;">${phone}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
        <p style="margin: 0 0 8px 0; font-weight: bold; color: #334155;">Message:</p>
        <p style="margin: 0; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">${message}</p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">Sent from Five Matrix Shipping Website</p>
    </div>
  `

  // Resend API (Primary)
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    const from = process.env.RESEND_FROM_EMAIL || "Five Matrix Shipping <info@fivematrixship.com>"
    const resend = new Resend(resendApiKey)

    const { error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
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

  // Web3Forms Fallback (fetch-based, zero extra dependencies)
  const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY
  if (web3FormsKey) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3FormsKey,
          to: recipient,
          subject,
          from_name: `${name} (Five Matrix Enquiry)`,
          replyto: email,
          name,
          company,
          email,
          phone,
          message,
        }),
      })

      const result = await response.json().catch(() => null)
      if (response.ok && result?.success) {
        return NextResponse.json({ ok: true })
      }

      return NextResponse.json(
        { error: result?.message || "Unable to send enquiry via Web3Forms." },
        { status: 502 }
      )
    } catch (err) {
      return NextResponse.json({ error: "Failed to connect to email provider." }, { status: 502 })
    }
  }

  return NextResponse.json(
    {
      error:
        "Email service is not configured yet. Please set RESEND_API_KEY in your hosting environment variables.",
    },
    { status: 500 }
  )
}
