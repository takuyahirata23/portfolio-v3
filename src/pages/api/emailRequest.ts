//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { array, task } from 'fp-ts'
import { pipe } from 'fp-ts/function'
import { emailNotification, toSender } from '../../emailTemplates'
import type { O } from '../../utils/types'

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
      createdAt: new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
        new Date()
      ),
    }),
  }

  const sendEmail = (body: any) =>
    pipe(
      TE.tryCatch(
        () => sgMail.send(body),
        () => new Error('error')
      )
    )

  const tasks = [sendEmail(sender), sendEmail(me)]

  return array.array
    .sequence(task.task)(tasks)()
    .then(
      E.fold(
        () =>
          res.json({
            message: 'Sorry, something went wrong. Please try it later.',
            error: true,
          }),
        () =>
          res.json({ message: 'Thank you for reaching me out!', error: false })
      )
    )
}
