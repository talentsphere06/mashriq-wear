import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    // configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use another service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // your inbox
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 })
  }
}
