import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { emailNotification, toSender } from '../../emailTemplates'

export default (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

  const { email, name, subject, message } = req.body
  const sender = {
    to: email,
    from: 'takuya.hirata@dcmail.ca',
    subject,
    html: toSender(name),
  }

  const me = {
    to: 'takuyahirata4@gmail.com',
    from: 'takuya.hirata@dcmail.ca',
    subject: 'New email from portfolio site',
    html: emailNotification({
      name,
      email,
      subject,
      message,
      createdAt: new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
        new Date()
      ),
    }),
  }

  return Promise.all([sgMail.send(sender), sgMail.send(me)])
    .then(() => res.json({ message: 'Thank you for reacing me out!' }))
    .catch(error => {
      console.error(error.response.body)
      res.json({ message: 'Sorry, something went wrong. Please try it later.' })
    })
}
