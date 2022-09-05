import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils';

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);


export default function handler(req, res) {
  const body = JSON.parse(req.body)
   
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;
   
  const data = {
    to: 'leocisal@gmail.com', // Change to your recipient
  from: 'leocisal@gmail.com', // Change to your verified sender
  subject: 'Web form message',
  text: message,
  html: message.replace(/\r\n/g, '<br>')
  };
  mail.send(data).then(()=>{
    console.log('Email sent')
  }).catch((error)=>{
    console.log(error)
  })


  res.status(200).json({status: 'OK'});
} 