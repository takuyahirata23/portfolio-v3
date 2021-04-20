import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { emailNotification, toSender } from '../../emailTemplates'
import type { O } from '../../utils/types'

const errorPayload = {
  message: 'Sorry, something went wrong. Please try it later.',
  error: true,
}

const successPayload = {
  message: 'Thank you for reaching me out!',
  error: false,
}

const getDate = () =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date())

export default (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

  const { email, name, subject, message } = req.body

  const sender: O = {
    to: email,
    from: process.env.DCMAIL,
    subject,
    html: toSender(name),
  }

  const me: O = {
    to: process.env.GMAIL,
    from: process.env.DCMAIL,
    subject: 'New email from portfolio site',
    html: emailNotification({
      name,
      email,
      subject,
      message,
      createdAt: getDate(),
    }),
  }

  const sendEmail = (body: any) => sgMail.send(body)

  return Promise.all([sender, me].map(sendEmail))
    .then(() => res.json(successPayload))
    .catch(() => res.json(errorPayload))
}
