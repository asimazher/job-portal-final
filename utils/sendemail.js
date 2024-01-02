const nodemailer = require('nodemailer');
const sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user:process.env.MAIL_AUTH,
                pass:process.env.MAIL_PASS
            }
        });

        const emailOptions = {
            from: 'asimazher@gmail.com>',
            to: options.email,
            subject: options.subject,
            html: options.message
        };

        await transporter.sendMail(emailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        throw error; 
    }
};

module.exports = { sendEmail };
