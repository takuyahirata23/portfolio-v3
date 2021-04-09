import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { emailNotification, toSender } from '../../emailTemplates'

export default (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

  const { email, name, subject, message } = req.body
  const msg = {
    to: email,
    from: 'takuya.hirata@dcmail.ca',
    subject,
    html: toSender(name),
  }

  sgMail
    .send(msg)
    .then(() => console.log('email sent'))
    .catch(e => console.error(e.response.body.errors))
  res.json({ message: 'good' })
}
