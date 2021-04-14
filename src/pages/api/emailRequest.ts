import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { array, task, pipe } from 'fp-ts'
import { emailNotification, toSender } from '../../emailTemplates'
import type { O } from '../../utils/types'

export default (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

  const { email, name, subject, message } = req.body

  const sender = {
    to: email,
    from: process.env.DCMAIL,
    subject,
    html: toSender(name),
  }

  const me = {
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

  // @ts-ignore
  //return Promise.all([sgMail.send(sender), sgMail.send(me)])
  // return new Promise((resolve, reject) => setTimeout(() => reject(''), 4000))
  //   .then(() =>
  //     res.json({ message: 'Thank you for reaching me out!', error: false })
  //   )
  //   .catch(() =>
  //     res.json({
  //       message: 'Sorry, something went wrong. Please try it later.',
  //       error: true,
  //     })
  //   )
}
