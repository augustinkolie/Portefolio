import nodemailer from 'nodemailer';

const createTransporter = () => {
    return nodemailer.createTransporter({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

export const sendContactEmail = async (contactData) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `📧 Nouveau message: ${contactData.subject}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
                    .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #667eea; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2 style="margin: 0;">📬 Nouveau Message du Portfolio</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">👤 Nom:</div>
                            <div class="value">${contactData.name}</div>
                        </div>
                        <div class="field">
                            <div class="label">📧 Email:</div>
                            <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
                        </div>
                        <div class="field">
                            <div class="label">📱 Téléphone:</div>
                            <div class="value">${contactData.phone || 'Non fourni'}</div>
                        </div>
                        <div class="field">
                            <div class="label">📝 Sujet:</div>
                            <div class="value">${contactData.subject}</div>
                        </div>
                        <div class="field">
                            <div class="label">💬 Message:</div>
                            <div class="value">${contactData.message.replace(/\n/g, '<br>')}</div>
                        </div>
                        <div class="footer">
                            <p>Message reçu le ${new Date().toLocaleString('fr-FR')}</p>
                        </div>
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
