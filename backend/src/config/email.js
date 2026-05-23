import nodemailer from 'nodemailer';

const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT),
        secure: parseInt(process.env.EMAIL_PORT) === 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

export const sendContactEmail = async (contactData) => {
    const transporter = createTransporter();

    const subjectLabel = {
        dev:        'Développement Web',
        design:     'Design Interface',
        consulting: 'Consulting Stratégique',
    }[contactData.subject] ?? contactData.subject;

    const mailOptions = {
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to:   process.env.EMAIL_TO,
        replyTo: contactData.email,
        subject: `Nouveau Message : ${contactData.name}`,
        html: `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                        background-color: #ffffff;
                        color: #111111;
                        line-height: 1.6;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 550px;
                        margin: 40px auto;
                        padding: 0 20px;
                    }
                    .header {
                        border-bottom: 1px solid #eeeeee;
                        padding-bottom: 20px;
                        margin-bottom: 30px;
                    }
                    .header h2 {
                        font-size: 18px;
                        font-weight: 600;
                        color: #555555;
                        margin: 0;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .meta-info {
                        margin-bottom: 40px;
                    }
                    .meta-item {
                        margin-bottom: 15px;
                    }
                    .label {
                        font-size: 12px;
                        color: #999999;
                        text-transform: uppercase;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                    }
                    .value {
                        font-size: 16px;
                        color: #111111;
                        font-weight: 500;
                    }
                    .value a {
                        color: #111111;
                        text-decoration: underline;
                    }
                    .message-box {
                        background-color: #f9f9f9;
                        padding: 25px;
                        border-radius: 4px;
                        font-size: 15px;
                        color: #333333;
                        border-left: 2px solid #111111;
                    }
                    .footer {
                        margin-top: 50px;
                        font-size: 12px;
                        color: #aaaaaa;
                        border-top: 1px solid #eeeeee;
                        padding-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>Demande de Contact</h2>
                    </div>

                    <div class="meta-info">
                        <div class="meta-item">
                            <div class="label">Date du message</div>
                            <div class="value">${new Date().toLocaleString('fr-FR')}</div>
                        </div>
                        <div class="meta-item">
                            <div class="label">Expéditeur</div>
                            <div class="value">${contactData.name}</div>
                        </div>
                        <div class="meta-item">
                            <div class="label">Email</div>
                            <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
                        </div>
                        ${contactData.phone ? `
                        <div class="meta-item">
                            <div class="label">Téléphone</div>
                            <div class="value">${contactData.phone}</div>
                        </div>` : ''}
                        ${contactData.company ? `
                        <div class="meta-item">
                            <div class="label">Entreprise</div>
                            <div class="value">${contactData.company}</div>
                        </div>` : ''}
                        <div class="meta-item">
                            <div class="label">Service souhaité</div>
                            <div class="value">${subjectLabel}</div>
                        </div>
                    </div>

                    <div class="label" style="margin-bottom: 10px;">Message</div>
                    <div class="message-box">
                        ${contactData.message.replace(/\n/g, '<br>')}
                    </div>

                    <div class="footer">
                        Ce message a été envoyé via le formulaire de contact de votre portfolio.<br>
                        Vous pouvez répondre directement à cet email.
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Email error:', error);
        throw error;
    }
};

export default { sendContactEmail };
