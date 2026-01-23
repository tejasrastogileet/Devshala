import nodemailer, { SentMessageInfo } from 'nodemailer';

type MailSenderResponse = SentMessageInfo;

const mailSender = async (
    email: string,
    title: string,
    body: string
): Promise<MailSenderResponse | undefined> => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const info = await transporter.sendMail({
            from: 'DevShala Learning',
            to: email,
            subject: title,
            html: body
        });

        console.log('Info of sent mail - ', info);
        return info;
    } catch (error) {
        console.error('Error while sending mail (mailSender) - ', email);
        console.error(error);
        return undefined;
    }
};

export default mailSender;
