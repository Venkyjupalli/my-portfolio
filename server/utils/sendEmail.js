const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, subject, message }) => {

    const currentDate = new Date().toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "short"
    });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // ===========================================
    // EMAIL TO YOU
    // ===========================================

    const adminMail = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `📩 New Portfolio Contact | ${subject}`,
        html: `
        <div style="background:#f4f7fb;padding:40px;font-family:Arial,sans-serif;">

            <div style="max-width:700px;margin:auto;background:white;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

                <div style="background:#0f172a;padding:30px;text-align:center;color:white;">

                    <h1 style="margin:0;font-size:28px;">
                        📩 Portfolio Contact
                    </h1>

                    <p style="margin-top:10px;color:#cbd5e1;">
                        Someone contacted you through your portfolio.
                    </p>

                </div>

                <div style="padding:35px;">

                    <table style="width:100%;border-collapse:collapse;">

                        <tr>
                            <td style="padding:12px;font-weight:bold;">👤 Name</td>
                            <td>${name}</td>
                        </tr>

                        <tr style="background:#f8fafc;">
                            <td style="padding:12px;font-weight:bold;">📧 Email</td>
                            <td>${email}</td>
                        </tr>

                        <tr>
                            <td style="padding:12px;font-weight:bold;">📝 Subject</td>
                            <td>${subject}</td>
                        </tr>

                    </table>

                    <br>

                    <h3>💬 Message</h3>

                    <div style="
                        background:#f8fafc;
                        padding:20px;
                        border-left:5px solid #2563eb;
                        border-radius:8px;
                        line-height:1.7;
                    ">
                        ${message}
                    </div>

                    <br>

                    <p><strong>🕒 Received:</strong> ${currentDate}</p>

                    <br>

                    <a href="mailto:${email}"
                    style="
                    background:#2563eb;
                    color:white;
                    padding:14px 25px;
                    text-decoration:none;
                    border-radius:8px;
                    font-weight:bold;
                    display:inline-block;">
                    Reply to ${name}
                    </a>

                </div>

                <div style="background:#f8fafc;padding:20px;text-align:center;color:#64748b;font-size:14px;">

                    Portfolio Contact Notification

                </div>

            </div>

        </div>
        `
    };

    // ===========================================
    // AUTO REPLY
    // ===========================================

    const userMail = {
        from: `"Jupalle Venkat" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "✅ Thank you for contacting Jupalle Venkat",
        html: `
        <div style="background:#eef4ff;padding:40px;font-family:Arial,sans-serif;">

            <div style="max-width:700px;margin:auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

                <div style="background:linear-gradient(135deg,#2563eb,#0ea5e9);padding:45px;text-align:center;color:white;">

                    <h1 style="margin:0;font-size:32px;">
                        Jupalle Venkat
                    </h1>

                    <p style="margin-top:10px;font-size:16px;">
                        Thank you for reaching out!
                    </p>

                </div>

                <div style="padding:40px;">

                    <h2 style="color:#0f172a;">
                        Hello ${name} 👋
                    </h2>

                    <p style="line-height:1.8;color:#475569;">

                        Thank you for contacting me through my portfolio.

                        I have successfully received your message and appreciate you taking the time to reach out.

                    </p>

                    <p style="line-height:1.8;color:#475569;">

                        I'll review your message carefully and get back to you as soon as possible.

                    </p>

                    <hr style="margin:35px 0;">

                    <h3>Your Submission</h3>

                    <p><strong>Subject:</strong> ${subject}</p>

                    <div style="
                    background:#f8fafc;
                    padding:18px;
                    border-left:5px solid #22c55e;
                    border-radius:8px;
                    line-height:1.7;
                    ">
                        ${message}
                    </div>

                    <br><br>

                    <div style="text-align:center;">

                        <a href="https://venkyjupalli.github.io/my-portfolio/"
                        style="
                        background:#2563eb;
                        color:white;
                        text-decoration:none;
                        padding:14px 22px;
                        border-radius:8px;
                        margin:6px;
                        display:inline-block;">
                        🌐 Portfolio
                        </a>

                        <a href="https://github.com/Venkyjupalli"
                        style="
                        background:#111827;
                        color:white;
                        text-decoration:none;
                        padding:14px 22px;
                        border-radius:8px;
                        margin:6px;
                        display:inline-block;">
                        💻 GitHub
                        </a>

                        <a href="https://www.linkedin.com/in/jupallevenkat/"
                        style="
                        background:#0A66C2;
                        color:white;
                        text-decoration:none;
                        padding:14px 22px;
                        border-radius:8px;
                        margin:6px;
                        display:inline-block;">
                        💼 LinkedIn
                        </a>

                    </div>

                    <br><br>

                    <div style="
                    background:#f8fafc;
                    border-radius:10px;
                    padding:20px;
                    ">

                        <strong>Submission Time</strong>

                        <br><br>

                        ${currentDate}

                    </div>

                    <br>

                    <p style="color:#64748b;line-height:1.8;">

                        This is an automated confirmation email.

                        If you have any additional information to share,
                        simply reply to this email.

                    </p>

                    <br>

                    <p>

                        Best Regards,

                        <br><br>

                        <strong>Jupalle Venkat</strong>

                        <br>

                        Aspiring Data Analyst | Full Stack Developer

                    </p>

                </div>

                <div style="
                background:#0f172a;
                color:white;
                text-align:center;
                padding:22px;
                font-size:14px;
                ">

                    © ${new Date().getFullYear()} Jupalle Venkat • Built with Node.js, Express & MongoDB

                </div>

            </div>

        </div>
        `
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
};

module.exports = sendEmail;