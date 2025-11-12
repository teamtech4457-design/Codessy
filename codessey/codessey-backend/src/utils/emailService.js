const nodemailer = require('nodemailer');

/**
 * Email Service for sending contact form notifications
 */
class EmailService {
    constructor() {
        this.transporter = null;
        this.initializeTransporter();
    }

    /**
     * Initialize nodemailer transporter
     */
    initializeTransporter() {
        try {
            this.transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: parseInt(process.env.EMAIL_PORT),
                secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                },
                tls: {
                    rejectUnauthorized: false // For development only
                }
            });

            console.log('📧 Email service initialized successfully');
        } catch (error) {
            console.error('❌ Failed to initialize email service:', error.message);
        }
    }

    /**
     * Verify email configuration
     * @returns {Promise<boolean>}
     */
    async verifyConnection() {
        try {
            await this.transporter.verify();
            console.log('✅ Email server is ready to send messages');
            return true;
        } catch (error) {
            console.error('❌ Email server verification failed:', error.message);
            return false;
        }
    }

    /**
     * Generate HTML email template for contact form submission
     * @param {Object} formData - Contact form data
     * @returns {string} HTML email template
     */
    generateEmailTemplate(formData) {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            color: #667eea;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        .section-content {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            font-size: 16px;
            word-wrap: break-word;
        }
        .description-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #764ba2;
            min-height: 80px;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.8;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #e0e0e0;
        }
        .timestamp {
            color: #999;
            font-size: 13px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
        }
        .highlight {
            color: #667eea;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new project inquiry</p>
        </div>
        
        <div class="content">
            <div class="section">
                <div class="section-title">👤 Contact Person</div>
                <div class="section-content">
                    <strong>Name:</strong> ${formData.name}
                </div>
            </div>

            <div class="section">
                <div class="section-title">📧 Contact Email</div>
                <div class="section-content">
                    <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none;">
                        ${formData.email}
                    </a>
                </div>
            </div>

            <div class="section">
                <div class="section-title">📱 Phone Number</div>
                <div class="section-content">
                    <a href="tel:${formData.phone}" style="color: #667eea; text-decoration: none;">
                        ${formData.phone}
                    </a>
                </div>
            </div>

            <div class="section">
                <div class="section-title">🏢 Company Information</div>
                <div class="section-content">
                    <strong>Company Name:</strong> ${formData.companyName}<br>
                    <strong>Company Email:</strong> 
                    <a href="mailto:${formData.companyEmail}" style="color: #667eea; text-decoration: none;">
                        ${formData.companyEmail}
                    </a>
                </div>
            </div>

            <div class="section">
                <div class="section-title">🎨 Project Title</div>
                <div class="section-content">
                    ${formData.projectTitle}
                </div>
            </div>

            <div class="section">
                <div class="section-title">📝 Project Description</div>
                <div class="description-box">
                    ${formData.projectDescription}
                </div>
            </div>

            <div class="timestamp">
                Received on <span class="highlight">${new Date().toLocaleString('en-US', {
                    dateStyle: 'full',
                    timeStyle: 'long'
                })}</span>
            </div>
        </div>

        <div class="footer">
            <p style="margin: 0;">This email was sent from <strong>Codessey Contact Form</strong></p>
            <p style="margin: 5px 0 0 0;">Please respond to the inquiry at your earliest convenience</p>
        </div>
    </div>
</body>
</html>
        `;
    }

    /**
     * Send contact form notification email
     * @param {Object} formData - Contact form data
     * @returns {Promise<Object>} Email send result
     */
    async sendContactFormEmail(formData) {
        try {
            const mailOptions = {
                from: process.env.EMAIL_FROM,
                to: process.env.RECEIVER_EMAIL,
                subject: `🎯 New Project Inquiry: ${formData.projectTitle}`,
                html: this.generateEmailTemplate(formData),
                replyTo: formData.email,
                priority: 'high',
                headers: {
                    'X-Contact-Name': formData.name,
                    'X-Company-Name': formData.companyName
                }
            };

            const info = await this.transporter.sendMail(mailOptions);
            
            console.log('✅ Email sent successfully:', info.messageId);
            
            return {
                success: true,
                messageId: info.messageId,
                message: 'Email sent successfully'
            };
        } catch (error) {
            console.error('❌ Failed to send email:', error.message);
            throw new Error(`Email sending failed: ${error.message}`);
        }
    }

    /**
     * Send confirmation email to the user who submitted the form
     * @param {Object} formData - Contact form data
     * @returns {Promise<Object>} Email send result
     */
    async sendConfirmationEmail(formData) {
        try {
            const confirmationTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Thank You for Contacting Us!</h1>
        </div>
        <div class="content">
            <p>Hi <strong>${formData.name}</strong>,</p>
            <p>Thank you for reaching out to us regarding "<strong>${formData.projectTitle}</strong>".</p>
            <p>We have received your inquiry and our team will review your project details. We'll get back to you within 24-48 hours.</p>
            <p>If you have any urgent questions, feel free to reply to this email.</p>
            <p>Best regards,<br><strong>Codessey Team</strong></p>
        </div>
        <div class="footer">
            <p>This is an automated confirmation email from Codessey</p>
        </div>
    </div>
</body>
</html>
            `;

            const mailOptions = {
                from: process.env.EMAIL_FROM,
                to: formData.email,
                subject: `Thank you for your inquiry - ${formData.projectTitle}`,
                html: confirmationTemplate
            };

            const info = await this.transporter.sendMail(mailOptions);
            
            console.log('✅ Confirmation email sent to user:', info.messageId);
            
            return {
                success: true,
                messageId: info.messageId,
                message: 'Confirmation email sent successfully'
            };
        } catch (error) {
            console.error('⚠️  Failed to send confirmation email:', error.message);
            // Don't throw error, as main email was sent
            return {
                success: false,
                message: 'Failed to send confirmation email'
            };
        }
    }
}

// Create and export a single instance
const emailService = new EmailService();

module.exports = emailService;
