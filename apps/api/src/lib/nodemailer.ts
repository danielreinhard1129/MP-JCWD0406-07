import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL as string,
    pass: process.env.GMAIL_APP_PASSWORD as string,
  },
});