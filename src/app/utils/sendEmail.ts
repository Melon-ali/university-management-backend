import nodemailer from 'nodemailer';
import config from '../config';


export const sendEmail = async(to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'melonali200@gmail.com',
      pass: 'bcnv zhuo vicd tyei',
    },
  });

  await transporter.sendMail({
    from: 'melonali200@gmail.com', // sender address
    to, // list of receivers
    subject: "Password change softly ✔", // Subject line
    text: "Reset your password within 10 minites!", // plain text body
    html, // html body
  });

};


    
