const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ name, email, subject, message }) => {
  const currentDate = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // ===========================
  // ADMIN EMAIL
  // ===========================

  const adminMail = {
    subject: `📩 New Portfolio Contact | ${subject}`,
    html: `
      <div style="background:#f4f7fb;padding:40px;font-family:Arial,sans-serif;">
        <div style="max-width:700px;margin:auto;background:white;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

          <div style="background:#0f172a;padding:30px;text-align:center;color:white;">
            <h1 style="margin:0;">📩 Portfolio Contact</h1>
            <p>Someone contacted you through your portfolio.</p>
          </div>

          <div style="padding:35px;">

            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📝 Subject:</strong> ${subject}</p>

            <h3>💬 Message</h3>

            <div style="background:#f8fafc;padding:20px;border-left:5px solid #2563eb;">
              ${message}
            </div>

            <br>

            <p><strong>Received:</strong> ${currentDate}</p>

          </div>

        </div>
      </div>
    `,
  };

  // ===========================
  // USER AUTO REPLY
  // ===========================

  const userMail = {
    subject: "✅ Thank you for contacting Jupalle Venkat",
    html: `
      <div style="background:#eef4ff;padding:40px;font-family:Arial,sans-serif;">

        <div style="max-width:700px;margin:auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

          <div style="background:linear-gradient(135deg,#2563eb,#0ea5e9);padding:45px;text-align:center;color:white;">
            <h1>Jupalle Venkat</h1>
            <p>Thank you for reaching out!</p>
          </div>

          <div style="padding:40px;">

            <h2>Hello ${name} 👋</h2>

            <p>
              Thank you for contacting me through my portfolio.
            </p>

            <p>
              I have received your message successfully and I'll get back to you as soon as possible.
            </p>

            <hr>

            <h3>Your Message</h3>

            <p><strong>Subject:</strong> ${subject}</p>

            <div style="background:#f8fafc;padding:18px;border-left:5px solid #22c55e;">
              ${message}
            </div>

            <br>

            <p><strong>Submitted:</strong> ${currentDate}</p>

            <br>

            <a href="https://venkyjupalli.github.io/my-portfolio/"
              style="background:#2563eb;color:white;padding:12px 20px;text-decoration:none;border-radius:8px;">
              Visit Portfolio
            </a>

          </div>

        </div>

      </div>
    `,
  };

  try {
    // Email to you
    const adminResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jupallivenkat634@gmail.com",
      replyTo: email,
      subject: adminMail.subject,
      html: adminMail.html,
    });

    console.log("Admin Response:", adminResponse);

    // Auto reply
    const userResponse = await resend.emails.send({
      from: "Jupalle Venkat <onboarding@resend.dev>",
      to: email,
      subject: userMail.subject,
      html: userMail.html,
    });

    console.log("User Response:", userResponse);

    console.log("✅ Emails sent successfully");
  } catch (error) {
    console.error("❌ Resend Error:", error);
    throw error;
  }
};

module.exports = sendEmail;