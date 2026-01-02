import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message, website } = body || {};

        // Honeypot (spam bots fill it)
        if (website) {
            return Response.json({ ok: true }, { status: 200 });
        }

        if (!name || !email || !message) {
            return Response.json(
                { ok: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        const user = process.env.GMAIL_USER;
        const pass = process.env.GMAIL_APP_PASSWORD;
        const to = process.env.CONTACT_TO || user;

        if (!user || !pass || !to) {
            return Response.json(
                { ok: false, error: "Server email is not configured." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user, pass },
        });

        const subject = `Portfolio Contact: ${name}`;
        const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        await transporter.sendMail({
            from: `"${name}" <${user}>`, // Gmail requires from to be your account
            replyTo: email,              // so you can reply to the sender
            to,
            subject,
            text,
            html: `
        <div style="font-family: ui-sans-serif, system-ui; line-height: 1.6;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
        });

        return Response.json({ ok: true }, { status: 200 });
    } catch (err: any) {
        return Response.json(
            { ok: false, error: "Failed to send message." },
            { status: 500 }
        );
    }
}

// Basic escape to avoid HTML injection
function escapeHtml(str: string) {
    return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
