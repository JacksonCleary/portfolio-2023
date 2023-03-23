import { NextApiRequest, NextApiResponse } from 'next';
import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_KEY!,
  domain: process.env.MAILGUN_DOMAIN!
});

export interface MailResponse {
  code: number;
  message: string;
}

export default async function mailHandler(
  req: NextApiRequest,
  res: NextApiResponse<MailResponse>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed', code: 405 });
    return;
  }

  const { name, email, message } = req.body;

  try {
    const info = await mg.messages().send({
      from: email,
      to: [process.env.MAILGUN_EMAIL!],
      subject: 'New Form Submission on jacksonwebdev',
      html: `<b>From: ${name}</b>
                     <br />
                     <b>Email: ${email}</b>
                     <br />
                     <br />
                     <b>Message: ${message}</b>`
    });
    res.status(200).json({ message: 'success', code: 200 });
    console.log('Response: ' + info);
  } catch (error) {
    console.log('Error sending email: ', error);
    res.status(500).json({ message: 'error', code: 500 });
  }

  //   nodemailerMailgun.sendMail(
  //     {
  //       from: 'mail@jacksonweb.dev',
  //       to: email,
  //       subject: 'New Form Submission on jacksonwebdev',
  //       html: `<b>From: ${name}</b>
  //                      <br />
  //                      <b>Email: ${email}</b>
  //                      <br />
  //                      <br />
  //                      <b>Message: ${message}</b>`
  //     },
  //     function (err: any, info: any) {
  //       if (err) {
  //         res
  //           .status(500)
  //           .json({ message: 'Failed to send message, try again.', code: 500 });
  //         console.log('Error: ' + err);
  //       } else {
  //         res
  //           .status(200)
  //           .json({ message: 'Message sent, thank you.', code: 200 });
  //         console.log('Response: ' + info);
  //       }
  //     }
  //   );
  //   return id
  //     ? res.status(200).json({ message: 'success', code: 200 })
  //     : res.status(500).json({ message: 'error', code: 500 });
}
